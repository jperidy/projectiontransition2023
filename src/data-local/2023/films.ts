import type { Cinema, Film } from "..";

export const CITIES = {
  NANTES: "Nantes",
  PARIS: "Paris",
  TOULOUSE: "Toulouse",
  ANGERS: "Angers",
  LYON: "Lyon",
  BRUXELLES: "Bruxelles",
};

export const DAYS = {
  VENDREDI_17_11: "Vendredi 17 novembre",
  SAMEDI_18_11: "Samedi 18 novembre",
  DIMANCHE_19_11: "Dimanche 19 novembre",
};

export const CINEMAS: Record<string, Cinema> = {
  BRUXELLES: {
    name: "Cinéma Galeries",
    address: "Galerie de la Reine 28",
    zip: "1000",
    city: "Bruxelles",
    gps: {
      latitude: "50.84758881010562",
      longitude: "4.354691462449957",
    },
    access:
      "Bus 29, 71 (Arenberg), Bus 38, 63, 66 (Gare Centrale), Métros 1, 5, 3, 4 (Gare Centrale, De Brouckere)",
    ticketingOpenDate: "2022-09-30",
    ticketingRedirection:
      "https://galeries.be/fr/festival-projection-transition/",
    organization: CITIES.BRUXELLES,
    phone: "+32 2 514 74 98",
    website: "https://galeries.be/fr/",
    navigation:
      "https://www.google.com/maps/place/Cin%C3%A9ma+Galeries/@50.8474672,4.3529874,16.83z/data=!4m5!3m4!1s0x47c3c47f64b4b03b:0xb60ed3be0edcc0f!8m2!3d50.847458!4d4.354624",
  },
  NANTES: {
    name: "Cinéma centre commercial Pôle Sud",
    address: "route de Clisson",
    zip: "44115",
    city: "Basse Goulaine",
    gps: {
      latitude: "47.18845277860192",
      longitude: "-1.4705002865065424",
    },
    bus: "ligne 2 (Pirmil), Bus 39 (Challonges), Bus 27 (Pôle Sud)",
    ter: `C6 au départ de la Gare de Nantes jusqu'à l'arrêt "Vertou" puis 10 minutes de marche`,
    otherTransport: {
      name: "Ouest Go",
      description:
        "Nous vous proposons également de trouver et/ou de proposer un covoiturage sur la communauté Ouest Go spécialement créée pour l'évènement",
      link: "https://ouestgo.fr/covoiturage-communaute/623",
    },
    ticketingOpenDate: "2022-09-15",
    ticketingRedirection:
      "https://www.cinepolesud.fr/evenement/2029044-projection-transition",
    organization: CITIES.NANTES,
    phone: "+33 (0)2 28 00 98 98",
    website: "https://www.cinepolesud.fr/",
    navigation:
      "https://www.google.fr/maps/place/Cin%C3%A9+P%C3%B4le+Sud/@47.1883106,-1.4704681,17z/data=!3m1!4b1!4m5!3m4!1s0x4805e5efe8d6b5fd:0x3e5faedbc6377a51!8m2!3d47.1883106!4d-1.4704681",
  },
  PARIS: {
    name: "Cinéma les 7 Parnassiens",
    address: "98 Bd du Montparnasse",
    zip: "75014",
    city: "Paris",
    gps: {
      latitude: "48.84259512082188",
      longitude: "2.3276928421198373",
    },
    access:
      "M4 (Vavin), M6 (Edgard Quinet ou Montparnasse Bienvenue), M12 (Montparnasse Bienvenue), M13 (Notre-Dame-des-Champs), Bus 58, 68, 82, 91 (Vavin)",
    ticketingOpenDate: "2022-09-15",
    ticketingRedirection:
      "https://www.parnassiens.com/evenement/2029152-projection-transition",
    organization: CITIES.PARIS,
    phone: "+33 (0)1 43 35 13 89",
    website: "https://www.parnassiens.com/",
    navigation:
      "https://www.google.fr/maps/place/Les+7+Parnassiens/@48.8424433,2.3254505,17z/data=!4m5!3m4!1s0x47e671cc20eb63df:0x9a3509c72205a717!8m2!3d48.8424398!4d2.3276392",
  },
  LYON_BELLECOURT: {
    name: "Pathé Bellecour",
    address: "79 rue de la République",
    zip: "69002",
    city: "Lyon",
    gps: {
      latitude: "45.75882771729666",
      longitude: "4.834987237230601",
    },
    access:
      'Métro ligne A ou D, arrêt "Bellecour" ; en voiture sortie centre-ville et direction Presqu\'Ile de Lyon ; parkings : République, Bellecour, Lyon Antonin Poncet.',
    ticketingOpenDate: "2022-10-18",
    ticketingRedirection: "https://www.pathe.fr/cinemas/cinema-pathe-bellecour",
    organization: CITIES.LYON,
    phone: "",
    website: "https://www.pathe.fr/cinemas/cinema-pathe-bellecour",
    navigation:
      "https://www.google.com/maps/place/Path%C3%A9+Bellecour/@45.7586856,4.8301807,17z/data=!4m14!1m7!3m6!1s0x47f4ea51492ed9df:0x11722c07dd72d057!2sPath%C3%A9+Bellecour!8m2!3d45.7586857!4d4.8350516!16s%2Fg%2F1hb_g34yy!3m5!1s0x47f4ea51492ed9df:0x11722c07dd72d057!8m2!3d45.7586857!4d4.8350516!16s%2Fg%2F1hb_g34yy?entry=ttu",
  },
  LYON_LEONARD: {
    name: "L'Atelier Léonard de Vinci / Médiathèque Maison de quartier",
    address: "7 avenue Maurice Thorez",
    zip: "69120",
    city: "Vaulx-en-Velin ",
    gps: {
      latitude: "45.783706725892166",
      longitude: "4.911255203973906",
    },
    access:
      'Métro ligne A ou D, arrêt "Bellecour" ; en voiture sortie centre-ville et direction Presqu\'Ile de Lyon ; parkings : République, Bellecour, Lyon Antonin Poncet.',
    ticketingOpenDate: "2022-10-18",
    ticketingRedirection:
      "https://bm.mairie-vaulxenvelin.fr/content/mediatheque-maison-de-quartier-leonard-de-vinci-0",
    organization: CITIES.LYON,
    phone: "",
    website:
      "https://bm.mairie-vaulxenvelin.fr/content/mediatheque-maison-de-quartier-leonard-de-vinci-0",
    navigation:
      "https://www.google.com/maps/place/L'Atelier+L%C3%A9onard+de+Vinci+%2F+M%C3%A9diath%C3%A8que+Maison+de+quartier/@45.783617,4.9086803,17z/data=!4m14!1m7!3m6!1s0x47f4c1a450f08e7b:0xc386b6add080c4d6!2sL'Atelier+L%C3%A9onard+de+Vinci+%2F+M%C3%A9diath%C3%A8que+Maison+de+quartier!8m2!3d45.783617!4d4.9112552!16s%2Fg%2F11snpsrr_8!3m5!1s0x47f4c1a450f08e7b:0xc386b6add080c4d6!8m2!3d45.783617!4d4.9112552!16s%2Fg%2F11snpsrr_8?entry=ttu",
  },
  TOULOUSE_TOURNEFEUILLE: {
    name: "Utopia Tournefeuille",
    address: "impasse du Château",
    zip: "31170",
    city: "Tournefeuille",
    gps: {
      latitude: "43.58195539024117",
      longitude: "1.3474777248398482",
    },
    access:
      "Métro A (Arênes) puis BUS 3 (Tournefeuille Les Chênes), Bus 63 (Mairie Tournefeuille)",
    ticketingOpenDate: "2022-10-07",
    ticketingRedirection:
      "https://www.helloasso.com/associations/the-shifters/evenements/ehguxqci",
    organization: CITIES.TOULOUSE,
    phone: "+33 (0)5 61 50 50 43",
    website: "http://www.cinemas-utopia.org/toulouse/",
    navigation:
      "https://www.google.com/maps/place/Utopia+Tournefeuille/@43.5818389,1.3453105,17z/data=!3m1!4b1!4m5!3m4!1s0x12aeb0f29c8b03bf:0x85c8d311c7b9d594!8m2!3d43.5818074!4d1.347509?shorturl=1",
  },
  TOULOUSE_AMERICAN: {
    name: "American Cosmograph",
    address: "24 rue Montardy ",
    zip: "31000",
    city: "Toulouse",
    gps: {
      latitude: "43.60404063215799",
      longitude: "1.4468047320334827",
    },
    access: "",
    ticketingOpenDate: "2022-10-07",
    ticketingRedirection: "https://www.american-cosmograph.fr/",
    organization: CITIES.TOULOUSE,
    phone: "+33 (0)5 61 50 50 43",
    website: "https://www.american-cosmograph.fr/",
    navigation:
      "https://www.google.com/maps/place/American+Cosmograph/@43.603963,1.4442191,17z/data=!3m1!4b1!4m6!3m5!1s0x12aebc9c23f36ed9:0x13cd48f5eb29ea15!8m2!3d43.603963!4d1.446794!16s%2Fg%2F11gb3grk0r?entry=ttu",
  },
};

