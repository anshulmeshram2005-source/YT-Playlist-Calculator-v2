// scripts/sync-demo-badges.mjs
// Adds missing demo badges and controls to all 22 locales
import fs from 'fs';
import path from 'path';

const demoTranslations = {
  en: {
    step1Badge: "Step 1 of 5",
    step2Badge: "Step 2 of 5",
    step3Badge: "Step 3 of 5",
    step4Badge: "Step 4 of 5",
    step5Badge: "Step 5 of 5",
    pasteHint: "Ctrl+V / Paste",
    detectedBadge: "✓ Playlist detected: 42 videos",
    autoPlayOn: "Auto-Play On",
    autoPlayPaused: "Paused"
  },
  "zh-CN": {
    step1Badge: "第 1 步 / 共 5 步",
    step2Badge: "第 2 步 / 共 5 步",
    step3Badge: "第 3 步 / 共 5 步",
    step4Badge: "第 4 步 / 共 5 步",
    step5Badge: "第 5 步 / 共 5 步",
    pasteHint: "Ctrl+V / 粘贴",
    detectedBadge: "✓ 已检测到播放列表：42 个视频",
    autoPlayOn: "自动播放开启",
    autoPlayPaused: "已暂停"
  },
  "zh-TW": {
    step1Badge: "第 1 步 / 共 5 步",
    step2Badge: "第 2 步 / 共 5 步",
    step3Badge: "第 3 步 / 共 5 步",
    step4Badge: "第 4 步 / 共 5 步",
    step5Badge: "第 5 步 / 共 5 步",
    pasteHint: "Ctrl+V / 貼上",
    detectedBadge: "✓ 已偵測到播放清單：42 個影片",
    autoPlayOn: "自動播放開啟",
    autoPlayPaused: "已暫停"
  },
  ar: {
    step1Badge: "الخطوة 1 من 5",
    step2Badge: "الخطوة 2 من 5",
    step3Badge: "الخطوة 3 من 5",
    step4Badge: "الخطوة 4 من 5",
    step5Badge: "الخطوة 5 من 5",
    pasteHint: "Ctrl+V / لصق",
    detectedBadge: "✓ تم اكتشاف قائمة تشغيل: 42 فيديو",
    autoPlayOn: "التشغيل التلقائي مفعل",
    autoPlayPaused: "متوقف مؤقتاً"
  },
  es: {
    step1Badge: "Paso 1 de 5",
    step2Badge: "Paso 2 de 5",
    step3Badge: "Paso 3 de 5",
    step4Badge: "Paso 4 de 5",
    step5Badge: "Paso 5 de 5",
    pasteHint: "Ctrl+V / Pegar",
    detectedBadge: "✓ Lista detectada: 42 vídeos",
    autoPlayOn: "Reproducción automática activa",
    autoPlayPaused: "Pausado"
  },
  fr: {
    step1Badge: "Étape 1 sur 5",
    step2Badge: "Étape 2 sur 5",
    step3Badge: "Étape 3 sur 5",
    step4Badge: "Étape 4 sur 5",
    step5Badge: "Étape 5 sur 5",
    pasteHint: "Ctrl+V / Coller",
    detectedBadge: "✓ Playlist détectée : 42 vidéos",
    autoPlayOn: "Lecture auto activée",
    autoPlayPaused: "En pause"
  },
  de: {
    step1Badge: "Schritt 1 von 5",
    step2Badge: "Schritt 2 von 5",
    step3Badge: "Schritt 3 von 5",
    step4Badge: "Schritt 4 von 5",
    step5Badge: "Schritt 5 von 5",
    pasteHint: "Strg+V / Einfügen",
    detectedBadge: "✓ Playlist erkannt: 42 Videos",
    autoPlayOn: "Autoplay aktiviert",
    autoPlayPaused: "Pausiert"
  },
  hi: {
    step1Badge: "चरण 1 / 5",
    step2Badge: "चरण 2 / 5",
    step3Badge: "चरण 3 / 5",
    step4Badge: "चरण 4 / 5",
    step5Badge: "चरण 5 / 5",
    pasteHint: "Ctrl+V / पेस्ट करें",
    detectedBadge: "✓ प्लेलिस्ट पहचानी गई: 42 वीडियो",
    autoPlayOn: "ऑटो-प्ले चालू",
    autoPlayPaused: "विराम"
  },
  id: {
    step1Badge: "Langkah 1 dari 5",
    step2Badge: "Langkah 2 dari 5",
    step3Badge: "Langkah 3 dari 5",
    step4Badge: "Langkah 4 dari 5",
    step5Badge: "Langkah 5 dari 5",
    pasteHint: "Ctrl+V / Tempel",
    detectedBadge: "✓ Playlist terdeteksi: 42 video",
    autoPlayOn: "Putar Otomatis Aktif",
    autoPlayPaused: "Dijeda"
  },
  fil: {
    step1Badge: "Hakbang 1 ng 5",
    step2Badge: "Hakbang 2 ng 5",
    step3Badge: "Hakbang 3 ng 5",
    step4Badge: "Hakbang 4 ng 5",
    step5Badge: "Hakbang 5 ng 5",
    pasteHint: "Ctrl+V / Idikit",
    detectedBadge: "✓ Natukoy ang playlist: 42 video",
    autoPlayOn: "Naka-on ang Auto-Play",
    autoPlayPaused: "Naka-pause"
  },
  it: {
    step1Badge: "Passo 1 di 5",
    step2Badge: "Passo 2 di 5",
    step3Badge: "Passo 3 di 5",
    step4Badge: "Passo 4 di 5",
    step5Badge: "Passo 5 di 5",
    pasteHint: "Ctrl+V / Incolla",
    detectedBadge: "✓ Playlist rilevata: 42 video",
    autoPlayOn: "Riproduzione automatica attiva",
    autoPlayPaused: "In pausa"
  },
  ja: {
    step1Badge: "ステップ 1 / 5",
    step2Badge: "ステップ 2 / 5",
    step3Badge: "ステップ 3 / 5",
    step4Badge: "ステップ 4 / 5",
    step5Badge: "ステップ 5 / 5",
    pasteHint: "Ctrl+V / 貼り付け",
    detectedBadge: "✓ プレイリスト検出：42本の動画",
    autoPlayOn: "自動再生中",
    autoPlayPaused: "一時停止中"
  },
  ko: {
    step1Badge: "1단계 / 5단계",
    step2Badge: "2단계 / 5단계",
    step3Badge: "3단계 / 5단계",
    step4Badge: "4단계 / 5단계",
    step5Badge: "5단계 / 5단계",
    pasteHint: "Ctrl+V / 붙여넣기",
    detectedBadge: "✓ 재생목록 감지됨: 동영상 42개",
    autoPlayOn: "자동 재생 중",
    autoPlayPaused: "일시정지됨"
  },
  nl: {
    step1Badge: "Stap 1 van 5",
    step2Badge: "Stap 2 van 5",
    step3Badge: "Stap 3 van 5",
    step4Badge: "Stap 4 van 5",
    step5Badge: "Stap 5 van 5",
    pasteHint: "Ctrl+V / Plakken",
    detectedBadge: "✓ Afspeellijst herkend: 42 video's",
    autoPlayOn: "Automatisch afspelen aan",
    autoPlayPaused: "Gepauzeerd"
  },
  pl: {
    step1Badge: "Krok 1 z 5",
    step2Badge: "Krok 2 z 5",
    step3Badge: "Krok 3 z 5",
    step4Badge: "Krok 4 z 5",
    step5Badge: "Krok 5 z 5",
    pasteHint: "Ctrl+V / Wklej",
    detectedBadge: "✓ Wykryto playlistę: 42 filmy",
    autoPlayOn: "Autoodtwarzanie włączone",
    autoPlayPaused: "Wstrzymano"
  },
  "pt-BR": {
    step1Badge: "Etapa 1 de 5",
    step2Badge: "Etapa 2 de 5",
    step3Badge: "Etapa 3 de 5",
    step4Badge: "Etapa 4 de 5",
    step5Badge: "Etapa 5 de 5",
    pasteHint: "Ctrl+V / Colar",
    detectedBadge: "✓ Playlist detectada: 42 vídeos",
    autoPlayOn: "Reprodução automática ativa",
    autoPlayPaused: "Pausado"
  },
  ru: {
    step1Badge: "Шаг 1 из 5",
    step2Badge: "Шаг 2 из 5",
    step3Badge: "Шаг 3 из 5",
    step4Badge: "Шаг 4 из 5",
    step5Badge: "Шаг 5 из 5",
    pasteHint: "Ctrl+V / Вставить",
    detectedBadge: "✓ Плейлист обнаружен: 42 видео",
    autoPlayOn: "Автовоспроизведение включено",
    autoPlayPaused: "На паузе"
  },
  sv: {
    step1Badge: "Steg 1 av 5",
    step2Badge: "Steg 2 av 5",
    step3Badge: "Steg 3 av 5",
    step4Badge: "Steg 4 av 5",
    step5Badge: "Steg 5 av 5",
    pasteHint: "Ctrl+V / Klistra in",
    detectedBadge: "✓ Spellista identifierad: 42 videor",
    autoPlayOn: "Automatisk uppspelning på",
    autoPlayPaused: "Pausad"
  },
  th: {
    step1Badge: "ขั้นตอนที่ 1 จาก 5",
    step2Badge: "ขั้นตอนที่ 2 จาก 5",
    step3Badge: "ขั้นตอนที่ 3 จาก 5",
    step4Badge: "ขั้นตอนที่ 4 จาก 5",
    step5Badge: "ขั้นตอนที่ 5 จาก 5",
    pasteHint: "Ctrl+V / วาง",
    detectedBadge: "✓ ตรวจพบเพลย์ลิสต์: 42 วิดีโอ",
    autoPlayOn: "เล่นอัตโนมัติเปิดอยู่",
    autoPlayPaused: "หยุดชั่วคราว"
  },
  tr: {
    step1Badge: "1. Adım / 5",
    step2Badge: "2. Adım / 5",
    step3Badge: "3. Adım / 5",
    step4Badge: "4. Adım / 5",
    step5Badge: "5. Adım / 5",
    pasteHint: "Ctrl+V / Yapıştır",
    detectedBadge: "✓ Oynatma listesi algılandı: 42 video",
    autoPlayOn: "Otomatik Oynatma Açık",
    autoPlayPaused: "Duraklatıldı"
  },
  vi: {
    step1Badge: "Bước 1 trên 5",
    step2Badge: "Bước 2 trên 5",
    step3Badge: "Bước 3 trên 5",
    step4Badge: "Bước 4 trên 5",
    step5Badge: "Bước 5 trên 5",
    pasteHint: "Ctrl+V / Dán",
    detectedBadge: "✓ Đã nhận diện danh sách phát: 42 video",
    autoPlayOn: "Tự động phát bật",
    autoPlayPaused: "Đã tạm dừng"
  },
  he: {
    step1Badge: "שלב 1 מתוך 5",
    step2Badge: "שלב 2 מתוך 5",
    step3Badge: "שלב 3 מתוך 5",
    step4Badge: "שלב 4 מתוך 5",
    step5Badge: "שלב 5 מתוך 5",
    pasteHint: "Ctrl+V / הדבק",
    detectedBadge: "✓ פלייליסט זוהה: 42 סרטונים",
    autoPlayOn: "הפעלה אוטומטית פועלת",
    autoPlayPaused: "מושהה"
  }
};

for (const [lang, keys] of Object.entries(demoTranslations)) {
  const filePath = path.resolve('public/locales', `${lang}.json`);
  if (!fs.existsSync(filePath)) continue;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.demonstrations) data.demonstrations = {};
  Object.assign(data.demonstrations, keys);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[UPDATED] demo keys in ${lang}.json`);
}

