// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
async function getPokemonList(url){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        doStuffList(data);
    }
}
function doStuff(data) {
    results = data;
    const outPut = document.querySelector('#output');
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outPut.innerHTML = html;
    console.log("first: ", results);

}

function doStuffList(data){
    console.log(data);
    const listElement = document.querySelector('#outputList');
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) =>{
        const html = `<li>${currentItem.name}</li>`;
        listElement.innerHTML += html;
    });
}
function compare (a,b){
    if (a.name < b.name){
        return -1;
    }
    else if (a.name > b.name){
        return 1;
    }
    return 0;
}
function sortPokemon(list){
    let sortedList = list.sort(compare);
    return sortedList;
}
getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);





