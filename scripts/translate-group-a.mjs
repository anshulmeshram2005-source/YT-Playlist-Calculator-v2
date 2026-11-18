// scripts/translate-group-a.mjs
// Comprehensive, accurate translations for Group A: es (Spanish), fr (French), de (German), hi (Hindi)
import fs from 'fs';
import path from 'path';

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
  const filePath = path.resolve('public/locales', `${lang}.json`);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  deepMerge(existing, data);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`[UPDATED] ${lang}.json`);
}

// -------------------------------------------------------------
// SPANISH (es)
// -------------------------------------------------------------
const es = {
  calculator: {
    statCount: "Vídeos"
  },
  howItWorks: {
    supportedBadge: "Formatos compatibles",
    supportedTitle: "¿Qué enlaces de YouTube son compatibles?",
    supportedDesc: "Nuestro analizador procesa con precisión enlaces estándar de listas de reproducción, vídeos con parámetro de lista, enlaces cortos (youtu.be) e identificadores directos de lista de reproducción."
  },
  footer: {
    colLegal: "Legal",
    legalTitle: "Legal"
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 horas, 28 minutos, 45 segundos",
    sampleCount: "42 vídeos",
    sampleAvg: "20 min 41 s",
    sampleShortest: "Introducción — 3 min 12 s",
    sampleLongest: "Profundización — 1 h 05 min 20 s",
    sampleAt15x: "9 h 39 min 10 s",
    sampleAt2x: "7 h 14 min 22 s"
  },
  pages: {
    speed2xDetail: {
      colOriginal: "Original (1.0x)"
    },
    privacyDetail: {
      intro: "YT Playlist Cal (\"nosotros\", \"nuestro\", \"la herramienta\") es un sitio web de utilidades independiente que calcula la duración y el tiempo de reproducción de las listas de reproducción de YouTube. Esta Política de Privacidad explica qué información procesamos cuando utiliza la herramienta, cómo se utiliza y cómo protegemos su privacidad.",
      s1Title: "1. Información que procesamos",
      s1P1Title: "URL de YouTube",
      s1P1Text: "Cuando envía una URL de YouTube para su cálculo, esa URL se envía a nuestro servidor, que la utiliza para realizar solicitudes autenticadas a la API de YouTube Data v3. No almacenamos, registramos ni compartimos las URL de YouTube que envía más allá de la memoria caché temporal necesaria para responder a su solicitud.",
      s1P2Title: "Claves de API de YouTube (Opcional)",
      s1P2Text: "Si proporciona su propia clave de API de YouTube en la sección de Opciones avanzadas, se transmite a través de HTTPS a nuestro servidor exclusivamente para autorizar sus solicitudes de cálculo contra su propia cuota de Google Cloud. Nunca guardamos su clave de API en bases de datos o almacenamiento persistente del servidor.",
      s1P3Title: "Análisis de uso",
      s1P3Text: "Podemos utilizar análisis respetuosos con la privacidad para comprender patrones de uso generales, como visitas a páginas, uso de herramientas y errores agregados. No utilizamos cookies de seguimiento entre sitios invasivas ni recopilamos información de identificación personal (PII).",
      s1P4Title: "Almacenamiento local (Local Storage)",
      s1P4Text: "Utilizamos el almacenamiento local (localStorage) de su navegador únicamente para recordar su preferencia de modo oscuro/claro y la configuración de idioma entre visitas. Estos datos nunca salen de su navegador.",
      s1P5Title: "Registros del servidor",
      s1P5Text: "Nuestro proveedor de alojamiento (Cloudflare) puede mantener registros de acceso al servidor que incluyen direcciones IP y metadatos de solicitudes para seguridad, mitigación de DDoS y monitoreo del rendimiento de la red.",
      s2Title: "2. Cookies",
      s2Text: "YT Playlist Cal no establece cookies con fines de seguimiento o publicidad. No utilizamos cookies de seguimiento de terceros. Las cookies de sesión técnicas solo pueden ser utilizadas por nuestra infraestructura de alojamiento perimetral (Cloudflare) para mitigar el tráfico malicioso y prevenir el abuso de denegación de servicio.",
      s3Title: "3. Servicios de terceros",
      s3Text1: "YouTube Data API v3: Utilizamos la YouTube Data API para recuperar metadatos de listas de reproducción y vídeos. Sus solicitudes están sujetas a las Condiciones de Servicio de YouTube y a la Política de Privacidad de Google.",
      s3Text2: "Cloudflare: Nuestro sitio web está alojado y protegido mediante Cloudflare, que puede procesar metadatos de solicitudes para seguridad de red y optimización de entrega de contenido en el borde de la red.",
      s3Text3: "Carga de fuentes: Utilizamos Bunny Fonts (una alternativa compatible con el RGPD a Google Fonts) para cargar la tipografía Inter sin registrar las direcciones IP de los usuarios ni colocar identificadores de seguimiento.",
      s4Title: "4. Publicidad",
      s4Text: "El sitio web puede mostrar anuncios a través de Google AdSense o una red publicitaria equivalente. Las redes publicitarias pueden utilizar cookies no personalizadas o identificadores de solicitudes de acuerdo con la legislación aplicable y la configuración de consentimiento del usuario.",
      s5Title: "5. Privacidad de los menores",
      s5Text: "YT Playlist Cal no está dirigido a niños menores de 13 años. No recopilamos conscientemente información personal de niños. Si cree que un menor nos ha proporcionado información personal, comuníquese con nosotros para que podamos eliminarla de inmediato.",
      s6Title: "6. Sus derechos",
      s6Text: "Dado que no recopilamos ni almacenamos datos personales más allá del procesamiento de solicitudes transitorio, normalmente no tenemos ningún registro identificable asociado con usted. Si tiene alguna pregunta sobre sus derechos bajo el RGPD, la CCPA u otras regulaciones de privacidad, comuníquese con nosotros.",
      s7Title: "7. Cambios en esta política",
      s7Text: "Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se reflejarán con una fecha actualizada de \"Última actualización\" en la parte superior de esta página. El uso continuado del sitio después de cualquier cambio constituye su aceptación de la política revisada.",
      s8Title: "8. Contacto",
      s8Text: "Si tiene preguntas sobre esta Política de Privacidad, utilice la página de Contacto."
    },
    termsDetail: {
      summary: "Resumen: Al utilizar YT Playlist Cal, usted acepta estos términos, nuestra Política de Privacidad y nuestro Descargo de responsabilidad. Esta es una herramienta gratuita e independiente para estimar la duración de las listas de reproducción de YouTube.",
      s1Title: "1. Aceptación de los términos",
      s1Text: "Al acceder o utilizar YT Playlist Cal (\"el Servicio\", \"el Sitio web\", \"nosotros\" o \"nuestro\"), accesible a través de este dominio web, usted acepta quedar vinculado por estos Términos de servicio. Si no está de acuerdo con alguna parte de estos términos, debe dejar de utilizar el Servicio de inmediato.",
      s2Title: "2. Descripción del servicio",
      s2Text1: "YT Playlist Cal proporciona una suite de cálculo gratuita basada en la web diseñada para analizar listas de reproducción públicas de YouTube, calcular duraciones acumuladas, proyectar tiempos de visualización a diferentes velocidades de reproducción (1.25x, 1.5x, 1.75x, 2.0x) y ayudar a los usuarios a planificar horarios de estudio o maratones de visualización.",
      s2Text2: "El Servicio se proporciona de forma totalmente gratuita con fines informativos, educativos y de planificación personal.",
      s3Title: "3. API de YouTube y condiciones de terceros",
      s3Text: "YT Playlist Cal se basa en la YouTube Data API v3 para recuperar metadatos de listas de reproducción, títulos de vídeos y duraciones publicadas. Al utilizar este servicio:",
      s3Li1: "Queda sujeto a los Términos de Servicio de YouTube.",
      s3Li2: "Los datos de YouTube se procesan de conformidad con la Política de Privacidad de Google.",
      s3Li3: "No tenemos control sobre los servidores de YouTube, la asignación de cuotas de API, los límites de velocidad ni la precisión de los metadatos.",
      s4Title: "4. Política de uso aceptable",
      s4Text: "Usted acepta utilizar YT Playlist Cal únicamente para fines legítimos. Acepta no:",
      s4Li1: "Enviar solicitudes automatizadas excesivas, consultas de bots o llamadas de API de alta frecuencia que degraden, sobrecarguen o perjudiquen el rendimiento de nuestra infraestructura o de la API de YouTube.",
      s4Li2: "Intentar aplicar ingeniería inversa, descompilar, comprometer o eludir los límites de velocidad, los controles de seguridad del servidor o las restricciones de acceso.",
      s4Li3: "Utilizar el sitio web para enviar cadenas de entrada abusivas, ilegales, infractoras o maliciosas.",
      s4Li4: "Tergiversar su identidad o intentar obtener acceso no autorizado a nuestras cuentas de alojamiento, entornos de servidor o recursos restringidos.",
      s4Outro: "Nos reservamos el derecho de bloquear temporal o permanentemente direcciones IP o limitar solicitudes que violen estas directrices de uso aceptable.",
      s5Title: "5. Claves de API proporcionadas por el usuario (Opcional)",
      s5Text: "Los usuarios avanzados pueden suministrar opcionalmente su propia clave personal de la YouTube Data API v3 en la sección de Opciones avanzadas:",
      s5Li1: "Su clave de API se transmite a través de HTTPS seguro directamente a nuestro servidor y se utiliza estrictamente para ejecutar su cálculo en tiempo real.",
      s5Li2: "No almacenamos, registramos, rastreamos ni compartimos su clave de API con ningún tercero.",
      s5Li3: "Usted sigue siendo el único responsable de su proyecto de Google Cloud, su seguridad y el consumo de cuota de API derivado de su clave.",
      s6Title: "6. Propiedad intelectual y marcas comerciales",
      s6Text1: "YouTube™, el logotipo de YouTube y las marcas comerciales asociadas son marcas registradas de Google LLC. YT Playlist Cal es una herramienta independiente y no está patrocinada, respaldada ni afiliada a Google LLC.",
      s6Text2: "El código fuente original del sitio web, la identidad visual, el logotipo (\"Chrono Play\"), el sistema de diseño personalizado y las guías explicativas son propiedad intelectual de YT Playlist Cal y están protegidos por las leyes de derechos de autor aplicables.",
      s7Title: "7. Precisión del cálculo y descargo \"Tal cual\"",
      s7Text: "Todos los cálculos, duraciones, ahorros de velocidad de reproducción y proyecciones de programación se proporcionan \"tal cual\" para estimaciones prácticas. Las variaciones pueden ocurrir debido a:",
      s7Li1: "Vídeos no disponibles (los vídeos privados, eliminados, restringidos por edad o bloqueados por región informan 0 segundos y se contabilizan como metadatos no recuperables).",
      s7Li2: "Transmisiones en directo en curso o estrenos no procesados sin metadatos de duración estáticos.",
      s7Li3: "Diferencias de redondeo en las marcas de tiempo de duración ISO 8601 de YouTube.",
      s7Li4: "Variables de reproducción en el mundo real (almacenamiento en búfer, saltos de anuncios o tolerancias de velocidad en los motores multimedia de los navegadores).",
      s7Outro: "Para obtener más detalles, consulte nuestro Descargo de responsabilidad completo.",
      s8Title: "8. Limitación de responsabilidad",
      s8Text: "En la máxima medida permitida por la ley aplicable, YT Playlist Cal y sus desarrolladores no serán responsables de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja de su acceso, uso o imposibilidad de usar este Servicio.",
      s9Title: "9. Modificaciones de las condiciones",
      s9Text: "Podemos revisar estos Términos de servicio en cualquier momento sin previo aviso. Cualquier modificación entrará en vigor inmediatamente después de su publicación en esta página. El uso continuado del sitio web después de las modificaciones constituirá su aceptación de los nuevos términos.",
      s10Title: "10. Información de contacto",
      s10Text: "Si tiene alguna pregunta o inquietud respecto a estos Términos de servicio, comuníquese con nosotros a través de nuestra página de Contacto."
    },
    disclaimerDetail: {
      summary: "Resumen: YT Playlist Cal es una herramienta gratuita e independiente. No estamos afiliados, autorizados ni respaldados por YouTube ni Google LLC. Todos los cálculos y estimaciones se proporcionan \"tal cual\" con fines de planificación informativa.",
      s1Title: "1. Afiliación de marca y marca comercial",
      s1Text1: "YouTube™, el logotipo de YouTube y las marcas comerciales relacionadas son marcas registradas de Google LLC. Todas las marcas comerciales, nombres de marcas y logotipos a los que se hace referencia en este sitio web pertenecen a sus respectivos propietarios.",
      s1Text2: "YT Playlist Cal es una aplicación web independiente y no está afiliada, asociada, autorizada, respaldada ni conectada oficialmente de ninguna manera con YouTube, Google LLC o cualquiera de sus subsidiarias o afiliados.",
      s2Title: "2. Naturaleza de la herramienta y fines informativos únicamente",
      s2Text1: "Los servicios, cálculos, duraciones, estimaciones de velocidad, horarios de planificación de visualización y todo el contenido relacionado proporcionado por YT Playlist Cal se ofrecen únicamente con fines de entretenimiento, educativos y de conveniencia informativa general.",
      s2Text2: "Los resultados generados por nuestra calculadora no deben considerarse como una auditoría oficial, una certificación con vinculación contractual ni una medición respaldada por YouTube del contenido multimedia alojado.",
      s3Title: "3. Precisión y exhaustividad de los cálculos",
      s3Text1: "Si bien nos esforzamos por garantizar que todos los cálculos sean precisos y matemáticamente correctos, los cálculos dependen completamente de los metadatos de vídeo de terceros devueltos por la YouTube Data API v3.",
      s3Text2: "Pueden surgir discrepancias en la duración total, el recuento de vídeos o los tiempos de visualización ajustados a la velocidad debido a factores que escapan a nuestro control razonable, entre ellos:",
      s3Li1: "Vídeos no disponibles: los vídeos de una lista de reproducción que son privados, eliminados, restringidos por país o bloqueados por región a menudo no informan metadatos de duración válidos.",
      s3Li2: "Transmisiones en vivo y estrenos: las transmisiones en vivo o emisiones activas no informan duraciones definitivas de vídeo hasta que el archivo de transmisión se procesa por completo.",
      s3Li3: "Actualizaciones dinámicas de listas de reproducción: las listas de reproducción modificadas o reordenadas por sus creadores durante o entre cálculos pueden reflejar diferencias en el recuento de elementos.",
      s3Li4: "Aproximaciones de velocidad de reproducción: la división matemática simple por factores de velocidad de reproducción (por ejemplo, 1.25×, 1.5×, 1.75×, 2.0×) no tiene en cuenta las variaciones de renderizado del navegador.",
      s3Li5: "Inconsistencias en los metadatos de la API: la YouTube Data API proporciona la duración del vídeo en formato ISO 8601 (por ejemplo, PT1H23M45S). Las diferencias de redondeo en segundos individuales pueden acumularse en listas de reproducción grandes.",
      s4Title: "4. Servicios de terceros y uso de la API",
      s4Text: "YT Playlist Cal se basa en la YouTube Data API v3 para recuperar metadatos públicos de listas de reproducción y vídeos. Al utilizar esta herramienta, usted reconoce y acepta que:",
      s4Li1: "Sus solicitudes para calcular listas de reproducción se rigen por las condiciones y políticas para desarrolladores de YouTube. Al interactuar con la herramienta, también acepta los Términos de Servicio de YouTube y la Política de Privacidad de Google.",
      s4Li2: "La disponibilidad de la herramienta está sujeta a las cuotas de la API de YouTube, la limitación de velocidad y el estado del servidor. No garantizamos un servicio ininterrumpido ni una conectividad continua con las API de YouTube.",
      s4Li3: "Si decide utilizar una clave de API de YouTube personal opcional en la configuración avanzada, se utiliza exclusivamente para sus cálculos y nunca se almacena en nuestros servidores.",
      s5Title: "5. Descargo de responsabilidad sobre enlaces externos",
      s5Text: "YT Playlist Cal puede contener enlaces a sitios web externos de terceros, documentación y recursos que no son proporcionados, operados ni mantenidos por nosotros. No garantizamos la exactitud, relevancia, puntualidad o integridad de ninguna información en estos sitios externos.",
      s6Title: "6. Descargo de responsabilidad \"Tal cual\" y \"Según disponibilidad\"",
      s6Text1: "YT PLAYLIST CAL Y TODO EL CONTENIDO, CALCULADORAS, HERRAMIENTAS Y FUNCIONALIDADES PROPORCIONADOS EN ESTE DOCUMENTO SE DISTRIBUYEN \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\", SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS.",
      s6Text2: "EN LA MÁXIMA MEDIDA PERMISIBLE SEGÚN LA LEY APLICABLE, RENUNCIAMOS A TODAS LAS GARANTÍAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN.",
      s7Title: "7. Limitación de responsabilidad",
      s7Text: "BAJO NINGUNA CIRCUNSTANCIA YT PLAYLIST CAL, SUS AUTORES, MANTENEDORES, AFILIADOS O PROVEEDORES DE ALOJAMIENTO SERÁN RESPONSABLES DE NINGÚN DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL O CONSECUENTE QUE SURJA DE:",
      s7Li1: "Su uso o imposibilidad de usar este sitio web o sus herramientas de cálculo;",
      s7Li2: "Cualquier inexactitud, error, omisión o retraso en los resultados de duración, horarios de visualización o metadatos;",
      s7Li3: "Cualquier decisión tomada, plazo incumplido o acción emprendida confiando en los resultados producidos por esta calculadora;",
      s7Li4: "Cualquier acceso no autorizado, fallo técnico, tiempo de inactividad del servidor o interrupción del servicio.",
      s7Outro: "Su único y exclusivo recurso por insatisfacción con el sitio o sus servicios es dejar de utilizar la herramienta.",
      s8Title: "8. Revisiones y modificaciones",
      s8Text: "Podemos actualizar, modificar o revisar este Descargo de responsabilidad en cualquier momento sin previo aviso. Cualquier actualización entrará en vigor inmediatamente después de su publicación en esta página web.",
      s9Title: "9. Contacto y preguntas",
      s9Text: "Si tiene preguntas, comentarios o inquietudes respecto a este Descargo de responsabilidad o el funcionamiento de la herramienta, comuníquese con nosotros a través de nuestra página de Contacto."
    }
  }
};

