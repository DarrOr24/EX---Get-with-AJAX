'use strict'

function onInit(){
    getPokemons(renderPokemons)
}

function renderPokemons(data){
    if(gCachePokemons.length === 0){
        savePokemonCache(data.results)
        data = data.results
    }

    if (gCacheOnePokemon.length>0){
        console.log('cache cachon')
        data.forEach((pokemon, idx) => {
            pokemon.weight = gCacheOnePokemon[idx].weight 
            pokemon.imgs = gCacheOnePokemon[idx].sprites 
            savePokemonCache(gCachePokemons)
        })
        
    } else{
        console.log('network baby')
        data.forEach(pokemon => {
            getPoke(renderPokeInfo, pokemon.url)
        })
    }

    const sortedData = gCachePokemons.slice()
    sortPokemonsList(sortedData)

    setInterval(()=> {
        renderPokemonCards(sortedData, 'back_default')
        setTimeout(renderPokemonCards, 500, sortedData, 'back_shiny')
        setTimeout(renderPokemonCards, 1000, sortedData, 'front_default')
        
    }, 1500)
}

function renderPokemonCards(sortedData, key='front_default'){
    const strHtml = sortedData.map(pokemon => `
        <div class="pokemon-card">
            <div>${pokemon.name}</div>
            <div>Weight: ${pokemon.weight}</div>
            <img src="${pokemon.imgs[key]}" alt="">
        </div>
    `).join('')

    document.querySelector('.pokemons-list').innerHTML = strHtml
}

function renderPokeInfo(pokemon){
    saveOnePokemon(pokemon)
    
    gCachePokemons[pokemon.id - 1].weight = pokemon.weight 
    gCachePokemons[pokemon.id - 1].imgs = pokemon.sprites 
    savePokemonCache(gCachePokemons) 
}

function onDownloadCSV(elLink){
    const csvContent = getPokeCSV()
    elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
}