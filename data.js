window.SUPPORTO_DATA = {
  meta: {
    title: "SUPPORTO 3.0",
    team: "BE ONE TEAM",
    subtitle: "Il materiale giusto. Nel momento giusto.",
    updated: "20/10/2026"
  },
  telegram: "https://t.me/+SA8wPHU0MPXbtz4x",
  paths: {
    "Primi 7 giorni": [
      {n:1,title:"Obiettivo personale",text:"Definisci l'obiettivo per avere un piano di attività coerente.",status:"preparazione",resource:"obiettivo"},
      {n:2,title:"Lista nomi",text:"Costruisci il tuo capitale aziendale partendo dalle persone che conosci.",status:"preparazione",resource:"lista"},
      {n:3,title:"Gestire e ampliare la lista nomi",text:"Amplia la lista attraverso quotidianità, relazioni e social.",status:"preparazione",resource:"contatti"},
      {n:4,title:"Come invitare",text:"Inviti per attività e prodotto, con gestione delle obiezioni.",status:"preparazione",resource:"invitare"}
    ],
    "Primi 30 giorni": [
      {n:5,title:"Organizzare la settimana",text:"Agenda, DMO e priorità in base al tempo disponibile.",status:"preparazione",resource:"settimana"},
      {n:6,title:"Inaugurazione attività",text:"Preparazione, inviti, svolgimento e follow-up.",status:"preparazione",resource:"inaugurazione"},
      {n:7,title:"Conoscenza prodotti",text:"Conoscere i prodotti in modo semplice e operativo.",status:"preparazione",resource:"prodotti"},
      {n:8,title:"DMO Trattamento viso",text:"Usare il trattamento viso come metodo operativo.",status:"preparazione",resource:"skin"},
      {n:9,title:"DMO Valutazione corporea",text:"Usare la valutazione corporea come metodo operativo.",status:"preparazione",resource:"hgo"},
      {n:10,title:"DMO Usa Indossa Parla",text:"Trasformare l'esperienza personale in conversazioni naturali.",status:"preparazione",resource:"usa-parla"},
      {n:11,title:"Assistenza clienti",text:"Assistenza, follow-up, riordino e sviluppo referenze.",status:"preparazione",resource:"clienti"}
    ],
    "Primi 90 giorni": [
      {n:12,title:"Presentare l’opportunità",text:"Colloquio individuale e saper presentare un HOM.",status:"preparazione",resource:"opportunita"}
    ]
  },
  resources: [
    {
      id:"book-pdf", order:1, area:"Avviamento", title:"Book Colazione 3.0", type:"PDF", status:"disponibile",
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
      id:"foto-prima-dopo", order:3, area:"Foto prima e dopo", title:"Foto prima e dopo", type:"Galleria", status:"disponibile",
      description:"Raccolta di foto prima e dopo del team.",
      learn:"Accedere rapidamente alla raccolta di foto prima e dopo.",
      action:"Apri la cartella e consulta le immagini disponibili.",
      next:"Assistenza clienti",
      cta:"Apri foto prima e dopo",
      link:"https://drive.google.com/drive/folders/1EaYqgYEfbRStv9SPR-RYCDS06HDgCK2A?usp=drive_link"
    },
    {
      id:"uso-vendita", order:2, area:"Strumenti", title:"Uso personale vs vendita", type:"Infografica", status:"disponibile",
      description:"Confronto visivo tra uso personale e vendita nel modello operativo.",
      learn:"Capire con un colpo d'occhio la differenza tra uso personale e vendita.",
      action:"Apri l'infografica e usala come supporto visivo quando serve.",
      next:"Obiettivo personale",
      cta:"Apri infografica",
      link:"https://drive.google.com/file/d/1JhcuVgNTVJdGfnOCzijdBG19SykVL_5K/view?usp=drivesdk"
    },
    {id:"obiettivo",order:10,area:"Avviamento",title:"Obiettivo personale",type:"Video tutorial",status:"preparazione",description:"Obiettivo economico, impegno, aspettative realistiche e supporto.",learn:"Definire il proprio punto di partenza.",action:"Materiale in preparazione.",next:"Book Colazione"},
    {id:"lista",order:20,area:"Creare il tuo mercato",title:"Lista nomi",type:"Video tutorial",status:"preparazione",description:"Come creare la prima lista nomi.",learn:"Costruire una lista ampia senza pregiudizi.",action:"Materiale in preparazione.",next:"Gestire e ampliare la lista nomi"},
    {id:"contatti",order:30,area:"Creare il tuo mercato",title:"Gestire e ampliare la lista nomi",type:"Video tutorial",status:"preparazione",description:"Lista, ampliamento, social e contatti personali.",learn:"Tenere viva e ampliare la lista.",action:"Materiale in preparazione.",next:"Come invitare"},
    {id:"invitare",order:40,area:"Creare il tuo mercato",title:"Come invitare",type:"Video tutorial",status:"preparazione",description:"Conversazioni, inviti, appuntamenti, HOM e risposte.",learn:"Aprire conversazioni e proporre un appuntamento.",action:"Materiale in preparazione.",next:"Inaugurazione attività"},
    {id:"inaugurazione",order:50,area:"Creare il tuo mercato",title:"Inaugurazione attività",type:"Video tutorial",status:"preparazione",description:"Preparazione, inviti, svolgimento e follow-up.",learn:"Organizzare un'inaugurazione semplice ed efficace.",action:"Materiale in preparazione.",next:"Organizzare la settimana"},
    {id:"settimana",order:60,area:"Organizzare l'attività",title:"Organizzare la settimana",type:"Video tutorial",status:"preparazione",description:"Agenda, DMO e priorità in base al tempo disponibile.",learn:"Trasformare gli obiettivi in agenda.",action:"Materiale in preparazione.",next:"Trova clienti"},
    {id:"prodotti",order:70,area:"Prodotti e clienti",title:"Conoscenza prodotti",type:"Video tutorial",status:"preparazione",description:"Conoscenze essenziali sui prodotti e sul loro utilizzo.",learn:"Conoscere i prodotti in modo semplice e operativo.",action:"Materiale in preparazione.",next:"DMO Trattamento viso"},
    {id:"skin",order:80,area:"DMO / HGO / Skin",title:"DMO Trattamento viso",type:"Video tutorial",status:"preparazione",description:"Presentazione e utilizzo operativo del metodo Skin.",learn:"Usare il trattamento viso come metodo di acquisizione clienti.",action:"Materiale in preparazione.",next:"Assistenza clienti"},
    {id:"hgo",order:90,area:"DMO / HGO / Skin",title:"DMO Valutazione corporea",type:"Video tutorial",status:"preparazione",description:"HGO, schede e applicazione pratica.",learn:"Usare HGO/Tanita in modo operativo.",action:"Materiale in preparazione.",next:"Assistenza clienti"},
    {id:"usa-parla",order:100,area:"DMO / HGO / Skin",title:"DMO Usa Indossa Parla",type:"Video tutorial",status:"preparazione",description:"Applicazione dal vivo e sui social.",learn:"Trasformare l'esperienza personale in conversazioni naturali.",action:"Materiale in preparazione.",next:"Assistenza clienti"},
    {id:"clienti",order:110,area:"Prodotti e clienti",title:"Assistenza clienti",type:"Video tutorial",status:"preparazione",description:"Assistenza, follow-up, riordino e referenze.",learn:"Seguire il cliente dopo l'acquisto.",action:"Materiale in preparazione.",next:"Presentare l'opportunità"},
    {id:"opportunita",order:120,area:"Opportunità",title:"Presentare l'opportunità",type:"Video tutorial",status:"preparazione",description:"Colloquio individuale e HOM con esempi pratici.",learn:"Presentare l'opportunità in modo semplice e professionale.",action:"Materiale in preparazione.",next:"Primo membro"},
    {id:"testimonianze",order:130,area:"Duplicazione",title:"Videotestimonianze",type:"Banca dati",status:"preparazione",description:"Testimonianze attività e prodotto, brevi e credibili.",learn:"Usare testimonianze come supporto, senza esagerazioni.",action:"Materiale in preparazione.",next:"Duplica"}
  ]
};