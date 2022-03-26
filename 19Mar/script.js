
const ul = document.querySelector("ul");
const name = document.querySelector("#name");
const universe = document.querySelector("#universe");

//Input cerca tra i risultati
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




// Costruzione Funzione Render con un filter 
//
const render = (value = "") => {
    
    const results = people.filter((element) => element.toLowerCase().includes(value.toLowerCase()));

    // Esecuzione split per ogni stringa  
    ul.innerHTML = results.map((element) => element.split(" - ")).map((element) =>

    `<li class="card">
    <span class="name">${element[0]}</span>  <span class="universe">${element[1]}</span> 
    </li>`).join("");
};



//Aggiungi nuovo personaggio 
document.querySelector('button').addEventListener("click",() => {
    people.push(`${name.value} - ${universe.value}`);
    
    render();
    
    name.value = "";
    universe.value ="";
    
});  



//Filtrami la lista tramite Keyup 
inputFilter.addEventListener("keyup", ()=> {
    const value = inputFilter.value;
    const results = people.filter((element) => element.toLowerCase().includes(value.toLowerCase()))

    ul.innerHTML = results.map((element) => `<li> ${element}</li>`).join("");
    
});


render();

