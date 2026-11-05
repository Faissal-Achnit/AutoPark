export const config = {
  voitures: [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ],

  modesRecuperation: [
    { id: "agence", nom: "Ã€ lâ€™agence", fraisFixes: 0 },
    { id: "aeroport", nom: "Ã€ lâ€™aÃ©roport", fraisFixes: 150 },
    { id: "adresse", nom: "Ã€ une adresse", fraisFixes: 100 },
  ],

  agences: ["Casablanca â€” Centre-ville", "Rabat â€” Agdal", "Marrakech â€” GuÃ©liz"],

  aeroports: ["Casablanca â€” Mohammed V", "Rabat â€” SalÃ©", "Marrakech â€” MÃ©nara"],

  options: [
    { id: "siegeBebe", nom: "SiÃ¨ge bÃ©bÃ©", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplÃ©mentaire",
      prixParJour: 200,
    },
  ],
};


export const selectedConfig = {
  etape: 1,
  voitureId: null,
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",

  recuperation: {
    // Mode agence uniquement.
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },

  options: {
    siegeBebe: false,
    conducteurSupplementaire: false,
  },
};



