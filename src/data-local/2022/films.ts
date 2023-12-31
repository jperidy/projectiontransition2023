import type { Cinema, Film } from "..";

export const CITIES = {
  NANTES: "Nantes",
  PARIS: "Paris",
  TOULOUSE: "Toulouse",
  BRUXELLES: "Bruxelles",
};

export const DAYS = {
  VENDREDI_14_10: "Vendredi 14 octobre",
  SAMEDI_15_10: "Samedi 15 octobre",
  DIMANCHE_16_10: "Dimanche 16 octobre",
  MERCREDI_26_10: "Mercredi 26 octobre",
  JEUDI_27_10: "Jeudi 27 octobre",
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
  NANTES_MANUAL: {
    name: "Cinéma centre commercial Pôle Sud",
    address: "route de Clisson",
    zip: "44115",
    city: "Basse Goulaine",
    gps: {
      latitude: "47.18845277860192",
      longitude: "-1.4705002865065424",
    },
    ticketingOpenDate: "2022-09-15",
    ticketingRedirection: "",
    ticketingMessage:
      "Gratuit - Réservation sur place dans la limite des places disponibles",
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
  PARIS_MANUAL: {
    name: "Cinéma les 7 Parnassiens",
    address: "98 Bd du Montparnasse",
    zip: "75014",
    city: "Paris",
    gps: {
      latitude: "48.84259512082188",
      longitude: "2.3276928421198373",
    },
    ticketingOpenDate: "2022-09-14",
    ticketingRedirection:
      "https://www.helloasso.com/associations/the-shifters/evenements/693vgher",
    organization: CITIES.PARIS,
    phone: "+33 (0)1 43 35 13 89",
    website: "https://www.parnassiens.com/",
    navigation:
      "https://www.google.fr/maps/place/Les+7+Parnassiens/@48.8424433,2.3254505,17z/data=!4m5!3m4!1s0x47e671cc20eb63df:0x9a3509c72205a717!8m2!3d48.8424398!4d2.3276392",
  },
  TOULOUSE_BORDEROUGE: {
    name: "Utopia Borderouge",
    address: "59, avenue Maurice Bourgès-Maunoury",
    zip: "32200",
    city: "Toulouse",
    gps: {
      latitude: "43.639970581531266",
      longitude: "1.4522525977764214",
    },
    access:
      "Métro B (Borderouge), Métro A (Roseraie) puis Bus 36 (Ségla), Bus 9 (Place Bila)",
    ticketingOpenDate: "2022-10-07",
    ticketingRedirection:
      "https://www.helloasso.com/associations/the-shifters/evenements/ehguxqci",
    organization: CITIES.TOULOUSE,
    phone: "+33 (0)5 34 51 48 38",
    website: "http://www.cinemas-utopia.org/toulouse/",
    navigation:
      "https://www.google.com/maps/place/Utopia+Borderouge/@43.6397532,1.4522526,15z/data=!4m5!3m4!1s0x0:0x9de8bf0c16c0f370!8m2!3d43.6397532!4d1.4522526?shorturl=1",
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
};

export const films: Film[] = [
  {
    edition: 2022,
    title: "En Guerre",
    author: "Stéphane Brizé",
    releaseDate: 2018,
    duration: "1h53",
    originalTitle: "",
    theme: "Transition écologique, atout ou péril pour l'emploi ?",
    image: { summary: "en-guerre.jpg", programmation: "en-guerre.jpg" },
    summary:
      "Malgré de lourds sacrifices financiers de la part des salariés et un bénéfice record de leur entreprise, la direction de l’usine Perrin Industrie décide néanmoins la fermeture totale du site. Accord bafoué, promesses non respectées, les 1100 salariés, emmenés par leur porte‑parole Laurent Amédéo, refusent cette décision brutale et vont tout tenter pour sauver leur emploi.",
    trailer: "qOB9mroJ1zU",
    debat:
      "La lutte des travailleurs ordinaires contraints de se lever contre les puissants pour améliorer leurs conditions ou préserver leur emploi est vieille comme le monde. En Guerre met en abîme ces deux mondes sur fonds de mondialisation et de laisser-faire politique. S’il ne traite pas directement des enjeux écologiques, ce film apporte une réflexion intéressante sur l'utilité du travail et la défense des emplois au regard des changements à venir. Aujourd’hui, quelques actionnaires peuvent décider de supprimer des milliers d'emplois à un endroit pour satisfaire une meilleure rentabilité des capitaux dans d’autres secteurs ou d’autres pays, moins-disant sur le plan environnemental. Dans un monde en transition, certains secteurs économiques sont amenés à fortement se réduire voire à disparaitre. Cela provoquera des pertes massives d'emplois et un chaos social si rien n'est planifié. La justice climatique ne pourra se faire sans justice sociale. Doit-on collectivement décider quelles industries il faut préserver au regard de leur impacts environnementaux et jusqu’où devons-nous aider à la reconversion ? S’agissant du caractère utile de certains métiers, quels sont ceux dont on a réellement besoin et qui nous aideront à affronter les bouleversements à venir ?",
    redirect: "/films/en-guerre",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.SAMEDI_15_10,
        moment: "14h",
        debatMoment: "16h",
        animator: "Juliette Quef, Présidente et journaliste chez Vert.",
        participants: [
          {
            name: "Nicolas Dufrêne",
            description: "Directeur général de l’Institut Rousseau.",
          },
          {
            name: "Olivier Lemaire",
            description: "Acteur et ancien syndicaliste.",
          },
          {
            name: "Véronique Martin",
            description:
              "Membre du bureau confédéral en charge des questions environnementales, du logement et de la paix et du désarmement et à la direction de la fédération CGT des cheminots.",
          },
          {
            name: "Fabrice Bonnifet",
            description:
              "Directeur Développement Durable & Qualité, Sécurité, Environnement du Groupe Bouygues.",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.SAMEDI_15_10,
        moment: "14h",
        debatMoment: "16h",
        animator: "Céline Guilloit, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Géraldine Molina",
            description:
              "Chercheuse CNRS à ESO Nantes UMR CNRS 6590 (Université de Nantes, IGARUN) et à l’IRSTV (FR CNRS 2488, École Centrale de Nantes), Docteur en Géographie et Urbanisme – Aménagement de l’espace.",
          },
          {
            name: "Philippe Ricoul",
            description:
              "Dirigeant d’ADEIGMA et fondateur de l’écosystème UNATERA.",
          },
          {
            name: "Tristan Riom",
            description:
              "Militant écologiste (EELV) et 10e Vice-président de la Métropole de Nantes, en charge du climat, de l’énergie et des mutations économiques.",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.SAMEDI_15_10,
        moment: "15h30",
        debatMoment: "17h30",
        animator: "Pierre-Louis Vernhes, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Bruno Jougla",
            description: "Co-président de l’association les ateliers ICARE.",
          },
          {
            name: "Rémi Gaubert",
            description: "Conférencier bénévole pour le climat.",
          },
          {
            name: "Maxime Leonard",
            description:
              "Membre du collectif PAD, membre de la coordination CGT de l’aéronautique (basée en Occitanie) et représentant syndical à la CGT dans la filière aéronautique.",
          },
          {
            name: "Yannick Saleman",
            description: "Chef de Projet au Shift Project pour l'Emploi.",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.MERCREDI_26_10,
        moment: "18h30",
        debat:
          "La construction d'un monde sobre en carbone implique des transformations systémiques profondes. Les besoins vont évoluer dans la quasi-totalité de l'économie, en supprimant et en créant de nouveaux emplois, ainsi qu'en termes de compétences et de connaissances. Comme l'a identifié le \"Plan de Transformation de l'Économie Française\" (PTFE) proposé par le Shift Project, la transition rend possible une augmentation nette d’environ 300 000 emplois en France. Cependant, le principal problème est que l'évolution sectorielle est très hétérogène, avec des secteurs où de nombreux emplois sont créés, et d'autres, comme l'industrie automobile ou l'aviation, où la destruction d'emplois est importante. La transition vers une économie belge décarbonée implique également d’importantes mutations. Le film En Guerre de Stéphane Brizé montre magnifiquement la souffrance liée à la perte d'emploi et l'impossibilité d'en retrouver un autre dans une région sinistrée. Afin de trouver une solution qui soit sociale, démocratique et écologique, il est nécessaire d'établir un dialogue avec les acteurs du monde du travail. Élaborer des stratégies collectives est indispensable pour éviter de tomber dans une logique antagoniste entre \"fin du monde\" et \"fin du mois\". ",
        debatMoment: "20h30",
        animator: "",
        participants: [
          {
            name: "Bruno Bauraind",
            description:
              "Secrétaire général du Gresea (Group de Recherche pour une Stratégie Économique Alternative).",
          },
          {
            name: "Jacques Crahay",
            description:
              "Membre du groupe 2030, past-président UWE et past-CEO Cosucra.",
          },
          {
            name: "Emmanuel Mossay",
            description:
              "Facilitateur des transitions entrepreneuriales et institutionnelles, EcoRes.",
          },
          {
            name: "Lydie Gaudier",
            description:
              "Coordinatrice de la cellule RISE du CEPAG/FGTB wallonne.",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2022,
    title: "Goliath",
    author: "Frédéric Tellier",
    releaseDate: 2022,
    duration: "2h02",
    originalTitle: "",
    theme: "Modèles agricoles : la faim justifie-t-elle les moyens ?",
    image: { summary: "goliath.jpg", programmation: "goliath.jpg" },
    summary:
      "France, professeure de sport le jour, ouvrière la nuit, milite activement contre l’usage des pesticides. Patrick, obscur et solitaire avocat parisien, est spécialiste en droit environnemental. Mathias, lobbyiste brillant et homme pressé, défend les intérêts d’un géant de l’agrochimie. Suite à l’acte radical d’une anonyme, ces trois destins, qui n’auraient jamais dû se croiser, vont se bousculer, s’entrechoquer et s’embraser.",
    trailer: "I3gZ6Iz6yQI",
    debat:
      "A travers l’histoire d’un avocat déterminé à obtenir réparation pour ses clients victimes de produits phytosanitaires toxiques, Goliath pointe la puissance des lobbys de l’industrie agrochimique où pouvoir et argent peuvent prendre le pas sur la santé des populations et la préservation de la biodiversité. Ce film met en exergue le mensonge institutionnalisé qui consiste à ne pas interdire certains produits nocifs pour les consommateurs mais aussi les agriculteurs, au nom de la rentabilité et de l’autonomie alimentaire. Lutte contre le dérèglement climatique et justice sociale ne peuvent s’opposer, et cela s’applique aussi à ces producteurs singuliers que sont les agriculteurs, en première ligne face aux changements climatiques et à la créativité de l’ingénierie agrochimique. Dans un contexte géopolitique qui a mis en lumière notre vulnérabilité, nous avons plus que jamais besoin de repenser nos modèles agricoles. S’il existe des systèmes de production alternatifs, sont-ils crédibles pour répondre aux besoins vitaux de la population ? Peut-on nourrir l’ensemble de la population tout en préservant la santé de chacun et dans le respect de l’environnement ?",
    redirect: "/films/goliath",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.DIMANCHE_16_10,
        moment: "11h",
        debatMoment: "13h10",
        animator: "Chaymaa Deb, Rédactrice en chef de Natura Sciences",
        participants: [
          {
            name: "Philippe Camburet",
            description:
              "Président de la Fédération Nationale de l’Agriculture Biologique.",
          },
          { name: "Hélène Grosbois", description: "Activiste pour le vivant." },
          {
            name: "Alice Legrix de la Salle",
            description:
              "Chargée du financement de la transition agro-écologique chez AXA Climate.",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.DIMANCHE_16_10,
        moment: "13h30",
        debatMoment: "15h40",
        animator: "Sandra Haize, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Thierry Lebeau",
            description:
              "Professeur à Nantes Université (permanent du laboratoire de Planétologie et Géosciences).",
          },
          {
            name: "Maria",
            description: "Maraîchère associée aux G.A.E.C. La Terre Ferme.",
          },
          {
            name: "Benjamin Pollet",
            description: "Développeur chez Les Alchimistes Pays de la Loire.",
          },
          {
            name: "Fabrice Roussel",
            description:
              "Maire de La Chapelle-sur-Erdre et 1er Vice-Président de Nantes Métropole.",
          },
          {
            name: "William van den Broek",
            description:
              "Coordinateur du CADO (Carrefour Agroécologique de l’Ouest).",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_16_10,
        moment: "11h30",
        debatMoment: "13h35",
        animator: "Victorine Castex, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Michel Duru",
            description:
              "Directeur de recherche et chargé de mission à l’Institut national de recherche pour l’agriculture.",
          },
          {
            name: "Béatrice Prat",
            description:
              "Directrice environnement et patrimoine au sein de la Communauté d’agglomération du Sicoval Intercommunalité.",
          },
          { name: "Florent Sasse", description: "Agriculteur." },
        ],
        cinema: CINEMAS.TOULOUSE_BORDEROUGE,
      },
      {
        city: CITIES.BRUXELLES,
        day: DAYS.JEUDI_27_10,
        moment: "18h30",
        theme:
          "L'action écologique citoyenne : quelles méthodes, quels moyens et quelles réussites ?",
        debat:
          "L'histoire de David contre Goliath évoque une lutte inégale entre deux forces. Frédéric Tellier présente dans ce film le combat juridique et citoyen pour l'interdiction de la Tétrazine, un pesticide cancérigène, et les enjeux personnels qu'il comporte pour les protagonistes. À travers les expériences d'un militant, d'un avocat spécialisé dans l'environnement et d'un lobbyiste, ils nous offrent une image de la manière dont le pouvoir s'articule autour des décisions politiques. Ainsi, le film sert de point de départ pour aborder la façon dont les actions des citoyens mènent la transition écologique, en créant des mouvements de pression qui bousculent le système politique.",
        debatMoment: "20h40",
        animator: "",
        participants: [
          {
            name: "Lora Verheecke",
            description:
              "Chercheuse pour l'Observatoire des Multinationales sur les lobbies européens.",
          },
          {
            name: "Roxane Chaplain",
            description: `Assistante parlementaire de Marie Toussaint et membre de l'ONG "Notre affaire à tous."`,
          },
          {
            name: "Sebastian Gonzato",
            description:
              "Coordinateur d'XR Etterbeek et Formateur pour Code Rouge.",
          },
          {
            name: "Lucie Morauw",
            description:
              "Activiste pour la justice climatique et sociale, membre de Youth For Climate, co-fondatrice du collectif citoyen Totalement Down.",
          },
        ],
        cinema: CINEMAS.BRUXELLES,
      },
    ],
  },
  {
    edition: 2022,
    title: "Le Garçon qui dompta le vent",
    author: "Chiwetel Ejiofor",
    releaseDate: 2019,
    duration: "1h53",
    originalTitle: "The Boy Who Harnessed the Wind",
    theme:
      "Inégalités climatiques : quelles solutions pour les pays les plus vulnérables ?",
    image: {
      summary: "le-garcon-qui-dompta-le-vent.jpg",
      programmation: "garcon-qui-dompta-le-vent.jpg",
    },
    summary:
      "Contre toute attente, un jeune Malawite de 13 ans invente un système ingénieux pour sauver sa famille et son village de la famine. Inspiré de l'histoire vraie de William Kamkwamba et adapté de son roman best-seller.",
    trailer: "nPkr9HmglG0",
    debat:
      "Tiré d’une histoire vraie, Le Garçon qui dompta le vent présente le destin exceptionnel du jeune William Kamkwamba, qui invente un système ingénieux d'extractionde l’eau du sol pour irriguer les plantations et sauver son village menacé de famine suite à une grande sécheresse et à l’envolée du prix des céréales. Avec l’amplification du dérèglement climatique, les catastrophes “naturelles” augmenteront en intensité et en fréquence. Les pays les plus touchés seront ceux qui ont le moins contribué à la catastrophe écologique. Les pays occidentaux historiquement les plus grands émetteurs de gaz à effet de serreont une grande responsabilité dans cette injustice climatique vis-à-vis des pays les plus vulnérables. Peut-on imaginer qu’ils prennent leur légitime part au développement de solutions adaptées à ces territoires et ces populations, qu’ils s’agissent d’échanges de technologies ou de capacité financement ? Qu’a-t-on à apprendre de ces pays qui ont encore l’habitude de faire avec la nature ? Il ne fait aucun doute que les liens entre États/Pays doivent être revisités à l’aune de l’adaptation climatique. Ce débat fera aussi l’objet d’un projet pédagogique avec plusieurs classes de lycée. L’objectif étant de sensibiliser les élèves aux inégalités géographiques, à l’importance de la transmission des connaissances, et montrer que malgré la complexité des problématiques, de nombreux acteurs peuvent participer à la mise en œuvre de solutions.",
    redirect: "/films/garcon-qui-dompta-le-vent",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.VENDREDI_14_10,
        moment: "14h",
        debatMoment: "16h00",
        animator:
          "Vinz Kanté, Expert média & environnement et fondateur du média LIMIT.",
        participants: [
          {
            name: "Myriam Dahman",
            description:
              "Chargée de mission sensibilisation, éducation et campagnes d’intérêt général à l’Agence Française de Développement.",
          },
          {
            name: "Aurore Mathieu",
            description:
              "Responsable Politiques Internationales chez Réseau Action Climat.",
          },
          {
            name: "Marie-Noëlle Reboulet",
            description: "Présidente du Gérès et du groupe Initiatives.",
          },
          { name: "Kalvin Soiresse", description: "Député belge." },
          {
            name: "Val",
            description:
              "Association Jiboiana, représentante du peuple Munduruku (Amazonie).",
          },
        ],
        cinema: CINEMAS.PARIS_MANUAL,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.VENDREDI_14_10,
        moment: "14h",
        debatMoment: "16h00",
        animator: "Léa Golfier, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Alice Langlais",
            description:
              "Chargée de mission « Éducation à la Citoyenneté et à la Solidarité Internationale » et « Vie Associative ».",
          },
          {
            name: "Mélaine Sama",
            description:
              "Chargé de mission Climat Afrique chez Climate Chance.",
          },
          {
            name: "Pierre Vacher",
            description:
              "Maître de conférence au Laboratoire de Planétologie et Géosciences, Nantes Université.",
          },
          {
            name: "Alice Thauvin",
            description: "directrice de projet à l'agence Groupe HUIT.",
          },
        ],
        cinema: CINEMAS.NANTES_MANUAL,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_14_10,
        moment: "14h",
        debatMoment: "16h00",
        animator: "Hugo Guiglion, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Yassin Hajji,",
            description: "Développeur chef de projet chez Arch Crowd.",
          },
          {
            name: "Victorine Castex",
            description:
              "Chercheuse en Sciences de l’environnement spécialisée dans la modélisation des systèmes agricoles et climatiques.",
          },
          {
            name: "Elhadj Maouli",
            description: "Fondateur de l’association Amadal Amagal au Niger.",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
    ],
  },
  {
    edition: 2022,
    title: "Les Fils de l'homme",
    author: "Alfonso Cuarón",
    releaseDate: 2006,
    duration: "1h50",
    originalTitle: "Children of Men",
    theme: "Réfugiés climatiques : quelles frontières dans un monde en crise ?",
    image: {
      summary: "les-fils-de-l-homme.jpg",
      programmation: "les-fils-de-lhomme.jpg",
    },
    summary:
      "Dans une société futuriste où les êtres humains ne parviennent plus à se reproduire, l'annonce de la mort de la plus jeune personne, âgée de 18 ans, met la population en émoi. Au même moment, une femme tombe enceinte - un fait qui ne s'est pas produit depuis une vingtaine d'années - et devient par la même occasion la personne la plus enviée et la plus recherchée de la Terre. Un homme est chargé de sa protection... Film interdit aux moins de 12 ans.",
    trailer: "2VT2apoX90o",
    debat:
      "Dans une Angleterre agonisante en 2027, Les Fils de l’homme dresse le portrait d’une société totalitaire  et  violente  où  le  gouvernement  parque certaines minorités  dans  des  camps insalubres. Par sa mise en scène réaliste et sobre, ce film rend ce futur proche de nous, un futur  déjà  porté  en  germe  par  nos  sociétés  actuelles,  notamment  en  ce  qui  concerne  les problématiques migratoires. On serait presque habitué aux images de bateaux de migrants franchissant la Méditerranée, à ceux qui meurent lors de la traversée ou encore à l’accueil parfois déshumanisé des survivants sur nos côtes. Les prévisions actuelles sur le changement climatique montrent que les pays qui seront le plus durement touchés sont ceux qui sont les plus fragiles aujourd’hui. Si la marche du monde ne change pas, des centaines de millions de personnes n’auront d’autre choix que de fuir des conditions de vie extrêmes. Comment nos sociétés  réagiront  face  à  cet  afflux  massif  de  population  alors  qu’elles  seront  très probablement   elles   aussi   confrontées   à   des  situations   climatiques   et   écosystémiques dégradées ?  Peut-on éviter que la fiction ne rejoigne la réalité et si oui comment ?",
    redirect: "/films/les-fils-de-l-homme",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        debatMoment: "22h",
        day: DAYS.SAMEDI_15_10,
        moment: "20h",
        animator:
          "Clara De La Hoz Del Real, Sociologue, spécialiste des migrations forcées et des déplacements climatiques",
        participants: [
          {
            name: "Rima Hassan",
            description:
              "Présidente-Fondatrice de l’Observatoire des Camps de Réfugiés.",
          },
          {
            name: "François Gemenne",
            description:
              "Membre du GIEC, spécialiste des migrations environnementales, professeur à Sciences Po et à l’Université de Liège.",
          },
          {
            name: "Adrien Estève",
            description: `Postdoctorant CNRS au Centre de Recherches Internationales de Sciences Po, résident à l'IRSEM et auteur de "Guerre et écologie. L'environnement et le climat dans les politiques de défense (France et Etats-Unis)" aux Presses Universitaires de France.`,
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.SAMEDI_15_10,
        moment: "17h45",
        debatMoment: "19h40",
        animator: "Pascal Richier, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Moira Andreu",
            description:
              "Bénévole au sein de l’équipe « Sensibilisation » à la Cimade Bretagne-Pays de Loire.",
          },
          {
            name: "Samuel Delépine",
            description:
              "Maître de Conférences en Géographie Sociale à l’Université d’Angers, directeur du département Carrières Sociales de l’IUT Angers-Cholet et membre du Laboratoire Espaces et Sociétés.",
          },
          {
            name: "Elodie Martin",
            description:
              "Chargée de projets régionale à la Cimade Bretagne-Pays de Loire.",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.DIMANCHE_16_10,
        moment: "20h",
        debatMoment: "21h55",
        animator:
          "Frédéric Barthe, Fondateur et président d’On Air Consulting et associé & coach au sein du cabinet Grandir",
        participants: [
          {
            name: "Julien Boé",
            description: "Directeur de recherche au CNRS.",
          },
          {
            name: "Frédéric Durand",
            description:
              "Professeur de géographie à l’Université Toulouse-II Jean-Jaurès.",
          },
          { name: "Paul Eftekhari", description: "Bénévole à la Cimade." },
        ],
        cinema: CINEMAS.TOULOUSE_BORDEROUGE,
      },
    ],
  },
  {
    edition: 2022,
    title: "Sans filtre",
    author: "Ruben Östlund",
    releaseDate: 2022,
    duration: "2h29",
    originalTitle: "Triangle of Sadness",
    theme: "Urgent : société sous influence cherche nouveaux modèles !",
    image: { summary: "sans-filtre.jpg", programmation: "sans-filtre.jpg" },
    summary:
      "Après la Fashion Week, Carl et Yaya, couple de mannequins et influenceurs, sont invités sur un yacht pour une croisière de luxe. Tandis que l’équipage est aux petits soins avec les vacanciers, le capitaine refuse de sortir de sa cabine alors que le fameux dîner de gala approche. Les événements prennent une tournure inattendue et les rapports de force s'inversent lorsqu'une tempête se lève et met en danger le confort des passagers. Palme d'Or au Festival de Cannes 2022.",
    trailer: "gaOdbOdWCVA",
    debat:
      "L’économie numérique a fait émerger de nouveaux acteurs : les influenceuses et influenceurs qui pour la plupart promeuvent un mode de vie consumériste et des représentations de la réussite délétères pour l’environnement. Palme d’Or à Cannes, Sans filtre nous plonge dans les coulisses de ces nouveaux agents économiques dont l’influence grandissante sur leurs fans représentent un péril pour l’habitabilité de la planète. Devant l’urgence absolue de la transition énergétique et écologique, ces influenceurs tout autant que les personnalités les plus fortunées ont une grande responsabilité dans la fuite en avant de nos sociétés. Parce qu’ils maitrisent les outils de communication et de représentation, on pourrait imaginer en faire des alliés de la transition. Ils pourraient devenir des ambassadeurs de modèles respectueux des limites planétaires et non plus des vitrines de la croissance effrénée. Mais peut-on être influent ou le rester en faisant la promotion de modes de vie plus sobres alors que justement la (sur)consommation est leur gagne-pain ? Quels types de rétribution alternative peut-on imaginer ? Après un été 2022 révélateur des dérèglements climatiques en cours, les polémiques enflent sur le rôle des influenceuses et influenceurs et les réponses à ces questions n’ont jamais été autant d’actualité.",
    redirect: "/films/sans-filtre",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.DIMANCHE_16_10,
        moment: "17h30",
        debatMoment: "20h",
        animator: "Léa Falco, Pour un réveil écologique",
        participants: [
          {
            name: "Amélie Deloche",
            description:
              "Consultante en stratégie d’influence éthique / sensibilisation sur les enjeux climatiques et co-créatrice du collectif Paye ton influence.",
          },
          {
            name: "Vinz Kanté",
            description:
              "Expert média & environnement et fondateur du média LIMIT.",
          },
          {
            name: "Johan Reboul",
            description: `Créateur de contenu « Le Jeune Engagé » et auteur du "Guide du Jeune Engagé" (Fleurus Editions).`,
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.DIMANCHE_16_10,
        moment: "17h10",
        debatMoment: "19h50",
        animator:
          "Nicolas Schmit, Coach de dirigeants et d’élus et cofondateur de l’Univers-cité de la transition écologique",
        participants: [
          {
            name: "Philippe Boudes",
            description:
              "Enseignant-Chercheur en Sociologie à l’Institut Agro Rennes Angers et au CNRS.",
          },
          {
            name: "Mélanie Cosnier",
            description:
              "Maire de Souvigné-sur-Sarthe et conseillère régionale des Pays de la Loire.",
          },
          {
            name: "Bertrand Hénot",
            description: "Formateur en Thérapie Narrative.",
          },
          {
            name: "Yoann Morice",
            description:
              "Paysan bio, technicien en agroforesterie, formateur pédagogique indépendant et lanceur d’alerte dans le Pays de Retz.",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
    ],
  },
  {
    edition: 2022,
    title: "Soleil vert",
    author: "Richard Fleischer",
    releaseDate: 1974,
    duration: "1h37",
    originalTitle: "Soylent Green",
    theme: "Plus d'humains, moins d'humanité ?",
    image: { summary: "soleil-vert.jpg", programmation: "soleil-vert.jpg" },
    summary:
      "New York en 2022. Un brouillard a envahi la surface du globe, tuant la végétation et la plupart des espèces animales. D'un côté, les nantis qui peuvent avoir accès à la nourriture rare et très chère. De l'autre, les affamés nourris d'un produit synthétique, le soylent, rationné par le gouvernement... Lors d'une émeute, le président de soylent trouve la mort et Thorn , un flic opiniâtre, est chargé de l'enquête...",
    trailer: "N_jGOKYHxaQ",
    debat:
      "Réalisé en 1973 par Richard Fleischer et adapté du roman Make room ! Make Room ! d’Harry Harrison, Soleil vert témoigne de la prise de conscience du rôle des activités humaines sur l’environnement. L’action de cette dystopie se déroule en 2022 et montre les conséquences désastreuses d’un développement industriel à marche forcée. La surconsommation  et l'épuisement des ressources naturelles ont ruiné l'avenir de l'Homme en quelques décennies. Le paroxysme de l’agonie de l'espèce humaine étant atteint avec la disparition d'un élément essentiel à son existence : la nourriture. A la fois besoin vital, source de plaisir et élément de partage social, l’alimentation est centrale dans les sociétés. Nous nous rapprochons toujours plus des limites planétaires quand nous ne les avons pas franchies et Soleil vert ressemble chaque jour un peu plus à un cauchemar prémonitoire. Le suicide collectif en cours peut-il encore être évité par l’action collective ? Si oui,  quelle  organisation  sociétale,  quels  modes  de  production  agricoles  et  quel  régime alimentaire  doit-on  adopter  pour  que  nous  puissions  encore  apprécier notre  nourriture  et notre existence dans le futur ?",
    redirect: "/films/soleil-vert",
    styles: { color: "text-dark" },
    cities: [
      {
        city: CITIES.PARIS,
        day: DAYS.VENDREDI_14_10,
        moment: "20h",
        debatMoment: "21h45",
        animator:
          "Audrey Boehly, journaliste scientifique, conférencière et enseignante à l’Université de Paris-Saclay.",
        participants: [
          {
            name: "Louise Browaeys",
            description: "Écrivaine, experte RSE et permacultrice.",
          },
          {
            name: "Jean-Marc Jancovici",
            description:
              "Président du Shift Project, co-fondateur du cabinet Carbone 4 et membre du Haut Conseil pour le Climat.",
          },
          {
            name: "Emmanuel Pont",
            description: "Auteur et CEO de Smarter Time.",
          },
        ],
        cinema: CINEMAS.PARIS,
      },
      {
        city: CITIES.NANTES,
        day: DAYS.VENDREDI_14_10,
        moment: "19h30",
        debatMoment: "21h15",
        animator: "Aude Le Roy, Bénévole chez Les Shifters",
        participants: [
          {
            name: "Pierre Bruneau",
            description:
              "Jardinier-animateur à la Ferme de l’Agronaute et Jardinier à La Sauge.",
          },
          {
            name: "Mathilde Doiezie",
            description: "Journaliste indépendante.",
          },
          {
            name: "Christine Margetic",
            description:
              "Professeure de géographie à Nantes Université et membre du Laboratoire de Géographie Sociale ESO.",
          },
          {
            name: "Laurent Toulemon",
            description:
              "Directeur de recherche à l’Institut national d’études démographiques.",
          },
        ],
        cinema: CINEMAS.NANTES,
      },
      {
        city: CITIES.TOULOUSE,
        day: DAYS.VENDREDI_14_10,
        moment: "20h30",
        debatMoment: "22h05",
        animator:
          "Audrey Mazars, Bénévole chez Les Shifters et directrice Dialogue social, Santé QVT, Communication interne à la Métropole et Ville de Toulouse",
        participants: [
          {
            name: "Pierre Agha",
            description:
              "Géographe-cartographe, urbaniste et intervenant universitaire.",
          },
          {
            name: "Hubert Serret",
            description: "Porteur du projet NegaCarbOne.",
          },
          {
            name: "Vincent Souladié",
            description:
              "Maître de conférences en histoire et esthétique du cinéma à l’Université Toulouse-II Jean-Jaurès.",
          },
        ],
        cinema: CINEMAS.TOULOUSE_TOURNEFEUILLE,
      },
    ],
  },
];
