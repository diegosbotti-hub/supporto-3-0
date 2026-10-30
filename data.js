window.SUPPORTO_DATA = {
  meta: {
    title: "SUPPORTO 3.0",
    team: "BE ONE TEAM",
    subtitle: "Il materiale giusto. Nel momento giusto.",
    updated: "30/10/2026"
  },
  appTutorial: {resource:"tutorial-app"},
  telegram: "https://t.me/+Dzt2cDIxiLFlMDE0",
  telegramButtonLabel: "Collegati alla chat",
  telegramDescription: "La chat del team per ricevere aggiornamenti sull’Accademia e sulla formazione online, fare domande e confrontarti con gli altri membri.",
  materialsMenu: {
    title: "Menu dei materiali",
    description: "Scegli una categoria per vedere i materiali."
  },
  feedback: {
    title: "Testimonianze e suggerimenti",
    description: "Invia a Diegos le tue testimonianze o segnala miglioramenti per SUPPORTO 3.0.",
    label: "Invia testimonianze o suggerimenti",
    url: "https://wa.me/message/TDXECLB6RL7WP1"
  },
  paths: {
    "Percorso completo": [
      {n:1,title:"Obiettivo personale & piano marketing",text:"Definisci il tuo obiettivo e conosci il piano marketing.",status:"disponibile",resource:"obiettivo"},
      {n:2,title:"Conoscere i prodotti",text:"Conoscere i prodotti in modo semplice e operativo.",status:"disponibile",resource:"prodotti"},
      {n:3,title:"Lista nomi",text:"Video e scheda da stampare per costruire e aggiornare la tua lista nomi.",status:"disponibile",resource:"lista"},
      {n:4,title:"Come invitare",text:"Inviti per attività e prodotto, con gestione delle obiezioni.",status:"preparazione",resource:"invitare"},
      {n:5,title:"Organizzare la settimana",text:"Agenda, priorità, gestione contatti.",status:"disponibile",resource:"settimana"},
      {n:6,title:"Inaugurazione attività",text:"Preparazione, inviti, svolgimento e follow-up.",status:"disponibile",resource:"inaugurazione"},
      {n:7,title:"DMO Trattamento viso",text:"Skin Experience: invito, preparazione, esecuzione e prossimi passi. Materiali in preparazione.",status:"disponibile",resource:"skin"},
      {n:8,title:"DMO Valutazione corporea",text:"Book Colazione 3.0 disponibile. Video e scheda PDF in preparazione.",status:"preparazione",resource:"hgo"},
      {n:9,title:"DMO Usa Indossa Parla",text:"Trasformare l'esperienza personale in conversazioni naturali.",status:"preparazione",resource:"usa-parla"},
      {n:10,title:"Assistenza clienti",text:"Assistenza, follow-up, riordino e sviluppo referenze.",status:"preparazione",resource:"clienti"},
      {n:11,title:"Presentare l’opportunità",text:"Colloquio individuale e saper presentare un HOM.",status:"preparazione",resource:"opportunita"},
      {n:12,title:"Obiezioni",text:"Guida operativa disponibile. Video tutorial in preparazione.",status:"disponibile",resource:"obiezioni"}
    ]
  },
  resources: [
    {
      id:"tutorial-app", order:-2, area:"Guida all’app", title:"Come usare l’app", type:"Video", status:"disponibile", library:false, shareSection:false,
      description:"Un breve tutorial per orientarti tra percorso, materiali e condivisione.",
      embed:"https://www.youtube-nocookie.com/embed/fFhmQ-Xo_Fg",
      vertical:true,
      cta:"Apri su YouTube",
      link:"https://youtube.com/shorts/fFhmQ-Xo_Fg?feature=share"
    },
    {
      id:"skin", order:0.7, area:"Percorso guidato", title:"DMO Trattamento viso", type:"Video e materiali", status:"disponibile", library:false, shareSection:false,
      description:"Skin Experience in quattro fasi, con i materiali operativi collegati.",
      learn:"Organizzare e svolgere la Skin Experience: invito, preparazione, esecuzione e prossimi passi.",
      action:"Guarda prima i consigli operativi del team, poi segui le quattro fasi nell’ordine indicato. La scheda di valutazione e la presentazione sono in preparazione.",
      next:"DMO Valutazione corporea",
      videos:[
        {title:"Introduzione · Consigli operativi",description:"Spunti pratici per rendere più efficace la Skin Experience.",embed:"https://www.youtube-nocookie.com/embed/piH8uwMilhI"},
        {title:"Fase 1 · Invito",embed:"https://www.youtube-nocookie.com/embed/4chExoXJWAc"},
        {title:"Fase 2 · Preparazione",embed:"https://www.youtube-nocookie.com/embed/UmWqCWqEupw"},
        {title:"Fase 3 · Esecuzione",embed:"https://www.youtube-nocookie.com/embed/xevQcS_8ksg"},
        {title:"Fase 4 · Prossimi passi",embed:"https://www.youtube-nocookie.com/embed/xevQcS_8ksg"}
      ],
      links:[
        {label:"Materiali per questo DMO",resource:"skin-materiali"}
      ]
    },
    {
      id:"skin-materiali", order:0.71, area:"Percorso guidato", title:"Materiali Skin Experience", type:"Materiali", status:"preparazione", library:false, shareSection:false,
      description:"Scheda di valutazione e presentazione a supporto della Skin Experience.",
      learn:"Qui troverai la scheda di valutazione e la presentazione della Skin Experience.",
      action:"I documenti sono in preparazione.",
      next:"Torna ai video e segui le quattro fasi nell’ordine indicato.",
      links:[
        {label:"Scheda di valutazione",pending:true},
        {label:"Presentazione",pending:true},
        {label:"Torna ai video Skin Experience",resource:"skin"}
      ]
    },
    {
      id:"obiezioni", order:0.9, area:"Percorso guidato", title:"Obiezioni", type:"Video e materiale", status:"disponibile", library:false, shareSection:false, materialsAtTop:true,
      description:"Guida operativa per rispondere alle obiezioni più comuni. Video tutorial in preparazione.",
      learn:"Gestire le obiezioni seguendo il metodo del team.",
      action:"Apri la guida, stampala e segui la sequenza operativa per gestire le obiezioni.",
      next:"Ripassa il percorso e applica le indicazioni del team.",
      videos:[{title:"Video tutorial",description:"Come rispondere alle obiezioni",pending:true}],
      links:[{label:"Scarica materiale da stampare",resource:"obiezioni-pdf",direct:true}]
    },
    {
      id:"network-attivo", order:5.1, area:"Biblioteca", title:"Perché il Network Marketing è un attivo", type:"Video", status:"disponibile", library:false, shareSection:false,
      description:"Video formativo sul Network Marketing come attivo.",
      learn:"Approfondire il concetto di attivo applicato al Network Marketing.",
      action:"Guarda il video e confronta i concetti con il tuo sponsor.",
      next:"Continua la formazione nella Biblioteca.",
      embed:"https://www.youtube-nocookie.com/embed/yJCH7OVRptM"
    },
    {
      id:"settimana", order:-0.5, area:"Percorso guidato", title:"Organizzare la settimana", type:"Video", status:"disponibile", library:false, shareSection:false,
      description:"Come organizzare la settimana e pianificare le attività.",
      learn:"Organizzare agenda, priorità e gestione dei contatti seguendo il metodo del team.",
      action:"Guarda il video e organizza la tua settimana seguendo il metodo spiegato.",
      next:"Inaugurazione attività",
      embed:"https://www.youtube-nocookie.com/embed/OByvvIVJc-E"
    },
    {
      id:"lista", order:-0.7, area:"Percorso guidato", title:"Lista nomi", type:"Video e materiale", status:"disponibile", library:false, shareSection:false,
      description:"Video e scheda da stampare per costruire e aggiornare la tua lista nomi.",
      learn:"Organizzare la lista nomi e gestire i contatti seguendo il metodo del team.",
      action:"Guarda il video, stampa la scheda e compila la tua lista nomi seguendo il metodo spiegato.",
      next:"Come invitare",
      embed:"https://www.youtube-nocookie.com/embed/yWJRBHaDspk",
      links:[{label:"Scarica materiale da stampare",resource:"lista-nomi-pdf",direct:true}]
    },
    {
      id:"obiettivo", order:-1, area:"Percorso guidato", title:"Obiettivo personale & piano marketing", type:"Video", status:"disponibile", library:false, shareSection:false,
      description:"Definisci il tuo obiettivo personale e approfondisci il piano marketing.",
      learn:"Chiarire cosa vuoi ottenere e conoscere il piano marketing.",
      action:"Guarda i due video nell’ordine indicato e definisci il tuo obiettivo personale.",
      next:"Conoscere i prodotti",
      videos:[
        {title:"1 · Obiettivo personale",embed:"https://www.youtube-nocookie.com/embed/kmqtj1HBpoM"},
        {title:"2 · Piano marketing",embed:"https://www.youtube-nocookie.com/embed/fln41ekZIOc"}
      ]
    },
    {
      id:"inaugurazione", order:-0.4, area:"Percorso guidato", title:"Inaugurazione attività", type:"Video e materiale", status:"disponibile", library:false, shareSection:false,
      description:"Come preparare, organizzare e gestire l'inaugurazione dell’attività.",
      learn:"Capire i passaggi fondamentali per impostare correttamente l’inaugurazione e il follow-up.",
      action:"Guarda il video, stampa la guida operativa e prepara la tua inaugurazione seguendo i passaggi indicati.",
      next:"DMO Trattamento viso",
      embed:"https://www.youtube-nocookie.com/embed/kmkivMyksYQ",
      links:[{label:"Scarica materiale da stampare",resource:"inaugurazione-pdf",direct:true}]
    },
    {
      "id": "hgo",
      "order": 0.8,
      "area": "Percorso guidato",
      "title": "DMO Valutazione corporea",
      "type": "Video e materiali",
      "status": "preparazione",
      "library": false,
      "shareSection": false,
      "description": "Video e materiali operativi per svolgere la valutazione corporea.",
      "learn": "Svolgere la valutazione corporea e usare il Book Colazione e la scheda di valutazione.",
      "action": "Apri il Book Colazione 3.0. Il video formativo e la scheda di valutazione in PDF sono in preparazione.",
      "next": "DMO Usa Indossa Parla",
      "pendingVideo": true,
      "links": [
        {
          "label": "Apri Book Colazione 3.0",
          "resource": "book-pdf"
        },
        {
          "label": "Scheda valutazione corporea · PDF",
          "pending": true
        }
      ]
    },
    {
      id:"prodotti", order:0, area:"Percorso guidato", title:"Conoscere i prodotti", type:"Video", status:"disponibile", library:false, shareSection:true,shareText:"Scopri le basi della nutrizione e il training medico sul Collagen Skin.",
      description:"Due video sulle basi della nutrizione e un training medico sul Collagen Skin.",
      learn:"Acquisire le basi della nutrizione e approfondire il Collagen Skin.",
      action:"Guarda prima le due parti sulle basi della nutrizione, poi il training sul Collagen Skin.",
      next:"Prosegui con il punto successivo del percorso.",
      videos:[
        {title:"1 · Basi della nutrizione — prima parte",embed:"https://www.youtube-nocookie.com/embed/FYj9-lr-jeY"},
        {title:"2 · Basi della nutrizione — seconda parte",embed:"https://www.youtube-nocookie.com/embed/TcrYqJm84NI"},
        {title:"3 · Training medico sul Collagen Skin",embed:"https://www.youtube-nocookie.com/embed/oJrzqwQAsN0"}
      ]
    },
    {
      id:"lista-nomi-pdf", order:2, area:"Presentazioni e schede", title:"Lista nomi", type:"PDF", status:"disponibile", library:true, shareSection:false,
      description:"Stampa la scheda e compila la tua lista nomi.",
      learn:"Costruire e aggiornare la tua lista nomi seguendo il metodo del team.",
      action:"Apri il PDF, stampalo e compila la tua lista nomi.",
      next:"Segui le indicazioni del video nel punto 3 del percorso.",
      cta:"Scarica materiale da stampare",
      link:"https://drive.google.com/file/d/1GgSrFY82Ok9i2VrfXh2ng2uIfMuAXdnp/view?usp=drivesdk"
    },
    {
      id:"inaugurazione-pdf", order:2.1, area:"Presentazioni e schede", title:"Inaugurazione attività · Guida operativa", type:"PDF", status:"disponibile", library:true, shareSection:false,
      description:"Guida da stampare per preparare e svolgere l’inaugurazione con lo sponsor.",
      learn:"Seguire i passaggi operativi per organizzare l’inaugurazione dell’attività.",
      action:"Apri il PDF, stampalo e usalo insieme al video del punto 6.",
      next:"Prepara l’evento con il tuo sponsor.",
      cta:"Scarica materiale da stampare",
      link:"https://drive.google.com/file/d/1oJz9pIhV49TT6OruTANmcMGOJE-5Wx0L/view?usp=drivesdk"
    },
    {
      id:"obiezioni-pdf", order:2.2, area:"Presentazioni e schede", title:"Come rispondere alle obiezioni", type:"PDF", status:"disponibile", library:true, shareSection:false,
      description:"Guida da stampare con la sequenza operativa e gli esempi per gestire le obiezioni.",
      learn:"Ascoltare, chiarire il dubbio e proporre un passo successivo.",
      action:"Apri il PDF, stampalo e tienilo a disposizione durante la formazione.",
      next:"Applica la sequenza indicata nella guida.",
      cta:"Scarica materiale da stampare",
      link:"https://drive.google.com/file/d/1ZOFEPB1p6G0_LXUfDnTAcyZngUL-rzZY/view?usp=drivesdk"
    },
    {
      id:"book-pdf", order:1, area:"Presentazioni e schede", title:"Book Colazione 3.0", type:"PDF", status:"disponibile",shareSection:true,shareText:"Scopri il Book Colazione 3.0, uno strumento semplice per presentare il percorso al cliente.",shareUrl:"https://drive.google.com/drive/folders/1P37QA_0GqQEDRye74TSwxWe1-Gst7OTS?usp=drive_link",
      description:"Versione aggiornata del Book Colazione.",
      learn:"Come usare il Book Colazione per spiegare in modo semplice il percorso al cliente.",
      action:"Apri il PDF, familiarizza con il flusso e individua i passaggi principali.",
      next:"Lista nomi",
      cta:"Apri Book Colazione",
      links:[
        {label:"Scarica PDF",url:"https://drive.google.com/uc?export=download&id=1wEREjGOcLptQTsDY2GSQhUfy95S3OiZi"},
        {label:"Scarica PowerPoint",url:"https://drive.google.com/uc?export=download&id=1BHasmRINPsKFtF3kdsodesURQlXVeIy9"}
      ]
    },
    {
      id:"foto-prima-dopo", order:3, area:"Foto prima e dopo", title:"Foto prima e dopo", type:"Galleria", status:"disponibile",shareSection:true,shareText:"Scopri il prima e il dopo di alcuni nostri clienti.",shareUrl:"https://drive.google.com/drive/folders/1EaYqgYEfbRStv9SPR-RYCDS06HDgCK2A?usp=drive_link",
      description:"Raccolta di foto prima e dopo del team.",
      learn:"Accedere rapidamente alla raccolta di foto prima e dopo.",
      action:"Apri la cartella e consulta le immagini disponibili.",
      next:"Assistenza clienti",
      cta:"Apri foto prima e dopo",
      link:"https://drive.google.com/drive/folders/1EaYqgYEfbRStv9SPR-RYCDS06HDgCK2A?usp=drive_link"
    },
    {
      id:"uso-vendita", order:2, area:"Listini", title:"Uso personale vs vendita", type:"Infografica", status:"disponibile",shareSection:true,shareText:"Scopri la differenza tra uso personale e vendita.",shareUrl:"https://drive.google.com/drive/folders/1Pu1Eyheu27p_12tvTrEGz88PtEvsnXIB?usp=drive_link",
      description:"Confronto visivo tra uso personale e vendita nel modello operativo.",
      learn:"Capire con un colpo d'occhio la differenza tra uso personale e vendita.",
      action:"Apri l'infografica e usala come supporto visivo quando serve.",
      next:"Obiettivo personale & piano marketing",
      cta:"Apri infografica",
      link:"https://drive.google.com/file/d/1JhcuVgNTVJdGfnOCzijdBG19SykVL_5K/view?usp=drivesdk"
    },
    {
      id:"listini-pubblico", order:4, area:"Listini", title:"Listini prezzi al pubblico", type:"PDF", status:"disponibile",shareSection:true,shareText:"Consulta i listini aggiornati e trova rapidamente il prezzo che ti serve.",shareUrl:"https://drive.google.com/drive/folders/1JmHTS1lSoD-eyJL72MLt_flXIZUs7aoN?usp=drive_link",
      description:"Listini prezzi al pubblico per prodotti, creme e Bionic.",
      learn:"Consultare rapidamente i listini prezzi al pubblico.",
      action:"Scegli il listino che ti serve e apri il relativo PDF.",
      next:"Conoscere i prodotti",
      cta:"Apri listini",
      links:[
        {label:"Prodotti e creme · PDF",url:"https://drive.google.com/file/d/1qgaFEZSF2XsFhhRJlbm_4JzqJy8ET2NP/view?usp=drivesdk"},
        {label:"Bionic · PDF",url:"https://drive.google.com/file/d/1_OEmlnh1gdsU-C6Y_IrJldhpuDvdKc0e/view?usp=drivesdk"}
      ]
    },
    {
      id:"biblioteca", order:5, area:"Biblioteca", title:"Biblioteca", type:"Libri", status:"disponibile", shareSection:true,shareText:"Scopri i libri e il video consigliati per sviluppare competenze pratiche.",shareUrl:"https://drive.google.com/drive/folders/1_xVa-WYXv5CZVglL8nbU2OPf8MRXFPmw?usp=drive_link",
      description:"Tre libri e un video per la formazione personale e professionale.",
      learn:"Accedere ai libri e al video per sviluppare competenze pratiche nel network marketing.",
      action:"Leggi i libri nell’ordine indicato e guarda il video.",
      next:"Continua il percorso di formazione.",
      cta:"Apri Biblioteca",
      embedResource:"network-attivo",
      links:[
        {label:"1 · Go Pro",url:"https://drive.google.com/file/d/1r0WODFAqM08ZY5c-m-WowOpx2znTIeTa/view?usp=drivesdk"},
        {label:"2 · La presentazione 45 secondi",url:"https://drive.google.com/file/d/1x_ES0KM5YqymdRzB7sXNxASeIBjQbM_5/view?usp=drivesdk"},
        {label:"3 · Come invitare",url:"https://drive.google.com/file/d/1CgODXDfS-Yz2Siu2ZWbx3EYDXnghyMSc/view?usp=drivesdk"}
      ]
    },
    {
      "id": "hom-francesco-secciani",
      "order": 110,
      "area": "HOM registrati",
      "title": "HOM · Francesco Secciani",
      "type": "Video",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi HOM",
      "copyShareText": true,
      "shareText": "Ti condivido la registrazione dell’HOM di ieri: dura circa 25 minuti.\n\nApri il link e premi «Registrati». Seleziona «Guarda adesso il replay di ieri», inserisci nome ed email e completa i dati richiesti per accedere alla registrazione.",
      "shareUrl": "https://event.webinarjam.com/zy285/register/n702lumm",
      "description": "Francesco Secciani · Millionaire Team, ex farmacista.",
      "learn": "Presentazione del progetto e dell’opportunità con Francesco Secciani, Millionaire Team ed ex farmacista.",
      "action": "Apri o condividi il link della registrazione. Su WebinarJam premi «Registrati», seleziona «Guarda adesso il replay di ieri» e completa il modulo con nome, email e i dati richiesti.",
      "next": "Dopo la visione, ricontatta la persona e fissa un appuntamento.",
      "cta": "Apri registrazione",
      "link": "https://event.webinarjam.com/zy285/register/n702lumm"
    },
    {
      "id": "hom-giovanna-giardullo",
      "order": 111,
      "area": "HOM registrati",
      "title": "HOM · Giovanna Giardullo",
      "type": "Video",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi HOM",
      "copyShareText": true,
      "shareText": "Ti condivido la registrazione dell’HOM di ieri: dura circa 25 minuti.\n\nApri il link e premi «Registrati». Seleziona «Guarda adesso il replay di ieri», inserisci nome ed email e completa i dati richiesti per accedere alla registrazione.",
      "description": "Giovanna Giardullo · GET, biologa nutrizionista.",
      "learn": "Presentazione del progetto e dell’opportunità con Giovanna Giardullo, GET e biologa nutrizionista.",
      "action": "Apri o condividi il link della registrazione. Su WebinarJam premi «Registrati», seleziona «Guarda adesso il replay di ieri» e completa il modulo con nome, email e i dati richiesti.",
      "next": "Dopo la visione, ricontatta la persona e fissa un appuntamento.",
      "cta": "Apri registrazione",
      "link": "https://event.webinarjam.com/zy285/register/oyo6zuo1",
      "shareUrl": "https://event.webinarjam.com/zy285/register/oyo6zuo1"
    },
    {
      "id": "herbalife-basi-scientifiche",
      "order": 109,
      "area": "Scienza & Evidenze",
      "title": "Herbalife · Basi scientifiche",
      "type": "PDF",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi documento",
      "copyShareText": true,
      "shareText": "Ti giro questo documento per conoscere meglio Herbalife e cosa c’è dietro ai prodotti: ricerca, controlli e certificazioni, con i link alle fonti. Guardalo con calma; se qualcosa ti incuriosisce o ti lascia dei dubbi, scrivimi e ne parliamo volentieri!",
      "shareUrl": "https://drive.google.com/file/d/1YOQ_ska9vfgYAll-N_InOVtKjg5Bpf76/view?usp=drivesdk",
      "description": "Ricerca, laboratori, qualità, certificazioni e collaborazioni sportive di Herbalife, con sintesi chiare e fonti cliccabili.",
      "learn": "Conoscere Herbalife, la ricerca, i controlli di qualità, le certificazioni e le collaborazioni sportive attraverso sintesi e fonti cliccabili.",
      "action": "Apri il PDF e consulta le fonti. Usa «Condividi documento» per inviarlo con il messaggio già pronto.",
      "next": "Consulta le fonti cliccabili nel PDF per approfondire.",
      "cta": "Apri PDF",
      "link": "https://drive.google.com/file/d/1YOQ_ska9vfgYAll-N_InOVtKjg5Bpf76/view?usp=drivesdk"
    },
    {id:"testimonianze-attivita",order:120,area:"Video testimonianze",title:"Video · Attività",type:"Video",status:"disponibile",shareSection:true,shareText:"Scopri le testimonianze di persone con esperienze e professioni diverse, dallo studente all’imprenditore, che hanno scelto il nostro progetto.",shareUrl:"https://drive.google.com/drive/folders/1T1LFn7YpDUDEmQXgJebM_UrY7aU8AjZQ?usp=drive_link",description:"Testimonianze di persone comuni, dallo studente all’imprenditore, che raccontano la loro esperienza con l’attività.",learn:"Conoscere esperienze diverse e trovare la testimonianza più adatta alla persona con cui stai parlando.",action:"Apri la raccolta e scegli la testimonianza più adatta.",next:"Presentare l’opportunità",cta:"Apri Video · Attività",link:"https://drive.google.com/drive/folders/1T1LFn7YpDUDEmQXgJebM_UrY7aU8AjZQ?usp=drive_link"},
    {id:"testimonianze-sport",order:130,area:"Video testimonianze",title:"Video Sport · Attività",type:"Video",status:"disponibile",shareSection:true,shareLabel:"Condividi raccolta",shareText:"Scopri le testimonianze di alcuni sportivi che lavorano con il nostro progetto.",shareUrl:"https://drive.google.com/drive/mobile/folders/1wUv2e5ydNasveudjonUnt-xzP2bfMwGy?usp=drive_link",description:"Testimonianze di sportivi che raccontano la loro esperienza con l’attività.",learn:"Guarda direttamente le anteprime e scegli la testimonianza più adatta alla persona con cui stai parlando.",action:"Scegli «Guarda» per vedere il video oppure «Condividi video» per inviarlo.",next:"Presentare l’opportunità",cta:"Apri cartella completa",link:"https://drive.google.com/drive/folders/1wUv2e5ydNasveudjonUnt-xzP2bfMwGy?usp=drive_link",embed:"https://drive.google.com/embeddedfolderview?id=1wUv2e5ydNasveudjonUnt-xzP2bfMwGy#grid",gallery:{
  "hint": "Scegli una testimonianza da guardare o condividere.",
  "watchLabel": "Guarda",
  "shareLabel": "Condividi video",
  "copiedLabel": "Messaggio copiato",
  "backLabel": "← Torna alla galleria",
  "openLabel": "Apri video su Drive",
  "shareText": "Ti condivido la testimonianza di uno sportivo che racconta la sua esperienza con il nostro progetto. Guardala con calma e, se vuoi saperne di più, scrivimi!",
  "items": [
    {
      "id": "18488rZgBsAf7SG5ORcZZ8J19j8cBZvlg",
      "title": "Ciccio",
      "url": "https://drive.google.com/file/d/18488rZgBsAf7SG5ORcZZ8J19j8cBZvlg/view?usp=drivesdk"
    },
    {
      "id": "1msbftMnm6v7Ygi6Qu7SUqgqeuxJ_cp1k",
      "title": "Carol",
      "url": "https://drive.google.com/file/d/1msbftMnm6v7Ygi6Qu7SUqgqeuxJ_cp1k/view?usp=drivesdk"
    },
    {
      "id": "1GR0Nj9ZI1Arsmh7x8urrhUQKqYHD_Wjc",
      "title": "Lorenzo",
      "url": "https://drive.google.com/file/d/1GR0Nj9ZI1Arsmh7x8urrhUQKqYHD_Wjc/view?usp=drivesdk"
    },
    {
      "id": "1s_v2s_CbZOGRnBMgTR08rGGBP1uZrDkb",
      "title": "Emanuel Di Paolo",
      "url": "https://drive.google.com/file/d/1s_v2s_CbZOGRnBMgTR08rGGBP1uZrDkb/view?usp=drivesdk"
    },
    {
      "id": "1Q9vDVgAIGZhPw7JWkZXJhKLejPqG9gDp",
      "title": "Barbara",
      "url": "https://drive.google.com/file/d/1Q9vDVgAIGZhPw7JWkZXJhKLejPqG9gDp/view?usp=drivesdk"
    },
    {
      "id": "1QFeDptWzJ5p3k59m7cAjKyVTK8_ECiON",
      "title": "Saiu",
      "url": "https://drive.google.com/file/d/1QFeDptWzJ5p3k59m7cAjKyVTK8_ECiON/view?usp=drivesdk"
    },
    {
      "id": "17NuQ5fuealOtwOjBq6Pgse6VOCapH4yz",
      "title": "Testimonianza sportiva",
      "url": "https://drive.google.com/file/d/17NuQ5fuealOtwOjBq6Pgse6VOCapH4yz/view?usp=drivesdk"
    }
  ]
}},
    {id:"testimonianze-prodotto",order:140,area:"Video testimonianze",title:"Video Sport · Prodotto",type:"Video",status:"disponibile",shareSection:true,shareText:"Scopri le testimonianze di alcuni sportivi che utilizzano i nostri prodotti nella loro quotidianità e attività sportiva.",shareUrl:"https://drive.google.com/drive/folders/1tONXxAWgtYTmNXCIP6WeI-WTjxNj9nlk?usp=drive_link",description:"Sportivi che raccontano come utilizzano i prodotti e i risultati fisici ottenuti.",learn:"Accedere rapidamente alle testimonianze prodotto disponibili.",action:"Apri la raccolta e scegli la testimonianza più adatta.",next:"Assistenza clienti",cta:"Apri Video Sport · Prodotto",link:"https://drive.google.com/drive/folders/1tONXxAWgtYTmNXCIP6WeI-WTjxNj9nlk?usp=drive_link"},
    {id:"testimonianze-benessere",order:150,area:"Video testimonianze",title:"Video · Benessere",type:"Video",status:"disponibile",shareSection:true,shareText:"Scopri alcune testimonianze di persone che raccontano la loro esperienza con il nostro percorso benessere.",shareUrl:"https://drive.google.com/drive/folders/1Y5arCaC3qibTyR2x3m0a9DOhypvYtnc7?usp=drive_link",description:"Testimonianze di clienti che raccontano la loro esperienza con il percorso benessere.",learn:"Accedere rapidamente alle testimonianze Benessere disponibili.",action:"Apri la raccolta e scegli la testimonianza più adatta.",next:"Assistenza clienti",cta:"Apri Video · Benessere",link:"https://drive.google.com/drive/folders/1Y5arCaC3qibTyR2x3m0a9DOhypvYtnc7?usp=drive_link"},
    {
      "id": "coni-impegno-alternato",
      "order": 160,
      "area": "Protocolli CONI",
      "title": "1 · Sport ad impegno alternato",
      "type": "PDF",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi protocollo",
      "copyShareText": true,
      "shareText": "Ciao! Ti giro questo protocollo CONI-Herbalife24 dedicato agli sport a impegno alternato, come calcio, tennis e pallavolo. Trovi indicazioni su alimentazione, idratazione e recupero per attività in cui si alternano fasi intense e pause. Dagli un’occhiata con calma: se vuoi approfondire qualcosa, scrivimi e ne parliamo volentieri!",
      "shareUrl": "https://drive.google.com/file/d/1YNlkUjwhWo2viK3UynXS8Tt3A3dqLSNd/view?usp=drivesdk",
      "description": "Nutrizione, idratazione e recupero per sport come calcio, tennis e pallavolo.",
      "learn": "Consultare il protocollo di nutrizione sportiva per le discipline a impegno aerobico e anaerobico alternato.",
      "action": "Apri il PDF. Per inviarlo, usa «Condividi protocollo»: il messaggio specifico è già pronto.",
      "next": "Scegli il protocollo in base alla disciplina sportiva.",
      "cta": "Apri protocollo · PDF",
      "link": "https://drive.google.com/file/d/1YNlkUjwhWo2viK3UynXS8Tt3A3dqLSNd/view?usp=drivesdk"
    },
    {
      "id": "coni-resistenza",
      "order": 161,
      "area": "Protocolli CONI",
      "title": "2 · Sport di resistenza",
      "type": "PDF",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi protocollo",
      "copyShareText": true,
      "shareText": "Ciao! Ti giro questo protocollo CONI-Herbalife24 sugli sport di resistenza, come corsa, ciclismo e triathlon. Parla di alimentazione, idratazione e recupero per gli sforzi prolungati, con approfondimenti sulla nutrizione prima, durante e dopo allenamenti e gare. Leggilo con calma e, se hai domande o curiosità, scrivimi: ne parliamo volentieri!",
      "shareUrl": "https://drive.google.com/file/d/1ITYujvlkPMLmUgM815lQ43UPMoYWCYQG/view?usp=drivesdk",
      "description": "Alimentazione, idratazione e recupero per corsa, ciclismo, triathlon e altre attività di resistenza.",
      "learn": "Consultare il protocollo di nutrizione sportiva dedicato alle discipline di resistenza e agli sforzi prolungati.",
      "action": "Apri il PDF. Per inviarlo, usa «Condividi protocollo»: il messaggio specifico è già pronto.",
      "next": "Scegli il protocollo in base alla disciplina sportiva.",
      "cta": "Apri protocollo · PDF",
      "link": "https://drive.google.com/file/d/1ITYujvlkPMLmUgM815lQ43UPMoYWCYQG/view?usp=drivesdk"
    },
    {
      "id": "coni-potenza",
      "order": 162,
      "area": "Protocolli CONI",
      "title": "3 · Sport di potenza",
      "type": "PDF",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi protocollo",
      "copyShareText": true,
      "shareText": "Ciao! Ti condivido questo protocollo CONI-Herbalife24 dedicato agli sport di potenza, come sollevamento pesi, sprint e salti. Trovi approfondimenti su alimentazione, idratazione e recupero nelle discipline caratterizzate da sforzi brevi e intensi. Dagli un’occhiata: se qualcosa ti incuriosisce, scrivimi e lo approfondiamo insieme!",
      "shareUrl": "https://drive.google.com/file/d/15b7oeZT676Ak874uqbErdt0QSosLMFf9/view?usp=drivesdk",
      "description": "Nutrizione e recupero per discipline come sollevamento pesi, sprint e salti.",
      "learn": "Consultare il protocollo di nutrizione sportiva dedicato alle discipline di potenza e agli sforzi brevi e intensi.",
      "action": "Apri il PDF. Per inviarlo, usa «Condividi protocollo»: il messaggio specifico è già pronto.",
      "next": "Scegli il protocollo in base alla disciplina sportiva.",
      "cta": "Apri protocollo · PDF",
      "link": "https://drive.google.com/file/d/15b7oeZT676Ak874uqbErdt0QSosLMFf9/view?usp=drivesdk"
    },
    {
      "id": "coni-destrezza",
      "order": 163,
      "area": "Protocolli CONI",
      "title": "4 · Sport di destrezza",
      "type": "PDF",
      "status": "disponibile",
      "library": true,
      "shareSection": true,
      "shareLabel": "Condividi protocollo",
      "copyShareText": true,
      "shareText": "Ciao! Ti giro questo protocollo CONI-Herbalife24 dedicato agli sport di destrezza, come ginnastica, scherma, golf e vela. Approfondisce alimentazione e idratazione in relazione alle caratteristiche di queste discipline. Guardalo con calma; se vuoi chiarire qualche punto o capire quali parti leggere per prime, scrivimi e ne parliamo volentieri!",
      "shareUrl": "https://drive.google.com/file/d/1zP3GRhW2c0c_3JipUIWNwKlXIGTennu9/view?usp=drivesdk",
      "description": "Alimentazione e idratazione per discipline come ginnastica, scherma, golf e vela.",
      "learn": "Consultare il protocollo di nutrizione sportiva dedicato alle discipline di destrezza e alle loro caratteristiche.",
      "action": "Apri il PDF. Per inviarlo, usa «Condividi protocollo»: il messaggio specifico è già pronto.",
      "next": "Scegli il protocollo in base alla disciplina sportiva.",
      "cta": "Apri protocollo · PDF",
      "link": "https://drive.google.com/file/d/1zP3GRhW2c0c_3JipUIWNwKlXIGTennu9/view?usp=drivesdk"
    }
  ]
};
