// scripts/complete-it-pt.mjs
// Completing remaining 133 keys for Italian (it) and Portuguese (pt-BR)
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

const it = {
  pages: {
    about: {
      p3: "Veloce e preciso. Interrogazioni all'API lato server, zero tracciamento, nessun dato personale memorizzato. Fatto per studenti, creatori e maratoneti di video.",
      trademarkTitle: "Indipendenza e Marchi Registrati",
      trademarkP: "YT Playlist Cal è un'utilità indipendente. YouTube e il logo YouTube sono marchi registrati di Google LLC. Questo strumento non è approvato, affiliato o sponsorizzato da Google LLC o YouTube."
    },
    contact: {
      formTypeFeature: "Richiesta di funzionalità",
      formTypeOther: "Altro",
      formEmail: "La tua email",
      formEmailPlaceholder: "latua.email@example.com",
      formSuccess: "Messaggio inviato! Risponderemo entro 24-48 ore lavorative.",
      faqNoteTitle: "Prima di inviare una richiesta",
      faqNoteP: "Hai una domanda rapida sull'utilizzo o sulle quote API? Consulta le nostre Domande frequenti."
    },
    duration: {
      whyTitle: "Perché usare il Calcolatore di Durata?",
      whyP: "YouTube non mostra la durata complessiva aggregata delle playlist. Il nostro calcolatore recupera ogni singolo video e ne calcola la lunghezza totale in pochi istanti.",
      supportedTitle: "Link e formati supportati",
      beyondTitle: "Oltre la durata base: statistiche avanzate",
      ctaBtn: "Calcola durata playlist"
    },
    watchTime: {
      ctaBtn: "Calcola tempo di visione"
    },
    remainingTime: {
      ctaBtn: "Calcola tempo rimanente"
    },
    speed15x: {
      ctaBtn: "Calcola a velocità 1.5x"
    },
    speed2x: {
      ctaBtn: "Calcola a velocità 2x"
    },
    error404: {
      btn: "Torna alla home",
      allTools: "Tutti gli strumenti"
    },
    error500: {
      btn: "Riprova",
      reportBtn: "Segnala un problema",
      allTools: "Tutti gli strumenti"
    },
    common: {
      related: "Strumenti correlati",
      playlistLengthCalc: "Calcolatore Lunghezza Playlist",
      fullPlaylistCalc: "Calcolatore Completo di Playlist",
      watchTimeAt15x: "Tempo di visione a 1.5x",
      watchTimeAt2x: "Tempo di visione a 2x",
      watchTimeCalc: "Calcolatore Tempo di Visione",
      remainingTimeCalc: "Calcolatore Tempo Rimanente",
      playlistDurationCalc: "Calcolatore Durata Playlist",
      howItWorks: "Come funziona",
      tryCalc: "Prova il calcolatore"
    },
    faqDetailed: {
      catBasics: "Funzioni base del calcolatore",
      catSpeed: "Velocità di riproduzione",
      catModes: "Modalità di calcolo",
      catMissing: "Video non disponibili e limiti",
      catPlanner: "Pianificazione dello studio",
      catPrivacy: "Privacy e sicurezza",
      notFoundPrompt: "Non hai trovato la risposta che cercavi?",
      contactUs: "Contatta il nostro team",
      or: "oppure",
      tryCalc: "Calcola una playlist adesso",
      q13: "Perché il calcolatore mostra meno video rispetto a YouTube?",
      a13: "YouTube include nei conteggi video privati, eliminati o bloccati per regione che l'API non può leggere.",
      q14: "Cosa succede con le dirette streaming nella playlist?",
      a14: "I live stream in corso o programmati non hanno una durata definita e vengono esclusi dalla somma.",
      q15: "Posso calcolare playlist generate automaticamente da YouTube (es. Mix o Musica)?",
      a15: "Sì, se il link contiene un ID playlist pubblico valido (es. prefisso RD o PL).",
      q16: "Qual è la formula per calcolare il risparmio a 1.25x?",
      a16: "La formula è: Durata Originale - (Durata Originale / 1.25). Risparmi esattamente il 20% del tempo totale.",
      q17: "Qual è la formula per la velocità 1.75x?",
      a17: "Durata Originale - (Durata Originale / 1.75), con un risparmio del 42.8% del tempo totale.",
      q18: "Come calcolo solo i video dal numero 10 al numero 30?",
      a18: "Nelle Opzioni avanzate, imposta l'intervallo specificando 'Video iniziale: 10' e 'Video finale: 30'.",
      q19: "Come funziona la pianificazione del tempo di visione?",
      a19: "Il nostro pianificatore divide la durata totale per il numero di giorni o minuti al giorno desiderati per creare un calendario.",
      q20: "I dati della mia playlist vengono venduti o condivisi?",
      a20: "Assolutamente no. Non vendiamo, condividiamo né tracciamo le playlist che analizzi.",
      q21: "Perché mi viene richiesto di inserire una chiave API?",
      a21: "La nostra quota giornaliera pubblica gratuita potrebbe temporaneamente esaurirsi. Inserire la tua chiave gratuita di Google Cloud garantisce calcoli illimitati.",
      q22: "Come posso ottenere una chiave API YouTube Data v3 gratuita?",
      a22: "Accedi a Google Cloud Console, crea un nuovo progetto, abilita l'API YouTube Data v3 e genera una chiave API in meno di 2 minuti.",
      q23: "Questo strumento memorizza la mia chiave API personale?",
      a23: "No. La tua chiave viene utilizzata solo per la richiesta immediata in memoria e non viene salvata in alcun database.",
      q24: "Posso salvare o esportare i risultati del calcolo?",
      a24: "Puoi copiare i risultati con un clic o condividere il riepilogo con colleghi e compagni di studio."
    },
    durationDetail: {
      beyondP: "YT Playlist Cal offre molto più di una semplice somma temporale:",
      b1: "Totale esatto in ore, minuti e secondi",
      b2: "Durata media calcolata su tutti i video validi",
      b3: "Identificazione istantanea del video più breve e più lungo",
      b4: "Tempi di visione a 1.25x, 1.5x, 1.75x e 2.0x con conteggio ore risparmiate",
      b5: "Rilevamento trasparente dei video privati o rimossi",
      b6: "Supporto per intervalli personalizzati di video",
      b7: "Pianificatore giornaliero di visione per sessioni di studio"
    },
    watchTimeDetail: {
      whatTitle: "Cos'è il Tempo di Visione di YouTube?",
      whatP: "Il tempo di visione è l'effettivo investimento temporale necessario per completare una playlist a diverse velocità di riproduzione.",
      featuresTitle: "Funzionalità per ottimizzare il tuo tempo",
      f1: "Confronto affiancato di 4 velocità di riproduzione",
      f2: "Calcolo ore esatte risparmiate per ogni velocità",
      f3: "Pianificatore di studio con suddivisione in giorni o settimane",
      f4: "Tempo di completamento previsto in base al ritmo giornaliero",
      f5: "Flessibilità per escludere video già visti",
      f6: "Zero login o dati personali richiesti"
    },
    speed15xDetail: {
      ctaPrompt: "Vuoi sapere quanto tempo risparmi a 1.5x?",
      ctaHint: "Incolla l'URL della tua playlist per calcolare subito il risparmio a velocità 1.5x.",
      savingsTitle: "Quanto tempo risparmi a velocità 1.5x?",
      savingsP: "A velocità 1.5x, ogni ora di video richiede solo 40 minuti di visione reale, garantendo un risparmio netto del 33.3% del tuo tempo.",
      colOriginal: "Originale (1.0x)",
      colAtSpeed: "A velocità 1.5x",
      colSaved: "Tempo risparmiato",
      formula: "Formula: Tempo = Durata Totale ÷ 1.5",
      whoTitle: "Per chi è ideale la velocità 1.5x?",
      whoP: "La riproduzione a 1.5x è la preferita da chi desidera apprendere velocemente mantenendo alta la concentrazione:",
      w1: "Studenti universitari che seguono lezioni registrate",
      w2: "Sviluppatori e tecnici che consultano tutorial e conferenze",
      w3: "Ascoltatori di podcast ed interviste con ritmi lenti",
      w4: "Professionisti che devono aggiornarsi su corsi lunghi",
      whoOutro: "Prova oggi stesso a calcolare la tua playlist a 1.5x con il nostro strumento gratuito."
    },
    speed2xDetail: {
      ctaPrompt: "Vuoi dimezzare il tempo di visione con la velocità 2x?",
      savingsTitle: "Quanto tempo risparmi a velocità 2x?",
      savingsP: "A velocità 2x, il tempo di riproduzione viene esattamente dimezzato. Una playlist da 10 ore richiede solo 5 ore di visione.",
      colOriginal: "Originale (1.0x)",
      colAtSpeed: "A velocità 2x",
      colSaved: "Tempo risparmiato",
      whoTitle: "Quando conviene usare la velocità 2x?",
      whoP: "La velocità 2x offre il massimo risparmio di tempo nei contesti appropriati:",
      w1: "Ripasso veloce prima di un esame o colloquio",
      w2: "Rassegna rapida di video documentari o presentazioni diapositive",
      w3: "Contenuti con parlato molto lento e pause frequenti",
      w4: "Scansione rapida di serie video per trovare parti salienti",
      whoOutro: "Calcola subito la durata esatta della tua playlist a 2x."
    },
    remainingTimeDetail: {
      ctaPrompt: "Vuoi calcolare solo il tempo che ti resta da guardare?",
      ctaHint: "Inserisci l'URL della playlist e seleziona il video da cui vuoi riprendere.",
      howTitle: "Come calcolare il tempo rimanente in 5 passi",
      s1: "Incolla il link della tua playlist di YouTube nel calcolatore.",
      s2: "Espandi la sezione Opzioni avanzate.",
      s3: "Nel campo 'Video iniziale', imposta il numero del prossimo video da guardare.",
      s4: "Clicca su Calcola per ottenere la durata dei soli video rimanenti.",
      s5: "Visualizza il tempo residuo a velocità normale e accelerata.",
      whyTitle: "Perché è utile calcolare il tempo residuo?",
      whyP: "Sapere quanto manca esattamente ti aiuta a pianificare le tue giornate senza scoraggiarti:",
      w1: "Monitora i tuoi progressi di studio giorno per giorno",
      w2: "Fissa traguardi realistici di completamento",
      w3: "Ottimizza il tempo libero senza lasciare corsi a metà",
      w4: "Regola la velocità di visione per concludere entro una scadenza",
      whyOutro: "Usa la modalità Tempo Rimanente ogni volta che riprendi una playlist."
    }
  }
};

