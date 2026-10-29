import { voituresInitiales } from "./data.js";

let voitures = [...voituresInitiales];

let idModifier = null;

const marque = document.querySelector("#marque");
const modele = document.querySelector("#modele");
const immatriculation = document.querySelector("#immatriculation");
const categorie = document.querySelector("#categorie");
const statut = document.querySelector("#statut");
const prixJour = document.querySelector("#prix-jour");
const boutonEnregistrer = document.querySelector("#bouton-enregistrer");

const titreFormailaire = document.querySelector("#titre-formulaire");

const formulaire = document.querySelector("#formulaire-voiture");
const listeVoitures = document.querySelector("#liste-voitures");
const etatVide = document.querySelector("#etat-vide");

const annulermodification = document.querySelector("#annuler-modification");

function afficherTableVoiture() {
  if (voitures.length === 0) {
    etatVide.hidden = false;
  }
  listeVoitures.replaceChildren();

  voitures.forEach((voiture) => {
    const containerTable = document.createElement("tr");

    const marque = document.createElement("td");
    const strong = document.createElement("strong");
    strong.textContent = voiture.marque;

    const modele = document.createElement("td");

    modele.textContent = voiture.modele;

    const immatriculation = document.createElement("td");
    const span = document.createElement("span");
    span.classList.add("registration");

    span.textContent = voiture.immatriculation;

    const categorie = document.createElement("td");

    categorie.textContent = voiture.categorie;

    const prixJour = document.createElement("td");
    prixJour.classList.add("price");
    prixJour.textContent = voiture.prixJour;

    const text = document.createElement("span");
    text.textContent = "  DH / jour";

    const statut = document.createElement("td");

    const spanone = document.createElement("span");

    spanone.classList.add("badge", "badge-disponible");

    spanone.textContent = voiture.statut;

    const btns = document.createElement("td");

    const containerBtn = document.createElement("div");
    containerBtn.classList.add("row-actions");

    const btnModifier = document.createElement("button");
    btnModifier.classList.add("button", "button-edit");
    btnModifier.textContent = "Modifier";

    btnModifier.addEventListener("click", (e) => {
      e.preventDefault();
      preparerModification(voiture.id);
      idModifier = voiture.id;
    });

    const btnSupprimer = document.createElement("button");
    btnSupprimer.type = "button";
    btnSupprimer.classList.add("button", "button-delete");
    btnSupprimer.textContent = "Supprimer";

    btnSupprimer.addEventListener("click", (e) => {
      e.preventDefault();

      if (confirm("vous vouley de supprimer cette voiture")) {
        voitures = voitures.filter((item) => item.id != voiture.id);
      }
      afficherTableVoiture();
    });

    containerTable.appendChild(marque);
    marque.appendChild(strong);

    containerTable.appendChild(modele);

    containerTable.appendChild(immatriculation);
    immatriculation.appendChild(span);

    containerTable.appendChild(categorie);

    containerTable.appendChild(prixJour);

    prixJour.appendChild(text);

    containerTable.appendChild(statut);
    statut.appendChild(spanone);

    containerTable.appendChild(btns);
    btns.appendChild(containerBtn);
    containerBtn.appendChild(btnModifier);

    containerBtn.appendChild(btnSupprimer);

    listeVoitures.appendChild(containerTable);
  });
}

afficherTableVoiture();

function ajouterVoitute() {
  const erreurmarque = document.querySelector("#erreur-marque");
  const erreurmodele = document.querySelector("#erreur-modele");
  const erreurimmatriculation = document.querySelector(
    "#erreur-immatriculation",
  );
  const aideimmatriculatio = document.querySelector("#aide-immatriculation");
  const erreurprixjour = document.querySelector("#erreur-prix-jour");

  if (marque.value.trim() === "") {
    erreurmarque.classList.add("field-error");
    erreurmarque.textContent = "Erreur : La marque est obligatoire.";
    return;
  }

  if (modele.value.trim() === "") {
    erreurmodele.classList.add("field-error");
    erreurmodele.textContent = "Erreur : Le modèle est obligatoire.";
    return;
  }

  if (immatriculation.value.trim() === "") {
    erreurimmatriculation.classList.add("field-error");
    erreurimmatriculation.textContent = "Erreur : La marque est obligatoire.";
    return;
  }

  const eviterDoublementImmatriculation = voitures.find(
    (voiture) => voiture.immatriculation === immatriculation.value.trim(),
  );
  if (eviterDoublementImmatriculation !== undefined) {
    aideimmatriculatio.textContent = "Cette immatriculation existe déjà.";
    return;
  }

  if (prixJour.value.trim() <= 0) {
    erreurprixjour.classList.add("field-error");
    erreurprixjour.textContent = "enter le valeur de paix est positif";

    return;
  }

  voitures.push({
    id: voitures.length + 1,
    marque: marque.value,
    modele: modele.value,
    immatriculation: immatriculation.value,
    categorie: categorie.value,
    prixJour: prixJour.value,
    statut: statut.value,
  });

  afficherTableVoiture();
}

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (idModifier === null) ajouterVoitute();
  else modifierVoiture(idModifier);
});

const voitureId = document.querySelector("#voiture-id");

function preparerModification(id) {
  const voiture = voitures.find((item) => item.id === id);

  marque.value = voiture.marque;
  modele.value = voiture.modele;
  immatriculation.value = voiture.immatriculation;
  categorie.value = voiture.categorie;
  prixJour.value = voiture.prixJour;
  statut.value = voiture.statut;

  voitureId.value = voiture.id;

  boutonEnregistrer.textContent = "Modifier";
  titreFormailaire.textContent = "Modifier une voiture";



  annulermodification.hidden = false;
}

function modifierVoiture(id) {
  let objet = voitures.find(voiture => voiture.id === id);
  let index = voitures.indexOf(objet);
  voitures[index] = {
    id: id,
    marque: marque.value,
    modele: modele.value,
    immatriculation: immatriculation.value,
    categorie: categorie.value,
    prixJour: prixJour.value,
    statut: statut.value,
  };
 
 afficherTableVoiture();

  marque.value = "";
  modele.value = "";
  immatriculation.value = "";
  categorie.value = "";
  prixJour.value = "";
  statut.value = "";

  idModifier = null;
}


  


