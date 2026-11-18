import fs from 'fs';

const filePath = 'public/locales/th.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.footer.links = {
  ...data.footer.links,
  playlistCalculator: "เครื่องมือคำนวณความยาวเพลย์ลิสต์",
  durationCalculator: "เครื่องมือคำนวณระยะเวลารวม",
  watchTimeCalculator: "เครื่องมือคำนวณเวลารับชม",
  watchTime15x: "เวลารับชมที่ความเร็ว 1.5×",
  watchTime2x: "เวลารับชมที่ความเร็ว 2×",
  allTools: "เครื่องมือทั้งหมด"
};

data.pages.terms = {
  ...data.pages.terms,
  breadcrumb: "ข้อกำหนดการให้บริการ",
  lastUpdated: "ปรับปรุงล่าสุด: 31 ตุลาคม 2026",
  summary: "สรุป: การใช้งาน YT Playlist Cal ถือว่าคุณยอมรับข้อกำหนดเหล่านี้ นโยบายความเป็นส่วนตัว และข้อจำกัดความรับผิดชอบ"
};

data.pages.privacy = {
  ...data.pages.privacy,
  breadcrumb: "นโยบายความเป็นส่วนตัว",
  lastUpdated: "ปรับปรุงล่าสุด: 31 ตุลาคม 2026",
  summary: "เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ เราไม่บันทึก URL ไม่ติดตามตัวตน และไม่ขายข้อมูลส่วนบุคคล"
};

data.pages.disclaimer = {
  ...data.pages.disclaimer,
  breadcrumb: "ข้อจำกัดความรับผิดชอบ",
  lastUpdated: "ปรับปรุงล่าสุด: 31 ตุลาคม 2026",
  summary: "YT Playlist Cal เป็นเครื่องมืออิสระ เราไม่มีความเกี่ยวข้อง ได้รับอนุญาต หรือรับรองโดย YouTube หรือ Google LLC"
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Cleaned th.json');

