// scripts/translate-it-pt.mjs
// Professional translations for Italian (it) and Portuguese (pt-BR)
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
// ITALIAN (it)
// -------------------------------------------------------------
const it = {
  nav: {
    home: "Home",
    tools: "Tutti gli strumenti",
    howItWorks: "Come funziona",
    faq: "Domande frequenti",
    about: "Chi siamo",
    contact: "Contatti"
  },
  faq: {
    badge: "Domande frequenti"
  },
  howItWorks: {
    supportedBadge: "Formati supportati",
    supportedTitle: "Quali link di YouTube sono supportati?",
    supportedDesc: "Il nostro analizzatore supporta con precisione link standard a playlist, video con parametro playlist, link brevi (youtu.be) e ID diretti di playlist."
  },
  footer: {
    desc: "Calcolatore gratuito di lunghezza e tempo di visualizzazione delle playlist di YouTube. Analizza qualsiasi playlist per scoprire la durata totale, il tempo di riproduzione a diverse velocità e statistiche dettagliate sui video.",
    notAffiliated: "Non affiliato con YouTube o Google LLC.",
    colTools: "Strumenti di calcolo",
    colResources: "Risorse",
    colCompany: "Informazioni",
    colLegal: "Legale",
    allRightsReserved: "Tutti i diritti riservati.",
    trademarkNotice: "YouTube è un marchio registrato di Google LLC. Questo strumento è un'utilità indipendente e non è affiliato con YouTube o Google.",
    links: {
      playlistCalculator: "Calcolatore Playlist YouTube",
      durationCalculator: "Calcolatore Durata Playlist",
      watchTimeCalculator: "Calcolatore Tempo di Visione",
      remainingTime: "Calcolatore Tempo Rimanente",
      watchTime15x: "Calcolatore Velocità 1.5x",
      watchTime2x: "Calcolatore Velocità 2x",
      howItWorks: "Come funziona",
      faq: "Domande frequenti",
      allTools: "Tutti gli strumenti",
      about: "Chi siamo",
      contact: "Contattaci",
      privacy: "Informativa sulla privacy",
      terms: "Termini di servizio",
      disclaimer: "Dichiarazione di non responsabilità"
    }
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 ore, 28 minuti, 45 secondi",
    sampleAvg: "20 min 41 sec",
    sampleShortest: "Introduzione — 3 min 12 sec",
    sampleLongest: "Approfondimento — 1 ora 05 min 20 sec",
    sampleAt15x: "9 ore 39 min 10 sec",
    sampleAt2x: "7 ore 14 min 22 sec"
  },
  pages: {
    about: {
      breadcrumb: "Chi siamo",
      whatWeDoTitle: "Cosa facciamo",
      whatWeDoP1: "YT Playlist Cal è uno strumento web gratuito e indipendente sviluppato per aiutare studenti, professionisti, creatori e appassionati a calcolare istantaneamente la durata totale e il tempo di visione di qualsiasi playlist di YouTube.",
      whatWeDoP2: "Che tu stia programmando una sessione di studio intensiva, pianificando un maratona video o ottimizzando il tuo tempo di apprendimento a velocità 1.25x, 1.5x, 1.75x o 2.0x, la nostra piattaforma fornisce statistiche affidabili e dettagliate sui video in pochi secondi.",
      principlesTitle: "I nostri principi guida",
      principlesAccuracy: "Precisione matematica: interroghiamo direttamente l'API YouTube Data v3 per garantire somme esatte al secondo su ogni video.",
      principlesSpeed: "Velocità ed efficienza: risultati istantanei con cache avanzata, senza attese inutili.",
      principlesPrivacy: "Privacy prima di tutto: nessun tracciamento invasivo, nessun obbligo di registrazione o salvataggio dei link inviati."
    },
    contact: {
      breadcrumb: "Contatti",
      formType: "Tipo di messaggio",
      formTypeQuestion: "Domanda generale",
      formTypeFeedback: "Feedback o suggerimento",
      formTypeBug: "Segnalazione di un problema tecnico",
      formTypeBusiness: "Richiesta commerciale o partnership",
      formMessage: "Il tuo messaggio",
      formMessagePlaceholder: "Descrivi la tua richiesta in dettaglio...",
      formSubmit: "Invia messaggio",
      infoTitle: "Informazioni di contatto",
      emailLabel: "Email diretta",
      hoursLabel: "Tempi di risposta",
      hoursValue: "Solitamente rispondiamo entro 24-48 ore lavorative.",
      faqNotice: "Hai una domanda rapida sul funzionamento dello strumento?",
      faqLink: "Consulta prima le nostre Domande frequenti."
    },
    tools: {
      breadcrumb: "Tutti gli strumenti",
      title: "Tutti gli strumenti per playlist di YouTube"
    },
    duration: {
      breadcrumb: "Calcolatore Durata",
      aboutTitle: "Informazioni sul Calcolatore di Durata",
      aboutP1: "Il Calcolatore di Durata per Playlist YouTube calcola con precisione la somma temporale cumulativa di ogni video pubblico contenuto in una playlist.",
      aboutP2: "YouTube nativamente non mostra la durata aggregata delle playlist, rendendo difficile stimare il tempo necessario per completare un corso, una guida o una serie video.",
      featuresTitle: "Funzionalità principali"
    },
    watchTime: {
      breadcrumb: "Calcolatore Tempo di Visione",
      aboutTitle: "Informazioni sul Tempo di Visione"
    },
    remainingTime: {
      breadcrumb: "Calcolatore Tempo Rimanente",
      aboutTitle: "Informazioni sul Tempo Rimanente"
    },
    speed15x: {
      breadcrumb: "Calcolatore Velocità 1.5x",
      aboutTitle: "Informazioni sulla Riproduzione a 1.5x"
    },
    speed2x: {
      breadcrumb: "Calcolatore Velocità 2x",
      aboutTitle: "Informazioni sulla Riproduzione a 2x"
    },
    terms: {
      breadcrumb: "Termini di servizio",
      lastUpdated: "Ultimo aggiornamento: 31 ottobre 2026",
      summary: "Riepilogo: L'utilizzo di YT Playlist Cal implica l'accettazione di questi termini, dell'Informativa sulla privacy e della Dichiarazione di non responsabilità."
    },
    privacy: {
      breadcrumb: "Informativa sulla privacy",
      lastUpdated: "Ultimo aggiornamento: 31 ottobre 2026",
      summary: "Rispettiamo la tua privacy. Non memorizziamo i tuoi link, non tracciamo la tua identità e non vendiamo informazioni a terzi."
    },
    disclaimer: {
      breadcrumb: "Dichiarazione di non responsabilità",
      lastUpdated: "Ultimo aggiornamento: 31 ottobre 2026",
      summary: "Riepilogo: YT Playlist Cal è uno strumento indipendente. Non siamo affiliati, sponsorizzati o approvati da YouTube o Google LLC."
    },
    error404: {
      title: "Pagina non trovata",
      desc: "La pagina che stai cercando non esiste o è stata spostata.",
      backHome: "Torna alla pagina iniziale",
      exploreTools: "Esplora tutti gli strumenti"
    },
    error500: {
      title: "Errore del server",
      desc: "Si è verificato un errore imprevisto durante l'elaborazione della richiesta.",
      backHome: "Torna alla pagina iniziale",
      retry: "Riprova",
      tryAgain: "Riprova tra qualche istante"
    },
    common: {
      calculatorBadge: "Calcolatore Online Gratuito",
      relatedTools: "Strumenti correlati",
      relatedToolsDesc: "Esplora altri calcolatori gratuiti per pianificare al meglio le tue sessioni di visione su YouTube.",
      faq: "Domande frequenti",
      faqDesc: "Risposte chiare alle domande più frequenti sul calcolo delle playlist di YouTube.",
      stillHaveQuestions: "Hai ancora dubbi o domande?",
      stillHaveQuestionsDesc: "Il nostro team di supporto è pronto ad aiutarti con qualsiasi problema o suggerimento.",
      contactUs: "Contattaci",
      needMoreHelp: "Hai bisogno di ulteriore supporto?",
      needMoreHelpDesc: "Scrivici direttamente per ricevere assistenza personalizzata.",
      backToHome: "Torna alla home",
      tryAnotherPlaylist: "Calcola un'altra playlist"
    },
    howItWorksDetail: {
      breadcrumb: "Come funziona",
      title: "Come funziona il Calcolatore di Playlist YouTube",
      subtitle: "Una guida approfondita e dettagliata su come elaboriamo i link, interroghiamo l'API di YouTube e calcoliamo tempi precisi.",
      stepsHeading: "Il processo di calcolo passo dopo passo",
      s1Title: "1. Analisi e validazione dell'URL",
      s1Detail: "Quando incolli un URL o un ID di playlist, il nostro sistema analizza la stringa per estrarre il parametro univoco della playlist (identificatore che inizia tipicamente per PL, UU, FL o RD).",
      s2Title: "2. Comunicazione sicura con l'API YouTube Data v3",
      s2Detail: "Inviamo richieste autenticate agli endpoint ufficiali dell'API YouTube Data per recuperare tutti i video contenuti nella playlist specificata.",
      s3Title: "3. Paginazione automatica per grandi playlist",
      s3Detail: "L'API di YouTube restituisce un massimo di 50 elementi per chiamata. Per le playlist che superano questa soglia, iteriamo automaticamente attraverso i token di pagina successiva fino a recuperare l'elenco completo.",
      s4Title: "4. Estrazione delle durate in formato ISO 8601",
      s4Detail: "Ogni video su YouTube riporta la propria durata secondo lo standard internazionale ISO 8601 (ad esempio PT1H23M45S). Il nostro motore converte ciascun formato in un numero esatto di secondi.",
      s5Title: "5. Somma matematica e conversione oraria",
      s5Detail: "Sommiamo tutti i secondi individuali per ricavare la durata totale e convertiamo il risultato complessivo in ore, minuti e secondi formattati chiaramente.",
      s6Title: "6. Proiezione delle velocità di riproduzione",
      s6Detail: "Calcoliamo il tempo necessario per guardare la playlist alle velocità 1.25x, 1.5x, 1.75x e 2.0x, indicando esattamente le ore e i minuti risparmiati.",
      s7Title: "7. Calcolo delle statistiche avanzate",
      s7Detail: "Generiamo metriche dettagliate tra cui la durata media dei video, il video più breve e quello più lungo della playlist.",
      speedHeading: "La matematica dietro il risparmio di tempo",
      speedIntro: "Il tempo di visione effettivo a velocità accelerata si calcola dividendo la durata totale per il fattore di moltiplicazione scelto.",
      speedFormula: "Tempo Effettivo = Durata Totale ÷ Fattore di Velocità",
      speedExample: "Ad esempio, una playlist di 10 ore riprodotta a velocità 1.5x richiede 6 ore e 40 minuti, facendoti risparmiare 3 ore e 20 minuti.",
      missingHeading: "Come gestiamo i video non disponibili",
      missingIntro: "Non tutti i video inseriti in una playlist possono essere calcolati con precisione. Ecco come trattiamo i casi particolari:",
      missing1: "Video privati o eliminati: non forniscono dati di durata all'API e vengono conteggiati come 0 secondi.",
      missing2: "Video con restrizioni geografiche o di età: potrebbero non restituire metadati completi.",
      missing3: "Live streaming in corso o premiere: non possiedono una durata fissa finché la trasmissione non è terminata ed elaborata.",
      missing4: "Limiti di quota API: se la quota pubblica giornaliera è esaurita, gli utenti possono inserire facoltativamente la propria chiave API.",
      missing5: "Errori di rete temporanei: vengono gestiti con tentativi automatici di riconnessione.",
      missingOutro: "Segnaliamo sempre chiaramente il numero di video non disponibili nel pannello dei risultati del calcolo.",
      cachingHeading: "Architettura di caching ad alte prestazioni",
      cachingDetail: "Per evitare richieste ridondanti ai server di YouTube e garantire tempi di caricamento istantanei, memorizziamo nella cache i metadati delle playlist per un periodo limitato.",
      tryCalc: "Prova subito il calcolatore con una playlist"
    },
    faqDetailed: {
      breadcrumb: "Domande frequenti",
      title: "Domande frequenti",
      subtitle: "Tutto quello che c'è da sapere sul calcolo della durata delle playlist di YouTube, impostazioni di velocità e risoluzione dei problemi.",
      generalTitle: "Domande generali",
      q1: "Come calcola la durata totale questo strumento?",
      a1: "Il nostro calcolatore interroga direttamente l'API ufficiale YouTube Data v3 per ottenere la durata esatta di ciascun video presente nella playlist, sommando ogni secondo e convertendolo in ore, minuti e secondi.",
      q2: "Questo strumento è completamente gratuito?",
      a2: "Sì, YT Playlist Cal è gratuito al 100%, senza abbonamenti, limiti nascosti o necessità di creare un account.",
      q3: "Qual è il numero massimo di video che posso calcolare?",
      a3: "Puoi calcolare playlist contenenti fino a centinaia di video. Il nostro sistema gestisce automaticamente la paginazione dell'API di YouTube per recuperare tutti i contenuti disponibili.",
      q4: "Perché la durata complessiva differisce da quella mostrata su YouTube?",
      a4: "YouTube spesso arrotonda le durate dei singoli video o non include video privati, bloccati per paese o dirette streaming non ancora elaborate.",
      q5: "Funziona anche su smartphone e tablet?",
      a5: "Certamente. Il sito è completamente responsive e ottimizzato per dispositivi mobili, tablet e schermi desktop di ogni dimensione.",
      q6: "Devo inserire le mie credenziali o effettuare il login a YouTube?",
      a6: "No, non è richiesto alcun accesso. Devi solo incollare il link pubblico della playlist per ottenere subito il risultato.",
      speedTitle: "Velocità di riproduzione e pianificazione",
      q7: "Come viene calcolato il risparmio di tempo a velocità 1.25x, 1.5x o 2x?",
      a7: "Dividiamo la durata totale in secondi per il moltiplicatore di velocità selezionato (es. durata / 1.5) e sottraiamo il risultato dalla durata originale per quantificare il tempo esatto risparmiato.",
      q8: "Cosa significa la funzione Tempo Rimanente?",
      a8: "La funzione Tempo Rimanente ti consente di indicare da quale video desideri iniziare a calcolare la playlist, escludendo i video che hai già completato.",
      q9: "Posso calcolare una porzione specifica di una playlist?",
      a9: "Sì, nelle opzioni avanzate puoi definire un intervallo di video (ad esempio dal video 5 al video 25) per conoscere la durata di quella specifica sezione.",
      techTitle: "Dettagli tecnici e risoluzione problemi",
      q10: "Cosa posso fare se ricevo un errore di quota API superata?",
      a10: "L'API pubblica di YouTube ha limiti giornalieri condivisi. Nelle opzioni avanzate puoi inserire la tua chiave gratuita YouTube Data API v3 per effettuare calcoli illimitati.",
      q11: "Come gestite i video privati o cancellati?",
      a11: "I video privati o cancellati non restituiscono metadati di durata all'API e vengono conteggiati come 0 secondi, con un avviso chiaro nel riepilogo finale.",
      q12: "I miei dati o le playlist che cerco vengono registrati?",
      a12: "No. Non conserviamo alcun registro personale né colleghiamo le playlist cercate alla tua identità. Rispettiamo rigorosamente la privacy degli utenti."
    },
    durationDetail: {
      breadcrumb: "Calcolatore Durata",
      title: "Calcolatore Durata Playlist YouTube",
      subtitle: "Calcola all'istante la durata complessiva di qualsiasi playlist di YouTube con precisione al secondo.",
      whyTitle: "Perché YouTube non mostra la durata totale delle playlist?",
      whyP: "L'interfaccia di YouTube visualizza la durata dei singoli video ma non fornisce una somma totale dell'intera playlist. Calcolare manualmente decine di video richiede tempo ed è soggetto a errori. Il nostro strumento automatizza questo processo in pochi secondi.",
      supportedTitle: "Tipi di link supportati",
      beyondTitle: "Oltre la semplice durata: statistiche dettagliate",
      ctaBtn: "Calcola la durata ora",
      badge: "Durata Playlist"
    },
    watchTimeDetail: {
      breadcrumb: "Tempo di Visione",
      title: "Calcolatore Tempo di Visione YouTube",
      subtitle: "Scopri quanto tempo effettivo impiegherai per guardare una playlist a diverse velocità di riproduzione.",
      introTitle: "Che cos'è il tempo di visione e come ottimizzarlo?",
      introP: "Il tempo di visione rappresenta la quantità reale di ore e minuti necessaria per completare una playlist. Aumentando la velocità a 1.25x o 1.5x puoi assimilare i contenuti riducendo notevolmente il tempo totale speso davanti allo schermo.",
      speedsTitle: "Confronto tra le velocità",
      plannerTitle: "Pianificatore di studio e visione",
      ctaBtn: "Calcola tempo di visione",
      badge: "Tempo di Visione"
    },
    speed15xDetail: {
      breadcrumb: "Velocità 1.5x",
      title: "Calcolatore Playlist a Velocità 1.5x",
      subtitle: "Scopri quanto tempo risparmi ascoltando o guardando la tua playlist a velocità 1.5x.",
      introTitle: "I vantaggi della riproduzione a 1.5x",
      introP: "La velocità 1.5x è considerata il punto di equilibrio ideale per corsi di programmazione, lezioni universitarie e podcast, consentendo un risparmio del 33.3% del tempo senza compromettere la comprensione.",
      statsTitle: "Statistiche di risparmio a 1.5x",
      tableTitle: "Tabella comparativa di durata",
      ctaBtn: "Calcola a 1.5x",
      badge: "Velocità 1.5x"
    },
    speed2xDetail: {
      breadcrumb: "Velocità 2x",
      title: "Calcolatore Playlist a Velocità 2x",
      subtitle: "Dimezza il tempo di visione: calcola la durata esatta di qualsiasi playlist a velocità doppia.",
      introTitle: "Quando utilizzare la velocità 2x?",
      introP: "La riproduzione a velocità 2x dimezza esattamente il tempo richiesto per completare una playlist, ideale per ripassare argomenti già noti o consultare rapidamente presentazioni e tutorial.",
      colOriginal: "Originale (1.0x)",
      colAt2x: "A velocità 2x",
      colSaved: "Tempo risparmiato",
      ctaBtn: "Calcola a 2x",
      badge: "Velocità 2x"
    },
    remainingTimeDetail: {
      breadcrumb: "Tempo Rimanente",
      title: "Calcolatore Tempo Rimanente Playlist",
      subtitle: "Calcola esattamente quanto tempo ti manca per finire una playlist partendo dal video attuale.",
      introTitle: "Non ricominciare da capo: misura il tuo progresso",
      introP: "Se hai già iniziato a guardare una playlist lunga, non serve calcolare i video già completati. Inserisci il numero del video a cui sei arrivato per conoscere il tempo residuo esatto.",
      stepTitle: "Come impostare il punto di partenza",
      ctaBtn: "Calcola tempo rimanente",
      badge: "Tempo Rimanente"
    },
    privacyDetail: {
      intro: "YT Playlist Cal (\"noi\", \"nostro\", \"lo strumento\") è un sito web indipendente di utilità che calcola la durata e i tempi di visione delle playlist di YouTube. Questa Informativa sulla privacy spiega quali informazioni elaboriamo quando utilizzi lo strumento, come vengono utilizzate e come proteggiamo la tua riservatezza.",
      s1Title: "1. Informazioni che elaboriamo",
      s1P1Title: "URL di YouTube",
      s1P1Text: "Quando invii un URL di YouTube per il calcolo, tale indirizzo viene trasmesso al nostro server che lo utilizza per effettuare richieste autenticate all'API YouTube Data v3. Non memorizziamo, registriamo né condividiamo gli URL inviati oltre la cache temporanea volatile necessaria per fornire il risultato.",
      s1P2Title: "Chiavi API YouTube (Facoltativo)",
      s1P2Text: "Se decidi di inserire la tua chiave API YouTube personale nella sezione Opzioni avanzate, essa viene inviata tramite connessione protetta HTTPS al nostro server ed utilizzata esclusivamente per autorizzare i tuoi calcoli con la tua quota Google Cloud. Non salviamo mai la tua chiave API in database o supporti di memoria permanenti.",
      s1P3Title: "Dati statistici di utilizzo",
      s1P3Text: "Possiamo utilizzare strumenti di analisi anonimi nel rispetto della privacy per comprendere tendenze d'uso aggregate quali visite alle pagine ed errori tecnici. Non utilizziamo cookie invasivi di tracciamento cross-site né raccogliamo informazioni personali identificabili (PII).",
      s1P4Title: "Archiviazione locale (Local Storage)",
      s1P4Text: "Utilizziamo il localStorage del tuo browser unicamente per ricordare le tue preferenze sulla modalità tema (chiaro/scuro) e sulla lingua selezionata tra una sessione e l'altra. Questi dati rimangono esclusivamente all'interno del tuo dispositivo.",
      s1P5Title: "Registri del server",
      s1P5Text: "Il nostro fornitore di hosting (Cloudflare) può conservare registri di accesso tecnici comprendenti indirizzi IP e metadati di rete a fini di sicurezza informatica, protezione da attacchi DDoS e monitoraggio delle prestazioni.",
      s2Title: "2. Cookie",
      s2Text: "YT Playlist Cal non imposta cookie per scopi di tracciamento comportamentale o pubblicità mirata. Possono essere utilizzati unicamente cookie tecnici dalla rete di distribuzione (Cloudflare) per filtrare il traffico nocivo e prevenire abusi.",
      s3Title: "3. Servizi di terze parti",
      s3Text1: "YouTube Data API v3: Utilizziamo l'API YouTube Data per ottenere i metadati dei video. L'utilizzo è soggetto ai Termini di servizio di YouTube e alle Norme sulla privacy di Google.",
      s3Text2: "Cloudflare: Il nostro sito è ospitato e protetto tramite Cloudflare, che può elaborare metadati di rete per la sicurezza e l'accelerazione della distribuzione dei contenuti.",
      s3Text3: "Caricamento font: Utilizziamo Bunny Fonts (un'alternativa conforme al GDPR a Google Fonts) per erogare il font Inter senza registrare indirizzi IP degli utenti.",
      s4Title: "4. Pubblicità",
      s4Text: "Il sito può mostrare annunci pubblicitari tramite Google AdSense o reti similari. Le reti pubblicitarie possono impiegare cookie non personalizzati o identificatori di richiesta in conformità con la normativa applicabile e il consenso dell'utente.",
      s5Title: "5. Privacy dei minori",
      s5Text: "YT Playlist Cal non si rivolge a minori di 13 anni. Non raccogliamo consapevolmente dati personali da minori. Qualora un minore ci avesse fornito dati personali, invitiamo a contattarci per la rimozione immediata.",
      s6Title: "6. I tuoi diritti",
      s6Text: "Poiché non conserviamo dati personali oltre la transitoria elaborazione delle richieste, generalmente non disponiamo di informazioni identificative relative alla tua persona. Per qualsiasi chiarimento sui diritti previsti dal GDPR, non esitare a contattarci.",
      s7Title: "7. Modifiche a questa informativa",
      s7Text: "Ci riserviamo il diritto di aggiornare periodicamente questa Informativa sulla privacy. Le modifiche saranno segnalate dalla data di ultimo aggiornamento in cima a questa pagina. La continuazione dell'uso del sito implica l'accettazione della versione aggiornata.",
      s8Title: "8. Contatti",
      s8Text: "Per domande o chiarimenti relativi a questa Informativa sulla privacy, puoi contattarci tramite la pagina Contatti."
    },
    termsDetail: {
      summary: "Riepilogo: Utilizzando YT Playlist Cal, accetti questi termini, l'Informativa sulla privacy e la nostra Dichiarazione di non responsabilità. Questo è uno strumento gratuito e indipendente per stimare la durata delle playlist di YouTube.",
      s1Title: "1. Accettazione dei termini",
      s1Text: "Accedendo o utilizzando YT Playlist Cal (\"il Servizio\", \"il Sito web\", \"noi\" o \"nostro\"), accetti di essere vincolato dai presenti Termini di servizio. Se non concordi con alcuno dei punti indicati, ti invitiamo a interrompere immediatamente l'uso del Servizio.",
      s2Title: "2. Descrizione del servizio",
      s2Text1: "YT Playlist Cal offre una suite di calcolo gratuita basata sul web per analizzare playlist pubbliche di YouTube, sommare durate complessive, stimare tempi di visione a diverse velocità e assistere nella pianificazione di percorsi di studio.",
      s2Text2: "Il Servizio viene fornito a titolo completamente gratuito per fini puramente informativi, didattici e di organizzazione personale.",
      s3Title: "3. API di YouTube e termini di terze parti",
      s3Text: "YT Playlist Cal fa affidamento sulla YouTube Data API v3 per ricavare metadati, titoli e durate dei video. Utilizzando questo servizio:",
      s3Li1: "Sei soggetto ai Termini di servizio di YouTube.",
      s3Li2: "I dati provenienti da YouTube sono elaborati in conformità con le Norme sulla privacy di Google.",
      s3Li3: "Non abbiamo controllo diretto sui server di YouTube, sulle quote API o sull'accuratezza dei metadati forniti da terzi.",
      s4Title: "4. Regole di utilizzo consentito",
      s4Text: "Accetti di utilizzare YT Playlist Cal unicamente per scopi leciti. Ti impegni in particolare a:",
      s4Li1: "Non inviare richieste automatizzate eccessive, query tramite bot o chiamate ad alta frequenza che possano sovraccaricare la nostra infrastruttura o l'API di YouTube.",
      s4Li2: "Non tentare di decodificare, manomettere, eludere limiti di frequenza o forzare le misure di sicurezza del server.",
      s4Li3: "Non utilizzare il sito per inviare stringhe dannose, illecite o lesive di diritti di terzi.",
      s4Li4: "Non simulare false identità né cercare di accedere indebitamente ai nostri ambienti di hosting o di rete.",
      s4Outro: "Ci riserviamo il diritto di bloccare temporaneamente o permanentemente gli indirizzi IP che violino queste disposizioni.",
      s5Title: "5. Chiavi API fornite dall'utente (Facoltativo)",
      s5Text: "Gli utenti esperti possono facoltativamente utilizzare la propria chiave API YouTube Data v3 nelle opzioni avanzate:",
      s5Li1: "La chiave API viene inviata tramite protocollo sicuro HTTPS al server e impiegata unicamente per eseguire i calcoli richiesti in tempo reale.",
      s5Li2: "Non archiviamo né condividiamo con terzi la tua chiave API personale in nessun caso.",
      s5Li3: "Resti l'unico responsabile del tuo progetto Google Cloud e del consumo della relativa quota API.",
      s6Title: "6. Proprietà intellettuale e marchi",
      s6Text1: "YouTube™, il logo YouTube e i marchi correlati sono marchi registrati di Google LLC. YT Playlist Cal è uno strumento indipendente e non è approvato né sponsorizzato da Google LLC.",
      s6Text2: "Il codice sorgente originale, l'identità visiva, il logo (\"Chrono Play\") e tutti i testi informativi sono di proprietà intellettuale di YT Playlist Cal e tutelati dalle leggi vigenti in materia di diritto d'autore.",
      s7Title: "7. Precisione dei calcoli ed esclusione di garanzia",
      s7Text: "Tutti i calcoli, le durate e i risparmi di tempo sono forniti \"così come sono\" a puro titolo di stima indicativa. Possono verificarsi discrepanze dovute a:",
      s7Li1: "Video non disponibili (video privati, rimossi o con blocchi regionali riportano 0 secondi di durata).",
      s7Li2: "Dirette streaming in corso o trasmissioni non ancora concluse prive di durata definitiva.",
      s7Li3: "Approssimazioni nei timestamp di durata ISO 8601 restituiti da YouTube.",
      s7Li4: "Fattori di riproduzione nel mondo reale quali buffering di rete o tolleranze del lettore multimediale.",
      s7Outro: "Per maggiori approfondimenti, ti invitiamo a leggere la nostra Dichiarazione di non responsabilità.",
      s8Title: "8. Limitazione di responsabilità",
      s8Text: "Nei limiti massimi previsti dalla legge, YT Playlist Cal e i suoi gestori non saranno responsabili per alcun danno diretto o indiretto derivante dall'uso o dall'impossibilità di usare il Servizio.",
      s9Title: "9. Modifiche ai termini",
      s9Text: "Possiamo modificare questi Termini di servizio in qualsiasi momento senza preavviso. Le modifiche diventano efficaci al momento della pubblicazione su questa pagina.",
      s10Title: "10. Informazioni di contatto",
      s10Text: "Per domande o chiarimenti relativi a questi Termini di servizio, ti invitiamo a contattarci tramite la pagina Contatti."
    },
    disclaimerDetail: {
      summary: "Riepilogo: YT Playlist Cal è uno strumento di utilità gratuito e indipendente. Non siamo affiliati, autorizzati o approvati da YouTube o Google LLC. Tutti i calcoli sono forniti \"così come sono\" a scopo puramente informativo.",
      s1Title: "1. Titolarità dei marchi e indipendenza",
      s1Text1: "YouTube™, il logo YouTube e i marchi correlati sono marchi registrati di Google LLC. Tutti i marchi commerciali citati appartengono ai rispettivi proprietari.",
      s1Text2: "YT Playlist Cal è un'applicazione web autonoma e non è collegata, sponsorizzata, autorizzata o associata in alcun modo ufficiale con YouTube, Google LLC o le loro sussidiarie.",
      s2Title: "2. Natura dello strumento e finalità informativa",
      s2Text1: "I servizi, i calcoli, le stime di durata e i pianificatori orari offerti da YT Playlist Cal sono intesi unicamente per scopi didattici, di convenienza pratica e di pianificazione personale.",
      s2Text2: "I dati calcolati non costituiscono un audit certificato né una misurazione contrattualmente vincolante vidimata da YouTube.",
      s3Title: "3. Accuratezza e completezza delle stime",
      s3Text1: "Sebbene ci adoperiamo per assicurare la massima esattezza matematica, i risultati dipendono interamente dalle informazioni fornite da terzi tramite l'API YouTube Data v3.",
      s3Text2: "Eventuali discrepanze possono scaturire da fattori indipendenti dal nostro controllo, tra cui:",
      s3Li1: "Video non disponibili: video impostati come privati, eliminati o soggetti a restrizioni territoriali spesso non forniscono dati di durata validi.",
      s3Li2: "Dirette streaming e premiere: le trasmissioni dal vivo non hanno una durata definita finché l'archivio non è completamente processato.",
      s3Li3: "Aggiornamenti dinamici: modifiche apportate dai creatori alla playlist durante o tra i calcoli possono riflettere differenze nel numero di video.",
      s3Li4: "Approssimazioni della velocità: la divisione matematica semplice non considera i tempi di caricamento o tolleranze del motore del browser.",
      s3Li5: "Incongruenze dei metadati API: il formato ISO 8601 può comportare piccoli arrotondamenti al secondo che si accumulano su elenchi estesi.",
      s4Title: "4. Servizi di terze parti e utilizzo dell'API",
      s4Text: "YT Playlist Cal impiega l'API YouTube Data v3 per ottenere metadati pubblici. Utilizzando lo strumento, prendi atto e accetti che:",
      s4Li1: "Le richieste di calcolo sono disciplinate dai termini e dalle policy per gli sviluppatori di YouTube.",
      s4Li2: "La disponibilità del servizio è condizionata alle quote e allo stato dei server di YouTube, senza garanzie di disponibilità ininterrotta.",
      s4Li3: "Eventuali chiavi API personali inserite nelle opzioni avanzate sono utilizzate unicamente per le tue richieste e mai salvate sui nostri server.",
      s5Title: "5. Collegamenti esterni",
      s5Text: "YT Playlist Cal può contenere collegamenti a siti web esterni di terze parti. Non esercitiamo alcun controllo né ci assumiamo responsabilità per i contenuti di tali siti esterni.",
      s6Title: "6. Clausola di esclusione \"Così com'è\"",
      s6Text1: "YT PLAYLIST CAL E TUTTI I CONTENUTI, CALCOLATORI E FUNZIONALITÀ SONO FORNITI \"COSÌ COME SONO\" E \"SECONDO DISPONIBILITÀ\", SENZA GARANZIE DI ALCUN TIPO, ESPLICITE O IMPLICITE.",
      s6Text2: "NELLA MISURA MASSIMA CONSENTITA DALLA LEGGE, DECLINIAMO OGNI GARANZIA, INCLUSE GARANZIE IMPLICITE DI COMMERCIABILITÀ, IDONEITÀ A UNO SCOPO SPECIFICO E NON VIOLAZIONE.",
      s7Title: "7. Limitazione di responsabilità",
      s7Text: "IN NESSUN CASO YT PLAYLIST CAL O I SUOI GESTORI POTRANNO ESSERE RITENUTI RESPONSABILI PER DANNI DIRETTI, INDIRETTI, ACCIDENTALI O CONSEQUENZIALI DERIVANTI DA:",
      s7Li1: "L'uso o l'impossibilità di usare questo sito web o i suoi strumenti di calcolo;",
      s7Li2: "Inesattezze, errori, ritardi o omissioni nei dati temporali o nelle stime fornite;",
      s7Li3: "Decisioni prese o scadenze mancate facendo affidamento sui risultati di questo calcolatore;",
      s7Li4: "Malfunzionamenti tecnici, interruzioni di servizio o inaccessibilità dei server.",
      s7Outro: "L'unico ed esclusivo rimedio in caso di insoddisfazione è interrompere l'utilizzo dello strumento.",
      s8Title: "8. Revisioni",
      s8Text: "Ci riserviamo il diritto di aggiornare questa Dichiarazione di non responsabilità in qualunque momento.",
      s9Title: "9. Contatti",
      s9Text: "Per domande relative a questa dichiarazione, ti invitiamo a utilizzare la nostra pagina Contatti."
    }
  }
};