export const films: Film[] = [
  {
    edition: 2023,
    title: "Les Temps modernes",
    author: "Charles Chapelin",
    releaseDate: 1936,
    duration: "1h27",
    originalTitle: "Modern Times",
    theme: "Modernité et écologie : quel sens donner au progrès ?",
    image: {
      summary: "2023/Les temps modernes.jpg",
      programmation: "",
    },
    summary:
      "Charlot est ouvrier dans une immense usine. Il resserre quotidiennement des boulons. Mais les machines, le travail à la chaîne le rendent malade, il abandonne son poste et recueille une orpheline…",
    trailer: "GLeDdzGUTq0",
    debat: "",
    redirect: "/films/les-temps-modernes",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.TOULOUSE,
        day: DAYS.SAMEDI_18_11,
        moment: "15h45",
        debatMoment: "17h15",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
    ],
  },
  {
    edition: 2023,
    title: "Gagarine",
    author: "Fanny Liatard / Jérémy Trouilh",
    releaseDate: 2021,
    duration: "1h38",
    originalTitle: "Gagarine",
    theme: "Dans quelle ville vivre demain ?",
    image: {
      summary: "2023/Gagarine.jpg",
      programmation: "",
    },
    summary:
      'Youri, 16 ans, a grandi à Gagarine, immense cité de briques rouges d’Ivry-sur-Seine, où il rêve de devenir cosmonaute. Quand il apprend qu’elle est menacée de démolition, Youri décide de rentrer en résistance. Avec la complicité de Diana, Houssam et des habitants, il se donne pour mission de sauver la cité, devenue son "vaisseau spatial".',
    trailer: "vZSx8bpiVe4",
    debat: "",
    redirect: "/films/gagarine",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.VENDREDI_17_11,
        moment: "14h",
        debatMoment: "15h50",
        animator: "Simon Lebrette",
        participants: [
          {
            name: "Fanny Liatard",
            description: "",
          },
          {
            name: "Jérémy Trouilh",
            description: "",
          },
          {
            name: "Olivier Faber",
            description: "Architecte | Co-fondateur de Roofscapes",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.VENDREDI_17_11,
        moment: "13h45",
        debatMoment: "15h25",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.VENDREDI_17_11,
        moment: "14h",
        debatMoment: "15h50",
        animator: "",
        participants: [
          {
            name: "Lucille PAULET",
            description: "Responsable de projets à Robin des Villes",
          },
          {
            name: "Matthieu FISCHER",
            description: "Adjoint à l'Urbanisme à la mairie de Vaulx-en-Velin",
          },
          {
            name: "Harout Mekhsian",
            description: "Directeur CCO La Rayonne",
          },
        ],
        cinema: CINEMAS.LYON_LEONARD,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_17_11,
        moment: "14h00",
        debatMoment: "15h50",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.VENDREDI_17_11,
        moment: "",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
    ],
  },
  {
    edition: 2023,
    title: "2001 : l'Odysée de l'espace",
    author: "Stanley Kubrick",
    releaseDate: 1968,
    duration: "1h38",
    originalTitle: "2001: A Space Odyssey ",
    theme: "Modernité et écologie : quel sens donner au progrès ?",
    image: {
      summary: "2023/2001 l'odyssée de l'espace.jpg",
      programmation: "",
    },
    summary:
      "À l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.",
    trailer: "5px2VwyCeWE",
    debat: "",
    redirect: "/films/l-odysee-de-l-espace",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.VENDREDI_17_11,
        moment: "21h",
        debatMoment: "23h40",
        animator: "Simon Lebrette",
        participants: [
          {
            name: "Jean-Marc Jancovici",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.DIMANCHE_19_11,
        moment: "14h",
        debatMoment: "16h25",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.VENDREDI_17_11,
        moment: "",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "Jean-Marc Jancovici",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
    ],
  },
  {
    edition: 2023,
    title: "Même la pluie",
    author: "Icíar Bollaín",
    releaseDate: 2010,
    duration: "1h43",
    originalTitle: "También la lluvia",
    theme: "L’eau, une ressource pas si commune ?",
    image: {
      summary: "2023/Même la pluie.jpg",
      programmation: "",
    },
    summary:
      "Sebastian, jeune réalisateur passionné et son producteur arrivent dans le décor somptueux des montagnes boliviennes pour entamer le tournage d'un film. Les budgets de production sont serrés et Costa, le producteur, se félicite de pouvoir employer des comédiens et des figurants locaux à moindre coût. Mais bientôt le tournage est interrompu par la révolte menée par l'un des principaux figurants contre le pouvoir en place qui souhaite privatiser l'accès à l'eau courante. Costa et Sebastian se trouvent malgré eux emportés dans cette lutte pour la survie d'un peuple démuni. Ils devront choisir entre soutenir la cause de la population et la poursuite de leur propre entreprise sur laquelle ils ont tout misé. Ce combat pour la justice va bouleverser leur existence.",
    trailer: "jX-X4hgbycw",
    debat: "",
    redirect: "/films/meme-la-pluie",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.SAMEDI_18_11,
        moment: "10h15",
        debatMoment: "12h00",
        animator: "Audrey boehly",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.DIMANCHE_19_11,
        moment: "19h00",
        debatMoment: "20h45",
        animator: "Audrey boehly",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.SAMEDI_18_11,
        moment: "18h00",
        debatMoment: "19h50",
        animator:
          "Valentine Ambert - Chargée de mission Dévelopement Durable chez Suez Environnement",
        participants: [
          {
            name: "Sébastien LEGRAND",
            description: "Ingénieur chef de projets au CNR",
          },
          {
            name: "Nicolas ALBAN",
            description:
              "Directeur délégation de Lyon à l'Agence de l'eau Rhone Mediterranée Corse",
          },
        ],
        cinema: CINEMAS.LYON_BELLECOURT,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_19_11,
        moment: "11h00",
        debatMoment: "12h45",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.BRUXELLES,
        day: "",
        moment: "1h43",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "Jean-Marc Jancovici",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
    ],
  },
  {
    edition: 2023,
    title: "12 Hommes en colère",
    author: "Sidney Lumet",
    releaseDate: 1957,
    duration: "1h35",
    originalTitle: "Twelve Angry Men",
    theme: "Transition : comment faire basculer les opinions ?",
    image: {
      summary: "2023/12 hommes.jpg",
      programmation: "",
    },
    summary:
      "Un jeune homme d'origine modeste est accusé du meurtre de son père et risque la peine de mort. Le jury composé de douze hommes se retire pour délibérer et procède immédiatement à un vote : onze votent coupable, or la décision doit être prise à l'unanimité. Le juré qui a voté non-coupable, sommé de se justifier, explique qu'il a un doute et que la vie d'un homme mérite quelques heures de discussion. Il s'emploie alors à les convaincre un par un.",
    trailer: "TEN-2uTi2c0",
    debat: "",
    redirect: "/films/12-hommes-en-colere",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.SAMEDI_18_11,
        moment: "15h",
        debatMoment: "16h40",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.SAMEDI_18_11,
        moment: "15h",
        debatMoment: "16h30",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.VENDREDI_17_11,
        moment: "20h",
        debatMoment: "21h35",
        animator: "",
        participants: [
          {
            name: "Louise TSCHANZ",
            description: "Avocate associée - Fondatrice de Kaizen Avocat",
          },
        ],
        cinema: CINEMAS.LYON_LEONARD,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.SAMEDI_18_11,
        moment: "20h30",
        debatMoment: "22h05",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.SAMEDI_18_11,
        moment: "",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2023,
    title: "Fight Club",
    author: "David Fincher",
    releaseDate: 1999,
    duration: "2h19",
    originalTitle: "Fight Club",
    theme: "L'engagement rend-il fou ?",
    image: {
      summary: "2023/Fight Club 1.jpg",
      programmation: "",
    },
    summary:
      "Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres personnes seules qui connaissent la misère humaine, morale et sexuelle. C'est pourquoi il va devenir membre du Fight club, un lieu clandestin ou il va pouvoir retrouver sa virilité, l'échange et la communication. Ce club est dirigé par Tyler Durden, une sorte d'anarchiste entre gourou et philosophe qui prêche l'amour de son prochain.",
    trailer: "BdJKm16Co6M",
    debat: "",
    redirect: "/films/fight-club",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.SAMEDI_18_11,
        moment: "19h15",
        debatMoment: "21h40",
        animator: "",
        participants: [
          {
            name: "Anastasia Magat",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.DIMANCHE_19_11,
        moment: "14h",
        debatMoment: "16h20",
        animator: "",
        participants: [
          {
            name: "Nadège RAFFOUX",
            description:
              "Doctorante en psychologie sur le thème de l'écoanxiété à l'université lumière Lyon 2",
          },
          {
            name: "Sarah KOLLER",
            description: "Chercheuse à l'université de Lausanne",
          },
        ],
        cinema: CINEMAS.LYON_BELLECOURT,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_17_11,
        moment: "20h00",
        debatMoment: "22h20",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
      {
        city: CITIES.BRUXELLES,
        day: "",
        moment: "",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2023,
    title: "Le Règne animal",
    author: "Thomas Cailley",
    releaseDate: 2023,
    duration: "2h08",
    originalTitle: "Le Règne animal",
    theme: "",
    image: {
      summary: "2023/Le règne animal.jpg",
      programmation: "",
    },
    summary:
      "Dans un monde en proie à une vague de mutations qui transforment peu à peu certains humains en animaux, François fait tout pour sauver sa femme, touchée par ce phénomène mystérieux. Alors que la région se peuple de créatures d'un nouveau genre, il embarque Émile, leur fils de 16 ans, dans une quête qui bouleversera à jamais leur existence.",
    trailer: "K1pfR_IC7pU",
    debat: "",
    redirect: "/films/le-regne-animal",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.DIMANCHE_19_11,
        moment: "10h00",
        debatMoment: "12h15",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
    ],
  },
  {
    edition: 2023,
    title: "Captain Fantastic",
    author: "Matt Ross",
    releaseDate: 2016,
    duration: "1h58",
    originalTitle: "Captain Fantastic",
    theme: "Du rêve à la réalité, comment faire société(s) demain ?",
    image: {
      summary: "2023/Captain Fantastic.jpg",
      programmation: "",
    },
    summary:
      "Dans les forêts reculées du nord-ouest des Etats-Unis, vivant isolé de la société, un père dévoué a consacré sa vie toute entière à faire de ses six jeunes enfants d’extraordinaires adultes.",
    trailer: "0h0LnWAdwbM",
    debat: "",
    redirect: "/films/captain-fantastic",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.DIMANCHE_19_11,
        moment: "17h00",
        debatMoment: "19h00",
        animator: "Juliette Quef",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.VENDREDI_17_11,
        moment: "19h45",
        debatMoment: "21h45",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.SAMEDI_18_11,
        moment: "14h00",
        debatMoment: "16h00",
        animator:
          "Lucas Martin-brodzicki - Journaliste pigiste spécialiste de l'écologie",
        participants: [
          {
            name: "Justine Swordy-borie",
            description:
              "Coordinatrice générale & coordinatrice des Ambassadeurs du changement à Anciela",
          },
          {
            name: "Nicolas Lepretre",
            description:
              "Chargé de mission prospective des politiques publiques à la Métropole de Lyon",
          },
          {
            name: "Bernard Devert",
            description: "Président-Fondateur chez Habitat et Humanisme",
          },
        ],
        cinema: CINEMAS.LYON_BELLECOURT,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_19_11,
        moment: "18h00",
        debatMoment: "20h00",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
      {
        city: CITIES.BRUXELLES,
        day: "",
        moment: "",
        debatMoment: "",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2023,
    title: "Woman at war",
    author: "Charles Chapelin",
    releaseDate: 2018,
    duration: "1h41",
    originalTitle: "Kona fer í stríð",
    theme: "Comment faire entendre sa voix quand personne ne vous écoute ?",
    image: {
      summary: "2023/woman at war.jpg",
      programmation: "",
    },
    summary:
      "Halla, la cinquantaine, déclare la guerre à l’industrie locale de l’aluminium, qui défigure son pays. Elle prend tous les risques pour protéger les Hautes Terres d’Islande… Mais la situation pourrait changer avec l’arrivée inattendue d’une petite orpheline dans sa vie…  ",
    trailer: "08OkDVUuybE",
    debat: "",
    redirect: "/films/woman-at-war",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.ANGERS,
        day: DAYS.SAMEDI_18_11,
        moment: "19h45",
        debatMoment: "21h25",
        animator: "",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.BRUXELLES,
        day: "",
        moment: "",
        debatMoment: "",
        animator:
          "DEKEGELEER Gwenaëlle - journaliste, éditrice, présentatrice à la RTBF. Animatrice de «Alors on change !»",
        participants: [
          {
            name: "",
            description: "",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
];
