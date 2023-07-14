'use strict'
/* ESERCIZIO js-our-tea,
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: (fatto)
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: (fatto)
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/


// Creo l'array con all'interno i membri del team
const team = [
  {
    nome: "Mario Bennett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Founder & CEO",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  }
];

//console.log(team);
const memberList = document.querySelector(".row");


// CICLO FOR: Ciclo le informazioni per tutti i membri del team
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  // Stampo su console le informazioni di ogni membro
  console.log(member.nome, member.ruolo);
  
  // Aggiungo all'HTML il blocco di codice da ciclare per creare tutte le card con le informazioni
  memberList.innerHTML += `<div class="col-4 mt-4 mb-4">
                                <div class="card" style="width: 350px;">
                                  <img src="img/${member.foto}" class="card-img-top" alt="img">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center fw-bold">${member.nome}</li>
                                    <li class="list-group-item text-center">${member.ruolo}</li>
                                  </ul>
                                </div>
                              </div> `

}

// Aggiungo il bottone per aggiungere altri membri
const addBtn = document.getElementById("add");

// SCATENO UN EVENTO AL CLICK
addBtn.addEventListener("click", function() {
  // Aggiungo una costante dalla quale prendo tutti i valori inseriti negli input dell'HTML
  const newMember = {
    nome: document.getElementById("name").value,
    ruolo: document.getElementById("role").value,
    foto: document.getElementById("image").value,
  }

  // Pusho il nuovo membro all'interno del team
    team.push(newMember);

    // Stampo in console il nuovo team con il nuovo membro
    console.log(team);
});
