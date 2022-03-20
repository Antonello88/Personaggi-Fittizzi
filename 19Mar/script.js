
const ul = document.querySelector("#peopleList");

const input = document.querySelector("#input1");
const inputUni = document.querySelector("#input2");

const inputFilter = document.querySelector("#input3");




const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
  ];

// Stampa dei dati 'People' 
ul.innerHTML = people.map((element) => `<li>${element}</li>`).join("");

//Aggiungi nuovo personaggio
document.querySelector('button').addEventListener("click",() => {
    people.push(input.value + "-" + inputUni.value);
    
    
    // Stampa l'array people con il nuovo personaggio aggiunto  
    ul.innerHTML = people.map((element) => `<li> ${element}</li>`).join("");
    
}); 

//Filtrami la lista tramite Keyup 
inputFilter.addEventListener("keyup", ()=> {
    const value = inputFilter.value;
    const results = people.filter((element) => element.toLowerCase().includes(value.toLowerCase()))

    ul.innerHTML = results.map((element) => `<li> ${element}</li>`).join("");
    
});



