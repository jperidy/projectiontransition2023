import type { Cinema, Film } from "..";

export const CITIES = {
  PARIS: "Paris",
  ANGERS: "Angers",
  LYON: "Lyon",
  TOULOUSE: "Toulouse",
  NANTES: "Nantes",
  BRUXELLES: "Bruxelles",
};

export const DAYS = {
  VENDREDI_17_11: "Vendredi 17 novembre",
  SAMEDI_18_11: "Samedi 18 novembre",
  DIMANCHE_19_11: "Dimanche 19 novembre",
  MARDI_21_11: "Mardi 21 novembre",
  MERCREDI_22_11: "Mercredi 22 novembre",
  JEUDI_23_11: "Jeudi 23 novembre",
};

export const CINEMAS: Record<string, Cinema> = {
  BRUXELLES: {
    name: "Cinéma Vendôme",
    address: "Chau. de Wavre 18",
    zip: "1050",
    city: "Ixelles",
    gps: {
      latitude: "50.838361717988114",
      longitude: "4.36288717708155",
    },
    access: "",
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection: "https://www.billetweb.fr/projection-transition",
    organization: CITIES.BRUXELLES,
    phone: "+32 2 502 37 00",
    website: "http://www.cinema-vendome.be/",
    navigation:
      "https://www.google.com/maps/place/Cin%C3%A9ma+Vend%C3%B4me/@50.8411603,4.3575887,13.83z/data=!4m6!3m5!1s0x47c3c4860471f58b:0xda76963eb34642ba!8m2!3d50.837458!4d4.36291!16s%2Fg%2F1tj7_3v8?entry=ttu",
  },
  NANTES: {
    name: "Cinéma Saint-Paul",
    hideTicketingPage: true,
    address: "38 Rue Julien Douillard",
    zip: "44400",
    city: "Rezé",
    gps: {
      latitude: "47.18436318956963",
      longitude: "-1.544098836510106",
    },
    bus: "",
    ter: ``,
    ticketingOpenDate: "",
    ticketingRedirection: "https://cinemastpaul.fr/",
    ticketingMessage: "Séance réservée au projet pédagogique",
    organization: CITIES.NANTES,
    phone: "+33 (0)2 40 75 41 91",
    website: "https://cinemastpaul.fr/",
    navigation:
      "https://www.google.com/maps/place/Cin%C3%A9ma+Saint+Paul/@47.182759,-1.5483476,15z/data=!4m14!1m7!3m6!1s0x4805e969e716f681:0x1964a21f6c21e39b!2sCin%C3%A9ma+Saint+Paul!8m2!3d47.1838674!4d-1.5441848!16s%2Fg%2F1tdqn0jv!3m5!1s0x4805e969e716f681:0x1964a21f6c21e39b!8m2!3d47.1838674!4d-1.5441848!16s%2Fg%2F1tdqn0jv?entry=ttu",
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
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection:
      "https://www.parnassiens.com/evenement/2109690-festival-projection-transition-2023",
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
    ticketingOpenDate: "2023-10-18",
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
    access: "",
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection:
      "https://bm.mairie-vaulxenvelin.fr/content/mediatheque-maison-de-quartier-leonard-de-vinci-0",
    organization: CITIES.LYON,
    phone: "",
    website:
      "https://bm.mairie-vaulxenvelin.fr/content/mediatheque-maison-de-quartier-leonard-de-vinci-0",
    navigation:
      "https://www.google.com/maps/place/L'Atelier+L%C3%A9onard+de+Vinci+%2F+M%C3%A9diath%C3%A8que+Maison+de+quartier/@45.783617,4.9086803,17z/data=!4m14!1m7!3m6!1s0x47f4c1a450f08e7b:0xc386b6add080c4d6!2sL'Atelier+L%C3%A9onard+de+Vinci+%2F+M%C3%A9diath%C3%A8que+Maison+de+quartier!8m2!3d45.783617!4d4.9112552!16s%2Fg%2F11snpsrr_8!3m5!1s0x47f4c1a450f08e7b:0xc386b6add080c4d6!8m2!3d45.783617!4d4.9112552!16s%2Fg%2F11snpsrr_8?entry=ttu",
  },
  LYON_PP: {
    hideTicketingPage: true,
    name: "L'Atelier Léonard de Vinci / Médiathèque Maison de quartier (projet pédagogique)",
    address: "7 avenue Maurice Thorez",
    zip: "69120",
    city: "Vaulx-en-Velin ",
    gps: {
      latitude: "45.783706725892166",
      longitude: "4.911255203973906",
    },
    access: "",
    ticketingOpenDate: "",
    ticketingRedirection: "",
    ticketingMessage: "Séance réservée au projet pédagogique",
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
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection:
      "https://www.helloasso.com/associations/the-shifters/evenements/projectiontransition2023toulouse",
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
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection:
      "https://www.helloasso.com/associations/the-shifters/evenements/projectiontransition2023toulouse",
    organization: CITIES.TOULOUSE,
    phone: "+33 (0)5 61 50 50 43",
    website: "https://www.american-cosmograph.fr/",
    navigation:
      "https://www.google.com/maps/place/American+Cosmograph/@43.603963,1.4442191,17z/data=!3m1!4b1!4m6!3m5!1s0x12aebc9c23f36ed9:0x13cd48f5eb29ea15!8m2!3d43.603963!4d1.446794!16s%2Fg%2F11gb3grk0r?entry=ttu",
  },
  ANGERS: {
    name: "Pathé Angers",
    address: "1 avenue des Droits de l'homme",
    zip: "49100",
    city: "Angers",
    gps: {
      latitude: "47.479613914702604",
      longitude: "-0.5507840801074252",
    },
    access:
      'Tram : Ligne A - arrêt "Berges de Maine". En bus : accès direct par la ligne 9 (direction Evantard) arrêt "faculté ou Berges de Maine". Accès en voiture : direct par l’autoroute Océane A11, sortie CHU / Palais des Congrès, en bordure du quai Félix Faure, à proximité de la Faculté de Droit et d’Economie Saint Serge. Parkings : Berge de Maine attenant au cinéma (1.60€ les 3h), Saint Serge (à 150m).',
    ticketingOpenDate: "2023-10-18",
    ticketingRedirection: "https://www.pathe.fr/cinemas/cinema-pathe-angers",
    organization: CITIES.ANGERS,
    phone: "+33 (0)2 41 18 57 63",
    website: "https://www.pathe.fr/cinemas/cinema-pathe-angers",
    navigation:
      "https://www.google.com/maps/place/Path%C3%A9+Angers/@47.4794762,-0.5533268,17z/data=!3m2!4b1!5s0x480878e654ad009d:0x7d7af2035a8c3b4d!4m6!3m5!1s0x480878e64de14687:0x29bbb1cd4f1b4f72!8m2!3d47.4794762!4d-0.5507519!16s%2Fg%2F1tf709nj?entry=ttu",
  },
};