// -------------------------------------------------------------
// FRENCH (fr)
// -------------------------------------------------------------
const fr = {
  nav: {
    faq: "FAQ",
    contact: "Contact"
  },
  howItWorks: {
    supportedBadge: "Formats pris en charge",
    supportedTitle: "Quels liens YouTube sont pris en charge ?",
    supportedDesc: "Notre analyseur prend en charge avec précision les liens de playlists standard, les vidéos avec paramètre de liste, les liens raccourcis (youtu.be) et les identifiants directs de playlist."
  },
  faq: {
    badge: "Foire aux questions"
  },
  footer: {
    links: {
      faq: "FAQ",
      contact: "Contact"
    }
  },
  meta: {
    contact: {
      title: "Contactez-nous — YT Playlist Cal"
    }
  },
  seo: {
    contact: {
      title: "Contactez-nous — YT Playlist Cal"
    }
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 heures, 28 minutes, 45 secondes",
    sampleCount: "42 vidéos",
    sampleAvg: "20 min 41 s",
    sampleShortest: "Introduction — 3 min 12 s",
    sampleLongest: "Approfondissement — 1 h 05 min 20 s",
    sampleAt15x: "9 h 39 min 10 s",
    sampleAt2x: "7 h 14 min 22 s"
  },
  pages: {
    contact: {
      breadcrumb: "Contact",
      formType: "Type de message",
      formTypeQuestion: "Question générale",
      formMessage: "Votre message"
    },
    common: {
      faq: "Foire aux questions"
    },
    faqDetailed: {
      breadcrumb: "Foire aux questions"
    },
    speed2xDetail: {
      colOriginal: "Original (1.0x)"
    },
    privacyDetail: {
      intro: "YT Playlist Cal (« nous », « notre », « l'outil ») est un site web d'utilitaires indépendant qui calcule la durée et le temps de visionnage des playlists YouTube. Cette Politique de confidentialité explique quelles informations nous traitons lorsque vous utilisez l'outil, comment elles sont utilisées et comment nous protégeons votre vie privée.",
      s1Title: "1. Informations que nous traitons",
      s1P1Title: "URL YouTube",
      s1P1Text: "Lorsque vous soumettez une URL YouTube pour un calcul, cette URL est envoyée à notre serveur, qui l'utilise pour effectuer des requêtes authentifiées auprès de l'API YouTube Data v3. Nous ne stockons, n'enregistrons ni ne partageons les URL YouTube que vous soumettez au-delà du cache mémoire temporaire requis pour répondre à votre requête.",
      s1P2Title: "Clés API YouTube (Facultatif)",
      s1P2Text: "Si vous fournissez votre propre clé API YouTube dans la section Options avancées, elle est transmise via HTTPS sécurisé à notre serveur exclusivement pour autoriser vos requêtes de calcul sur votre propre quota Google Cloud. Nous n'enregistrons jamais votre clé API dans des bases de données ou sur un stockage persistant de serveur.",
      s1P3Title: "Analytique d'utilisation",
      s1P3Text: "Nous pouvons utiliser des outils d'analyse respectueux de la vie privée pour comprendre les tendances d'utilisation générales telles que les visites de pages, l'utilisation des outils et les erreurs agrégées. Nous n'utilisons aucun cookie de suivi intersites invasif et ne collectons aucune information personnelle identifiable (PII).",
      s1P4Title: "Stockage local (Local Storage)",
      s1P4Text: "Nous utilisons le stockage local (localStorage) de votre navigateur uniquement pour mémoriser votre préférence de thème clair/sombre et le choix de langue entre vos visites. Ces données ne quittent jamais votre navigateur.",
      s1P5Title: "Journaux du serveur",
      s1P5Text: "Notre hébergeur (Cloudflare) peut conserver des journaux d'accès au serveur comprenant les adresses IP et les métadonnées des requêtes à des fins de sécurité, d'atténuation des attaques DDoS et de surveillance des performances du réseau.",
      s2Title: "2. Cookies",
      s2Text: "YT Playlist Cal ne dépose aucun cookie à des fins de suivi ou de publicité. Nous n'utilisons aucun cookie de suivi tiers. Des cookies de session purement techniques peuvent être utilisés par notre infrastructure réseau (Cloudflare) pour contrer le trafic malveillant et prévenir les abus de déni de service.",
      s3Title: "3. Services tiers",
      s3Text1: "API YouTube Data v3 : Nous utilisons l'API YouTube Data pour récupérer les métadonnées des playlists et des vidéos. Vos requêtes sont soumises aux Conditions d'utilisation de YouTube et aux Règles de confidentialité de Google.",
      s3Text2: "Cloudflare : Notre site web est hébergé et sécurisé via Cloudflare, qui peut traiter les métadonnées des requêtes pour la sécurité du réseau et l'optimisation de la distribution de contenu à la périphérie du réseau.",
      s3Text3: "Chargement des polices : Nous utilisons Bunny Fonts (une alternative conforme au RGPD à Google Fonts) pour charger la typographie Inter sans enregistrer les adresses IP des utilisateurs ni placer de traceurs.",
      s4Title: "4. Publicité",
      s4Text: "Le site web peut afficher des annonces via Google AdSense ou un réseau publicitaire équivalent. Les réseaux publicitaires peuvent utiliser des cookies non personnalisés ou des identifiants de requête conformément aux lois applicables et aux paramètres de consentement de l'utilisateur.",
      s5Title: "5. Vie privée des enfants",
      s5Text: "YT Playlist Cal ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous pensez qu'un enfant nous a fourni des données personnelles, veuillez nous contacter afin que nous puissions les supprimer immédiatement.",
      s6Title: "6. Vos droits",
      s6Text: "Comme nous ne collectons ni ne conservons de données personnelles au-delà du traitement transitoire des requêtes, nous ne détenons généralement aucun enregistrement identifiable associé à votre personne. Pour toute question sur vos droits en vertu du RGPD ou d'autres réglementations, veuillez nous contacter.",
      s7Title: "7. Modifications de cette politique",
      s7Text: "Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Les modifications seront indiquées par une date de « Dernière mise à jour » révisée en haut de cette page. Votre utilisation continue du site après toute modification vaut acceptation de la politique mise à jour.",
      s8Title: "8. Contact",
      s8Text: "Si vous avez des questions concernant cette Politique de confidentialité, veuillez utiliser la page Contact."
    },
    termsDetail: {
      summary: "Résumé : En utilisant YT Playlist Cal, vous acceptez ces conditions, notre Politique de confidentialité et notre Avis de non-responsabilité. Il s'agit d'un utilitaire gratuit et indépendant pour estimer la durée des playlists YouTube.",
      s1Title: "1. Acceptation des conditions",
      s1Text: "En accédant à YT Playlist Cal (« le Service », « le Site web », « nous » ou « notre »), accessible via ce domaine web, ou en l'utilisant, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous refusez l'une quelconque de ces conditions, vous devez cesser immédiatement d'utiliser le Service.",
      s2Title: "2. Description du service",
      s2Text1: "YT Playlist Cal fournit une suite de calcul gratuite en ligne conçue pour analyser les playlists YouTube publiques, calculer les durées cumulées, projeter les temps de visionnage à différentes vitesses (1.25x, 1.5x, 1.75x, 2.0x) et aider les utilisateurs à planifier leurs sessions de visionnage.",
      s2Text2: "Le Service est fourni gratuitement à des fins purement informatives, éducatives et de planification personnelle.",
      s3Title: "3. API YouTube et conditions tierces",
      s3Text: "YT Playlist Cal s'appuie sur l'API YouTube Data v3 pour récupérer les métadonnées de playlist, les titres et les durées publiées. En utilisant ce service :",
      s3Li1: "Vous êtes lié par les Conditions d'utilisation de YouTube.",
      s3Li2: "Les données YouTube sont traitées conformément aux Règles de confidentialité de Google.",
      s3Li3: "Nous n'exerçons aucun contrôle sur les serveurs de YouTube, l'attribution des quotas d'API, les limites de débit ou l'exactitude des métadonnées.",
      s4Title: "4. Politique d'utilisation acceptable",
      s4Text: "Vous acceptez d'utiliser YT Playlist Cal uniquement à des fins légales. Vous vous engagez à ne pas :",
      s4Li1: "Envoyer des requêtes automatisées excessives, des requêtes de robots ou des appels d'API à haute fréquence susceptibles de dégrader, surcharger ou altérer nos infrastructures ou l'API YouTube.",
      s4Li2: "Tenter de décompiler, désosser, compromettre ou contourner les limites de requêtes, les contrôles de sécurité du serveur ou les restrictions d'accès.",
      s4Li3: "Utiliser le site web pour soumettre des chaînes de caractères abusives, illégales, contrefaisantes ou malveillantes.",
      s4Li4: "Usurper une identité ou tenter d'obtenir un accès non autorisé à nos comptes d'hébergement, environnements de serveur ou ressources protégées.",
      s4Outro: "Nous nous réservons le droit de bloquer temporairement ou définitivement des adresses IP ou de restreindre les requêtes qui enfreignent ces directives d'utilisation.",
      s5Title: "5. Clés API fournies par l'utilisateur (Facultatif)",
      s5Text: "Les utilisateurs avancés peuvent facultativement fournir leur propre clé d'API YouTube Data v3 dans les Options avancées :",
      s5Li1: "Votre clé API est transmise via HTTPS sécurisé directement à notre serveur et utilisée uniquement pour exécuter votre calcul en direct.",
      s5Li2: "Nous ne stockons, n'enregistrons, ne traçons ni ne partageons votre clé API avec aucun tiers.",
      s5Li3: "Vous demeurez seul responsable de votre projet Google Cloud, de sa sécurité et de la consommation de quotas d'API découlant de votre clé.",
      s6Title: "6. Propriété intellectuelle et marques déposées",
      s6Text1: "YouTube™, le logo YouTube et les marques associées sont des marques déposées de Google LLC. YT Playlist Cal est un outil indépendant et n'est ni sponsorisé, ni approuvé, ni affilié à Google LLC.",
      s6Text2: "Le code source original du site web, l'identité visuelle, le logo (« Chrono Play »), le système de conception graphique et les guides explicatifs sont la propriété intellectuelle exclusive de YT Playlist Cal et sont protégés par le droit d'auteur.",
      s7Title: "7. Précision du calcul et avertissement « En l'état »",
      s7Text: "Tous les calculs, durées, gains de temps selon la vitesse et projections de planification sont fournis « en l'état » pour des estimations indicatives. Des variations peuvent survenir en raison de :",
      s7Li1: "Vidéos indisponibles (les vidéos privées, supprimées, soumises à une limite d'âge ou bloquées par pays renvoient 0 seconde et sont signalées comme métadonnées irrécupérables).",
      s7Li2: "Diffusions en direct en cours ou premières non finalisées dépourvues de métadonnées de durée fixes.",
      s7Li3: "Écarts d'arrondi dans les horodatages de durée ISO 8601 fournis par YouTube.",
      s7Li4: "Facteurs de lecture réels (mise en mémoire tampon, publicités, sauts de séquences ou tolérances des moteurs de lecture des navigateurs).",
      s7Outro: "Pour plus de précisions, veuillez consulter notre Avis de non-responsabilité complet.",
      s8Title: "8. Limitation de responsabilité",
      s8Text: "Dans toute la mesure permise par la législation applicable, YT Playlist Cal et ses responsables ne sauraient être tenus responsables des dommages directs, indirects, consécutifs ou accessoires résultant de votre accès ou utilisation de ce Service.",
      s9Title: "9. Modifications des conditions",
      s9Text: "Nous pouvons réviser ces Conditions d'utilisation à tout moment sans préavis. Toute modification prend effet dès sa publication sur cette page. L'utilisation continue du site web vaut acceptation des conditions modifiées.",
      s10Title: "10. Coordonnées de contact",
      s10Text: "Si vous avez des questions ou préoccupations relatives aux présentes Conditions d'utilisation, veuillez nous contacter via notre page Contact."
    },
    disclaimerDetail: {
      summary: "Résumé : YT Playlist Cal est un outil utilitaire gratuit et indépendant. Nous ne sommes ni affiliés, ni autorisés, ni approuvés par YouTube ou Google LLC. Tous les calculs et estimations sont fournis « en l'état » à des fins d'information et d'organisation.",
      s1Title: "1. Marques déposées et affiliation",
      s1Text1: "YouTube™, le logo YouTube et les éléments de marque connexes sont des marques déposées de Google LLC. Toutes les marques, dénominations commerciales et logos mentionnés sur ce site appartiennent à leurs propriétaires respectifs.",
      s1Text2: "YT Playlist Cal est une application web indépendante et n'est en aucun cas affiliée, associée, autorisée, parrainée ou liée officiellement à YouTube, Google LLC ou à l'une de leurs filiales.",
      s2Title: "2. Nature de l'outil et finalité informative",
      s2Text1: "Les services, calculs, durées, estimations de vitesse, planificateurs de visionnage et contenus connexes fournis par YT Playlist Cal sont proposés exclusivement à des fins récréatives, éducatives et informatives.",
      s2Text2: "Les résultats générés par notre calculateur ne doivent pas être considérés comme un audit officiel, une certification contractuelle ou une mesure formellement validée par YouTube.",
      s3Title: "3. Exactitude et exhaustivité des calculs",
      s3Text1: "Bien que nous fassions tout notre possible pour assurer la précision et la rigueur mathématique des calculs, ceux-ci dépendent entièrement des métadonnées vidéo tierces renvoyées par l'API YouTube Data v3.",
      s3Text2: "Des divergences dans la durée totale, le nombre de vidéos ou les temps de visionnage ajustés à la vitesse peuvent survenir en raison de facteurs indépendants de notre volonté, notamment :",
      s3Li1: "Vidéos indisponibles : les vidéos d'une playlist qui sont privées, supprimées, limitées par zone géographique ou soumises à une limite d'âge ne fournissent souvent pas de durée valide.",
      s3Li2: "Diffusions en direct et premières : les flux en direct ou diffusions en cours ne fournissent pas de durée définitive avant que la vidéo archivée ne soit entièrement traitée.",
      s3Li3: "Mises à jour dynamiques des playlists : les playlists modifiées ou réordonnées par leurs créateurs pendant ou entre les calculs peuvent présenter des variations d'éléments.",
      s3Li4: "Approximations de vitesse de lecture : la division mathématique par les coefficients de vitesse (par ex. 1.25×, 1.5×, 1.75×, 2.0×) ne tient pas compte des tolérances de rendu du lecteur vidéo.",
      s3Li5: "Incohérences de métadonnées API : l'API YouTube Data fournit les durées au format ISO 8601 (par ex. PT1H23M45S). Les écarts d'arrondi sur chaque seconde peuvent s'accumuler sur les grandes playlists.",
      s4Title: "4. Services tiers et utilisation de l'API",
      s4Text: "YT Playlist Cal s'appuie sur l'API YouTube Data v3 pour récupérer les métadonnées publiques des playlists et vidéos. En utilisant cet outil, vous reconnaissez et acceptez que :",
      s4Li1: "Vos requêtes de calcul sont régies par les conditions et règles applicables aux développeurs YouTube. Vous acceptez également les Conditions d'utilisation de YouTube et les Règles de confidentialité de Google.",
      s4Li2: "La disponibilité de l'outil dépend des quotas d'API, de la limitation de fréquence et de l'état des serveurs de YouTube. Nous ne garantissons pas une accessibilité ininterrompue.",
      s4Li3: "Si vous choisissez d'utiliser une clé API YouTube personnelle dans les paramètres avancés, elle est utilisée exclusivement pour vos calculs et n'est jamais conservée sur nos serveurs.",
      s5Title: "5. Liens externes",
      s5Text: "YT Playlist Cal peut contenir des liens vers des sites tiers, documentations et ressources externes qui ne sont ni gérés ni contrôlés par nous. Nous ne garantissons pas l'exactitude, la pertinence ou l'exhaustivité des informations sur ces sites tiers.",
      s6Title: "6. Exclusion de garantie « En l'état » et « Selon disponibilité »",
      s6Text1: "YT PLAYLIST CAL AINSI QUE L'ENSEMBLE DES CONTENUS, CALCULATEURS, OUTILS ET FONCTIONNALITÉS FOURNIS SONT MIS À DISPOSITION « EN L'ÉTAT » ET « SELON DISPONIBILITÉ », SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE.",
      s6Text2: "DANS TOUTE LA MESURE PERMISE PAR LA LOI, NOUS DÉCLINONS TOUTE GARANTIE, Y COMPRIS NOTAMMENT LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON.",
      s7Title: "7. Limitation de responsabilité",
      s7Text: "EN AUCUN CAS YT PLAYLIST CAL, SES CRÉATEURS, MAINTENEURS OU FOURNISSEURS D'HÉBERGEMENT NE POURRONT ÊTRE TENUS RESPONSABLES DE TOUT DOMMAGE DIRECT, INDIRECT, ACCESSOIRE OU CONSÉCUTIF RÉSULTANT DE :",
      s7Li1: "Votre utilisation ou impossibilité d'utiliser ce site web ou ses outils de calcul ;",
      s7Li2: "Toute inexactitude, erreur, omission ou retard dans les résultats de durée, horaires de visionnage ou métadonnées ;",
      s7Li3: "Toute décision prise ou action entreprise sur la base des estimations produites par ce calculateur ;",
      s7Li4: "Tout accès non autorisé, panne technique, indisponibilité de serveur ou interruption de service.",
      s7Outro: "Votre seul et unique recours en cas d'insatisfaction concernant le site ou ses services est de cesser toute utilisation de l'outil.",
      s8Title: "8. Révisions et modifications",
      s8Text: "Nous pouvons modifier ou réviser cet Avis de non-responsabilité à tout moment et sans préavis. Toute révision entrera en vigueur dès sa mise en ligne sur cette page web.",
      s9Title: "9. Contact et questions",
      s9Text: "Pour toute question ou remarque concernant cet Avis de non-responsabilité ou le fonctionnement de l'outil, veuillez nous contacter via notre page Contact."
    }
  }
};