const ptBR = {
  pages: {
    about: {
      p3: "Rápido e preciso. Consultas diretas à API no servidor, zero rastreamento, nenhum dado pessoal armazenado. Feito para estudantes, criadores e maratonistas de vídeos.",
      trademarkTitle: "Independência e Marcas Registradas",
      trademarkP: "O YT Playlist Cal é uma utilidade independente. YouTube e o logotipo do YouTube são marcas registradas da Google LLC. Esta ferramenta não é endossada, afiliada ou patrocinada pela Google LLC ou pelo YouTube."
    },
    contact: {
      formTypeFeature: "Sugestão de novo recurso",
      formTypeOther: "Outro assunto",
      formEmail: "Seu e-mail",
      formEmailPlaceholder: "seu.email@exemplo.com",
      formSuccess: "Mensagem enviada com sucesso! Responderemos em até 24-48 horas úteis.",
      faqNoteTitle: "Antes de enviar uma mensagem",
      faqNoteP: "Tem uma dúvida rápida sobre cálculo ou cotas da API? Consulte nossas Perguntas Frequentes."
    },
    duration: {
      whyTitle: "Por que usar a Calculadora de Duração?",
      whyP: "O YouTube não exibe a duração total consolidada das playlists. Nossa calculadora analisa cada vídeo e gera a duração exata em instantes.",
      supportedTitle: "Links e formatos aceitos",
      beyondTitle: "Além da duração básica: métricas avançadas",
      ctaBtn: "Calcular duração da playlist"
    },
    watchTime: {
      ctaBtn: "Calcular tempo de exibição"
    },
    remainingTime: {
      ctaBtn: "Calcular tempo restante"
    },
    speed15x: {
      ctaBtn: "Calcular em velocidade 1.5x"
    },
    speed2x: {
      ctaBtn: "Calcular em velocidade 2x"
    },
    error404: {
      btn: "Voltar ao início",
      allTools: "Todas as ferramentas"
    },
    error500: {
      btn: "Tentar novamente",
      reportBtn: "Informar erro técnico",
      allTools: "Todas as ferramentas"
    },
    common: {
      related: "Ferramentas Relacionadas",
      playlistLengthCalc: "Calculadora de Duração de Playlist",
      fullPlaylistCalc: "Calculadora Completa de Playlist",
      watchTimeAt15x: "Tempo de exibição a 1.5x",
      watchTimeAt2x: "Tempo de exibição a 2x",
      watchTimeCalc: "Calculadora de Tempo de Exibição",
      remainingTimeCalc: "Calculadora de Tempo Restante",
      playlistDurationCalc: "Calculadora de Duração de Playlist",
      howItWorks: "Como funciona",
      tryCalc: "Testar a calculadora"
    },
    faqDetailed: {
      catBasics: "Básico da calculadora",
      catSpeed: "Velocidades de reprodução",
      catModes: "Modos de cálculo",
      catMissing: "Vídeos indisponíveis e limites",
      catPlanner: "Planejador de estudos",
      catPrivacy: "Privacidade e segurança",
      notFoundPrompt: "Não encontrou a resposta que procurava?",
      contactUs: "Fale com nossa equipe",
      or: "ou",
      tryCalc: "Calcular uma playlist agora",
      q13: "Por que a calculadora exibe menos vídeos do que o YouTube?",
      a13: "O YouTube inclui em suas listas vídeos privados, deletados ou com restrição geográfica que a API não pode acessar.",
      q14: "O que acontece com transmissões ao vivo na playlist?",
      a14: "Lives ativas ou programadas não possuem duração definida e são excluídas da soma total.",
      q15: "Posso calcular playlists geradas automaticamente pelo YouTube (ex.: Mix ou Música)?",
      a15: "Sim, desde que a URL contenha um ID público de playlist (como prefixos PL ou RD).",
      q16: "Qual é a fórmula de economia em velocidade 1.25x?",
      a16: "Fórmula: Duração Original - (Duração Original / 1.25). Você economiza exatamente 20% do tempo.",
      q17: "Qual é a fórmula para a velocidade 1.75x?",
      a17: "Duração Original - (Duração Original / 1.75), proporcionando uma economia de 42.8% do tempo total.",
      q18: "Como calculo apenas do vídeo 10 até o vídeo 30?",
      a18: "Nas Opções Avançadas, configure o intervalo definindo 'Vídeo inicial: 10' e 'Vídeo final: 30'.",
      q19: "Como funciona o planejador de tempo de exibição?",
      a19: "Nosso planejador divide a duração total pelo número de dias ou minutos diários disponíveis para criar seu cronograma.",
      q20: "Os dados das minhas playlists são vendidos ou compartilhados?",
      a20: "Não. Não vendemos, não rastreamos e não compartilhamos com ninguém as playlists que você pesquisa.",
      q21: "Por que o sistema solicita uma chave de API?",
      a21: "Nossa cota pública diária compartilhada pode se esgotar em momentos de alto tráfego. Adicionar sua chave gratuita do Google Cloud garante uso ilimitado.",
      q22: "Como obtenho uma chave gratuita da YouTube Data API v3?",
      a22: "Acesse o Google Cloud Console, crie um novo projeto, ative a YouTube Data API v3 e crie uma chave de API em menos de 2 minutos.",
      q23: "A ferramenta salva minha chave de API pessoal?",
      a23: "Não. Sua chave é utilizada apenas na memória do servidor para processar a requisição e nunca é salva em banco de dados.",
      q24: "Posso salvar ou compartilhar os resultados?",
      a24: "Sim, você pode copiar os resultados com um clique para salvar ou enviar a amigos e colegas de estudo."
    },
    durationDetail: {
      beyondP: "O YT Playlist Cal oferece muito mais que uma simples contagem de horas:",
      b1: "Total exato em horas, minutos e segundos",
      b2: "Duração média calculada sobre todos os vídeos válidos",
      b3: "Identificação instantânea do vídeo mais curto e mais longo",
      b4: "Tempos de exibição a 1.25x, 1.5x, 1.75x e 2.0x com horas economizadas",
      b5: "Detecção transparente de vídeos privados ou removidos",
      b6: "Suporte para faixas personalizadas de vídeos",
      b7: "Planejador diário de estudo para organizar maratonas"
    },
    watchTimeDetail: {
      whatTitle: "O que é o Tempo de Exibição no YouTube?",
      whatP: "O tempo de exibição é o tempo real que você precisará investir para concluir uma playlist de acordo com a velocidade escolhida.",
      featuresTitle: "Recursos para otimizar seu tempo",
      f1: "Comparação lado a lado de 4 velocidades de reprodução",
      f2: "Cálculo exato de horas poupadas para cada velocidade",
      f3: "Planejador de estudos dividido em dias ou semanas",
      f4: "Previsão de data de término com base na sua dedicação diária",
      f5: "Flexibilidade para descartar vídeos já assistidos",
      f6: "Zero cadastros ou dados pessoais solicitados"
    },
    speed15xDetail: {
      ctaPrompt: "Quer saber quanto tempo você poupa assistindo em 1.5x?",
      ctaHint: "Cole a URL da sua playlist para calcular agora a economia na velocidade 1.5x.",
      savingsTitle: "Quanto tempo você economiza a 1.5x?",
      savingsP: "A velocidade 1.5x transforma 60 minutos de aula em 40 minutos de visualização, gerando uma economia limpa de 33.3% do seu tempo.",
      colOriginal: "Original (1.0x)",
      colAtSpeed: "Na velocidade 1.5x",
      colSaved: "Tempo economizado",
      formula: "Fórmula: Tempo = Duração Total ÷ 1.5",
      whoTitle: "Para quem a velocidade 1.5x é indicada?",
      whoP: "A velocidade 1.5x é ideal para manter o foco e acelerar o aprendizado:",
      w1: "Estudantes universitários acompanhando videoaulas e matérias densas",
      w2: "Programadores e técnicos assistindo a cursos e conferências",
      w3: "Ouvintes de podcasts e palestras com fala pausada",
      w4: "Profissionais que precisam revisar treinamentos extensos",
      whoOutro: "Calcule agora mesmo a sua playlist em 1.5x com nossa ferramenta gratuita."
    },
    speed2xDetail: {
      ctaPrompt: "Quer reduzir seu tempo pela metade com a velocidade 2x?",
      savingsTitle: "Quanto tempo você economiza a 2x?",
      savingsP: "Em velocidade 2x, o tempo de exibição é cortado exatamente pela metade. Uma playlist de 10 horas dura somente 5 horas.",
      colOriginal: "Original (1.0x)",
      colAtSpeed: "Na velocidade 2x",
      colSaved: "Tempo economizado",
      whoTitle: "Quando vale a pena assistir em 2x?",
      whoP: "A velocidade 2x proporciona a máxima economia de tempo quando bem aplicada:",
      w1: "Revisão rápida de tópicos conhecidos antes de provas",
      w2: "Visualização rápida de apresentações com muitos slides",
      w3: "Vídeos com oradores lentos e pausas prolongadas",
      w4: "Navegação rápida por séries de tutoriais para encontrar trechos-chave",
      whoOutro: "Calcule a duração exata da sua playlist em 2x agora mesmo."
    },
    remainingTimeDetail: {
      ctaPrompt: "Quer calcular apenas o tempo que falta para terminar?",
      ctaHint: "Cole o link da playlist e selecione o vídeo onde você parou.",
      howTitle: "Como calcular o tempo restante em 5 passos simples",
      s1: "Cole a URL da sua playlist do YouTube na caixa de entrada.",
      s2: "Abra a área de Opções Avançadas.",
      s3: "No campo 'Vídeo inicial', indique o número do próximo vídeo a assistir.",
      s4: "Clique em Calcular para processar apenas os episódios que restam.",
      s5: "Veja o tempo que falta na velocidade normal e com acelerador.",
      whyTitle: "Por que calcular o tempo restante?",
      whyP: "Saber o tempo que falta ajuda a manter o foco e concluir cursos sem desânimo:",
      w1: "Acompanhe seu progresso de estudos dia a dia",
      w2: "Defina metas diárias alcançáveis",
      w3: "Aproveite melhor intervalos livres sem abandonar cursos pelo meio",
      w4: "Ajuste a velocidade de exibição para cumprir prazos com tranquilidade",
      whyOutro: "Use a ferramenta de Tempo Restante sempre que retomar uma playlist."
    }
  }
};

updateLocale('it', it);
updateLocale('pt-BR', ptBR);
console.log('it and pt-BR completion finished!');

