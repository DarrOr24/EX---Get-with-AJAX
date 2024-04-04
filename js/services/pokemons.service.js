'use strict'

var gCachePokemons = loadFromStorage('pokemonsCache') || []
var gCacheOnePokemon = loadFromStorage('pokemonCache') || []


function getPokemons(onSuccess) {

    if(gCachePokemons.length > 0){
        console.log('from cache...')
        onSuccess(gCachePokemons)
        return 
    }

    console.log('from network...')
    $.get('https://pokeapi.co/api/v2/pokemon/', onSuccess)
}

function savePokemonCache(data) {
    gCachePokemons = data
    saveToStorage('pokemonsCache', gCachePokemons)
}

function saveOnePokemon(pokemon){
    gCacheOnePokemon.push(pokemon)
    saveToStorage('pokemonCache', gCacheOnePokemon)
}

function sortPokemonsList(pokemonsList){
    return pokemonsList.sort((pokemon1, pokemon2) => pokemon1.name.localeCompare(pokemon2.name) )
 
}

function getPoke(onSuccess, url){
    $.get(url,onSuccess)
}

function getPokeCSV(){
    sortPokemonsList(gCachePokemons)
    var csvStr = `Name, Weight, Img1, Img2, Img3`
    gCachePokemons.forEach( pokemon => {
        const csvLine = `\n${pokemon.name}, ${pokemon.weight}, ${pokemon.imgs.back_default}, ${pokemon.imgs.back_shiny}, ${pokemon.imgs.front_default}`
        csvStr += csvLine
    })
    return csvStr
}