// -------------------------------------------------------------
// GERMAN (de)
// -------------------------------------------------------------
const de = {
  nav: {
    tools: "Alle Tools",
    faq: "FAQ"
  },
  calculator: {
    statCount: "Videos",
    liveVideo: "Live-Video"
  },
  howItWorks: {
    supportedBadge: "Unterstützte Formate",
    supportedTitle: "Welche YouTube-Links werden unterstützt?",
    supportedDesc: "Unser Analysetool unterstützt präzise Standard-Playlist-Links, Videos mit Listen-Parameter, Kurzlinks (youtu.be) und direkte Playlist-IDs."
  },
  faq: {
    badge: "Häufig gestellte Fragen"
  },
  footer: {
    colTools: "Rechner-Tools",
    toolsTitle: "Rechner-Tools",
    links: {
      faq: "FAQ"
    }
  },
  pages: {
    tools: {
      breadcrumb: "Alle Tools",
      title: "Alle YouTube Playlist Rechner-Tools"
    },
    common: {
      faq: "Häufig gestellte Fragen"
    },
    faqDetailed: {
      breadcrumb: "Häufig gestellte Fragen"
    },
    speed2xDetail: {
      colOriginal: "Original (1.0x)"
    },
    privacyDetail: {
      intro: "YT Playlist Cal („wir“, „unser“, „das Tool“) ist eine unabhängige Online-Anwendung zur Berechnung der Gesamtlänge und Wiedergabezeit von YouTube-Playlists. Diese Datenschutzerklärung erläutert, welche Daten bei der Nutzung des Tools verarbeitet werden, wie sie verwendet werden und wie wir Ihre Privatsphäre schützen.",
      s1Title: "1. Daten, die wir verarbeiten",
      s1P1Title: "YouTube-URLs",
      s1P1Text: "Wenn Sie eine YouTube-URL zur Berechnung eingeben, wird diese URL an unseren Server übermittelt, um authentifizierte Anfragen an die YouTube Data API v3 zu stellen. Wir speichern oder protokollieren die eingegebenen YouTube-URLs nicht dauerhaft; sie werden nur im temporären flüchtigen Arbeitsspeicher gehalten, um das Ergebnis zu berechnen.",
      s1P2Title: "YouTube-API-Schlüssel (Optional)",
      s1P2Text: "Wenn Sie in den erweiterten Optionen Ihren eigenen YouTube-API-Schlüssel angeben, wird dieser über eine sichere HTTPS-Verbindung an unseren Server übertragen und ausschließlich zur Ausführung Ihrer Berechnungen unter Ihrem eigenen Google Cloud-Kontingent verwendet. Wir speichern Ihren API-Schlüssel niemals in Datenbanken oder auf permanentem Speicher.",
      s1P3Title: "Nutzungsanalysen",
      s1P3Text: "Wir verwenden datenschutzfreundliche Analysetools, um allgemeine Nutzungsmuster wie Seitenaufrufe, Tool-Nutzung und aggregierte Fehlermeldungen zu verstehen. Wir setzen keine invasiven Tracking-Cookies ein und erfassen keine personenbezogenen Daten (PII).",
      s1P4Title: "Lokaler Speicher (Local Storage)",
      s1P4Text: "Wir nutzen den lokalen Speicher (localStorage) Ihres Browsers ausschließlich, um Ihre Einstellungen für den Dunkel-/Hellmodus sowie die Sprachauswahl zwischen Ihren Besuchen zu speichern. Diese Daten verlassen niemals Ihren Browser.",
      s1P5Title: "Server-Protokolle",
      s1P5Text: "Unser Hosting-Dienstleister (Cloudflare) kann Server-Zugriffsprotokolle einschließlich IP-Adressen und Anfragemetadaten zur Netzwerksicherheit, DDoS-Abwehr und Systemüberwachung führen.",
      s2Title: "2. Cookies",
      s2Text: "YT Playlist Cal setzt keine Cookies zu Tracking- oder Werbezwecken. Wir setzen keine Tracking-Cookies von Drittanbietern ein. Rein technische Sitzungscookies können von unserer Edge-Hosting-Infrastruktur (Cloudflare) verwendet werden, um schädlichen Datenverkehr abzuwehren und Missbrauch zu verhindern.",
      s3Title: "3. Dienste von Drittanbietern",
      s3Text1: "YouTube Data API v3: Wir nutzen die YouTube Data API, um Playlist- und Videometadaten abzurufen. Ihre Anfragen unterliegen den YouTube-Nutzungsbedingungen und der Google-Datenschutzerklärung.",
      s3Text2: "Cloudflare: Unsere Website wird über Cloudflare gehostet und geschützt. Cloudflare verarbeitet Anfragemetadaten zur Gewährleistung der IT-Sicherheit und zur Leistungsoptimierung am Netzwerkrand.",
      s3Text3: "Schriftarten-Einbindung: Wir nutzen Bunny Fonts (eine DSGVO-konforme Alternative zu Google Fonts) zum Laden der Inter-Schriftart, ohne IP-Adressen der Nutzer zu protokollieren oder Tracking-Mechanismen einzusetzen.",
      s4Title: "4. Werbung",
      s4Text: "Die Website kann Werbeanzeigen über Google AdSense oder vergleichbare Werbenetzwerke einblenden. Werbenetzwerke können nicht-personalisierte Cookies oder Anfrage-Identifikatoren gemäß geltendem Recht und Nutzereinwilligung verwenden.",
      s5Title: "5. Schutz der Privatsphäre von Kindern",
      s5Text: "YT Playlist Cal richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Sollten Sie feststellen, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns bitte zur umgehenden Löschung.",
      s6Title: "6. Ihre Rechte",
      s6Text: "Da wir über die flüchtige Anfrageverarbeitung hinaus keine personenbezogenen Daten erfassen oder speichern, liegen uns in der Regel keine identifizierbaren Datensätze zu Ihrer Person vor. Bei Fragen zu Ihren Rechten nach der DSGVO wenden Sie sich bitte an uns.",
      s7Title: "7. Änderungen dieser Erklärung",
      s7Text: "Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Änderungen werden mit einem aktualisierten Datum oben auf dieser Seite ausgewiesen. Durch die fortgesetzte Nutzung der Website nach Änderungen erklären Sie sich mit der aktualisierten Erklärung einverstanden.",
      s8Title: "8. Kontakt",
      s8Text: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, nutzen Sie bitte unsere Kontaktseite."
    },
    termsDetail: {
      summary: "Zusammenfassung: Durch die Nutzung von YT Playlist Cal erklären Sie sich mit diesen Bedingungen, unserer Datenschutzerklärung und unserem Haftungsausschluss einverstanden. Dies ist ein kostenloses, unabhängiges Werkzeug zur Schätzung der Dauer von YouTube-Playlists.",
      s1Title: "1. Annahme der Bedingungen",
      s1Text: "Durch den Zugriff auf oder die Nutzung von YT Playlist Cal („der Dienst“, „die Website“, „wir“ oder „uns“), erreichbar über diese Webdomäne, stimmen Sie diesen Nutzungsbedingungen verbindlich zu. Wenn Sie mit Teilen dieser Bedingungen nicht einverstanden sind, müssen Sie die Nutzung des Dienstes unverzüglich einstellen.",
      s2Title: "2. Beschreibung des Dienstes",
      s2Text1: "YT Playlist Cal stellt eine kostenlose, webbasierte Berechnungssuite bereit, um öffentliche YouTube-Playlists zu analysieren, kumulierte Gesamtlaufzeiten zu berechnen, Wiedergabezeiten bei verschiedenen Geschwindigkeiten (1.25x, 1.5x, 1.75x, 2.0x) zu prognostizieren und Lernpläne zu erstellen.",
      s2Text2: "Der Dienst wird völlig kostenlos zu rein informativen, bildenden und persönlichen Planungszwecken bereitgestellt.",
      s3Title: "3. YouTube-API & Bedingungen Dritter",
      s3Text: "YT Playlist Cal greift auf die YouTube Data API v3 zu, um Metadaten, Videotitel und Laufzeiten abzurufen. Bei der Nutzung dieses Dienstes:",
      s3Li1: "Sind Sie an die Nutzungsbedingungen von YouTube gebunden.",
      s3Li2: "Werden YouTube-Daten in Übereinstimmung mit der Google-Datenschutzerklärung verarbeitet.",
      s3Li3: "Haben wir keinen Einfluss auf die YouTube-Server, API-Kontingente, Rate-Limits oder die Richtigkeit der Metadaten.",
      s4Title: "4. Richtlinie für zulässige Nutzung",
      s4Text: "Sie verpflichten sich, YT Playlist Cal nur für rechtmäßige Zwecke zu nutzen. Sie verpflichten sich insbesondere dazu:",
      s4Li1: "Keine übermäßigen automatisierten Anfragen, Bot-Abfragen oder hochfrequenten API-Aufrufe zu senden, die unsere Infrastruktur oder die YouTube-API überlasten oder beeinträchtigen.",
      s4Li2: "Nicht zu versuchen, Ratenbegrenzungen, Sicherheitskontrollen oder Zugriffsbeschränkungen zu umgehen, zurückzuentwickeln oder zu manipulieren.",
      s4Li3: "Die Website nicht zur Übermittlung rechtswidriger, missbräuchlicher oder schädlicher Eingaben zu verwenden.",
      s4Li4: "Keine Identitäten vorzutäuschen oder unbefugten Zugriff auf unsere Hosting-Konten oder Serverumgebungen zu versuchen.",
      s4Outro: "Wir behalten uns das Recht vor, IP-Adressen vorübergehend oder dauerhaft zu sperren, die gegen diese Richtlinien verstoßen.",
      s5Title: "5. Vom Benutzer bereitgestellte API-Schlüssel (Optional)",
      s5Text: "Fortgeschrittene Nutzer können optional ihren eigenen YouTube Data API v3-Schlüssel in den erweiterten Optionen angeben:",
      s5Li1: "Ihr API-Schlüssel wird über sicheres HTTPS direkt an unseren Server übertragen und ausschließlich zur Ausführung Ihrer aktuellen Berechnung genutzt.",
      s5Li2: "Wir speichern, protokollieren oder teilen Ihren API-Schlüssel zu keinem Zeitpunkt mit Dritten.",
      s5Li3: "Sie bleiben vollumfänglich verantwortlich für Ihr Google Cloud-Projekt, dessen Sicherheit und den Kontingentverbrauch.",
      s6Title: "6. Geistiges Eigentum & Marken",
      s6Text1: "YouTube™, das YouTube-Logo und zugehörige Marken sind eingetragene Marken von Google LLC. YT Playlist Cal ist ein unabhängiges Tool und wird weder von Google LLC gesponsert noch unterstützt.",
      s6Text2: "Der Quellcode der Website, das visuelle Design, die Wort-Bild-Marke („Chrono Play“) und alle redaktionellen Texte sind geistiges Eigentum von YT Playlist Cal und urheberrechtlich geschützt.",
      s7Title: "7. Berechnungsgenauigkeit & Haftungsausschluss",
      s7Text: "Alle Berechnungen, Gesamtlaufzeiten, Zeitersparnisse bei höheren Geschwindigkeiten und Zeitpläne werden „wie besehen“ für Richtwerte bereitgestellt. Abweichungen können entstehen durch:",
      s7Li1: "Nicht verfügbare Videos (private, gelöschte, altersbeschränkte oder länderspezifisch gesperrte Videos melden 0 Sekunden).",
      s7Li2: "Laufende Livestreams oder Premieren ohne feste Laufzeit-Metadaten.",
      s7Li3: "Rundungsdifferenzen in den ISO 8601-Dauerzeitstempeln von YouTube.",
      s7Li4: "Praktische Wiedergabevariablen (Pufferung, Werbung, Browsertoleranzen).",
      s7Outro: "Weitere Einzelheiten entnehmen Sie bitte unserem ausführlichen Haftungsausschluss.",
      s8Title: "8. Haftungsbeschränkung",
      s8Text: "Soweit gesetzlich zulässig, haften YT Playlist Cal und seine Betreiber nicht für direkte, indirekte oder Folgeschäden, die aus der Nutzung oder Unmöglichkeit der Nutzung dieses Dienstes entstehen.",
      s9Title: "9. Änderungen der Bedingungen",
      s9Text: "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Änderungen treten mit der Veröffentlichung in Kraft.",
      s10Title: "10. Kontaktinformationen",
      s10Text: "Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte über unsere Kontaktseite an uns."
    },
    disclaimerDetail: {
      summary: "Zusammenfassung: YT Playlist Cal ist ein unabhängiges, kostenloses Hilfswerkzeug. Wir stehen in keiner geschäftlichen Beziehung zu YouTube oder Google LLC. Alle Berechnungen und Schätzungen erfolgen ohne Gewähr zu reinen Planungszwecken.",
      s1Title: "1. Markenrechte und Unabhängigkeit",
      s1Text1: "YouTube™, das YouTube-Logo und zugehörige Markenzeichen sind eingetragene Marken von Google LLC. Alle auf dieser Website genannten Marken gehören den jeweiligen Inhabern.",
      s1Text2: "YT Playlist Cal ist eine unabhängige Webanwendung und steht in keiner Verbindung zu YouTube, Google LLC oder verbundenen Unternehmen.",
      s2Title: "2. Art des Werkzeugs & Informationszweck",
      s2Text1: "Die von YT Playlist Cal bereitgestellten Berechnungen, Schätzungen und Zeitplaner dienen ausschließlich persönlichen, informativen und planenden Zwecken.",
      s2Text2: "Die Ergebnisse stellen keine offizielle Bestätigung oder vertraglich verbindliche Laufzeitmessung durch YouTube dar.",
      s3Title: "3. Genauigkeit und Vollständigkeit der Berechnungen",
      s3Text1: "Obwohl wir höchste mathematische Sorgfalt anwenden, basieren alle Berechnungen vollständig auf den von der YouTube Data API v3 gelieferten Daten.",
      s3Text2: "Abweichungen können durch Faktoren außerhalb unseres Einflussbereichs entstehen, darunter:",
      s3Li1: "Nicht verfügbare Videos: Private, gelöschte oder gesperrte Videos liefern keine regulären Laufzeitangaben.",
      s3Li2: "Livestreams und Premieren: Laufende Übertragungen besitzen keine endgültige Dauer bis zum Abschluss der Archivierung.",
      s3Li3: "Dynamische Änderungen: Von Erstellern zwischenzeitlich geänderte Playlists können abweichende Videozahlen aufweisen.",
      s3Li4: "Geschwindigkeitsberechnungen: Mathematische Divisionen berücksichtigen keine browserspezifischen Wiedergabeverzögerungen.",
      s3Li5: "API-Metadaten: YouTube gibt Laufzeiten im ISO 8601-Format an (z. B. PT1H23M45S). Rundungsdifferenzen können sich bei umfangreichen Playlists aufsummieren.",
      s4Title: "4. Drittanbieter-Dienste & API-Nutzung",
      s4Text: "YT Playlist Cal nutzt die YouTube Data API v3 zum Abruf öffentlicher Daten. Durch die Nutzung erkennen Sie an:",
      s4Li1: "Berechnungsanfragen unterliegen den Nutzungsbedingungen von YouTube und den Google-Datenschutzbestimmungen.",
      s4Li2: "Die Verfügbarkeit hängt von YouTube-API-Kontingenten und Serverzuständen ab. Ein unterbrechungsfreier Betrieb kann nicht garantiert werden.",
      s4Li3: "Freiwillig eingegebene persönliche API-Schlüssel werden ausschließlich für Ihre Berechnungen genutzt und niemals auf Servern gespeichert.",
      s5Title: "5. Externe Links",
      s5Text: "YT Playlist Cal kann Links zu externen Websites Dritter enthalten. Wir übernehmen keine Verantwortung für die Inhalte externer Webseiten.",
      s6Title: "6. Gewährleistungsausschluss",
      s6Text1: "YT PLAYLIST CAL UND ALLE ENTHALTENEN RECHNER, FUNKTIONEN UND INHALTE WERDEN „WIE BESEHEN“ UND „WIE VERFÜGBAR“ OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG BEREITGESTELLT.",
      s6Text2: "SOWEIT GESETZLICH ZULÄSSIG, SCHLIESSEN WIR JEGLICHE GEWÄHRLEISTUNG FÜR MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG VON RECHTEN AUS.",
      s7Title: "7. Haftungsbeschränkung",
      s7Text: "IN KEINEM FALL HAFTEN DIE BETREIBER VON YT PLAYLIST CAL FÜR DIREKTE, INDIREKTE ODER FOLGESCHÄDEN AUS DER NUTZUNG DIESES TOOLS.",
      s7Li1: "Nutzung oder Unmöglichkeit der Nutzung dieser Website oder ihrer Berechnungstools;",
      s7Li2: "Ungenauigkeiten, Fehler oder Verzögerungen bei Laufzeitangaben oder Zeitplänen;",
      s7Li3: "Entscheidungen, die im Vertrauen auf die Ausgaben des Rechners getroffen wurden;",
      s7Li4: "Technische Ausfälle, Serverausfallzeiten oder Dienstunterbrechungen.",
      s7Outro: "Ihr einziges Rechtsmittel bei Unzufriedenheit besteht in der Einstellung der Nutzung des Dienstes.",
      s8Title: "8. Aktualisierungen",
      s8Text: "Wir können diesen Haftungsausschluss jederzeit ohne vorherige Ankündigung aktualisieren.",
      s9Title: "9. Kontakt",
      s9Text: "Bei Fragen zu diesem Haftungsausschluss nutzen Sie bitte unsere Kontaktseite."
    }
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 Stunden, 28 Minuten, 45 Sekunden",
    sampleCount: "42 Videos",
    sampleAvg: "20 Min. 41 Sek.",
    sampleShortest: "Einführung — 3 Min. 12 Sek.",
    sampleLongest: "Vertiefung — 1 Std. 05 Min. 20 Sek.",
    sampleAt15x: "9 Std. 39 Min. 10 Sek.",
    sampleAt2x: "7 Std. 14 Min. 22 Sek."
  }
};

