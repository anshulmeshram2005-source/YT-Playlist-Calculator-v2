// scripts/sync-and-complete-locales.mjs
// Synchronizes and completes all 22 locale JSON files with 100% key parity
import fs from 'fs';
import path from 'path';

const LOCALES_DIR = './public/locales';

// New sections and keys to ensure across all 22 languages:
const translations = {
  en: {
    footerExtra: {
      brandDesc: "Free YouTube playlist length and watch time calculator. Calculate total duration, playback-speed estimates, and watch planning schedules.",
      toolsTitle: "Tools",
      resourcesTitle: "Resources",
      legalTitle: "Legal",
      copyright: "© {year} YT Playlist Cal. All rights reserved."
    },
    pagesExtra: {
      contact: {
        emailLabel: "Support Email",
        emailValue: "support@ytplaylistcal.com"
      },
      duration: { badge: "Duration Calculator" },
      watchTime: { badge: "Watch Time" },
      remainingTime: { badge: "Remaining Time" },
      speed15x: { badge: "1.5× Speed" },
      speed2x: { badge: "2× Speed" },
      terms: {
        subtitle: "Terms of Service for YT Playlist Cal.",
        intro: "By using our website, you agree to the following terms and conditions."
      },
      privacy: {
        subtitle: "Protecting your privacy on YT Playlist Cal.",
        intro: "We respect your privacy. We do not store personal data or retain your search history."
      },
      disclaimer: {
        subtitle: "Legal disclaimer and trademark notice.",
        intro: "YT Playlist Cal is an independent tool and is not affiliated with YouTube or Google LLC."
      },
      error404: {
        subtitle: "The page you are looking for does not exist or has been moved.",
        backHome: "Back to Home"
      },
      error500: {
        subtitle: "There was a temporary server error. Please try again shortly.",
        backHome: "Back to Home"
      }
    },
    demonstrations: {
      badge: "Instructional Walkthrough",
      title: "How to Use the Calculator",
      subtitle: "Interactive step-by-step demonstrations showing how to calculate playlist durations and plan your watch schedule.",
      tab1: "1. Paste URL",
      tab2: "2. Calculate",
      tab3: "3. Total Duration",
      tab4: "4. Video Stats",
      tab5: "5. Speed Savings",
      step1Title: "Paste Any YouTube URL",
      step1Desc: "Copy any YouTube playlist link, video link with a list parameter, or playlist ID and paste it into the calculator input.",
      step2Title: "Click Calculate",
      step2Desc: "Hit the Calculate button to fetch complete video durations and metadata via the YouTube Data API.",
      step3Title: "View Total Duration",
      step3Desc: "Get the exact total runtime displayed clearly in hours, minutes, and seconds at normal playback speed.",
      step4Title: "Review Video Count & Statistics",
      step4Desc: "Check the total number of available videos, average video length, and the shortest and longest videos.",
      step5Title: "Explore Playback Speed Savings",
      step5Desc: "Compare watch times at 1.25×, 1.5×, 1.75×, and 2× speeds to see exactly how much time you save.",
      prev: "Previous",
      next: "Next",
      stepOf: "Step {current} of {total}",
      samplePlaylistTitle: "Web Development Masterclass",
      sampleChannel: "Code Academy",
      sampleDuration: "14h 28m 45s",
      sampleCount: "42 Videos",
      sampleAvg: "20m 41s",
      sampleShortest: "3m 12s",
      sampleLongest: "1h 05m 20s",
      sampleAt15x: "9h 39m 10s",
      sampleSaved15x: "Saved 4h 49m",
      sampleAt2x: "7h 14m 22s",
      sampleSaved2x: "Saved 7h 14m"
    },
    personas: {
      title: "Used by",
      students: "Students",
      onlineLearners: "Online learners",
      courseBuyers: "Course buyers",
      developers: "Developers",
      certCandidates: "Cert candidates",
      teachers: "Teachers",
      creators: "Creators",
      bingeWatchers: "Binge watchers"
    },
    calculatorExtra: {
      videosUnavailable: "{count} video{plural} unavailable (private, deleted, or region-restricted)",
      byChannel: "by {channel}",
      tryDemoBtn: "Try a demo playlist →"
    }
  },

  "zh-CN": {
    footerExtra: {
      brandDesc: "免费的 YouTube 播放列表时长与观看时间计算器。计算总时长、倍速播放时间与每日观看计划。",
      toolsTitle: "工具",
      resourcesTitle: "资源",
      legalTitle: "法律信息",
      copyright: "© {year} YT Playlist Cal。保留所有权利。"
    },
    pagesExtra: {
      contact: { emailLabel: "支持邮箱", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "时长计算器" },
      watchTime: { badge: "观看时间" },
      remainingTime: { badge: "剩余时间" },
      speed15x: { badge: "1.5× 倍速" },
      speed2x: { badge: "2× 倍速" },
      terms: { subtitle: "YT Playlist Cal 服务条款。", intro: "使用本网站即表示您同意以下条款与条件。" },
      privacy: { subtitle: "保护您在 YT Playlist Cal 上的隐私。", intro: "我们尊重您的隐私。我们不收集个人数据，也不保存您的搜索历史。" },
      disclaimer: { subtitle: "法律免责声明与商标声明。", intro: "YT Playlist Cal 是一项独立工具，与 YouTube 或 Google LLC 无任何隶属关系。" },
      error404: { subtitle: "您查找的页面不存在或已被移动。", backHome: "返回首页" },
      error500: { subtitle: "服务器发生临时错误，请稍后重试。", backHome: "返回首页" }
    },
    demonstrations: {
      badge: "操作演示",
      title: "如何使用计算器",
      subtitle: "通过直观的交互步骤了解如何计算播放列表总时长并规划观看进度。",
      tab1: "1. 粘贴链接",
      tab2: "2. 点击计算",
      tab3: "3. 总时长",
      tab4: "4. 视频统计",
      tab5: "5. 倍速省时",
      step1Title: "粘贴任意 YouTube 链接",
      step1Desc: "复制任意 YouTube 播放列表链接、带有 list 参数的视频链接或列表 ID 并粘贴到输入框中。",
      step2Title: "点击计算时长",
      step2Desc: "点击计算按钮，服务端将通过 YouTube Data API 安全获取所有视频的时长与信息。",
      step3Title: "查看精确总时长",
      step3Desc: "即时查看以时、分、秒格式清晰呈现的完整播放列表运行时间。",
      step4Title: "浏览视频数量与统计",
      step4Desc: "查看有效视频总数、平均单集时长，以及列表中最短和最长的视频。",
      step5Title: "对比倍速播放省时效果",
      step5Desc: "对比 1.25×、1.5×、1.75× 和 2× 等倍速下的实际观看时间，了解能节省多少小时。",
      prev: "上一步",
      next: "下一步",
      stepOf: "第 {current} 步，共 {total} 步",
      samplePlaylistTitle: "Web 开发实战进阶课程",
      sampleChannel: "Code Academy",
      sampleDuration: "14小时 28分 45秒",
      sampleCount: "42 个视频",
      sampleAvg: "20分 41秒",
      sampleShortest: "3分 12秒",
      sampleLongest: "1小时 05分 20秒",
      sampleAt15x: "9小时 39分 10秒",
      sampleSaved15x: "节省 4小时 49分",
      sampleAt2x: "7小时 14分 22秒",
      sampleSaved2x: "节省 7小时 14分"
    },
    personas: {
      title: "适用人群",
      students: "在校学生",
      onlineLearners: "在线学员",
      courseBuyers: "课程购买者",
      developers: "开发者",
      certCandidates: "考证备考者",
      teachers: "教师",
      creators: "创作者",
      bingeWatchers: "刷剧/追剧爱好者"
    },
    calculatorExtra: {
      videosUnavailable: "{count} 个视频不可用（私享、已删除或地区受限）",
      byChannel: "创作者：{channel}",
      tryDemoBtn: "试用演示播放列表 →"
    }
  },

  "zh-TW": {
    footerExtra: {
      brandDesc: "免費的 YouTube 播放清單長度與觀看時間計算機。計算總時長、倍速播放時間與每日觀看進度規劃。",
      toolsTitle: "工具",
      resourcesTitle: "資源",
      legalTitle: "法律資訊",
      copyright: "© {year} YT Playlist Cal。版權所有。"
    },
    pagesExtra: {
      contact: { emailLabel: "支援電子郵件", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "時長計算機" },
      watchTime: { badge: "觀看時間" },
      remainingTime: { badge: "剩餘時間" },
      speed15x: { badge: "1.5× 倍速" },
      speed2x: { badge: "2× 倍速" },
      terms: { subtitle: "YT Playlist Cal 服務條款。", intro: "使用本網站即代表您同意以下條款與細則。" },
      privacy: { subtitle: "保護您在 YT Playlist Cal 的隱私。", intro: "我們尊重您的隱私。我們不收集個人資料，也不保留您的搜尋紀錄。" },
      disclaimer: { subtitle: "法律免責聲明與商標聲明。", intro: "YT Playlist Cal 是一項獨立工具，與 YouTube 或 Google LLC 無任何關聯。" },
      error404: { subtitle: "您尋找的頁面不存在或已被移動。", backHome: "返回首頁" },
      error500: { subtitle: "伺服器發生暫時性錯誤，請稍後再試。", backHome: "返回首頁" }
    },
    demonstrations: {
      badge: "操作教學示範",
      title: "如何使用計算機",
      subtitle: "透過直覺的步驟示範了解如何計算播放清單總時長並安排您的學習進度。",
      tab1: "1. 貼上連結",
      tab2: "2. 點擊計算",
      tab3: "3. 總時長",
      tab4: "4. 影片統計",
      tab5: "5. 倍速省時",
      step1Title: "貼上任意 YouTube 連結",
      step1Desc: "複製任何 YouTube 播放清單網址、帶有清單參數的影片連結或播放清單 ID 並貼入輸入框中。",
      step2Title: "點擊計算長度",
      step2Desc: "點擊計算按鈕，伺服器將透過 YouTube Data API 安全取得所有影片的長度與資訊。",
      step3Title: "查看精確總長度",
      step3Desc: "即時查看以小時、分鐘與秒數清楚格式化的播放清單總播放時間。",
      step4Title: "檢視影片數量與統計",
      step4Desc: "檢視可用影片總數、平均單部影片長度，以及最長與最短的影片。",
      step5Title: "比較倍速播放省時效果",
      step5Desc: "比較 1.25×、1.5×、1.75× 與 2× 等倍速下的實際時間，精確了解能省下多少小時。",
      prev: "上一步",
      next: "下一步",
      stepOf: "第 {current} 步，共 {total} 步",
      samplePlaylistTitle: "Web 開發實戰大師課程",
      sampleChannel: "Code Academy",
      sampleDuration: "14小時 28分 45秒",
      sampleCount: "42 部影片",
      sampleAvg: "20分 41秒",
      sampleShortest: "3分 12秒",
      sampleLongest: "1小時 05分 20秒",
      sampleAt15x: "9小時 39分 10秒",
      sampleSaved15x: "節省 4小時 49分",
      sampleAt2x: "7小時 14分 22秒",
      sampleSaved2x: "節省 7小時 14分"
    },
    personas: {
      title: "適用對象",
      students: "學生",
      onlineLearners: "線上學員",
      courseBuyers: "課程購買者",
      developers: "工程師",
      certCandidates: "證照備考者",
      teachers: "教師",
      creators: "創作者",
      bingeWatchers: "馬拉松追劇者"
    },
    calculatorExtra: {
      videosUnavailable: "{count} 部影片無法取得（私人、已刪除或受地區限制）",
      byChannel: "頻道：{channel}",
      tryDemoBtn: "試用範例播放清單 →"
    }
  },

  ar: {
    footerExtra: {
      brandDesc: "حاسبة مجانية لحساب مدة قوائم تشغيل YouTube ووقت المشاهدة. احسب المدة الإجمالية وتقديرات سرعات التشغيل وجداول المشاهدة اليومية.",
      toolsTitle: "الأدوات",
      resourcesTitle: "الموارد",
      legalTitle: "قانوني",
      copyright: "© {year} YT Playlist Cal. جميع الحقوق محفوظة."
    },
    pagesExtra: {
      contact: { emailLabel: "بريد الدعم", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "حاسبة المدة" },
      watchTime: { badge: "وقت المشاهدة" },
      remainingTime: { badge: "الوقت المتبقي" },
      speed15x: { badge: "السرعة 1.5×" },
      speed2x: { badge: "السرعة 2×" },
      terms: { subtitle: "شروط الخدمة لموقع YT Playlist Cal.", intro: "باستخدام موقعنا، فإنك توافق على الشروط والأحكام التالية." },
      privacy: { subtitle: "حماية خصوصيتك في YT Playlist Cal.", intro: "نحن نحترم خصوصيتك. لا نقوم بتخزين أي بيانات شخصية ولا نحتفظ بسجل بحثك." },
      disclaimer: { subtitle: "إخلاء المسؤولية القانونية والعلامات التجارية.", intro: "YT Playlist Cal أداة مستقلة وليست تابعة لـ YouTube أو Google LLC." },
      error404: { subtitle: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.", backHome: "العودة للرئيسية" },
      error500: { subtitle: "حدث خطأ مؤقت في الخادم. يرجى المحاولة بعد قليل.", backHome: "العودة للرئيسية" }
    },
    demonstrations: {
      badge: "دليل توضيحي تفاعلي",
      title: "كيفية استخدام الحاسبة",
      subtitle: "عروض توضيحية تفاعلية توضح خطوة بخطوة كيفية حساب مدة القوائم وتخطيط وقتك.",
      tab1: "1. لصق الرابط",
      tab2: "2. الحساب",
      tab3: "3. المدة الكلية",
      tab4: "4. إحصاءات الفيديو",
      tab5: "5. توفير السرعات",
      step1Title: "الصق أي رابط YouTube",
      step1Desc: "انسخ أي رابط لقائمة تشغيل YouTube أو رابط فيديو يحتوي على معرّف القائمة والصقه في مربع الإدخال.",
      step2Title: "انقر على زر الحساب",
      step2Desc: "اضغط على زر الحساب لجلب مدة جميع الفيديوهات وبياناتها مباشرة عبر واجهة برمجة تطبيقات YouTube.",
      step3Title: "عرض المدة الإجمالية فوراً",
      step3Desc: "شاهد المدة الإجمالية بدقة معروضة بالساعات والدقائق والثواني بالسرعة العادية.",
      step4Title: "مراجعة عدد الفيديوهات والإحصاءات",
      step4Desc: "تعرف على عدد الفيديوهات المتاحة ومتوسط طول الفيديو بالإضافة إلى أقصر وأطول فيديو في القائمة.",
      step5Title: "اكتشف توفير الوقت مع السرعات المختلفة",
      step5Desc: "قارن وقت المشاهدة عند سرعة 1.25× و 1.5× و 2× لتعرف بالضبط كم ساعة ستوفر من وقتك.",
      prev: "السابق",
      next: "التالي",
      stepOf: "الخطوة {current} من {total}",
      samplePlaylistTitle: "دورة تطوير الويب الشاملة",
      sampleChannel: "Code Academy",
      sampleDuration: "14 س و 28 د و 45 ث",
      sampleCount: "42 فيديو",
      sampleAvg: "20 د و 41 ث",
      sampleShortest: "3 د و 12 ث",
      sampleLongest: "1 س و 05 د و 20 ث",
      sampleAt15x: "9 س و 39 د و 10 ث",
      sampleSaved15x: "توفير 4 س و 49 د",
      sampleAt2x: "7 س و 14 د و 22 ث",
      sampleSaved2x: "توفير 7 س و 14 د"
    },
    personas: {
      title: "مفيد لـ",
      students: "الطلاب",
      onlineLearners: "المتعلمون عبر الإنترنت",
      courseBuyers: "مشترو الدورات",
      developers: "المطورون",
      certCandidates: "المستعدون للشهادات",
      teachers: "المعلمون",
      creators: "منشئو المحتوى",
      bingeWatchers: "عشاق المشاهدة المتتابعة"
    },
    calculatorExtra: {
      videosUnavailable: "{count} فيديو غير متاح (خاص أو محذوف أو مقيد جغرافياً)",
      byChannel: "بواسطة {channel}",
      tryDemoBtn: "جرب قائمة تجريبية ←"
    }
  },

  es: {
    footerExtra: {
      brandDesc: "Calculadora gratuita de duración y tiempo de reproducción de listas de YouTube. Calcula la duración total, velocidad y planificación diaria.",
      toolsTitle: "Herramientas",
      resourcesTitle: "Recursos",
      legalTitle: "Legal",
      copyright: "© {year} YT Playlist Cal. Todos los derechos reservados."
    },
    pagesExtra: {
      contact: { emailLabel: "Correo de Soporte", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "Calculadora de Duración" },
      watchTime: { badge: "Tiempo de Reproducción" },
      remainingTime: { badge: "Tiempo Restante" },
      speed15x: { badge: "Velocidad 1.5×" },
      speed2x: { badge: "Velocidad 2×" },
      terms: { subtitle: "Términos de servicio de YT Playlist Cal.", intro: "Al utilizar nuestro sitio web, aceptas los siguientes términos y condiciones." },
      privacy: { subtitle: "Protegiendo tu privacidad en YT Playlist Cal.", intro: "Respetamos tu privacidad. No almacenamos datos personales ni guardamos tu historial de búsqueda." },
      disclaimer: { subtitle: "Aviso legal y marcas comerciales.", intro: "YT Playlist Cal es una herramienta independiente y no está afiliada con YouTube ni Google LLC." },
      error404: { subtitle: "La página que buscas no existe o ha sido movida.", backHome: "Volver al Inicio" },
      error500: { subtitle: "Hubo un error temporal en el servidor. Inténtalo de nuevo más tarde.", backHome: "Volver al Inicio" }
    },
    demonstrations: {
      badge: "Demostración Paso a Paso",
      title: "Cómo Funciona la Calculadora",
      subtitle: "Demostraciones interactivas que muestran cómo calcular duraciones de listas y planificar tus sesiones de estudio.",
      tab1: "1. Pegar URL",
      tab2: "2. Calcular",
      tab3: "3. Duración Total",
      tab4: "4. Estadísticas",
      tab5: "5. Ahorro de Tiempo",
      step1Title: "Pega cualquier enlace de YouTube",
      step1Desc: "Copia el enlace de cualquier lista de YouTube, video con parámetro de lista o ID de lista y pégalo en el cuadro de entrada.",
      step2Title: "Haz clic en Calcular",
      step2Desc: "Pulsa el botón Calcular para obtener la duración completa y metadatos de los videos a través de la YouTube Data API.",
      step3Title: "Mira la duración total al instante",
      step3Desc: "Obtén la duración total exacta formateada con claridad en horas, minutos y segundos a velocidad normal.",
      step4Title: "Revisa el conteo y estadísticas",
      step4Desc: "Consulta el número total de videos disponibles, la duración media por video y los videos más corto y más largo.",
      step5Title: "Compara el ahorro a mayor velocidad",
      step5Desc: "Compara el tiempo necesario a 1.25×, 1.5×, 1.75× y 2× para ver exactamente cuántas horas ahorras.",
      prev: "Anterior",
      next: "Siguiente",
      stepOf: "Paso {current} de {total}",
      samplePlaylistTitle: "Curso Completo de Desarrollo Web",
      sampleChannel: "Code Academy",
      sampleDuration: "14h 28m 45s",
      sampleCount: "42 Videos",
      sampleAvg: "20m 41s",
      sampleShortest: "3m 12s",
      sampleLongest: "1h 05m 20s",
      sampleAt15x: "9h 39m 10s",
      sampleSaved15x: "Ahorras 4h 49m",
      sampleAt2x: "7h 14m 22s",
      sampleSaved2x: "Ahorras 7h 14m"
    },
    personas: {
      title: "Utilizado por",
      students: "Estudiantes",
      onlineLearners: "Estudiantes en línea",
      courseBuyers: "Compradores de cursos",
      developers: "Desarrolladores",
      certCandidates: "Candidatos a certificaciones",
      teachers: "Profesores",
      creators: "Creadores",
      bingeWatchers: "Espectadores de maratones"
    },
    calculatorExtra: {
      videosUnavailable: "{count} video{plural} no disponible(s) (privados, eliminados o con restricción regional)",
      byChannel: "por {channel}",
      tryDemoBtn: "Probar lista de demostración →"
    }
  },

  fr: {
    footerExtra: {
      brandDesc: "Calculateur gratuit de durée de playlist YouTube et de temps de visionnage. Calculez la durée totale, les vitesses et planifiez votre calendrier.",
      toolsTitle: "Outils",
      resourcesTitle: "Ressources",
      legalTitle: "Mentions Légales",
      copyright: "© {year} YT Playlist Cal. Tous droits réservés."
    },
    pagesExtra: {
      contact: { emailLabel: "Email de Support", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "Calculateur de Durée" },
      watchTime: { badge: "Temps de Visionnage" },
      remainingTime: { badge: "Temps Restant" },
      speed15x: { badge: "Vitesse 1.5×" },
      speed2x: { badge: "Vitesse 2×" },
      terms: { subtitle: "Conditions d'utilisation de YT Playlist Cal.", intro: "En utilisant notre site, vous acceptez les conditions suivantes." },
      privacy: { subtitle: "Protection de votre vie privée sur YT Playlist Cal.", intro: "Nous respectons votre vie privée. Nous ne stockons pas de données personnelles." },
      disclaimer: { subtitle: "Avertissement légal et marques déposées.", intro: "YT Playlist Cal est un outil indépendant non affilié à YouTube ou Google LLC." },
      error404: { subtitle: "La page que vous recherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil" },
      error500: { subtitle: "Une erreur temporaire est survenue sur le serveur.", backHome: "Retour à l'accueil" }
    },
    demonstrations: {
      badge: "Démonstrations Interactives",
      title: "Comment Utiliser le Calculateur",
      subtitle: "Exemples étape par étape montrant comment calculer les durées de playlists et planifier votre emploi du temps.",
      tab1: "1. Coller l'URL",
      tab2: "2. Calculer",
      tab3: "3. Durée Totale",
      tab4: "4. Statistiques",
      tab5: "5. Gain de Temps",
      step1Title: "Collez n'importe quel lien YouTube",
      step1Desc: "Copiez le lien d'une playlist YouTube ou d'une vidéo avec liste et collez-le dans le champ de saisie.",
      step2Title: "Cliquez sur Calculer",
      step2Desc: "Cliquez sur Calculer pour récupérer les durées et métadonnées de toutes les vidéos via l'API YouTube.",
      step3Title: "Visualisez la durée totale instantanément",
      step3Desc: "Obtenez la durée totale exacte affichée clairement en heures, minutes et secondes à vitesse normale.",
      step4Title: "Consultez le nombre de vidéos et stats",
      step4Desc: "Découvrez le nombre de vidéos disponibles, la durée moyenne ainsi que la vidéo la plus courte et la plus longue.",
      step5Title: "Comparez les vitesses de lecture",
      step5Desc: "Comparez les durées à 1.25×, 1.5×, 1.75× et 2× pour voir combien d'heures vous économisez.",
      prev: "Précédent",
      next: "Suivant",
      stepOf: "Étape {current} sur {total}",
      samplePlaylistTitle: "Masterclass Développement Web",
      sampleChannel: "Code Academy",
      sampleDuration: "14h 28m 45s",
      sampleCount: "42 Vidéos",
      sampleAvg: "20m 41s",
      sampleShortest: "3m 12s",
      sampleLongest: "1h 05m 20s",
      sampleAt15x: "9h 39m 10s",
      sampleSaved15x: "4h 49m économisées",
      sampleAt2x: "7h 14m 22s",
      sampleSaved2x: "7h 14m économisées"
    },
    personas: {
      title: "Utilisé par",
      students: "Étudiants",
      onlineLearners: "Apprenants en ligne",
      courseBuyers: "Acheteurs de formations",
      developers: "Développeurs",
      certCandidates: "Candidats aux certifications",
      teachers: "Enseignants",
      creators: "Créateurs",
      bingeWatchers: "Binge-watchers"
    },
    calculatorExtra: {
      videosUnavailable: "{count} vidéo{plural} indisponible(s) (privée, supprimée ou géo-bloquée)",
      byChannel: "par {channel}",
      tryDemoBtn: "Essayer une playlist de démo →"
    }
  },

  de: {
    footerExtra: {
      brandDesc: "Kostenloser YouTube Playlist-Längen- und Wiedergabezeit-Rechner. Berechnen Sie Gesamtdauer, Geschwindigkeiten und Tageszeitpläne.",
      toolsTitle: "Tools",
      resourcesTitle: "Ressourcen",
      legalTitle: "Rechtliches",
      copyright: "© {year} YT Playlist Cal. Alle Rechte vorbehalten."
    },
    pagesExtra: {
      contact: { emailLabel: "Support-E-Mail", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "Dauer-Rechner" },
      watchTime: { badge: "Wiedergabezeit" },
      remainingTime: { badge: "Verbleibende Zeit" },
      speed15x: { badge: "1.5× Tempo" },
      speed2x: { badge: "2× Tempo" },
      terms: { subtitle: "Nutzungsbedingungen für YT Playlist Cal.", intro: "Durch die Nutzung unserer Website stimmen Sie den Bedingungen zu." },
      privacy: { subtitle: "Datenschutz bei YT Playlist Cal.", intro: "Wir respektieren Ihre Privatsphäre und speichern keine persönlichen Daten." },
      disclaimer: { subtitle: "Rechtlicher Hinweis und Markenhinweis.", intro: "YT Playlist Cal ist ein unabhängiges Tool und steht in keiner Verbindung zu YouTube oder Google LLC." },
      error404: { subtitle: "Die gesuchte Seite existiert nicht oder wurde verschoben.", backHome: "Zurück zur Startseite" },
      error500: { subtitle: "Es ist ein vorübergehender Serverfehler aufgetreten.", backHome: "Zurück zur Startseite" }
    },
    demonstrations: {
      badge: "Schritt-für-Schritt-Anleitung",
      title: "So funktioniert der Rechner",
      subtitle: "Interaktive Demonstrationen zur Berechnung von Playlist-Längen und zur Planung Ihres Lernplans.",
      tab1: "1. URL einfügen",
      tab2: "2. Berechnen",
      tab3: "3. Gesamtdauer",
      tab4: "4. Statistiken",
      tab5: "5. Zeitersparnis",
      step1Title: "Beliebigen YouTube-Link einfügen",
      step1Desc: "Kopieren Sie den Link einer YouTube-Playlist oder eines Videos mit Listenparameter und fügen Sie ihn ein.",
      step2Title: "Auf Berechnen klicken",
      step2Desc: "Klicken Sie auf Berechnen, um die Dauer aller Videos über die YouTube Data API abzurufen.",
      step3Title: "Genaue Gesamtlaufzeit anzeigen",
      step3Desc: "Sehen Sie sofort die exakte Gesamtdauer übersichtlich in Stunden, Minuten und Sekunden.",
      step4Title: "Videoanzahl und Statistiken prüfen",
      step4Desc: "Erfahren Sie die Anzahl der Videos, die durchschnittliche Länge sowie das kürzeste und längste Video.",
      step5Title: "Zeitersparnis bei höherem Tempo vergleichen",
      step5Desc: "Vergleichen Sie die Laufzeiten bei 1.25×, 1.5×, 1.75× und 2× Tempo und sehen Sie, wie viele Stunden Sie sparen.",
      prev: "Zurück",
      next: "Weiter",
      stepOf: "Schritt {current} von {total}",
      samplePlaylistTitle: "Webentwicklung Masterclass",
      sampleChannel: "Code Academy",
      sampleDuration: "14h 28m 45s",
      sampleCount: "42 Videos",
      sampleAvg: "20m 41s",
      sampleShortest: "3m 12s",
      sampleLongest: "1h 05m 20s",
      sampleAt15x: "9h 39m 10s",
      sampleSaved15x: "4h 49m gespart",
      sampleAt2x: "7h 14m 22s",
      sampleSaved2x: "7h 14m gespart"
    },
    personas: {
      title: "Genutzt von",
      students: "Studenten & Schülern",
      onlineLearners: "Online-Lernenden",
      courseBuyers: "Kurskäufern",
      developers: "Entwicklern",
      certCandidates: "Zertifikatsanwärtern",
      teachers: "Lehrern & Dozenten",
      creators: "Content Creators",
      bingeWatchers: "Serienfans & Binge-Watchern"
    },
    calculatorExtra: {
      videosUnavailable: "{count} Video{plural} nicht verfügbar (privat, gelöscht oder länderspezifisch gesperrt)",
      byChannel: "von {channel}",
      tryDemoBtn: "Demo-Playlist ausprobieren →"
    }
  },

  hi: {
    footerExtra: {
      brandDesc: "मुफ्त YouTube प्लेलिस्ट अवधि और देखने के समय का कैलकुलेटर। कुल अवधि, प्लेबैक गति और दैनिक अध्ययन कार्यक्रम की गणना करें।",
      toolsTitle: "उपकरण",
      resourcesTitle: "संसाधन",
      legalTitle: "कानूनी",
      copyright: "© {year} YT Playlist Cal. सर्वाधिकार सुरक्षित।"
    },
    pagesExtra: {
      contact: { emailLabel: "सहायता ईमेल", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "अवधि कैलकुलेटर" },
      watchTime: { badge: "देखने का समय" },
      remainingTime: { badge: "शेष समय" },
      speed15x: { badge: "1.5× गति" },
      speed2x: { badge: "2× गति" },
      terms: { subtitle: "YT Playlist Cal की सेवा की शर्तें।", intro: "हमारी वेबसाइट का उपयोग करके, आप निम्नलिखित नियमों और शर्तों से सहमत होते हैं।" },
      privacy: { subtitle: "YT Playlist Cal पर आपकी गोपनीयता की सुरक्षा।", intro: "हम आपकी गोपनीयता का सम्मान करते हैं। हम व्यक्तिगत डेटा संग्रहीत नहीं करते हैं।" },
      disclaimer: { subtitle: "कानूनी अस्वीकरण और ट्रेडमार्क नोटिस।", intro: "YT Playlist Cal एक स्वतंत्र टूल है और यह YouTube या Google LLC से संबद्ध नहीं है।" },
      error404: { subtitle: "आप जो पृष्ठ खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।", backHome: "होमपेज पर वापस जाएं" },
      error500: { subtitle: "सर्वर पर एक अस्थायी त्रुटि हुई। कृपया थोड़ी देर बाद पुनः प्रयास करें।", backHome: "होमपेज पर वापस जाएं" }
    },
    demonstrations: {
      badge: "सचित्र डेमो गाइड",
      title: "कैलकुलेटर का उपयोग कैसे करें",
      subtitle: "इंटरैक्टिव उदाहरणों के साथ समझें कि प्लेलिस्ट की अवधि कैसे मापें और अपना समय कैसे बचाएं।",
      tab1: "1. लिंक पेस्ट करें",
      tab2: "2. गणना करें",
      tab3: "3. कुल अवधि",
      tab4: "4. आंकड़े",
      tab5: "5. गति बचत",
      step1Title: "कोई भी YouTube लिंक पेस्ट करें",
      step1Desc: "किसी भी YouTube प्लेलिस्ट का लिंक या वीडियो लिंक कॉपी करें और इनपुट बॉक्स में पेस्ट करें।",
      step2Title: "Calculate बटन दबाएं",
      step2Desc: "कैलकुलेट बटन पर क्लिक करें ताकि YouTube API के माध्यम से सभी वीडियो का डेटा प्राप्त किया जा सके।",
      step3Title: "तुरंत कुल अवधि देखें",
      step3Desc: "घंटे, मिनट और सेकंड में प्लेलिस्ट की कुल समय सीमा आसानी से देखें।",
      step4Title: "वीडियो संख्या और आंकड़े जांचें",
      step4Desc: "कुल उपलब्ध वीडियो, औसत वीडियो लंबाई, और सबसे छोटे व लंबे वीडियो की जानकारी प्राप्त करें।",
      step5Title: "तेज़ गति पर समय की बचत देखें",
      step5Desc: "1.25×, 1.5×, 1.75× और 2× गति पर लगने वाले समय की तुलना करें और देखें कि आप कितने घंटे बचा रहे हैं।",
      prev: "पिछला",
      next: "अगला",
      stepOf: "चरण {current} / {total}",
      samplePlaylistTitle: "वेब डेवलपमेंट मास्टरक्लास",
      sampleChannel: "Code Academy",
      sampleDuration: "14घं 28मि 45से",
      sampleCount: "42 वीडियो",
      sampleAvg: "20मि 41से",
      sampleShortest: "3मि 12से",
      sampleLongest: "1घं 05मि 20से",
      sampleAt15x: "9घं 39मि 10से",
      sampleSaved15x: "बचत 4घं 49मि",
      sampleAt2x: "7घं 14मि 22से",
      sampleSaved2x: "बचत 7घं 14मि"
    },
    personas: {
      title: "इनके लिए उपयोगी",
      students: "छात्र",
      onlineLearners: "ऑनलाइन शिक्षार्थी",
      courseBuyers: "कोर्स खरीदार",
      developers: "डेवलपर्स",
      certCandidates: "प्रमाणन उम्मीदवार",
      teachers: "शिक्षक",
      creators: "कंटेंट क्रिएटर",
      bingeWatchers: "लगातार देखने वाले"
    },
    calculatorExtra: {
      videosUnavailable: "{count} वीडियो अनुपलब्ध (निजी, हटाए गए या क्षेत्र-प्रतिबंधित)",
      byChannel: "निर्माता: {channel}",
      tryDemoBtn: "डेमो प्लेलिस्ट आज़माएं →"
    }
  },

  ja: {
    footerExtra: {
      brandDesc: "無料の YouTube プレイリスト長さ＆再生時間計算ツール。総再生時間、倍速視聴、日々の学習計画を瞬時に計算。",
      toolsTitle: "ツール",
      resourcesTitle: "リソース",
      legalTitle: "法的情報",
      copyright: "© {year} YT Playlist Cal. All rights reserved."
    },
    pagesExtra: {
      contact: { emailLabel: "サポートメール", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "長さ計算ツール" },
      watchTime: { badge: "再生時間" },
      remainingTime: { badge: "残り時間" },
      speed15x: { badge: "1.5倍速" },
      speed2x: { badge: "2倍速" },
      terms: { subtitle: "YT Playlist Cal 利用規約。", intro: "当サイトを利用することにより、以下の利用規約に同意したものとみなされます。" },
      privacy: { subtitle: "YT Playlist Cal におけるプライバシー保護。", intro: "私たちは利用者のプライバシーを尊重します。個人データや検索履歴は一切保持しません。" },
      disclaimer: { subtitle: "法的免責事項および商標について。", intro: "YT Playlist Cal は独立したツールであり、YouTube または Google LLC との提携関係はありません。" },
      error404: { subtitle: "お探しのページは見つからないか、移動された可能性があります。", backHome: "ホームに戻る" },
      error500: { subtitle: "サーバーで一時的なエラーが発生しました。しばらくしてから再度お試しください。", backHome: "ホームに戻る" }
    },
    demonstrations: {
      badge: "操作デモガイド",
      title: "計算ツールの使い方",
      subtitle: "プレイリストの長さを計算し、視聴スケジュールを計画する手順をステップ別に紹介します。",
      tab1: "1. URL貼り付け",
      tab2: "2. 計算実行",
      tab3: "3. 総再生時間",
      tab4: "4. 動画統計",
      tab5: "5. 倍速節約",
      step1Title: "YouTube の URL を貼り付け",
      step1Desc: "YouTube の再生リストURL、リスト付き動画リンク、またはリストIDをコピーして入力欄に貼り付けます。",
      step2Title: "計算ボタンをクリック",
      step2Desc: "計算ボタンを押すと、YouTube Data API を介して全動画の正確な再生時間とメタデータを安全に取得します。",
      step3Title: "総再生時間を瞬時に確認",
      step3Desc: "通常速度での正確な合計再生時間が、時間・分・秒で分かりやすく表示されます。",
      step4Title: "動画本数と詳細統計を確認",
      step4Desc: "利用可能な総動画数、平均動画の長さ、さらに最も短い動画・最も長い動画を確認できます。",
      step5Title: "倍速再生での時短効果を比較",
      step5Desc: "1.25倍、1.5倍、1.75倍、2倍速での再生時間を比較し、どれだけの時間を節約できるかを一目で把握できます。",
      prev: "前へ",
      next: "次へ",
      stepOf: "ステップ {current} / {total}",
      samplePlaylistTitle: "Web開発マスタークラス講座",
      sampleChannel: "Code Academy",
      sampleDuration: "14時間 28分 45秒",
      sampleCount: "42 本の動画",
      sampleAvg: "20分 41秒",
      sampleShortest: "3分 12秒",
      sampleLongest: "1時間 05分 20秒",
      sampleAt15x: "9時間 39分 10秒",
      sampleSaved15x: "4時間 49分 節約",
      sampleAt2x: "7時間 14分 22秒",
      sampleSaved2x: "7時間 14分 節約"
    },
    personas: {
      title: "主な利用者",
      students: "学生・受験生",
      onlineLearners: "オンライン受講生",
      courseBuyers: "動画教材購入者",
      developers: "エンジニア",
      certCandidates: "資格試験受験者",
      teachers: "講師・教員",
      creators: "動画クリエイター",
      bingeWatchers: "一気見リスナー"
    },
    calculatorExtra: {
      videosUnavailable: "{count} 本の動画が利用不可（非公開、削除済み、または地域制限）",
      byChannel: "チャンネル: {channel}",
      tryDemoBtn: "デモ用プレイリストを試す →"
    }
  },

  ko: {
    footerExtra: {
      brandDesc: "무료 YouTube 재생목록 길이 및 시청 시간 계산기. 총 재생시간, 배속 시청 시간 및 일일 학습 스케줄을 즉시 계산합니다.",
      toolsTitle: "도구",
      resourcesTitle: "리소스",
      legalTitle: "법적 정보",
      copyright: "© {year} YT Playlist Cal. All rights reserved."
    },
    pagesExtra: {
      contact: { emailLabel: "고객지원 이메일", emailValue: "support@ytplaylistcal.com" },
      duration: { badge: "길이 계산기" },
      watchTime: { badge: "시청 시간" },
      remainingTime: { badge: "남은 시간" },
      speed15x: { badge: "1.5× 배속" },
      speed2x: { badge: "2× 배속" },
      terms: { subtitle: "YT Playlist Cal 이용약관.", intro: "본 웹사이트를 이용함으로써 귀하는 다음 약관 및 조건에 동의하게 됩니다." },
      privacy: { subtitle: "YT Playlist Cal의 개인정보 보호.", intro: "당사는 사용자의 개인정보를 존중합니다. 개인정보나 검색 기록을 보관하지 않습니다." },
      disclaimer: { subtitle: "법적 면책 조항 및 상표 안내.", intro: "YT Playlist Cal은 독립적인 도구이며 YouTube 또는 Google LLC와 제휴 관계가 없습니다." },
      error404: { subtitle: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.", backHome: "홈으로 돌아가기" },
      error500: { subtitle: "일시적인 서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.", backHome: "홈으로 돌아가기" }
    },
    demonstrations: {
      badge: "인터랙티브 가이드",
      title: "계산기 사용 방법",
      subtitle: "재생목록 총 길이를 계산하고 시청 일정을 세우는 과정을 단계별 데모로 확인하세요.",
      tab1: "1. URL 붙여넣기",
      tab2: "2. 계산하기",
      tab3: "3. 총 재생시간",
      tab4: "4. 영상 통계",
      tab5: "5. 배속 절약",
      step1Title: "YouTube URL 붙여넣기",
      step1Desc: "YouTube 재생목록 링크, 목록이 포함된 영상 주소 또는 재생목록 ID를 복사하여 입력란에 붙여넣습니다.",
      step2Title: "계산 버튼 클릭",
      step2Desc: "계산 버튼을 누르면 YouTube Data API를 통해 모든 영상의 정확한 재생시간과 메타데이터를 불러옵니다.",
      step3Title: "정확한 총 시간 즉시 확인",
      step3Desc: "정상 재생 속도 기준의 정확한 총 재생시간이 시, 분, 초 단위로 명확하게 표시됩니다.",
      step4Title: "영상 개수 및 통계 확인",
      step4Desc: "총 시청 가능 영상 수, 평균 영상 길이, 가장 짧은 영상 및 가장 긴 영상을 확인하세요.",
      step5Title: "배속 시청 시 시간 절약 비교",
      step5Desc: "1.25×, 1.5×, 1.75×, 2× 배속 시의 소요 시간을 비교하고 얼마나 많은 시간을 아낄 수 있는지 확인하세요.",
      prev: "이전",
      next: "다음",
      stepOf: "{total}단계 중 {current}단계",
      samplePlaylistTitle: "웹 개발 마스터클래스 완성 코스",
      sampleChannel: "Code Academy",
      sampleDuration: "14시간 28분 45초",
      sampleCount: "42개 영상",
      sampleAvg: "20분 41초",
      sampleShortest: "3분 12초",
      sampleLongest: "1시간 05분 20초",
      sampleAt15x: "9시간 39분 10초",
      sampleSaved15x: "4시간 49분 절약",
      sampleAt2x: "7시간 14분 22초",
      sampleSaved2x: "7시간 14분 절약"
    },
    personas: {
      title: "주요 사용자",
      students: "학생 및 수험생",
      onlineLearners: "온라인 수강생",
      courseBuyers: "강의 구매자",
      developers: "개발자",
      certCandidates: "자격증 준비생",
      teachers: "교사 및 강사",
      creators: "콘텐츠 크리에이터",
      bingeWatchers: "몰아보기 시청자"
    },
    calculatorExtra: {
      videosUnavailable: "{count}개 영상 재생 불가 (비공개, 삭제됨 또는 지역 제한)",
      byChannel: "채널: {channel}",
      tryDemoBtn: "데모 재생목록 체험하기 →"
    }
  }
};

// Languages that already have the 22 extra keys:
// fil, he, id, it, nl, pl, pt-BR, ru, sv, th, tr, vi
// We also need to add demonstrations, personas, calculatorExtra to ALL of them!

console.log('Synchronizing locales...');
const files = fs.readdirSync(LOCALES_DIR).filter(f => f.endsWith('.json'));

for (const file of files) {
  const code = file.replace('.json', '');
  const filePath = path.join(LOCALES_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // 1. Ensure footer extra keys
  if (!data.footer) data.footer = {};
  const fExtra = translations[code]?.footerExtra || translations.en.footerExtra;
  for (const k in fExtra) {
    if (!data.footer[k]) data.footer[k] = fExtra[k];
  }

  // 2. Ensure pages extra keys
  if (!data.pages) data.pages = {};
  const pExtra = translations[code]?.pagesExtra || translations.en.pagesExtra;
  for (const pageName in pExtra) {
    if (!data.pages[pageName]) data.pages[pageName] = {};
    for (const key in pExtra[pageName]) {
      if (!data.pages[pageName][key]) {
        data.pages[pageName][key] = pExtra[pageName][key];
      }
    }
  }

  // 3. Ensure demonstrations keys
  const demos = translations[code]?.demonstrations || translations.en.demonstrations;
  data.demonstrations = { ...demos, ...(data.demonstrations || {}) };

  // 4. Ensure personas keys
  const per = translations[code]?.personas || translations.en.personas;
  data.personas = { ...per, ...(data.personas || {}) };

  // 5. Ensure calculator extra keys
  if (!data.calculator) data.calculator = {};
  const calcExtra = translations[code]?.calculatorExtra || translations.en.calculatorExtra;
  for (const k in calcExtra) {
    if (!data.calculator[k]) data.calculator[k] = calcExtra[k];
  }

  // 6. Ensure nav.home exists
  if (!data.nav) data.nav = {};
  if (!data.nav.home) {
    data.nav.home = code === 'es' ? 'Inicio' :
                    code === 'fr' ? 'Accueil' :
                    code === 'de' ? 'Startseite' :
                    code === 'zh-CN' ? '首页' :
                    code === 'zh-TW' ? '首頁' :
                    code === 'ja' ? 'ホーム' :
                    code === 'ko' ? '홈' :
                    code === 'ar' ? 'الرئيسية' :
                    code === 'hi' ? 'होम' :
                    code === 'ru' ? 'Главная' :
                    code === 'pt-BR' ? 'Início' :
                    code === 'it' ? 'Home' :
                    code === 'nl' ? 'Home' :
                    code === 'pl' ? 'Strona główna' :
                    code === 'tr' ? 'Ana Sayfa' :
                    code === 'vi' ? 'Trang chủ' :
                    code === 'th' ? 'หน้าแรก' :
                    code === 'id' ? 'Beranda' :
                    code === 'fil' ? 'Tahanan' :
                    code === 'sv' ? 'Hem' :
                    code === 'he' ? 'בית' : 'Home';
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Updated ${file}`);
}

console.log('All 22 locale files synchronized.');

