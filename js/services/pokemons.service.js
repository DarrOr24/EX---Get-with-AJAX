'use strict'

var gCachePokemons = loadFromStorage('pokemonsCache') || []


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

function sortPokemonsList(pokemonsList){
    return pokemonsList.sort((pokemon1, pokemon2) => pokemon1.name.localeCompare(pokemon2.name) )
 
}

function getPoke(onSuccess, url){
    $.get(url,onSuccess)
}

