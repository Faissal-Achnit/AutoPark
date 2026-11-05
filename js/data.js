// Données fictives fournies. Ne pas modifier ce tableau lors des opérations CRUD.
// Chaque voiture possède un identifiant unique.
export const voituresInitiales = [
  {
    "id": 1,
    "marque": "Dacia",
    "modele": "Sandero",
    "immatriculation": "AUTO-001",
    "categorie": "Citadine",
    "prixJour": 250,
    "statut": "Disponible"
  },
  {
    "id": 2,
    "marque": "Renault",
    "modele": "Mégane",
    "immatriculation": "AUTO-002",
    "categorie": "Berline",
    "prixJour": 380,
    "statut": "Louée"
  },
  {
    "id": 3,
    "marque": "Hyundai",
    "modele": "Tucson",
    "immatriculation": "AUTO-003",
    "categorie": "SUV",
    "prixJour": 550,
    "statut": "En maintenance"
  },
  {
    "id": 4,
    "marque": "Peugeot",
    "modele": "208",
    "immatriculation": "AUTO-004",
    "categorie": "Citadine",
    "prixJour": 280,
    "statut": "Disponible"
  },
  {
    "id": 5,
    "marque": "Toyota",
    "modele": "Corolla",
    "immatriculation": "AUTO-005",
    "categorie": "Berline",
    "prixJour": 420,
    "statut": "Louée"
  },
  {
    "id": 6,
    "marque": "Dacia",
    "modele": "Duster",
    "immatriculation": "AUTO-006",
    "categorie": "SUV",
    "prixJour": 450,
    "statut": "Disponible"
  }
];


// function ajouterVOitute(){

// const Marque = document.querySelector("#marque").value;
// const Modele = document.querySelector("#modele").value;
// const Immatriculation = document.querySelector("#immatriculation").value;
// const Categorie = document.querySelector("#categorie").value;
// const Statut = document.querySelector("#statut").value;

// const Prix = document.querySelector("#prix-jour").value;


// const erreurmarque = document.querySelector("#erreur-marque");
// const erreurmodele = document.querySelector("#erreur-modele"); 
// const erreurimmatriculation = document.querySelector("erreur-immatriculation"); 
// const aideimmatriculatio = document.querySelector("#aide-immatriculatio");
// const erreurprixjour = document.querySelector("#erreur-prix-jour")


   
   
// //    if(marque === ""){
// //     erreurmarque.classList.add("field-error");
// //      erreurmarque.textContent = "Erreur : La marque est obligatoire.";
// //      return;
// //    }

// //      if(modele === ""){
// //       erreurmodele.classList.add("field-error");
// //      erreurmarque.textContent = "Erreur : La marque est obligatoire.";
// //      return;
// //    }

// //      if(immatriculation === ""){
// //       erreurimmatriculation.classList.add("field-error");
// //      erreurimmatriculation.textContent = "Erreur : La marque est obligatoire.";
// //      return;
// //    }
// //     else if(eviterDoublementImmatriculation != undefined) {
// //                aideimmatriculatio.classList.add("field-hel");
// //                aideimmatriculatio.textContent = "Utilisez une immatriculation fictive et unique"
// //                return;
// //     }

   
// //     if(prix <= 0){
// //      erreurprixjour.classList.add("field-error")
// //      erreurprixjour.textContent = "enter le valeur de paix est positif"
     
// //      return;
// //    }

// //      const eviterDoublementImmatriculation =  voituresInitiales.find(voituresInitiale =>   voituresInitiale.immatriculation === immatriculation.value);



//    voituresInitiales.push({
//        "id": voituresInitiales.length + 1,
//      "marque": Marque,
//      "modele": Modele,
//      "immatriculation": Immatriculation,
//      "categorie": Categorie,
//      "prixJour": Prix,
//      "statut": Statut,
//     });

    
//     afficherTableVoiture();
    
//  }


//  const ajoutervoiture = document.querySelector("#bouton-enregistrer")

//  ajoutervoiture.addEventListener("click", (e) => {
//   e.preventDefault();
// ajouterVOitute();
//  })




// const ajoutervoiture = document.querySelector("#bouton-enregistrer")

// function ajouterVOitute(){

// const marque = document.querySelector("#marque");
// const modele = document.querySelector("#modele");
// const immatriculation = document.querySelector("#immatriculation");
// const categorie = document.querySelector("#categorie");
// const statut = document.querySelector("#statut");

// const prix = document.querySelector("#prix-jour");


// const erreurmarque = document.querySelector("#erreur-marque");
// const erreurmodele = document.querySelector("#erreur-modele"); 
// const erreurimmatriculation = document.querySelector("erreur-immatriculation"); 
// const aideimmatriculatio = document.querySelector("#aide-immatriculatio");
// const erreurprixjour = document.querySelector("#erreur-prix-jour")


//     marque = marque.value.trim()
//     modele = modele.value.trim()
//     immatriculation = immatriculation.value.trim();
//     categorie = categorie.value.trim();
//     statut = statut.value.trim();
//     prix = prix.value.trim();
   
//    if(marque === ""){
//     erreurmarque.classList.add("field-error");
//      erreurmarque.textContent = "Erreur : La marque est obligatoire.";
//      return;
//    }

//      if(modele === ""){
//       erreurmodele.classList.add("field-error");
//      erreurmarque.textContent = "Erreur : La marque est obligatoire.";
//      return;
//    }

//      if(immatriculation === ""){
//       erreurimmatriculation.classList.add("field-error");
//      erreurimmatriculation.textContent = "Erreur : La marque est obligatoire.";
//      return;
//    }
//     else if(eviterDoublementImmatriculation != undefined) {
//                aideimmatriculatio.classList.add("field-hel");
//                aideimmatriculatio.textContent = "Utilisez une immatriculation fictive et unique"
//                return;
//     }

   
//     if(prix <= 0){
//      erreurprixjour.classList.add("field-error")
//      erreurprixjour.textContent = "enter le valeur de paix est positif"
     
//      return;
//    }

//      const eviterDoublementImmatriculation =  voituresInitiales.find(voituresInitiale =>   voituresInitiale.immatriculation === immatriculation.value);



//    voituresInitiales.push({
//        "id": voituresInitiales.length + 1,
//      "marque": marque,
//      "modele": modele,
//      "immatriculation": immatriculation,
//      "categorie": categorie,
//      "prixJour": prix,
//      "statut": statut,
//     });

    
//     afficherTableVoiture();
    
//  }
//  ajoutervoiture.addEventListener("click", (e) => {
//   e.preventDefault();
// ajouterVOitute();
//  })