export const films: Film[] = [
  {
    edition: 2023,
    title: "Gagarine",
    author: "Fanny Liatard et Jérémy Trouilh",
    releaseDate: 2021,
    duration: "1h38",
    theme: "Dans quelle ville vivre demain ?",
    image: {
      summary: "2023/gagarine.webp",
      programmation: "2023/Gagarine.webp",
    },
    summary:
      'Youri, 16 ans, a grandi à Gagarine, immense cité de briques rouges d’Ivry-sur-Seine, où il rêve de devenir cosmonaute. Quand il apprend qu’elle est menacée de démolition, Youri décide de rentrer en résistance. Avec la complicité de Diana, Houssam et des habitants, il se donne pour mission de sauver la cité, devenue son "vaisseau spatial".',
    trailer: "vZSx8bpiVe4",
    debat:
      "Déconstruire, reconstruire, rénover : le film Gagarine pose en miniature une partie des questions de plus en plus urgentes aujourd’hui : quelle ville souhaitons-nous pour demain ? Comment recréer du lien dans une société de plus en plus individualisée ? Comment s’adapter au réchauffement climatique en cours et à venir ? Comment imaginer une ville désirable, sobre et résiliente ? Avec nos intervenant.es et en présence des lycéennes et lycéens, nous chercherons à dessiner des pistes pour l’avenir, au croisement de l’architecture, de l’urbanisme, de la sociologie et de nos imaginaires.",
    redirect: "/films/gagarine",
    disclaimer:
      "Ce film est diffusé dans le cadre d'un projet pédagogique mené avec des lycées par l'équipe du festival.",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.VENDREDI_17_11,
        moment: "14h00",
        debatMoment: "15h50",
        animator: "Simon Lebrette - Bénévole The Shifters",
        ticketingRedirection: "https://www.helloasso.com/associations/the-shifters/evenements/projectiontransition2023parisgagarine",
        participants: [
          {
            name: "Fanny Liatard",
            description: "Réalisatrice scénariste de Gagarine",
          },
          {
            name: "Olivier Faber",
            description: "Architecte, co-fondateur de Roofscapes",
          },
          {
            name: "Sabrina Decanton",
            description: "1ère adjointe au Maire de Saint-Ouen-sur-Seine",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.VENDREDI_17_11,
        moment: "13h45",
        debatMoment: "15h25",
        animator: "Vinz Kante - Créateur du média Limit",
        withoutTicketing: true,
        ticketingMessage: "Séance réservée au projet pédagogique",
        participants: [
          {
            name: "Thomas GRENOUILLEAU",
            description:
              "Président de l'ERB Entreprise Générale",
          },
          {
            name: "Jean-Louis LEHUGER",
            description: "Directeur territorial chez Transdev",
          },
          {
            name: "Hélène CRUYPENNINCK",
            description: "Adjointe à l'Environnement à la Ville d'Angers",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.VENDREDI_17_11,
        moment: "14h00",
        debatMoment: "15h50",
        animator:
          "Hugo Struna - Journaliste environnement chez Euractiv France",
        withoutTicketing: true,
        ticketingMessage: "Séance réservée au projet pédagogique",
        participants: [
          {
            name: "Lucille PAULET",
            description: "Responsable de projets à Robin des Villes",
          },
          {
            name: "Matthieu FISCHER",
            description: "Adjoint à l'Urbanisme à la Ville de Vaulx-en-Velin",
          },
          {
            name: "Harout Mekhsian",
            description: "Directeur de la CCO La Rayonne",
          },
        ],
        cinema: CINEMAS.LYON_PP,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_17_11,
        moment: "14h00",
        debatMoment: "15h50",
        animator: "Jeanne Gallien - Chargée de Communication & Référente Communication du Groupe Locale des Shifters Midi-Pyrénées",
        withoutTicketing: true,
        ticketingMessage: "Séance réservée au projet pédagogique",
        participants: [
          {
            name: "Guillaume Dumas",
            description:
              "Urbaniste Climatologue - Ingénieur recherche chez CNRS - Centre national de la recherche scientifique",
          },
          {
            name: "Jules Guironnet",
            description:
              "Ingénieur agronome en service civique dans une association de méthanisation a petite échelle",
          },
          {
            name: "Xavier Normand",
            description: "Maire de Castanet-Tolosan, urbaniste",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.VENDREDI_17_11,
        moment: "14h00",
        debatMoment: "15h50",
        animator: "",
        withoutTicketing: true,
        ticketingMessage: "Séance réservée au projet pédagogique",
        participants: [
          {
            name: "Sylvanie GREE",
            description:
              "Paysagiste concepteur et urbaniste chez Agence d'ici Là",
          },
          {
            name: "Eric GERARD",
            description: "Directeur général de ICEO Habitat",
          },
          {
            name: "Camille MAY",
            description: "Co-fondateur du Champignon Urbain à Nantes",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
    ],
  },
  {
    edition: 2023,
    title: "2001 : l'Odyssée de l'espace",
    author: "Stanley Kubrick",
    releaseDate: 1968,
    duration: "2h21",
    originalTitle: "2001: A Space Odyssey ",
    theme: "Écologie et modernité : quel sens donner au progrès ?",
    image: {
      summary: "2023/2001-l-odyssee-de-l-espace.webp",
      programmation: "2023/2001-2.webp",
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
        moment: "20h15",
        debatMoment: "22h50",
        animator: "",
        participants: [
          {
            name: "Jean-Marc Jancovici",
            description: "Président The Shift Project",
          },
          {
            name: "Alexandra Bidet ",
            description: "Chargée de recherche au CNRS",
          },
          {
            name: "Eric Moulines",
            description: "Membre de l'Académie des Sciences",
          }
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.DIMANCHE_19_11,
        moment: "14h00",
        debatMoment: "16h25",
        animator: "Julia Meyer - Ingénieure Numérique Responsable à l'ADEME",
        ticketingRedirection:
          "https://s.pathe.fr/fr/V3308S70014/booking?_gl=1*bfziri*_gcl_au*MTg1ODcxODY2MS4xNjk3NDg1NjEx&pos=cHJpY2luZw%3D%3D",
        participants: [
          {
            name: "Renaud Hétier",
            description: "Professeur en Sciences de l'Éducation à l'Université Catholique de l'Ouest d'Angers",
          },
          {
            name: "Yannick Bourdin",
            description: "",
          }
        ],
        cinema: CINEMAS.ANGERS,
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
      summary: "2023/12-hommes-en-colere.webp",
      programmation: "2023/12-hommes.webp",
      programmationPosition: "center -100px",
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
        moment: "15h00",
        debatMoment: "16h40",
        animator: "Akos Barrin - Bénévole The Shifters",
        participants: [
          {
            name: "Anastasia Magat",
            description: "Directrice adjointe de l'Institut Rousseau",
          },
          {
            name: "Chloé Ridel",
            description: "Porte-parole du Parti socialiste",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.SAMEDI_18_11,
        moment: "15h00",
        debatMoment: "16h30",
        animator: "François Desset - Bénévole The Shifters et archéologue",
        ticketingRedirection:
          "https://s.pathe.fr/fr/V3308S69865/booking?_gl=1*1ly0fpd*_gcl_au*MTg1ODcxODY2MS4xNjk3NDg1NjEx&pos=cHJpY2luZw%3D%3D",
        participants: [
          {
            name: "François Gallon",
            description: "Docteur en sociologie, enseignant-chercheur et directeur de la formation continue à l’IRCOM",
          },
          {
            name: "Vincent Drouet",
            description: "Chargé de projet et associé de la SCOP Light",
          },
          {
            name: "Boris Butaeye",
            description: "Directeur artistique de la SCOP Light",
          },
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.VENDREDI_17_11,
        moment: "20h00",
        debatMoment: "21h35",
        animator: "Paul Messad - Journaliste environnement chez Euractiv France",
        participants: [
          {
            name: "Louise TSCHANZ",
            description: "Avocate associée - Fondatrice de Kaizen Avocat",
          },
          {
            name: "Léa Falco",
            description:
              "Formatrice aux enjeux écologiques & membre du collectif Pour un réveil écologique",
          },
        ],
        cinema: CINEMAS.LYON_LEONARD,
        ticketingRedirection:
          "https://www.eventbrite.fr/e/billets-festival-projection-transition-lyon-12-hommes-en-colere-737800851207?aff=oddtdtcreator",
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.SAMEDI_18_11,
        moment: "20h30",
        debatMoment: "22h05",
        animator: "",
        participants: [
          {
            name: "Wulfran Despicht",
            description: "Directeur de la mission démocratie Participative/Egalité femmes-hommes au conseil départemental de la Haute Garonne",
          },
          {
            name: "Zachary Baqué",
            description: "Maitre de conférences en études étatsuniennes et analyse filmique à l'Université Toulouse - Jean Jaurès",
          }
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
    ],
  },
  {
    edition: 2023,
    title: "Fight Club",
    author: "David Fincher",
    releaseDate: 1999,
    duration: "2h19",
    theme: "L'engagement, une crise d'identité ?",
    image: {
      summary: "2023/fight-club-2.webp",
      programmation: "2023/fight-club.webp",
      programmationPosition: "center top",
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
        animator: "Thierry Keller - Journaliste, essayiste, conférencier",
        participants: [
          {
            name: "Anastasia Magat",
            description: "Directrice adjointe de l'Institut Rousseau",
          },
          {
            name: "Marion Robin",
            description: "Pédopsychiatre dans le département de Psychiatrie de l’adolescent de l'Institut Mutualiste Montsouris",
          },
          {
            name: "Amine Messal",
            description: "Étudiant à l'École normale supérieure de Paris-Saclay et militant",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.LYON,
        day: DAYS.DIMANCHE_19_11,
        moment: "14h00",
        debatMoment: "16h20",
        animator: "Florence Gault - Journaliste et formatrice",
        participants: [
          {
            name: "Nadège RAFFOUX",
            description: "Psychologue",
          },
          {
            name: "Anaïs LESIOURD",
            description: "Facilitatrice et formatrice en accompagnement du changement écologique chez Néoécolo",
          },
          {
            name: "Benoit Rolland de Ravel",
            description: "Co-fondateur de la Fresque des Nouveaux Récits",
          },
        ],
        cinema: CINEMAS.LYON_BELLECOURT,
        ticketingRedirection: "https://urlz.fr/nLpQ",
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_17_11,
        moment: "20h00",
        debatMoment: "22h20",
        animator:
          "Marie Pierre Cassagne & Thomas  Bouyer - Membres de l'association Toulouse en Transition",
        participants: [
          {
            name: "Guillaume Mouillet",
            description:
              "Référent du groupe local Midi Pyrénées des Shifters et ingénieur informaticien",
          },
          {
            name: "Claire Wallez",
            description: "Psychologue spécialisée dans l’éco-anxiété",
          },
          {
            name: "Iris Dion",
            description: "Climatologue",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
    ],
  },
  {
    edition: 2023,
    title: "Captain Fantastic",
    author: "Matt Ross",
    releaseDate: 2016,
    duration: "1h58",
    theme: "Du rêve à la réalité, comment faire société demain ?",
    image: {
      summary: "2023/captain-fantastic.webp",
      thumbnailPosition: "top",
      programmation: "2023/captain-fantastic.webp",
      programmationPosition: "center top",
    },
    summary:
      "Dans les forêts reculés du nord-ouest des Etats-Unis, Ben, un père dévoué élève seul ses 6 enfants. Accès illimité à la culture, esprit critique, respect de la nature, entraînement physique régulier, autosuffisance alimentaire, à travers un mode d’éducation alternatif, Ben espère en faire des futurs adultes responsables et les préserver d’un monde extérieur dont il déteste les futilités et excès. La famille vit isolée du monde ordinaire jusqu’à ce que Leslie, la mère bipolaire mette fin à ces jours à l’hôpital psychiatrique. Pour se rendre à l’enterrement, Ben et ses enfants doivent retrouver le monde extérieur, ce qui questionne les méthodes d’éducation et remet en cause leurs modes de vie anticonformistes.",
    trailer: "0h0LnWAdwbM",
    debat:
      "Si l’éducation parentale alternative est au coeur du film, il met aussi en lumière la difficulté de s’extraire du système a fortiori quand il s’agit d’une collectivité, aussi petite soit-elle comme la famille. Pour changer le système la meilleure méthode est-elle d’en sortir ou ne faut-il pas y rester et composer avec pour le changer ? A défaut de se mettre à l’écart du monde, les citoyens qui constatent jour après jour les dégâts de nos modes de vie, composent déjà avec ce conlit interne, chacun agissant au mieux pour limiter les dégâts. Pourtant, est-ce que cela ne participe pas à la persistance d'un système socio-économique délétère ? Dans quelle mesure ne sommes-nous pas complice ?",
    redirect: "/films/captain-fantastic",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.DIMANCHE_19_11,
        moment: "17h00",
        debatMoment: "19h00",
        animator:
          "Loup Espargilière - Co-fondateur et rédacteur en chef de Vert, le média",
        participants: [
          {
            name: "Gabrielle Paoli ",
            description:
              "Administratrice de la Coopérative Oasis",
          },
          {
            name: "Lucile Schmid ",
            description: "Co-fondatrice et Vice présidente de La Fabrique Écologique",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.VENDREDI_17_11,
        moment: "19h45",
        debatMoment: "21h45",
        animator: "Amélie Tissot - Bénévole The Shifters",
        ticketingRedirection:
          "https://s.pathe.fr/fr/V3308S69863/booking?_gl=1*2ifr99*_gcl_au*MTg1ODcxODY2MS4xNjk3NDg1NjEx&pos=cHJpY2luZw%3D%3D",
        participants: [
          {
            name: "Virginie Raisson-Victor",
            description:
              "Géopolitologue et prospectiviste, Présidente du GIEC des Pays-de-la-Loire, Co-fondatrice du Grand Défi des entreprises pour la planète",
          },
          {
            name: "Adrien Salomé",
            description:
              "Enseignant & consultant énergie/climat et redirectionniste à vingt et un vingt deux",
          },
          {
            name: "Francis Guiteau",
            description: "Adjoint à la rénovation urbaine, la vie des quartiers et la vie associative à la ville d'Angers",
          }
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
        ticketingRedirection: "https://urlz.fr/nLpw",
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_19_11,
        moment: "18h00",
        debatMoment: "20h00",
        animator:
          "Amaury La Burthe - Entrepreneur en transition et bénévole chez Les Shifters",
        participants: [
          {
            name: "Caroline  Leroy",
            description: "Doctorante chercheuse en Gouvernance adaptative et résilience des territoires touristiques",
          },
          {
            name: "Jean Phillipe Decka",
            description: "Auteur du livre Le courage de RENONCER, Doctorant-chercheur en sciences de gestion",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.JEUDI_23_11,
        moment: "18h30",
        debatMoment: "20h45",
        animator: "",
        participants: [
          {
            name: "Pierre LARROUTUROU",
            description: "Parlementaire européen",
          },
          {
            name: "Pierre-Alexandre Klein",
            description:
              'Co fondateur Tiers Lieu "l\'arbre qui pousse" à Ottignie',
          },
          {
            name: "Valérie Zoydo",
            description: "Storytelleuse du changement individuel et collectif",
          }
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
    theme: "Comment (re)bâtir notre lien au vivant ?",
    image: {
      summary: "2023/le-regne-animal.webp",
      programmation: "2023/le-regne-animal.webp",
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
        animator: "Alexandre Florentin - Conseiller à la Ville de Paris",
        participants: [
          {
            name: "Camille Brunel",
            description: "Journaliste, écrivain, critique de cinéma",
          },
          {
            name: "Marc-André Selosse",
            description: "Professeur du Muséum national d'Histoire naturelle, Paris",
          },
          {
            name: "Emanuele Coccia",
            description: "Philosophe et maître de conférences à l'École des hautes études en sciences sociales",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
    ],
  },
  {
    edition: 2023,
    title: "Woman at war",
    author: "Benedikt Erlingsson",
    releaseDate: 2018,
    duration: "1h41",
    originalTitle: "Kona fer í stríð",
    theme: "Comment faire entendre sa voix quand personne ne vous écoute ?",
    image: {
      summary: "2023/woman-at-war.webp",
      programmation: "2023/woman-at-war-1.webp",
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
        animator:
          "Clément Mabi - Maître de conférence en Sciences de l’Information et de la Communication à l'Université de Technologie de Compiègne",
        ticketingRedirection:
          "https://s.pathe.fr/fr/V3308S69867/booking?_gl=1*vm23wb*_gcl_au*MTg1ODcxODY2MS4xNjk3NDg1NjEx",
        participants: [
          {
            name: "William AUCANT",
            description: "Conseiller régional des Pays-de-la-Loire et membre de la Convention Citoyenne pour le Climat",
          },
          {
            name: "Esther Le Cordier",
            description: "Militante pour différentes luttes écologistes",
          }
        ],
        cinema: CINEMAS.ANGERS,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.MARDI_21_11,
        moment: "18h30",
        debatMoment: "20h30",
        animator:
          "DEKEGELEER Gwenaëlle - journaliste, éditrice, présentatrice à la RTBF. Animatrice de «Alors on change !»",
        participants: [
          {
            name: "Carine Thibaut",
            description: "Directrice générale Amnesty Belgique",
          },
          {
            name: "Chloé mikolajczak",
            description: "Coordinatrice à Fossil Free Politics Campaign",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2023,
    title: "También la lluvia",
    author: "Icíar Bollaín",
    releaseDate: 2010,
    duration: "1h43",
    theme: "L’eau, une ressource pas si commune.",
    image: {
      summary: "2023/meme-la-pluie.webp",
      programmation: "2023/Tambien.webp",
      programmationPosition: "center -100px",
    },
    summary:
      "Sebastian, jeune réalisateur passionné et son producteur arrivent dans le décor somptueux des montagnes boliviennes pour entamer le tournage d'un film. Les budgets de production sont serrés et Costa, le producteur, se félicite de pouvoir employer des comédiens et des figurants locaux à moindre coût. Mais bientôt le tournage est interrompu par la révolte menée par l'un des principaux figurants contre le pouvoir en place qui souhaite privatiser l'accès à l'eau courante. Costa et Sebastian se trouvent malgré eux emportés dans cette lutte pour la survie d'un peuple démuni. Ils devront choisir entre soutenir la cause de la population et la poursuite de leur propre entreprise sur laquelle ils ont tout misé. Ce combat pour la justice va bouleverser leur existence.",
    trailer: "jX-X4hgbycw",
    debat:
      "L’eau est devenu le tube de l’été 2022 puis du printemps 2023 et de l’été 2023 et il y a fort à parier qu’il reste haut placé dans les enjeux environnementaux. Réchauffement climatique, sécheresse, conflits d’usage, les causes produisent les mêmes effets un peu partout, ce qui met en lumière le fait que l’eau n’est pas une ressource comme les autres. Elle a non seulement permis de donner naissance à la vie mais elle est aussi indispensable pour qu’elle perdure. L’eau est un commun si vital que nous avons voulu en faire le cœur du débat. A travers le débat, nous aborderons la question du cycle de l’eau douce, le rôle de l’eau bleue, de l’eau verte, nous ferons un état des lieux des solutions mises en place pour pallier au manque d’eau dans certains secteurs comme l’industrie ou l’agriculture, nous évoquerons la question de la mal-adaptation et les différents types de gouvernance possibles de communs tels que l’eau.",
    redirect: "/films/meme-la-pluie",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.SAMEDI_18_11,
        moment: "10h15",
        debatMoment: "12h00",
        animator:
          "Audrey boehly - Conférencière et autrice du podcast et du livre DERNIÈRES LIMITES",
        participants: [
          {
            name: "Dan Lert",
            description:
              "Adjoint en charge de la transition écologique, du Plan Climat, de l’eau et de l’énergie à la Ville de Paris et Président d’Eau de Paris",
          },
          {
            name: "Gaspard Manesse",
            description:
              "Membre du Comité National de la Confédération Paysanne",
          },
          {
            name: "Agnés Ducharne ",
            description: "Directrice de recherche au CNRS",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.ANGERS,
        day: DAYS.DIMANCHE_19_11,
        moment: "19h00",
        debatMoment: "20h45",
        animator: "Vincent Raimbault - Bénévole The Shifters",
        ticketingRedirection:
          "https://s.pathe.fr/fr/V3308S71305/booking?_gl=1*1ugagqu*_gcl_au*MTg1ODcxODY2MS4xNjk3NDg1NjEx&pos=cHJpY2luZw%3D%3D",
        participants: [
          {
            name: "Charlène Descollonges",
            description:
              "Co-fondatrice de l'association Pour une Hydrologie Régénérative",
          },
          {
            name: "Morgan Priol",
            description:
              "Directrice de la délégation Maine-Loire-Océan à l'Agence de l'eau Loire-Bretagne",
          },
          {
            name: "Jean-Paul Pavillon",
            description:
              "Maire des Ponts-de-Cé / Vice-Président d’Angers Loire Métropole Eau, Assainissement, GEMAPI",
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
          "Valentine Ambert - Rédactrice chez Youmatter",
        participants: [
          {
            name: "Sébastien LEGRAND",
            description:
              "Co-créateur de la Fresque de l'Eau, vice-président de l'association Eau'Dyssée",
          },
          {
            name: "Nicolas ALBAN",
            description:
              "Directeur délégation de Lyon à l'Agence de l'eau Rhone Mediterranée Corse",
          },
          {
            name: "Eric Sauquet",
            description: "Directeur de recherche à l'INRAE",
          }
        ],
        cinema: CINEMAS.LYON_BELLECOURT,
        ticketingRedirection: "https://urlz.fr/nLpH",
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_19_11,
        moment: "11h00",
        debatMoment: "12h45",
        animator: "Emilce Ligneau",
        participants: [
          {
            name: "Sandrine Nieto",
            description: "Avocate en droit de l'environnement, Co-présidente Commission Environnement Energie du Barreau de Toulouse",
          },
          {
            name: "Jean Francois Berthoumieu",
            description: "Association Climatologique de la Moyenne-Garonne et du Sud-Ouest",
          },
          {
            name: "Dominique Fouchier",
            description: "Maire de Tournefeuille , vice président de Toulouse Métropole"
          }
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.MERCREDI_22_11,
        moment: "18h30",
        debatMoment: "20h30",
        animator: "",
        participants: [
          {
            name: "Claire Baffert",
            description:
              "Senior Water Policy Officer at WWF (European Policy Office)",
          },
          {
            name: "Martin Oohse",
            description:
              "Responsable Maillage Bleu - Bruxelles Environnement",
          },
          {
            name: "Aurore Degré",
            description:
              "Professeure d’hydrologie et de physique des sols (Gembloux Agro-Bio Tech)",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2023,
    title: "Les Temps modernes",
    author: "Charlie Chaplin",
    releaseDate: 1936,
    duration: "1h27",
    originalTitle: "Modern Times",
    theme: "Écologie et modernité : quel sens donner au progrès ?",
    image: {
      summary: "2023/les-temps-modernes.webp",
      programmation: "2023/les-temps-modernes.webp",
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
            name: "Alexandre Tisserant",
            description: "Dirigeant de l'entreprise Kineis",
          },
          {
            name: "Guillaume Carbou",
            description:
              "Maître de conférences en sciences de l'information et de la communication à l'Université de Bordeaux.",
          },
        ],
        cinema: CINEMAS.TOULOUSE_AMERICAN,
      },
    ],
  },
];
