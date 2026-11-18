// scripts/translate-zh-tw.mjs
// Authentic Traditional Chinese (zh-TW / 正體中文) translations with accurate terminology:
// 播放清單, 計算機, 影片, 網址, 資訊, 授權, 伺服器
import fs from 'fs';

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const s2tDict = [
  ['播放列表', '播放清單'],
  ['计算器', '計算機'],
  ['计算', '計算'],
  ['视频', '影片'],
  ['网址', '網址'],
  ['链接', '連結'],
  ['元数据', '元數據'],
  ['服务器', '伺服器'],
  ['信息', '資訊'],
  ['数据', '資料'],
  ['规划', '規劃'],
  ['时间表', '時間表'],
  ['时间', '時間'],
  ['小时', '小時'],
  ['分钟', '分鐘'],
  ['秒', '秒'],
  ['倍速', '倍速'],
  ['设置', '設定'],
  ['输入框', '輸入框'],
  ['按钮', '按鈕'],
  ['步骤', '步驟'],
  ['操作演示', '操作演示'],
  ['总时长', '總長度'],
  ['总播放时长', '總播放長度'],
  ['统计', '統計'],
  ['节省', '節省'],
  ['宝贵', '寶貴'],
  ['上一步', '上一步'],
  ['下一步', '下一步'],
  ['自动播放中', '自動播放中'],
  ['已暂停', '已暫停'],
  ['粘贴', '貼上'],
  ['已检测到', '已偵測到'],
  ['全栈', '全端'],
  ['大师课', '大師課'],
  ['深度解析', '深度解析'],
  ['隐私政策', '隱私權政策'],
  ['服务条款', '服務條款'],
  ['免责声明', '免責聲明'],
  ['我们', '我們'],
  ['本工具', '本工具'],
  ['本地存储', '本地儲存'],
  ['托管', '託管'],
  ['商', '商'],
  ['管辖', '管轄'],
  ['第三方', '第三方'],
  ['客户端', '客戶端'],
  ['泄露', '洩漏'],
  ['隐私权', '隱私權'],
  ['安全防护', '安全防護'],
  ['遵循', '遵循'],
  ['欧盟', '歐盟'],
  ['展示', '展示'],
  ['赞助', '贊助'],
  ['随时', '隨時'],
  ['停用', '停用'],
  ['个性化', '個人化'],
  ['儿童', '兒童'],
  ['保护', '保護'],
  ['故意', '故意'],
  ['收集', '收集'],
  ['权利', '權利'],
  ['瞬时', '瞬時'],
  ['变更', '變更'],
  ['标明', '標明'],
  ['更新日期', '更新日期'],
  ['修订', '修訂'],
  ['联系方式', '聯絡方式'],
  ['联系', '聯絡'],
  ['联系页面', '聯絡頁面'],
  ['取得联系', '取得聯繫'],
  ['合理使用守则', '合理使用守則'],
  ['知识产权', '智慧財產權'],
  ['商标声明', '商標聲明'],
  ['责任限制', '責任限制'],
  ['条款修改', '條款修改'],
  ['常见问题解答', '常見問題解答'],
  ['常见问题', '常見問題'],
  ['关于', '關於'],
  ['工具', '工具'],
  ['资源', '資源'],
  ['法律', '法律'],
  ['版权所有', '版權所有'],
  ['保留所有权利', '保留所有權利'],
  ['未关联', '未關聯'],
  ['独立工具', '獨立工具'],
  ['时长', '長度'],
  ['观看时间', '觀看時間'],
  ['剩余时间', '剩餘時間'],
  ['观看计划', '觀看計畫'],
  ['截止日', '截止日'],
  ['平均', '平均'],
  ['最短', '最短'],
  ['最长', '最長'],
  ['私有', '私人'],
  ['已删除', '已刪除'],
  ['受限', '受限'],
  ['直播', '直播'],
  ['首播', '首映'],
  ['配额', '配額'],
  ['导出', '匯出'],
  ['复制', '複製'],
  ['已复制', '已複製'],
  ['错误', '錯誤'],
  ['页面未找到', '找不到頁面'],
  ['服务器错误', '伺服器錯誤'],
  ['返回计算器', '返回計算機'],
  ['浏览所有工具', '瀏覽所有工具']
];

function toTrad(str) {
  if (typeof str !== 'string') return str;
  let res = str;
  for (const [s, t] of s2tDict) {
    res = res.replaceAll(s, t);
  }
  return res;
}

function deepConvert(obj) {
  if (typeof obj === 'string') return toTrad(obj);
  if (Array.isArray(obj)) return obj.map(deepConvert);
  if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = deepConvert(v);
    }
    return res;
  }
  return obj;
}

const zhCNData = JSON.parse(fs.readFileSync('public/locales/zh-CN.json', 'utf8'));
const zhTWData = deepConvert(zhCNData);

// Specific adjustments for Traditional Chinese branding
zhTWData.nav.home = "首頁";
zhTWData.nav.tools = "所有工具";
zhTWData.nav.howItWorks = "運作原理";
zhTWData.nav.faq = "常見問題";
zhTWData.nav.about = "關於我們";
zhTWData.nav.contact = "聯絡我們";

const filePath = 'public/locales/zh-TW.json';
const existingTW = JSON.parse(fs.readFileSync(filePath, 'utf8'));
deepMerge(existingTW, zhTWData);
fs.writeFileSync(filePath, JSON.stringify(existingTW, null, 2), 'utf8');
console.log('[UPDATED] zh-TW.json with authentic Traditional Chinese translations');

