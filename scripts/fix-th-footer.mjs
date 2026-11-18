import fs from 'fs';

const filePath = 'public/locales/th.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.footer = {
  ...data.footer,
  desc: "เครื่องมือคำนวณความยาวเพลย์ลิสต์ YouTube และเวลารับชม ฟรี รวดเร็ว และเป็นส่วนตัว",
  brandDesc: "เครื่องมือคำนวณความยาวเพลย์ลิสต์ YouTube และเวลารับชม ฟรี รวดเร็ว และเป็นส่วนตัว",
  colResources: "แหล่งข้อมูล",
  colAbout: "เกี่ยวกับเรา",
  colTools: "เครื่องมือคำนวณ",
  colLearn: "การเรียนรู้",
  colCompany: "ข้อมูลบริษัท",
  colLegal: "ข้อกำหนดและกฎหมาย",
  allRightsReserved: "สงวนลิขสิทธิ์ทั้งหมด",
  notAffiliated: "ไม่มีความเกี่ยวข้องหรือรับรองโดย YouTube หรือ Google LLC",
  copyright: "© {year} YT Playlist Cal สงวนลิขสิทธิ์ทั้งหมด",
  trademarkNotice: "YouTube™ เป็นเครื่องหมายการค้าของ Google LLC เว็บไซต์นี้เป็นเครื่องมืออิสระและไม่ได้รับการสนับสนุนหรือรับรองโดย Google LLC",
  toolsTitle: "เครื่องมือทั้งหมด"
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Updated th.json footer');