// -------------------------------------------------------------
// HINDI (hi)
// -------------------------------------------------------------
const hi = {
  howItWorks: {
    supportedBadge: "समर्थित प्रारूप",
    supportedTitle: "कौन से YouTube लिंक समर्थित हैं?",
    supportedDesc: "हमारा विश्लेषक मानक प्लेलिस्ट लिंक, सूची पैरामीटर वाले वीडियो, संक्षिप्त लिंक (youtu.be) और सीधे प्लेलिस्ट आईडी को सटीकता से संसाधित करता है।"
  },
  faq: {
    badge: "अक्सर पूछे जाने वाले प्रश्न"
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 घंटे, 28 मिनट, 45 सेकंड",
    sampleCount: "42 वीडियो",
    sampleAvg: "20 मिनट 41 सेकंड",
    sampleShortest: "परिचय — 3 मिनट 12 सेकंड",
    sampleLongest: "विस्तृत पाठ — 1 घंटा 05 मिनट 20 सेकंड",
    sampleAt15x: "9 घंटे 39 मिनट 10 सेकंड",
    sampleAt2x: "7 घंटे 14 मिनट 22 सेकंड"
  },
  pages: {
    contact: {
      formEmailPlaceholder: "aapka.email@example.com"
    },
    common: {
      faq: "अक्सर पूछे जाने वाले प्रश्न"
    },
    faqDetailed: {
      breadcrumb: "अक्सर पूछे जाने वाले प्रश्न"
    },
    speed2xDetail: {
      colOriginal: "मूल (1.0x)"
    },
    privacyDetail: {
      intro: "YT Playlist Cal (\"हम\", \"हमारा\", \"यह टूल\") एक स्वतंत्र उपयोगिता वेबसाइट है जो YouTube प्लेलिस्ट की कुल अवधि और देखने के समय की गणना करती है। यह गोपनीयता नीति बताती है कि जब आप इस टूल का उपयोग करते हैं तो हम क्या जानकारी संसाधित करते हैं, इसका उपयोग कैसे किया जाता है और हम आपकी गोपनीयता की रक्षा कैसे करते हैं।",
      s1Title: "1. जानकारी जिसे हम संसाधित करते हैं",
      s1P1Title: "YouTube URL",
      s1P1Text: "जब आप गणना के लिए कोई YouTube URL सबमिट करते हैं, तो वह URL हमारे सर्वर पर भेजा जाता है, जो इसका उपयोग YouTube Data API v3 से सुरक्षित अनुरोध करने के लिए करता है। हम आपके द्वारा सबमिट किए गए YouTube URL को आपके अनुरोध का उत्तर देने के लिए आवश्यक अस्थायी मेमोरी कैश के अलावा संग्रहीत या साझा नहीं करते हैं।",
      s1P2Title: "YouTube API कुंजी (वैकल्पिक)",
      s1P2Text: "यदि आप उन्नत विकल्प अनुभाग में अपनी स्वयं की YouTube API कुंजी प्रदान करते हैं, तो इसे केवल आपके Google Cloud कोटे के तहत गणना अनुरोधों को अधिकृत करने के लिए HTTPS के माध्यम से हमारे सर्वर पर प्रेषित किया जाता है। हम आपकी API कुंजी को कभी भी डेटाबेस या स्थायी सर्वर मेमोरी में सहेजते नहीं हैं।",
      s1P3Title: "उपयोग विश्लेषण",
      s1P3Text: "हम सामान्य उपयोग प्रवृत्तियों जैसे कि पृष्ठ विज़िट, टूल का उपयोग और तकनीकी त्रुटियों को समझने के लिए गोपनीयता-अनुकूल विश्लेषण का उपयोग कर सकते हैं। हम आक्रामक ट्रैकिंग कुकीज़ का उपयोग नहीं करते हैं और व्यक्तिगत पहचान योग्य जानकारी (PII) एकत्र नहीं करते हैं।",
      s1P4Title: "स्थानीय संग्रहण (Local Storage)",
      s1P4Text: "हम आपकी विज़िट के बीच डार्क/लाइट मोड प्राथमिकता और भाषा चयन को याद रखने के लिए केवल आपके ब्राउज़र के localStorage का उपयोग करते हैं। यह डेटा कभी भी आपके ब्राउज़र से बाहर नहीं जाता है।",
      s1P5Title: "सर्वर लॉग",
      s1P5Text: "हमारा होस्टिंग प्रदाता (Cloudflare) सुरक्षा, DDoS हमलों की रोकथाम और नेटवर्क प्रदर्शन की निगरानी के लिए IP पते और अनुरोध मेटाडेटा सहित सर्वर एक्सेस लॉग बनाए रख सकता है।",
      s2Title: "2. कुकीज़",
      s2Text: "YT Playlist Cal ट्रैकिंग या विज्ञापन उद्देश्यों के लिए कुकीज़ सेट नहीं करता है। हम किसी भी तृतीय-पक्ष ट्रैकिंग कुकीज़ का उपयोग नहीं करते हैं। हानिकारक ट्रैफ़िक को रोकने और सेवा सुरक्षा बनाए रखने के लिए हमारे होस्टिंग नेटवर्क (Cloudflare) द्वारा केवल तकनीकी सुरक्षा कुकीज़ का उपयोग किया जा सकता है।",
      s3Title: "3. तृतीय-पक्ष सेवाएँ",
      s3Text1: "YouTube Data API v3: हम प्लेलिस्ट और वीडियो मेटाडेटा प्राप्त करने के लिए YouTube Data API का उपयोग करते हैं। आपके अनुरोध YouTube की सेवा की शर्तों और Google की गोपनीयता नीति के अधीन हैं।",
      s3Text2: "Cloudflare: हमारी वेबसाइट Cloudflare के माध्यम से होस्ट और सुरक्षित की गई है, जो सुरक्षा और प्रदर्शन के लिए अनुरोध मेटाडेटा संसाधित कर सकती है।",
      s3Text3: "फ़ॉन्ट लोडिंग: हम उपयोगकर्ताओं के IP पते को रिकॉर्ड किए बिना Inter टाइपफ़ेस लोड करने के लिए Bunny Fonts (Google Fonts का GDPR-अनुरूप विकल्प) का उपयोग करते हैं।",
      s4Title: "4. विज्ञापन",
      s4Text: "वेबसाइट Google AdSense या समकक्ष विज्ञापन नेटवर्क के माध्यम से विज्ञापन प्रदर्शित कर सकती है। विज्ञापन नेटवर्क लागू कानूनों और उपयोगकर्ता सहमति के अनुसार गैर-व्यक्तिगत कुकीज़ का उपयोग कर सकते हैं।",
      s5Title: "5. बच्चों की गोपनीयता",
      s5Text: "YT Playlist Cal 13 वर्ष से कम आयु के बच्चों के लिए निर्देशित नहीं है। हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। यदि आपको लगता है कि किसी बच्चे ने हमें जानकारी प्रदान की है, तो कृपया हटाने के लिए हमसे संपर्क करें।",
      s6Title: "6. आपके अधिकार",
      s6Text: "चूंकि हम अस्थायी अनुरोध प्रसंस्करण से परे व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते हैं, इसलिए आमतौर पर हमारे पास आपसे जुड़ा कोई पहचान योग्य रिकॉर्ड नहीं होता है। यदि आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।",
      s7Title: "7. नीति में परिवर्तन",
      s7Text: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। इस पृष्ठ के शीर्ष पर नई तिथि के साथ परिवर्तन परिलक्षित होंगे। परिवर्तनों के बाद साइट का निरंतर उपयोग नई नीति की आपकी स्वीकृति माना जाएगा।",
      s8Title: "8. संपर्क करें",
      s8Text: "यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमारे संपर्क पृष्ठ का उपयोग करें।"
    },
    termsDetail: {
      summary: "सारांश: YT Playlist Cal का उपयोग करके, आप इन शर्तों, हमारी गोपनीयता नीति और हमारे अस्वीकरण से सहमत होते हैं। यह YouTube प्लेलिस्ट की अवधि का अनुमान लगाने के लिए एक निःशुल्क, स्वतंत्र टूल है।",
      s1Title: "1. शर्तों की स्वीकृति",
      s1Text: "इस वेब डोमेन के माध्यम से सुलभ YT Playlist Cal (\"सेवा\", \"वेबसाइट\", \"हम\") का उपयोग करके, आप इन सेवा की शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप इन शर्तों से असहमत हैं, तो कृपया सेवा का उपयोग तुरंत बंद कर दें।",
      s2Title: "2. सेवा का विवरण",
      s2Text1: "YT Playlist Cal सार्वजनिक YouTube प्लेलिस्ट का विश्लेषण करने, कुल अवधि की गणना करने, विभिन्न प्लेबैक गति (1.25x, 1.5x, 1.75x, 2.0x) पर देखने के समय का अनुमान लगाने और अध्ययन योजनाओं को व्यवस्थित करने के लिए एक निःशुल्क वेब टूल प्रदान करता है।",
      s2Text2: "यह सेवा पूरी तरह से सूचनात्मक, शैक्षिक और व्यक्तिगत योजना उद्देश्यों के लिए निःशुल्क प्रदान की जाती है।",
      s3Title: "3. YouTube API और तृतीय-पक्ष शर्तें",
      s3Text: "YT Playlist Cal मेटाडेटा और अवधि प्राप्त करने के लिए YouTube Data API v3 पर निर्भर करता है। इस सेवा का उपयोग करके:",
      s3Li1: "आप YouTube की सेवा की शर्तों से बाध्य हैं।",
      s3Li2: "YouTube डेटा Google गोपनीयता नीति के अनुसार संसाधित किया जाता है।",
      s3Li3: "हमारा YouTube के सर्वर, API कोटा सीमा या मेटाडेटा सटीकता पर कोई नियंत्रण नहीं है।",
      s4Title: "4. स्वीकार्य उपयोग नीति",
      s4Text: "आप YT Playlist Cal का उपयोग केवल वैध उद्देश्यों के लिए करने के लिए सहमत हैं। आप सहमत हैं कि आप:",
      s4Li1: "अत्यधिक स्वचालित अनुरोध, बॉट क्वेरीज़ या उच्च-आवृत्ति API कॉल नहीं भेजेंगे जो हमारे बुनियादी ढांचे या YouTube API को नुकसान पहुँचाएँ।",
      s4Li2: "सुरक्षा नियंत्रणों, दर सीमाओं या पहुँच प्रतिबंधों को बायपास करने या रिवर्स-इंजीनियरिंग करने का प्रयास नहीं करेंगे।",
      s4Li3: "अपमानजनक, अवैध या दुर्भावनापूर्ण इनपुट सबमिट करने के लिए वेबसाइट का उपयोग नहीं करेंगे।",
      s4Li4: "गलत पहचान प्रस्तुत नहीं करेंगे या अनधिकृत पहुँच प्राप्त करने का प्रयास नहीं करेंगे।",
      s4Outro: "हम इन नियमों का उल्लंघन करने वाले IP पतों को अस्थायी या स्थायी रूप से अवरुद्ध करने का अधिकार सुरक्षित रखते हैं।",
      s5Title: "5. उपयोगकर्ता द्वारा प्रदान की गई API कुंजी (वैकल्पिक)",
      s5Text: "उन्नत उपयोगकर्ता वैकल्पिक रूप से अपनी व्यक्तिगत YouTube Data API v3 कुंजी प्रदान कर सकते हैं:",
      s5Li1: "आपकी API कुंजी सीधे सुरक्षित HTTPS के माध्यम से भेजी जाती है और केवल आपकी लाइव गणना के लिए उपयोग की जाती है।",
      s5Li2: "हम आपकी API कुंजी को कभी भी संग्रहीत, लॉग या किसी तीसरे पक्ष के साथ साझा नहीं करते हैं।",
      s5Li3: "आप अपने Google Cloud प्रोजेक्ट, उसकी सुरक्षा और कोटा उपयोग के लिए पूरी तरह जिम्मेदार रहते हैं।",
      s6Title: "6. बौद्धिक संपदा और ट्रेडमार्क",
      s6Text1: "YouTube™, YouTube लोगो और संबंधित ब्रांड Google LLC के पंजीकृत ट्रेडमार्क हैं। YT Playlist Cal एक स्वतंत्र टूल है और Google LLC द्वारा समर्थित या संबद्ध नहीं है।",
      s6Text2: "वेबसाइट का मूल स्रोत कोड, दृश्य पहचान, लोगो (\"Chrono Play\") और व्याख्यात्मक सामग्री YT Playlist Cal की बौद्धिक संपदा हैं और कॉपीराइट कानूनों द्वारा संरक्षित हैं।",
      s7Title: "7. गणना सटीकता और अस्वीकरण",
      s7Text: "सभी गणनाएँ, अवधियाँ और समय की बचत केवल व्यावहारिक अनुमानों के लिए \"जैसी है\" के आधार पर प्रदान की जाती हैं। इनके कारण अंतर हो सकते हैं:",
      s7Li1: "अनुपलब्ध वीडियो (निजी, हटाए गए, आयु-प्रतिबंधित या क्षेत्र-अवरुद्ध वीडियो 0 सेकंड की रिपोर्ट करते हैं)।",
      s7Li2: "चल रहे लाइव स्ट्रीम या प्रीमियर जिनमें निश्चित अवधि का मेटाडेटा नहीं होता है।",
      s7Li3: "YouTube के ISO 8601 अवधि प्रारूप में सेकंडों का राउंडिंग अंतर।",
      s7Li4: "वास्तविक प्लेबैक चर (बफरिंग, विज्ञापन या ब्राउज़र प्लेबैक गति सहनशीलता)।",
      s7Outro: "अधिक जानकारी के लिए कृपया हमारे विस्तृत अस्वीकरण की समीक्षा करें।",
      s8Title: "8. देयता की सीमा",
      s8Text: "लागू कानून द्वारा अनुमत अधिकतम सीमा तक, YT Playlist Cal और इसके संचालक इस सेवा के उपयोग या अनुपलब्धता से होने वाले किसी भी नुकसान के लिए उत्तरदायी नहीं होंगे।",
      s9Title: "9. शर्तों में संशोधन",
      s9Text: "हम बिना किसी पूर्व सूचना के इन सेवा की शर्तों को संशोधित कर सकते हैं। कोई भी संशोधन इस पृष्ठ पर पोस्ट होते ही प्रभावी हो जाएगा।",
      s10Title: "10. संपर्क जानकारी",
      s10Text: "यदि इन सेवा की शर्तों के संबंध में आपके कोई प्रश्न हैं, तो कृपया हमारे संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें।"
    },
    disclaimerDetail: {
      summary: "सारांश: YT Playlist Cal एक स्वतंत्र, निःशुल्क उपयोगिता टूल है। हम YouTube या Google LLC से संबद्ध, अधिकृत या समर्थित नहीं हैं। सभी गणनाएँ और अनुमान केवल सूचनात्मक योजना के उद्देश्यों के लिए प्रदान किए जाते हैं।",
      s1Title: "1. ट्रेडमार्क और संबद्धता",
      s1Text1: "YouTube™, YouTube लोगो और संबंधित चिह्न Google LLC के पंजीकृत ट्रेडमार्क हैं। इस वेबसाइट पर संदर्भित सभी ट्रेडमार्क उनके संबंधित स्वामियों के हैं।",
      s1Text2: "YT Playlist Cal एक स्वतंत्र वेब एप्लिकेशन है और YouTube, Google LLC या उनकी किसी भी सहायक कंपनी के साथ आधिकारिक रूप से जुड़ा हुआ नहीं है।",
      s2Title: "2. टूल की प्रकृति और केवल सूचनात्मक उद्देश्य",
      s2Text1: "YT Playlist Cal द्वारा प्रदान की जाने वाली सेवाएँ, गणनाएँ, अवधियाँ और देखने के कार्यक्रम केवल मनोरंजन, शिक्षा और सामान्य सूचनात्मक सुविधा के लिए हैं।",
      s2Text2: "हमारे कैलकुलेटर द्वारा उत्पन्न परिणामों को YouTube द्वारा आधिकारिक ऑडिट या अनुबंधात्मक प्रमाणीकरण नहीं माना जाना चाहिए।",
      s3Title: "3. गणनाओं की सटीकता और पूर्णता",
      s3Text1: "यद्यपि हम सभी गणनाओं को सटीक और गणितीय रूप से सही रखने का प्रयास करते हैं, लेकिन गणनाएँ पूरी तरह से YouTube Data API v3 द्वारा लौटाए गए वीडियो मेटाडेटा पर निर्भर करती हैं।",
      s3Text2: "हमारे नियंत्रण से परे कारकों के कारण कुल अवधि या वीडियो संख्या में अंतर हो सकता है, जिनमें शामिल हैं:",
      s3Li1: "अनुपलब्ध वीडियो: निजी, हटाए गए या भौगोलिक रूप से अवरुद्ध वीडियो वैध अवधि प्रदान नहीं करते हैं।",
      s3Li2: "लाइव स्ट्रीम और प्रीमियर: सक्रिय प्रसारण तब तक अंतिम अवधि नहीं बताते जब तक वीडियो पूरी तरह संसाधित नहीं हो जाता।",
      s3Li3: "गतिशील प्लेलिस्ट अपडेट: निर्माताओं द्वारा गणना के दौरान संशोधित की गई प्लेलिस्ट में भिन्नता दिखाई दे सकती है।",
      s3Li4: "प्लेबैक गति अनुमान: गति कारकों द्वारा गणितीय विभाजन में ब्राउज़र रेंडरिंग भिन्नता शामिल नहीं होती है।",
      s3Li5: "API मेटाडेटा विसंगतियाँ: YouTube Data API ISO 8601 प्रारूप में अवधि प्रदान करता है, जिससे बड़े प्लेलिस्ट में सेकंडों का संचयी अंतर हो सकता है।",
      s4Title: "4. तृतीय-पक्ष सेवाएँ और API उपयोग",
      s4Text: "YT Playlist Cal सार्वजनिक डेटा प्राप्त करने के लिए YouTube Data API v3 पर निर्भर करता है। इस टूल का उपयोग करके, आप स्वीकार करते हैं:",
      s4Li1: "आपकी गणना अनुरोध YouTube की शर्तों और डेवलपर नीतियों द्वारा शासित होते हैं। आप YouTube की सेवा की शर्तों और Google की गोपनीयता नीति से भी सहमत हैं।",
      s4Li2: "टूल की उपलब्धता YouTube API कोटा और सर्वर स्थिति के अधीन है। हम निर्बाध सेवा की गारंटी नहीं देते हैं।",
      s4Li3: "यदि आप उन्नत सेटिंग्स में व्यक्तिगत API कुंजी का उपयोग करते हैं, तो यह केवल आपकी गणना के लिए उपयोग की जाती है और हमारे सर्वर पर कभी संग्रहीत नहीं होती है।",
      s5Title: "5. बाहरी लिंक अस्वीकरण",
      s5Text: "YT Playlist Cal में बाहरी वेबसाइटों के लिंक हो सकते हैं। हम इन बाहरी साइटों पर किसी भी जानकारी की सटीकता या विश्वसनीयता की गारंटी नहीं देते हैं।",
      s6Title: "6. \"जैसी है\" और \"जैसी उपलब्ध है\" अस्वीकरण",
      s6Text1: "YT PLAYLIST CAL और सभी सामग्री, कैलकुलेटर और सुविधाएँ बिना किसी वारंटी के \"जैसी है\" और \"जैसी उपलब्ध है\" के आधार पर प्रदान की जाती हैं।",
      s6Text2: "लागू कानून के तहत पूर्ण सीमा तक, हम किसी विशेष उद्देश्य के लिए व्यापारिकता और उपयुक्तता सहित सभी वारंटी को अस्वीकार करते हैं।",
      s7Title: "7. देयता की सीमा",
      s7Text: "किसी भी परिस्थिति में YT PLAYLIST CAL या इसके संचालक इस टूल के उपयोग से होने वाले किसी भी प्रत्यक्ष, अप्रत्यक्ष या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे।",
      s7Li1: "इस वेबसाइट या इसके टूल का आपका उपयोग या उपयोग करने में असमर्थता;",
      s7Li2: "अवधि परिणामों या मेटाडेटा में कोई अशुद्धि, त्रुटि या देरी;",
      s7Li3: "इस कैलकुलेटर के परिणामों पर भरोसा करके लिया गया कोई भी निर्णय;",
      s7Li4: "कोई भी तकनीकी विफलता, सर्वर डाउनटाइम या सेवा में रुकावट।",
      s7Outro: "साइट या इसकी सेवाओं से असंतोष के लिए आपका एकमात्र उपाय टूल का उपयोग बंद करना है।",
      s8Title: "8. संशोधन",
      s8Text: "हम बिना किसी पूर्व सूचना के इस अस्वीकरण को कभी भी संशोधित कर सकते हैं।",
      s9Title: "9. संपर्क और प्रश्न",
      s9Text: "यदि इस अस्वीकरण के बारे में आपके कोई प्रश्न हैं, तो कृपया हमारे संपर्क पृष्ठ का उपयोग करें।"
    }
  }
};

updateLocale('es', es);
updateLocale('fr', fr);
updateLocale('de', de);
updateLocale('hi', hi);
console.log('Group A (es, fr, de, hi) updated successfully!');
