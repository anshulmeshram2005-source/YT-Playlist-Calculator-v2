// scripts/verify-translations.mjs
// Automated Translation Completeness Checker for YT Playlist Cal
import fs from 'fs';
import path from 'path';

const EXPECTED_LOCALES = [
  'en', 'zh-CN', 'zh-TW', 'ar', 'es', 'fr', 'hi', 'id', 'fil',
  'ru', 'pl', 'nl', 'tr', 'vi', 'de', 'ja', 'pt-BR', 'it', 'th',
  'ko', 'sv', 'he'
];

const LOCALES_DIR = path.resolve('./public/locales');

function flattenKeys(obj, prefix = '') {
  let keys = {};
  for (const k in obj) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (obj[k] !== null && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      Object.assign(keys, flattenKeys(obj[k], full));
    } else {
      keys[full] = obj[k];
    }
  }
  return keys;
}

console.log('='.repeat(70));
console.log('  YT Playlist Cal — Automated Translation Completeness Checker');
console.log('='.repeat(70));

let hasErrors = false;
const enFile = path.join(LOCALES_DIR, 'en.json');

if (!fs.existsSync(enFile)) {
  console.error('CRITICAL: Master translation source en.json not found!');
  process.exit(1);
}

let enJson;
try {
  enJson = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
} catch (err) {
  console.error('CRITICAL: Failed to parse en.json:', err.message);
  process.exit(1);
}

const enFlat = flattenKeys(enJson);
const enKeyList = Object.keys(enFlat);
console.log(`Master (en.json): ${enKeyList.length} total translation keys loaded.\n`);

const summary = [];

for (const code of EXPECTED_LOCALES) {
  const filePath = path.join(LOCALES_DIR, `${code}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] ${code}.json: FILE MISSING!`);
    hasErrors = true;
    summary.push({ code, status: 'MISSING FILE', missingCount: enKeyList.length });
    continue;
  }

  let locJson;
  try {
    locJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (err) {
    console.error(`[FAIL] ${code}.json: INVALID JSON SYNTAX — ${err.message}`);
    hasErrors = true;
    summary.push({ code, status: 'INVALID JSON', missingCount: -1 });
    continue;
  }

  const locFlat = flattenKeys(locJson);
  const locKeyList = Object.keys(locFlat);

  const missingKeys = enKeyList.filter(k => !(k in locFlat));
  const extraKeys = locKeyList.filter(k => !(k in enFlat));
  const emptyKeys = enKeyList.filter(k => locFlat[k] === '' || locFlat[k] === null || locFlat[k] === undefined);

  if (missingKeys.length > 0 || emptyKeys.length > 0) {
    hasErrors = true;
    console.error(`[FAIL] ${code.padEnd(8)}: ${missingKeys.length} missing keys, ${emptyKeys.length} empty values.`);
    if (missingKeys.length > 0) {
      console.error(`       First missing keys: ${missingKeys.slice(0, 5).join(', ')}${missingKeys.length > 5 ? ' ...' : ''}`);
    }
    summary.push({ code, status: 'FAIL', total: locKeyList.length, missing: missingKeys.length, empty: emptyKeys.length });
  } else {
    console.log(`[PASS] ${code.padEnd(8)}: 100% complete (${locKeyList.length} keys, 0 missing, 0 empty)`);
    summary.push({ code, status: 'PASS', total: locKeyList.length, missing: 0, empty: 0 });
  }
}

console.log('\n' + '='.repeat(70));
if (hasErrors) {
  console.error('VERIFICATION FAILED: Some translation keys are missing or invalid.');
  process.exit(1);
} else {
  console.log(`SUCCESS: All ${EXPECTED_LOCALES.length} languages are 100% complete and synchronized!`);
  console.log('='.repeat(70));
  process.exit(0);
}

