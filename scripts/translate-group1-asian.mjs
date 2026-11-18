// scripts/translate-group1-asian.mjs
// Professional translations for Chinese Simplified (zh-CN), Chinese Traditional (zh-TW), Japanese (ja), Korean (ko), Thai (th)
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

function updateLocale(lang, data) {
  const filePath = `public/locales/${lang}.json`;
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  deepMerge(existing, data);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`[UPDATED] ${lang}.json`);
}

// 1. CHINESE SIMPLIFIED (zh-CN)
const zhCN = {
  howItWorks: {
    supportedBadge: "支持的格式",
    supportedTitle: "支持哪些 YouTube 链接？",
    supportedDesc: "我们的分析器准确支持标准播放列表链接、带有列表参数的视频、youtu.be 链接以及纯播放列表 ID。"
  },
  demonstrations: {
    badge: "操作演示",
    title: "如何使用计算器",
    subtitle: "直观的步骤演示，向您展示如何计算播放列表时长并规划观看时间表。",
    tab1: "1. 粘贴链接",
    tab2: "2. 点击计算",
    tab3: "3. 总时长",
    tab4: "4. 视频统计",
    tab5: "5. 倍速设置",
    step1Badge: "第 1 步 / 共 5 步",
    step1Title: "粘贴任意 YouTube 链接",
    step1Desc: "复制任意 YouTube 播放列表链接、带有播放列表参数的视频链接或纯播放列表 ID，并将其粘贴到计算器输入框中。",
    step2Badge: "第 2 步 / 共 5 步",
    step2Title: "点击计算",
    step2Desc: "点击计算按钮，系统将通过 YouTube Data API 获取完整的视频时长与元数据。",
    step3Badge: "第 3 步 / 共 5 步",
    step3Title: "查看总播放时长",
    step3Desc: "在正常播放速度下，清晰获取以小时、分钟和秒为单位的精确总播放时长。",
    step4Badge: "第 4 步 / 共 5 步",
    step4Title: "查看视频数量与统计数据",
    step4Desc: "查看可用视频总数、平均视频长度以及最短和最长的视频时长。",
    step5Badge: "第 5 步 / 共 5 步",
    step5Title: "探索倍速播放节省的时间",
    step5Desc: "比较 1.25×、1.5×、1.75× 和 2× 倍速下的观看时长，准确了解能为您节省多少宝贵时间。",
    prev: "← 上一步",
    next: "下一步 →",
    autoPlayOn: "自动播放中",
    autoPlayPaused: "已暂停",
    pasteHint: "Ctrl+V / 粘贴",
    detectedBadge: "✓ 已检测到播放列表：42 个视频",
    stepOf: "第 {current} 步，共 {total} 步",
    samplePlaylistTitle: "Web 全栈开发大师课",
    sampleChannel: "Code Academy",
    sampleDuration: "14小时 28分 45秒",
    sampleCount: "42 个视频",
    sampleAvg: "20分 41秒",
    sampleShortest: "介绍 — 3分 12秒",
    sampleLongest: "深度解析 — 1小时 05分 20秒",
    sampleAt15x: "9小时 39分 10秒",
    sampleSaved15x: "节省 4小时 49分",
    sampleAt2x: "7小时 14分 22秒",
    sampleSaved2x: "节省 7小时 14分"
  },
  pages: {
    contact: {
      emailValue: "support@ytplaylistcal.com"
    },
    privacyDetail: {
      intro: "YT Playlist Cal（\"我们\"、\"本工具\"）是一个独立的实用工具网站，用于计算 YouTube 播放列表长度和观看时间。本隐私政策说明了您在使用本工具时我们处理哪些信息、如何使用这些信息以及我们如何保护您的隐私。",
      s1Title: "1. 我们处理的信息",
      s1P1Title: "YouTube 网址",
      s1P1Text: "当您提交 YouTube 网址进行计算时，该网址会被发送到我们的服务器，服务器使用该网址向 YouTube Data API v3 发出请求。在 API 请求处理完毕后，我们不会存储、记录或保留您的 YouTube 网址。",
      s1P2Title: "YouTube API 密钥（可选）",
      s1P2Text: "如果您在高级选项中提供自己的 YouTube API 密钥，它将通过安全的 HTTPS 传输并仅用于您的特定请求。我们绝不会存储、记录或向任何第三方传输您的 API 密钥。请求完成后它会立即被丢弃。",
      s1P3Title: "使用情况分析",
      s1P3Text: "我们可能会使用注重隐私的分析服务来了解一般的总体使用模式，例如页面访问量、工具使用事件和地理分布。这些数据是聚合的，绝不与任何个人身份相关联。我们绝不向分析服务发送 YouTube 网址或 API 密钥。",
      s1P4Title: "本地存储 (Local Storage)",
      s1P4Text: "我们仅使用您浏览器的 localStorage 来记住您的深色/浅色模式外观偏好及语言选择。localStorage 中不存储任何个人敏感数据。",
      s1P5Title: "服务器日志",
      s1P5Text: "作为正常网络服务运营的一部分，我们的托管服务商（Cloudflare）可能会维护包含 IP 地址和请求时间戳的服务器访问日志。这些日志受 Cloudflare 隐私政策管辖。我们不会额外记录您的网址或 API 密钥。",
      s2Title: "2. Cookie 政策",
      s2Text: "YT Playlist Cal 不会为了跟踪或定向广告目的设置 Cookie。我们不使用任何第三方跨站跟踪 Cookie。语言偏好使用基本的本地 Cookie 进行保持。",
      s3Title: "3. 第三方服务",
      s3Text1: "YouTube Data API v3：我们使用 YouTube Data API 检索播放列表和视频元数据。您的计算请求通过我们的服务器代理，我们的服务端 API 密钥绝不会泄露给前端客户端。YouTube 的数据使用受 Google 隐私权政策管辖。",
      s3Text2: "Cloudflare：我们的网站由 Cloudflare 提供全球 CDN 加速、代理与安全防护，其可能会在网络安全服务中处理部分请求元数据。",
      s3Text3: "字体加载：我们使用 Bunny Fonts（遵循欧盟 GDPR 的隐私友好型字体服务）加载 Inter 字体。没有任何个人数据会被发送给 Bunny Fonts。",
      s4Title: "4. 广告展示",
      s4Text: "本网站可能会通过 Google AdSense 或类似广告网络展示赞助广告。广告网络可能会设置 Cookie 并跨站点分析广告效果。您可以通过 Google 广告设置随时停用个性化广告。",
      s5Title: "5. 儿童隐私保护",
      s5Text: "YT Playlist Cal 不面向 13 岁以下的儿童。我们不会故意收集儿童的个人信息。",
      s6Title: "6. 您的权利",
      s6Text: "由于除了瞬时请求处理之外我们不收集或存储个人数据，因此通常不存在需要访问、更正或删除的个人记录。如果您对我们可能持有的数据有任何疑问，请通过联系页面与我们取得联系。",
      s7Title: "7. 政策变更",
      s7Text: "我们可能会不时更新本隐私政策。任何变更都将在本页面顶部标明最新的\"更新日期\"。在政策修订后继续使用本工具即表示您接受更新后的政策。",
      s8Title: "8. 联系方式",
      s8Text: "如果您对本隐私政策有任何问题或疑问，请使用联系页面与我们取得联系。"
    },
    termsDetail: {
      summary: "概要：使用 YT Playlist Cal 即表示您同意这些条款、我们的隐私政策和免责声明。这是一个用于估算 YouTube 播放列表时长的免费独立实用工具。",
      s1Title: "1. 接受条款",
      s1Text: "通过访问或使用 ytplaylistcal.com 上的 YT Playlist Cal（\"服务\"、\"本网站\"、\"我们\"），即表示您同意遵守这些服务条款（\"条款\"）以及所有适用的法律法规。如果您不同意这些条款的任何部分，您将被禁止使用或访问本网站。",
      s2Title: "2. 服务说明",
      s2Text1: "YT Playlist Cal 提供了一个基于 Web 的免费计算套件，旨在分析公开的 YouTube 播放列表和视频链接。该服务计算播放列表总时长、计算不同倍速下的观看时间、提供范围/剩余模式，并提供每日观看计划工具。",
      s2Text2: "该服务免费提供，仅供参考、教育和个人时间规划使用。我们保留随时修改、暂停或终止服务任何部分的权利，恕不另行通知。",
      s3Title: "3. YouTube API 与第三方条款",
      s3Text: "YT Playlist Cal 依靠 YouTube Data API v3 获取播放列表元数据、视频标题和视频时长。使用此服务即表示您知悉并同意：",
      s3Li1: "您受 YouTube 服务条款的约束。",
      s3Li2: "YouTube 数据依据 Google 隐私权政策进行处理。",
      s3Li3: "我们无法控制 YouTube 的服务器、API 配额分配、速率限制或元数据的准确性。",
      s4Title: "4. 合理使用守则",
      s4Text: "您同意仅出于合法目的使用 YT Playlist Cal。您同意绝不：",
      s4Li1: "发送过度的自动化请求、机器人查询或高频 API 调用，从而导致我们的服务器或基础设施降级、过载或中断。",
      s4Li2: "试图对速率限制、服务器安全控件或 Cloudflare 保护进行逆向工程、反编译、破解或绕过。",
      s4Li3: "使用本网站提交滥用、非法、侵权或恶意的输入字符串。",
      s4Li4: "虚假陈述您的身份或试图获得对我们服务器环境或内部端点的未经授权访问。",
      s4Outro: "我们保留暂时或永久阻止违反此合理使用守则的 IP 地址或对请求进行限流的权利。",
      s5Title: "5. 用户提供的 API 密钥（可选）",
      s5Text: "高级用户可以选择在计算器的高级选项部分提供他们自己的 YouTube Data API v3 密钥。",
      s5Li1: "您的 API 密钥通过安全 HTTPS 直接传输到我们的服务器，并仅用于执行您的即时播放列表请求。",
      s5Li2: "我们不会存储、记录、跟踪或与任何第三方共享您的 API 密钥。",
      s5Li3: "您对您自己的 Google Cloud 项目、其安全性以及与您凭证相关的任何 API 配额使用情况承担全部责任。",
      s6Title: "6. 知识产权与商标声明",
      s6Text1: "YouTube™、YouTube 徽标和相关品牌是 Google LLC 的注册商标。YT Playlist Cal 是一个独立项目，与 Google LLC 或 YouTube 没有任何隶属、认可或赞助关系。",
      s6Text2: "本网站上的原创源代码、视觉识别、设计系统和文档均为 YT Playlist Cal 的知识产权，受适用的版权法保护。",
      s7Title: "7. 计算准确性与\"按现状\"免责声明",
      s7Text: "所有计算结果、时长、播放速度节省估算和规划预测均\"按现状\"和\"可用状态\"提供。尽管我们追求数学上的绝对精确，但由于以下原因可能会产生差异：",
      s7Li1: "不可用的视频（私有、已删除、受年龄限制或受国家限制的视频返回 0 秒并被排除）。",
      s7Li2: "正在进行的直播或未处理的首播视频没有固定的时长元数据。",
      s7Li3: "YouTube ISO 8601 时长时间戳中的四舍五入差异。",
      s7Li4: "现实播放变量（缓冲、快进、广告播放或浏览器媒体引擎中的速度容差）。",
      s7Outro: "欲知完整详情，请查阅我们详尽的免责声明。",
      s8Title: "8. 责任限制",
      s8Text: "在适用法律允许的最大范围内，YT Playlist Cal 及其维护者不对因您使用或无法使用本服务而引起的任何间接、附带、特殊、从属或惩罚性损害赔偿承担任何责任，包括时间损失、错过截止日期、学业惩罚、数据丢失或系统中断。",
      s9Title: "9. 条款修改",
      s9Text: "我们可能会随时修改这些服务条款，恕不另行通知。任何修订在发布到本页面并标明最新的更新日期后立即生效。在条款修改后继续使用服务表示您接受更新后的条款。",
      s10Title: "10. 联系信息",
      s10Text: "如果您对这些服务条款有任何疑问或疑虑，请通过联系页面与我们取得联系。"
    },
    disclaimerDetail: {
      summary: "概要：YT Playlist Cal 是一个独立的免费实用工具。我们与 YouTube 或 Google LLC 没有任何隶属、授权或认可关系。所有计算和估算均按\"现状\"提供，仅用于个人时间规划与参考。",
      s1Title: "1. 商标与品牌从属声明",
      s1Text1: "YouTube™、YouTube 徽标以及相关标记是 Google LLC（或 Alphabet Inc.）的注册商标。本网站上出现的所有其他商标、服务标记、徽标和产品名称均为其各自所有者的财产。",
      s1Text2: "YT Playlist Cal 是一个独立的 Web 应用程序，与 YouTube、Google LLC、Alphabet Inc. 或其任何子公司或附属公司没有任何正式隶属、关联、授权、认可或官方联系。提及任何第三方公司、产品、商标或网址均不构成其认可、推荐或赞助。",
      s2Title: "2. 工具性质与仅供信息参考目的",
      s2Text1: "YT Playlist Cal 上提供的服务、计算、时长、倍速估算、观看规划时间表和所有相关内容仅供一般信息、教育和个人时间规划使用。",
      s2Text2: "计算器产生的结果不应被依赖作为官方审计、具有合同约束力的衡量标准、学术完成认证或视频时长的法律技术证明。如果您有严格的考试截止日期、学业要求或商业承诺，请务必直接在 YouTube 上独立核实每个视频的时长。",
      s3Title: "3. 计算的准确性与完整性",
      s3Text1: "虽然我们努力确保所有计算在数学上准确无误，但计算依赖于第三方服务（特别是 YouTube Data API v3）返回的元数据。我们对计算结果的绝对准确性、完整性、及时性或可靠性不作任何明示或暗示的保证。",
      s3Text2: "由于以下不受我们控制的客观因素，总时长、视频数量或调整后的观看时间可能会出现偏差：",
      s3Li1: "不可用的视频：播放列表中私有、已删除、受国家/地区限制、受年龄限制或版权受限的视频无法从 API 获取时长元数据，因此排除在计算总额之外。",
      s3Li2: "直播与首映：直播或进行中的广播在流式传输期间或在 YouTube 后台处理期间不会报告确定的视频时长。",
      s3Li3: "播放列表动态更新：在计算过程中或计算之间由创作者修改或重新排序的播放列表可能会产生不同的总数。",
      s3Li4: "倍速播放近似值：按倍速因子（例如 1.25×、1.5×、2×）进行的数学除法提供的是理论观看时间。实际耗时可能因播放器缓冲、跳过片头片尾、暂停、广告或可变帧率而有所不同。",
      s3Li5: "API 元数据舍入：YouTube Data API 提供 ISO 8601 格式的视频时长。YouTube 自身系统内的任何舍入差异都会直接反映在我们的输出中。",
      s4Title: "4. 第三方服务与 API 规范",
      s4Text: "YT Playlist Cal 依靠 YouTube Data API v3 来检索公开的播放列表和视频元数据。使用本工具即表示您知悉：",
      s4Li1: "您计算播放列表的请求受 YouTube 条款和开发者政策的约束。与源自 YouTube 的内容互动可能受 YouTube 服务条款和 Google 政策的管辖。",
      s4Li2: "工具可用性取决于 YouTube API 配额、速率限制和服务器运行状态。我们不保证服务不间断运行或 100% 的可用时间。",
      s4Li3: "如果您在高级设置中选择使用个人 YouTube API 密钥，它仅用于促进您的单次请求，并在执行后立即丢弃，绝不会被存储或记录。您全权负责根据 Google Cloud 服务条款管理自己的 API 配额与凭据安全。",
      s5Title: "5. 外部链接免责声明",
      s5Text: "YT Playlist Cal 可能包含指向不受我们提供、维护或以任何方式控制的第三方外部网站、文档和资源的链接。我们不对外部网站上任何信息的准确性、相关性、及时性或完整性承担责任或进行保证。点击外部链接的风险完全由您自行承担。",
      s6Title: "6. \"按现状\"与\"按可用状态\"免责声明",
      s6Text1: "YT PLAYLIST CAL 及其包含的所有内容、计算器、工具和功能均按\"现状\"和\"可用状态\"分发，不提供任何明示、暗示、法定或其他形式的保证。",
      s6Text2: "在适用法律允许的最大范围内，我们明确否认所有保证，包括但不限于适销性、特定用途适用性、非侵权性、准确性以及无计算机病毒或其他有害组件的保证。我们不保证服务将不间断、及时、安全或无错误。",
      s7Title: "7. 责任限制条款",
      s7Text: "在任何情况下，YT PLAYLIST CAL、其作者、维护人员、关联实体或托管提供商均不对由于以下原因导致的任何直接、间接、附带、特殊、从属或惩罚性损害承担责任：",
      s7Li1: "您使用或无法使用本网站或其计算工具；",
      s7Li2: "时长结果、观看计划或元数据中的任何不准确、错误、遗漏或延迟；",
      s7Li3: "依赖本工具产生的输出做出的任何决定、错过的截止日期或采取的任何行动；",
      s7Li4: "任何未经授权的访问、技术故障、服务器停机或服务中断。",
      s7Outro: "如果您对本网站或其服务有任何不满意，您唯一的救济手段就是停止使用本网站。",
      s8Title: "8. 条款修订与变更",
      s8Text: "我们可能会随时更新、修改或修订本免责声明，恕不另行通知。任何更新在发布到本页面后立即生效，修订日期显示在顶部。在发布更改后您继续使用 YT Playlist Cal 即构成您对这些修改的接受。",
      s9Title: "9. 联系与咨询",
      s9Text: "如果您对本免责声明或本工具的操作有任何疑问、反馈或疑虑，请通过我们的联系页面与我们联系，或查阅我们的常见问题解答 (FAQ)。"
    }
  }
};

updateLocale('zh-CN', zhCN);

