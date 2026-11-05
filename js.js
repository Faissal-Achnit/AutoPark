import { config } from "./starter.js";

const section = document.querySelector("#section");
section.classList.add("articleone");
 
console.log(config.voitures)

function  afficherConfig(){
  section.replaceChildren();
    config.voitures.forEach(voiture => {
      
      
      const article = document.createElement("div")
      article.classList.add("article");

      const display = document.createElement("div");
      display.classList.add("display")

         const voitur = document.createElement("span");
       voitur.classList.add("voitur")
       voitur.textContent = voiture.categorie;

        const inputcheck = document.createElement("input");
       inputcheck.classList.add("check");

       const text = document.createElement("div");
      text.classList.add("text")

      
        const typeVoitute = document.createElement("p");
        typeVoitute.classList.add("type-voitute")
        typeVoitute.textContent = voiture.marque

        const isDesponible = document.createElement("p");
        isDesponible.classList.add("isDesponible")
        isDesponible.textContent = voiture.statut;



        const prix = document.createElement("p");
        prix.classList.add("prix")
        typeVoitute.textContent = voiture.prixJour;

        
        
      

        display.appendChild(voitur)
        display.appendChild(inputcheck)
        
        text.appendChild(typeVoitute)
        text.appendChild(isDesponible)
        text.appendChild(prix)
        article.appendChild(display)
        article.appendChild(text)

      section.appendChild(article)
    })
    
}

afficherConfig();