// -------------------------------------------------------------
// PORTUGUESE (pt-BR)
// -------------------------------------------------------------
const ptBR = {
  nav: {
    home: "Início",
    tools: "Todas as Ferramentas",
    howItWorks: "Como Funciona",
    faq: "Perguntas Frequentes",
    about: "Sobre Nós",
    contact: "Contato"
  },
  faq: {
    badge: "Perguntas Frequentes"
  },
  howItWorks: {
    supportedBadge: "Formatos Suportados",
    supportedTitle: "Quais links do YouTube são suportados?",
    supportedDesc: "Nosso analisador processa com precisão links padrão de playlists, vídeos com parâmetro de playlist, links encurtados (youtu.be) e IDs diretos de playlist."
  },
  footer: {
    desc: "Calculadora gratuita de duração e tempo de reprodução de playlists do YouTube. Analise qualquer playlist para saber a duração total, o tempo de visualização em diferentes velocidades e estatísticas detalhadas de cada vídeo.",
    notAffiliated: "Não afiliado ao YouTube ou Google LLC.",
    colTools: "Ferramentas de Cálculo",
    colResources: "Recursos",
    colCompany: "Empresa",
    colLegal: "Legal",
    allRightsReserved: "Todos os direitos reservados.",
    trademarkNotice: "YouTube é uma marca registrada da Google LLC. Esta ferramenta é uma utilidade independente e não possui vínculo com o YouTube ou com o Google.",
    links: {
      playlistCalculator: "Calculadora de Playlist do YouTube",
      durationCalculator: "Calculadora de Duração de Playlist",
      watchTimeCalculator: "Calculadora de Tempo de Exibição",
      remainingTime: "Calculadora de Tempo Restante",
      watchTime15x: "Calculadora de Velocidade 1.5x",
      watchTime2x: "Calculadora de Velocidade 2x",
      howItWorks: "Como Funciona",
      faq: "Perguntas Frequentes",
      allTools: "Todas as Ferramentas",
      about: "Sobre Nós",
      contact: "Fale Conosco",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      disclaimer: "Aviso Legal"
    }
  },
  demonstrations: {
    sampleChannel: "Code Academy",
    sampleDuration: "14 horas, 28 minutos, 45 segundos",
    sampleAvg: "20 min 41 s",
    sampleShortest: "Introdução — 3 min 12 s",
    sampleLongest: "Aprofundamento — 1 hora 05 min 20 s",
    sampleAt15x: "9 horas 39 min 10 s",
    sampleAt2x: "7 horas 14 min 22 s"
  },
  pages: {
    about: {
      breadcrumb: "Sobre Nós",
      whatWeDoTitle: "O Que Fazemos",
      whatWeDoP1: "O YT Playlist Cal é uma ferramenta web gratuita e independente desenvolvida para ajudar estudantes, profissionais, criadores e espectadores a calcular instantaneamente a duração total e o tempo de exibição de qualquer playlist do YouTube.",
      whatWeDoP2: "Esteja você planejando uma maratona de estudos, organizando um cronograma de vídeos ou otimizando seu aprendizado em velocidades de 1.25x, 1.5x, 1.75x ou 2.0x, nossa plataforma entrega estatísticas completas e confiáveis em poucos segundos.",
      principlesTitle: "Nossos Princípios",
      principlesAccuracy: "Precisão matemática: consultamos diretamente a YouTube Data API v3 para garantir contagens exatas ao segundo de cada vídeo.",
      principlesSpeed: "Velocidade e eficiência: resultados instantâneos com cache otimizado, sem telas de espera desnecessárias.",
      principlesPrivacy: "Privacidade absoluta: sem rastreamento invasivo, sem exigência de cadastro e sem armazenar seus links de consulta."
    },
    contact: {
      breadcrumb: "Contato",
      formType: "Tipo de Mensagem",
      formTypeQuestion: "Dúvida Geral",
      formTypeFeedback: "Feedback ou Sugestão",
      formTypeBug: "Relatório de Erro Técnico",
      formTypeBusiness: "Contato Comercial ou Parceria",
      formMessage: "Sua Mensagem",
      formMessagePlaceholder: "Descreva sua dúvida ou solicitação em detalhes...",
      formSubmit: "Enviar Mensagem",
      infoTitle: "Informações de Contato",
      emailLabel: "E-mail Direto",
      hoursLabel: "Tempo de Resposta",
      hoursValue: "Geralmente respondemos em até 24 a 48 horas úteis.",
      faqNotice: "Tem uma dúvida rápida sobre o funcionamento da ferramenta?",
      faqLink: "Consulte primeiro nossas Perguntas Frequentes."
    },
    tools: {
      breadcrumb: "Todas as Ferramentas",
      title: "Todas as Ferramentas para Playlists do YouTube"
    },
    duration: {
      breadcrumb: "Calculadora de Duração",
      aboutTitle: "Sobre a Calculadora de Duração",
      aboutP1: "A Calculadora de Duração de Playlist do YouTube soma o tempo de cada vídeo público presente em uma playlist com precisão matemática.",
      aboutP2: "O YouTube não exibe nativamente a duração consolidada das listas de reprodução, tornando trabalhoso planejar o tempo necessário para assistir a um curso completo.",
      featuresTitle: "Recursos Principais"
    },
    watchTime: {
      breadcrumb: "Calculadora de Tempo de Exibição",
      aboutTitle: "Sobre o Tempo de Exibição"
    },
    remainingTime: {
      breadcrumb: "Calculadora de Tempo Restante",
      aboutTitle: "Sobre o Tempo Restante"
    },
    speed15x: {
      breadcrumb: "Calculadora Velocidade 1.5x",
      aboutTitle: "Sobre a Reprodução em 1.5x"
    },
    speed2x: {
      breadcrumb: "Calculadora Velocidade 2x",
      aboutTitle: "Sobre a Reprodução em 2x"
    },
    terms: {
      breadcrumb: "Termos de Serviço",
      lastUpdated: "Última atualização: 31 de outubro de 2026",
      summary: "Resumo: Ao utilizar o YT Playlist Cal, você concorda com estes termos, com nossa Política de Privacidade e com nosso Aviso Legal."
    },
    privacy: {
      breadcrumb: "Política de Privacidade",
      lastUpdated: "Última atualização: 31 de outubro de 2026",
      summary: "Respeitamos sua privacidade. Não armazenamos seus links, não monitoramos sua identidade e não vendemos dados a terceiros."
    },
    disclaimer: {
      breadcrumb: "Aviso Legal",
      lastUpdated: "Última atualização: 31 de outubro de 2026",
      summary: "Resumo: O YT Playlist Cal é uma utilidade independente. Não somos afiliados, autorizados ou endossados pelo YouTube ou pela Google LLC."
    },
    error404: {
      title: "Página Não Encontrada",
      desc: "A página que você procura não existe ou foi movida.",
      backHome: "Voltar para a Página Inicial",
      exploreTools: "Explorar Todas as Ferramentas"
    },
    error500: {
      title: "Erro no Servidor",
      desc: "Ocorreu um erro inesperado ao processar sua solicitação.",
      backHome: "Voltar para a Página Inicial",
      retry: "Tentar Novamente",
      tryAgain: "Tente novamente em alguns instantes"
    },
    common: {
      calculatorBadge: "Calculadora Online Gratuita",
      relatedTools: "Ferramentas Relacionadas",
      relatedToolsDesc: "Conheça outras calculadoras gratuitas para planejar suas sessões de estudo e entretenimento no YouTube.",
      faq: "Perguntas Frequentes",
      faqDesc: "Respostas diretas e esclarecedoras para as dúvidas mais comuns sobre cálculo de playlists do YouTube.",
      stillHaveQuestions: "Ainda tem alguma dúvida?",
      stillHaveQuestionsDesc: "Nossa equipe de suporte está pronta para ajudar com qualquer dúvida ou sugestão.",
      contactUs: "Fale Conosco",
      needMoreHelp: "Precisa de Mais Ajuda?",
      needMoreHelpDesc: "Envie-nos uma mensagem para receber suporte personalizado.",
      backToHome: "Voltar ao início",
      tryAnotherPlaylist: "Calcular outra playlist"
    },
    howItWorksDetail: {
      breadcrumb: "Como Funciona",
      title: "Como Funciona a Calculadora de Playlists do YouTube",
      subtitle: "Um guia técnico e transparente sobre como processamos URLs, consultamos a API do YouTube e geramos estimativas precisas.",
      stepsHeading: "O processo de cálculo etapa por etapa",
      s1Title: "1. Análise e validação do link",
      s1Detail: "Ao inserir um link ou identificador de playlist, nosso analisador identifica o código exclusivo da playlist (geralmente iniciado por PL, UU, FL ou RD).",
      s2Title: "2. Conexão segura com a YouTube Data API v3",
      s2Detail: "Enviamos solicitações criptografadas aos servidores da API do YouTube para obter a lista completa de vídeos que compõem a playlist informada.",
      s3Title: "3. Paginação automática de grandes listas",
      s3Detail: "A API do YouTube limita o retorno a 50 itens por página. Em playlists maiores, navegamos automaticamente pelos tokens de próxima página até carregar todos os vídeos.",
      s4Title: "4. Extração de durações no padrão ISO 8601",
      s4Detail: "O YouTube armazena o tempo de cada vídeo no formato ISO 8601 (por exemplo, PT1H23M45S). Nosso sistema converte essa notação para segundos exatos.",
      s5Title: "5. Totalização matemática e formatação amigável",
      s5Detail: "Somamos os segundos de todos os vídeos e formatamos o resultado final em horas, minutos e segundos de fácil leitura.",
      s6Title: "6. Projeções de velocidade de reprodução",
      s6Detail: "Calculamos a duração em velocidades aceleradas de 1.25x, 1.5x, 1.75x e 2.0x, indicando com clareza o tempo economizado em cada uma.",
      s7Title: "7. Métricas e estatísticas da lista",
      s7Detail: "Apresentamos a duração média dos vídeos, o vídeo mais curto e o vídeo mais longo da playlist.",
      speedHeading: "A matemática da economia de tempo",
      speedIntro: "O tempo de exibição ajustado é calculado dividindo a duração total pelo fator da velocidade de reprodução.",
      speedFormula: "Tempo Real = Duração Total ÷ Velocidade",
      speedExample: "Por exemplo, uma playlist de 10 horas assistida a 1.5x dura apenas 6 horas e 40 minutos, poupando 3 horas e 20 minutos do seu tempo.",
      missingHeading: "Como tratamos vídeos indisponíveis",
      missingIntro: "Alguns vídeos podem não reportar dados de duração com precisão. Veja como lidamos com esses casos:",
      missing1: "Vídeos privados ou excluídos: não retornam duração da API e são contabilizados como 0 segundos.",
      missing2: "Vídeos com restrição geográfica ou de idade: podem ter acesso restrito a metadados.",
      missing3: "Transmissões ao vivo e estreias ativas: não possuem duração fixa até que o processamento do arquivo final seja concluído.",
      missing4: "Limites de cota da API: caso a cota pública diária se esgote, você pode informar sua própria chave gratuita da API do YouTube.",
      missing5: "Instabilidades momentâneas de conexão: tratadas com reenvios automáticos.",
      missingOutro: "O total de vídeos não contabilizados é sempre informado com destaque no resumo dos resultados.",
      cachingHeading: "Armazenamento inteligente em cache",
      cachingDetail: "Para oferecer respostas quase instantâneas e preservar os recursos da API, armazenamos temporariamente em memória os dados calculados de playlists populares.",
      tryCalc: "Experimente a calculadora com uma playlist agora"
    },
    faqDetailed: {
      breadcrumb: "Perguntas Frequentes",
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que você precisa saber sobre o cálculo de playlists do YouTube, velocidades de reprodução e dúvidas técnicas.",
      generalTitle: "Dúvidas Gerais",
      q1: "Como esta ferramenta calcula a duração total?",
      a1: "Nossa calculadora se conecta diretamente à YouTube Data API v3 para obter a duração individual de cada vídeo, somando cada segundo com rigor matemático.",
      q2: "O serviço é totalmente gratuito?",
      a2: "Sim, o YT Playlist Cal é 100% gratuito, sem mensalidades, sem limites ocultos e sem exigência de cadastro.",
      q3: "Quantos vídeos uma playlist pode ter para ser calculada?",
      a3: "Você pode calcular playlists com centenas de vídeos. Nosso sistema executa paginação automática para processar todas as páginas de resultados da API.",
      q4: "Por que a duração total pode diferir do que vejo no YouTube?",
      a4: "O YouTube costuma arredondar os tempos dos vídeos e pode não contabilizar vídeos privados, excluídos ou transmissões ao vivo ainda não arquivadas.",
      q5: "A ferramenta funciona em celulares e tablets?",
      a5: "Sim. A interface é totalmente responsiva e funciona perfeitamente em smartphones, tablets, notebooks e computadores desktop.",
      q6: "Preciso fazer login com minha conta do Google ou YouTube?",
      a6: "Não. Nenhuma autenticação ou login de usuário é necessária. Basta colar o link da playlist e calcular.",
      speedTitle: "Velocidade de Reprodução e Planejamento",
      q7: "Como é calculada a economia de tempo em 1.25x, 1.5x ou 2x?",
      a7: "Dividimos a duração total em segundos pelo fator de velocidade selecionado e subtraímos da duração original para exibir a economia exata de tempo.",
      q8: "O que é a função de Tempo Restante?",
      a8: "A função de Tempo Restante permite que você escolha a partir de qual vídeo deseja calcular, desconsiderando os episódios que você já assistiu.",
      q9: "Posso calcular apenas uma faixa específica de vídeos?",
      a9: "Sim, nas opções avançadas você pode definir o vídeo inicial e final para saber a duração de um trecho específico da playlist.",
      techTitle: "Aspectos Técnicos e Solução de Problemas",
      q10: "O que fazer se aparecer um erro de cota de API esgotada?",
      a10: "A cota pública da API do YouTube possui limites diários globais. Nas configurações avançadas, você pode adicionar sua própria chave gratuita da YouTube Data API v3 para calcular sem restrições.",
      q11: "Como vocês tratam vídeos privados ou removidos?",
      a11: "Esses vídeos não retornam duração válida e são marcados como 0 segundos, com um aviso explícito exibido nos resultados.",
      q12: "As playlists que calculo ficam gravadas no servidor?",
      a12: "Não. Não registramos dados de navegação nem vinculamos playlists pesquisadas à sua identidade. Preservamos sua privacidade rigorosamente."
    },
    durationDetail: {
      breadcrumb: "Calculadora de Duração",
      title: "Calculadora de Duração de Playlist do YouTube",
      subtitle: "Calcule instantaneamente a duração total de qualquer playlist do YouTube com precisão de segundos.",
      whyTitle: "Por que o YouTube não mostra a duração total das playlists?",
      whyP: "A interface do YouTube apresenta a minutagem individual de cada vídeo, mas não oferece a soma total da playlist. Somar manualmente dezenas de vídeos é demorado e propenso a falhas. Nossa ferramenta automatiza isso em segundos.",
      supportedTitle: "Formatos de link suportados",
      beyondTitle: "Além da duração: estatísticas ricas",
      ctaBtn: "Calcular duração agora",
      badge: "Duração de Playlist"
    },
    watchTimeDetail: {
      breadcrumb: "Tempo de Exibição",
      title: "Calculadora de Tempo de Exibição no YouTube",
      subtitle: "Descubra quanto tempo real você gastará para assistir a uma playlist em diferentes velocidades.",
      introTitle: "O que é o tempo de exibição e como otimizá-lo?",
      introP: "O tempo de exibição representa as horas e minutos que você de fato investirá para assistir a um conteúdo. Ajustando a velocidade para 1.25x ou 1.5x, você absorve a matéria economizando horas valiosas.",
      speedsTitle: "Comparação de velocidades",
      plannerTitle: "Planejador de estudos e maratonas",
      ctaBtn: "Calcular tempo de exibição",
      badge: "Tempo de Exibição"
    },
    speed15xDetail: {
      breadcrumb: "Velocidade 1.5x",
      title: "Calculadora de Playlist em Velocidade 1.5x",
      subtitle: "Saiba exatamente quanto tempo você poupa assistindo à sua playlist em 1.5x.",
      introTitle: "As vantagens da reprodução em 1.5x",
      introP: "A velocidade de 1.5x é amplamente apontada por estudantes como a mais equilibrada para videoaulas e cursos online, permitindo economizar 33.3% do tempo sem prejudicar a retenção do conteúdo.",
      statsTitle: "Estatísticas de economia em 1.5x",
      tableTitle: "Tabela comparativa de duração",
      ctaBtn: "Calcular em 1.5x",
      badge: "Velocidade 1.5x"
    },
    speed2xDetail: {
      breadcrumb: "Velocidade 2x",
      title: "Calculadora de Playlist em Velocidade 2x",
      subtitle: "Corte o tempo de visualização pela metade: calcule a duração de qualquer playlist em velocidade dupla.",
      introTitle: "Quando vale a pena assistir em 2x?",
      introP: "A reprodução em 2x reduz o tempo total à metade. É ideal para revisar conteúdos já estudados, acompanhar tutoriais rápidos ou verificar conteúdos dinâmicos.",
      colOriginal: "Original (1.0x)",
      colAt2x: "Em velocidade 2x",
      colSaved: "Tempo economizado",
      ctaBtn: "Calcular em 2x",
      badge: "Velocidade 2x"
    },
    remainingTimeDetail: {
      breadcrumb: "Tempo Restante",
      title: "Calculadora de Tempo Restante da Playlist",
      subtitle: "Saiba quanto tempo ainda falta para terminar uma playlist a partir do vídeo em que você parou.",
      introTitle: "Não recomece do zero: meça o seu progresso",
      introP: "Se você já começou uma playlist extensa, não precisa refazer o cálculo de vídeos já assistidos. Basta informar o número do vídeo atual para obter o tempo que ainda resta assistir.",
      stepTitle: "Como configurar o ponto de partida",
      ctaBtn: "Calcular tempo restante",
      badge: "Tempo Restante"
    },
    privacyDetail: {
      intro: "O YT Playlist Cal (\"nós\", \"nosso\", \"a ferramenta\") é uma plataforma utilitária independente que calcula a duração e o tempo de exibição de playlists do YouTube. Esta Política de Privacidade explica quais informações processamos quando você utiliza a ferramenta, como elas são utilizadas e como resguardamos sua privacidade.",
      s1Title: "1. Informações que processamos",
      s1P1Title: "URLs do YouTube",
      s1P1Text: "Quando você envia uma URL do YouTube para cálculo, essa URL é transmitida ao nosso servidor, que a utiliza para realizar consultas autenticadas à YouTube Data API v3. Não armazenamos, registramos nem compartilhamos as URLs enviadas além do cache transitório em memória exigido para responder à sua requisição.",
      s1P2Title: "Chaves de API do YouTube (Opcional)",
      s1P2Text: "Caso forneça sua própria chave de API do YouTube na seção de Opções Avançadas, ela será enviada via conexão criptografada HTTPS diretamente ao nosso servidor e utilizada estritamente para autorizar suas consultas dentro da sua própria cota do Google Cloud. Nunca gravamos sua chave em bancos de dados ou discos persistentes.",
      s1P3Title: "Estatísticas de uso",
      s1P3Text: "Podemos empregar ferramentas analíticas anônimas e respeitosas à privacidade para compreender tendências gerais de uso, como acessos a páginas e ocorrências de erros técnicos. Não usamos cookies invasivos de rastreamento entre sites nem coletamos dados pessoais identificáveis (PII).",
      s1P4Title: "Armazenamento local (Local Storage)",
      s1P4Text: "Utilizamos o localStorage do seu navegador apenas para lembrar sua preferência de tema visual (claro/escuro) e o idioma selecionado entre suas visitas. Essas informações nunca deixam o seu dispositivo.",
      s1P5Title: "Registros do servidor",
      s1P5Text: "Nosso provedor de infraestrutura (Cloudflare) pode reter registros técnicos de acesso com endereços IP e metadatos de conexão exclusivamente para fins de segurança cibernética, mitigação de ataques DDoS e monitoramento operacional da rede.",
      s2Title: "2. Cookies",
      s2Text: "O YT Playlist Cal não cria cookies para fins de rastreamento comportamental ou publicidade direcionada. Apenas cookies técnicos estritamente necessários podem ser utilizados pela rede de distribuição (Cloudflare) para bloquear tráfego malicioso e proteger os serviços contra negação de serviço.",
      s3Title: "3. Serviços de terceiros",
      s3Text1: "YouTube Data API v3: Empregamos a API do YouTube para recuperar metadatos de vídeos e playlists. Suas requisições submetem-se aos Termos de Serviço do YouTube e à Política de Privacidade do Google.",
      s3Text2: "Cloudflare: Nosso site é distribuído e protegido pela Cloudflare, que pode processar metadatos de requisições para reforço de segurança e otimização de entrega na borda da rede.",
      s3Text3: "Carregamento de fontes: Utilizamos o Bunny Fonts (uma solução em conformidade com o RGPD/GDPR alternativa ao Google Fonts) para fornecer a tipografia Inter sem rastrear endereços IP.",
      s4Title: "4. Publicidade",
      s4Text: "O site pode exibir anúncios por meio do Google AdSense ou rede parceira equivalente. As redes de publicidade podem utilizar identificadores não personalizados em conformidade com as normas legais e o consentimento do usuário.",
      s5Title: "5. Privacidade de crianças e menores",
      s5Text: "O YT Playlist Cal não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações de crianças. Caso identifique que um menor nos forneceu dados pessoais, entre em contato para que possamos providenciar a exclusão imediata.",
      s6Title: "6. Seus direitos",
      s6Text: "Como não coletamos nem mantemos dados pessoais além do processamento efêmero das requisições, geralmente não detemos registros identificáveis vinculados a você. Para esclarecimentos sobre direitos previstos pela LGPD ou GDPR, entre em contato conosco.",
      s7Title: "7. Alterações nesta política",
      s7Text: "Podemos atualizar esta Política de Privacidade periodicamente. As mudanças serão identificadas pela data de atualização no topo desta página. O uso continuado da ferramenta após alterações significa sua concordância com a política revisada.",
      s8Title: "8. Contato",
      s8Text: "Em caso de dúvidas a respeito desta Política de Privacidade, utilize nossa página de Contato."
    },
    termsDetail: {
      summary: "Resumo: Ao utilizar o YT Playlist Cal, você expressa concordância com estes termos, com nossa Política de Privacidade e com o Aviso Legal. Esta é uma ferramenta gratuita e independente para estimar durações de playlists do YouTube.",
      s1Title: "1. Aceitação dos termos",
      s1Text: "Ao acessar ou fazer uso do YT Playlist Cal (\"o Serviço\", \"o Site\", \"nós\" ou \"nosso\"), você concorda em cumprir e se vincular a estes Termos de Serviço. Caso discorde de qualquer disposição, encerre imediatamente o uso do Serviço.",
      s2Title: "2. Descrição do serviço",
      s2Text1: "O YT Playlist Cal fornece um conjunto gratuito de utilidades web para calcular a duração acumulada de playlists públicas do YouTube, estimar tempos de visualização em velocidades variáveis (1.25x, 1.5x, 1.75x, 2.0x) e ajudar na gestão de tempo.",
      s2Text2: "O Serviço é disponibilizado gratuitamente para finalidades de informação, educação e planejamento individual.",
      s3Title: "3. API do YouTube e termos de terceiros",
      s3Text: "O YT Playlist Cal utiliza a YouTube Data API v3 para obter metadados, títulos e durações de vídeos. Ao usufruir deste serviço:",
      s3Li1: "Você se vincula aos Termos de Serviço do YouTube.",
      s3Li2: "Os dados obtidos do YouTube são processados de acordo com a Política de Privacidade do Google.",
      s3Li3: "Não temos ingerência sobre a infraestrutura do YouTube, concessão de cotas de API ou precisão dos metadados de terceiros.",
      s4Title: "4. Política de uso aceitável",
      s4Text: "Você concorda em utilizar o YT Playlist Cal exclusivamente para propósitos lícitos. Você se compromete a não:",
      s4Li1: "Enviar requisições automatizadas excessivas, bots ou chamadas de alta intensidade que sobrecarreguem nossa infraestrutura ou a API do YouTube.",
      s4Li2: "Tentar realizar engenharia reversa, descompilar ou violar limitações de taxa e defesas de segurança do servidor.",
      s4Li3: "Empregar o site para transmitir conteúdos maliciosos, ilícitos ou que violem direitos de terceiros.",
      s4Li4: "Falsificar identidade ou buscar acesso não autorizado aos nossos servidores e contas de hospedagem.",
      s4Outro: "Reservamo-nos o direito de restringir ou bloquear temporária ou permanentemente IPs que violem estas diretrizes de uso.",
      s5Title: "5. Chaves de API do usuário (Opcional)",
      s5Text: "Usuários avançados podem opcionalmente fornecer sua própria chave da YouTube Data API v3 nas configurações avançadas:",
      s5Li1: "Sua chave é transmitida por canal HTTPS seguro diretamente ao servidor e utilizada unicamente para efetuar os cálculos em tempo real.",
      s5Li2: "Não armazenamos, registramos nem repassamos sua chave a nenhuma outra entidade.",
      s5Li3: "A responsabilidade pela manutenção da segurança do seu projeto no Google Cloud e do consumo de cota permanece inteiramente sua.",
      s6Title: "6. Propriedade intelectual e marcas",
      s6Text1: "YouTube™, o logotipo do YouTube e suas marcas correlatas são marcas registradas da Google LLC. O YT Playlist Cal é uma utilidade independente e não conta com endosso da Google LLC.",
      s6Text2: "O código original do site, o design de interface, a marca figurativa (\"Chrono Play\") e os textos instrucionais são patrimônio intelectual do YT Playlist Cal e protegidos pelas leis de propriedade intelectual.",
      s7Title: "7. Exatidão das estimativas e isenção \"Como está\"",
      s7Text: "Todas as durações, cálculos e economias de tempo são informados \"como estão\" para fins de estimativa prática. Variações podem decorrer de:",
      s7Li1: "Vídeos indisponíveis (vídeos privados, excluídos ou bloqueados por localidade reportam 0 segundos).",
      s7Li2: "Transmissões ao vivo ou estreias que ainda não possuem metadados consolidados de encerramento.",
      s7Li3: "Arredondamentos de segundos no padrão ISO 8601 transmitido pelo YouTube.",
      s7Li4: "Condições de reprodução local (tempo de carregamento em cache, anúncios ou tolerâncias do navegador).",
      s7Outro: "Para mais detalhes, recomendamos consultar nosso Aviso Legal completo.",
      s8Title: "8. Limitação de responsabilidade",
      s8Text: "No limite máximo admitido pela lei, o YT Playlist Cal e seus desenvolvedores não se responsabilizam por quaisquer perdas ou danos diretos, indiretos ou incidentais decorrentes do uso da ferramenta.",
      s9Title: "9. Revisões destes termos",
      s9Text: "Podemos modificar estes Termos de Serviço a qualquer instante sem aviso prévio. As atualizações vigoram imediatamente após publicação nesta página.",
      s10Title: "10. Informações para contato",
      s10Text: "Para dúvidas a respeito destes Termos de Serviço, fale conosco pela página de Contato."
    },
    disclaimerDetail: {
      summary: "Resumo: O YT Playlist Cal é uma utilidade web gratuita e independente. Não possuímos vínculo, homologação ou autorização por parte do YouTube ou da Google LLC. Todas as estimativas são oferecidas \"como estão\" para fins de planejamento pessoal.",
      s1Title: "1. Marcas registradas e não afiliação",
      s1Text1: "YouTube™, a marca visual do YouTube e identificadores correlatos são marcas da Google LLC. Todas as marcas nominadas neste site pertencem aos seus respectivos detentores.",
      s1Text2: "O YT Playlist Cal é um software web independente e não mantém qualquer afiliação, parceria, patrocínio ou chancela oficial do YouTube ou da Google LLC.",
      s2Title: "2. Finalidade puramente informativa",
      s2Text1: "Os recursos, cálculos, tempos de exibição e agendas de estudo gerados pelo YT Playlist Cal são disponibilizados apenas para conveniência pessoal e educacional.",
      s2Text2: "Os resultados não devem ser interpretados como auditoria oficial ou certificação com valor legal emitido pelo YouTube.",
      s3Title: "3. Precisão e completude das medições",
      s3Text1: "Embora apliquemos absoluto rigor nos cálculos matemáticos, os resultados baseiam-se nos dados brutos transmitidos pela YouTube Data API v3.",
      s3Text2: "Eventuais divergências de minutagem total ou contagem de vídeos podem ocorrer por fatores alheios à nossa intervenção, tais como:",
      s3Li1: "Vídeos indisponíveis: conteúdos privados, deletados ou com restrição por país frequentemente não fornecem duração válida.",
      s3Li2: "Lives e estreias: vídeos ao vivo não reportam tempo definitivo até a total indexação pelo YouTube.",
      s3Li3: "Alterações dinâmicas: modificações de ordem ou inserção de vídeos feitas pelo autor da playlist durante o cálculo.",
      s3Li4: "Divisões de velocidade: o cálculo numérico não leva em consideração latências e tempos de carregamento do navegador do usuário.",
      s3Li5: "Peculiaridades do formato ISO 8601: pequenas discrepâncias de fração de segundo podem se acumular em listas com dezenas de itens.",
      s4Title: "4. Serviços de terceiros e integração com API",
      s4Text: "O YT Playlist Cal utiliza a YouTube Data API v3 para consultar metadados públicos. Ao interagir com a ferramenta, você reconhece que:",
      s4Li1: "Suas requisições sujeitam-se às políticas vigentes para desenvolvedores do YouTube.",
      s4Li2: "A operação do site depende da disponibilidade e cotas de requisição dos servidores do YouTube.",
      s4Li3: "Caso utilize chave própria de API nas configurações avançadas, ela será usada unicamente em suas requisições imediatas e nunca retida.",
      s5Title: "5. Links externos para outros sites",
      s5Text: "O YT Playlist Cal pode conter links para páginas externas operadas por terceiros. Não assumimos qualquer responsabilidade pelos conteúdos ou práticas desses sites.",
      s6Title: "6. Isenção de garantias \"Como está\"",
      s6Text1: "O YT PLAYLIST CAL E TODOS OS SEUS CÁLCULOS E RECURSOS SÃO FORNECIDOS \"COMO ESTÃO\" E \"CONFORME DISPONÍVEIS\", SEM QUALQUER MODALIDADE DE GARANTIA EXPRESSA OU IMPLÍCITA.",
      s6Text2: "NA MÁXIMA EXTENSÃO DA LEGISLAÇÃO APLICÁVEL, RENUNCIAMOS A QUAISQUER GARANTIAS IMPLÍCITAS DE ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA OU NÃO VIOLAÇÃO.",
      s7Title: "7. Limitação de responsabilidade",
      s7Text: "SOB NENHUMA HIPÓTESE O YT PLAYLIST CAL OU SEUS RESPONSÁVEIS RESPONDERÃO POR QUAISQUER PREJUÍZOS DIRETOS OU INDIRETOS RESULTANTES DE:",
      s7Li1: "Uso ou impossibilidade de uso desta ferramenta ou de seus cálculos;",
      s7Li2: "Eventuais imprecisões, atrasos ou falhas nas estimativas de tempo;",
      s7Li3: "Compromissos ou decisões assumidos com base nas estimativas da calculadora;",
      s7Li4: "Falhas de conexão, indisponibilidade de servidor ou interrupções no serviço.",
      s7Outro: "A única medida cabível em caso de insatisfação consiste em descontinuar o uso da ferramenta.",
      s8Title: "8. Atualizações desta isenção",
      s8Text: "Podemos revisar este Aviso Legal a qualquer instante e sem comunicação antecipada.",
      s9Title: "9. Contato para esclarecimentos",
      s9Text: "Para sanar dúvidas sobre este Aviso Legal, entre em contato pela nossa página de Contato."
    }
  }
};

updateLocale('it', it);
updateLocale('pt-BR', ptBR);
console.log('Group B (it, pt-BR) updated successfully!');

