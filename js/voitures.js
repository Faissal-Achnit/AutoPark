import { voituresInitiales }  from './data.js'


// console.log(voituresInitiales);




const listeVoitures  = document.querySelector("#liste-voitures");
listeVoitures.classList.add("liste-voitures")

    if(listeVoitures === 0){

        listeVoitures.text = "Aucune voiture n’est disponible pour le moment."
    }

function afficherTableVoiture(){


voituresInitiales.forEach((voituresInitiale) => {
    // listeVoitures.replaceChildren();
    

    const containerTable = document.createElement("tr");

    const marque = document.createElement("td");
    const strong = document.createElement("strong")
    strong.textContent = voituresInitiale.marque


    const modele = document.createElement("td");

    modele.textContent = voituresInitiale.modele



    const immatriculation = document.createElement("td");
    const span = document.createElement("span");
    span.classList.add("registration");
    
    span.textContent = voituresInitiale.immatriculation;

    const categorie = document.createElement("td")

    categorie.textContent = voituresInitiale.categorie


    const prixJour = document.createElement("td")
   prixJour.classList.add("price")
   prixJour.textContent = voituresInitiale.prixJour

   const text = document.createElement("span");
   text.textContent = "  DH / jour"

   const statut = document.createElement("td")

   const spanone = document.createElement("span")

   spanone.classList.add("badge", "badge-disponible")

   spanone.textContent = voituresInitiale.statut

   const btns = document.createElement("td")

   const containerBtn = document.createElement("div")
   containerBtn.classList.add("row-actions")

   const btnModifier = document.createElement("button")
   btnModifier.classList.add("button", "button-edit")
   btnModifier.textContent = "Modifier"


  

   const btnSupprimer = document.createElement("button")
   btnSupprimer.classList.add("button", "button-delete")
   btnSupprimer.textContent = "Supprimer"


   


containerTable.appendChild(marque);
marque.appendChild(strong);
containerTable.appendChild(modele);

containerTable.appendChild(immatriculation)
immatriculation.appendChild(span)

containerTable.appendChild(categorie)

containerTable.appendChild(prixJour)

prixJour.appendChild(text)

containerTable.appendChild(statut)
 statut.appendChild(spanone)

containerTable.appendChild(btns)
btns.appendChild(containerBtn)
containerBtn.appendChild(btnModifier)

containerTable.appendChild(btns)
btns.appendChild(containerBtn)
containerBtn.appendChild(btnSupprimer)


// containerTable.appendChild(btnModifier);
// containerTable.appendChild(btnSupprimer);

listeVoitures.appendChild(containerTable);

});
}

afficherTableVoiture();


function ajouterVOitute(){

    const marque = document.querySelector("#marque");
    const modele = document.querySelector("#modele");
    const immatriculation = document.querySelector("#immatriculation");
    const categorie = document.querySelector("#statut");
    const statut = document.querySelector("#statut");
    const prix = document.querySelector("#prix-jour");


    const EviterDoub = 

   marque = marque.value;
   modele = modele.value;
   immatriculation = immatriculation.value;
   categorie = categorie.value;
   statut = statut.value;
   prix = prix.value;
   

   if(marque.tim() === "" || modele.tim() === "" || immatriculation.trim() === "" || prix.trim()){
    alert(" tout les champs sont obligatoire")
    return;
   }

   if(prix <= 0 || isNaN(prix)){
    alert("enter le prix est strictement positif")
    return;
   }



   const neveauVoiture = {
      "id": voituresInitiales.length + 1,
    "marque": marque,
    "modele": modele,
    "immatriculation": immatriculation,
    "categorie": categorie,
    "prixJour": prix,
    "statut": statut,
   }

   listeVoitures.push(neveauVoiture)
   afficherTableVoiture();


}

const ajoutervoiture = document.querySelector("#bouton-enregistrer")

ajoutervoiture.addEventListener("click", (e) => {
 e.preventDefault();
 ajouterVOitute();

})






