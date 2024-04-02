'use strict'

function onInit() {
    getGenres(renderGenres)   
}

function renderGenres(data){
    const strHtml = data.map(genre => `
        <div onclick="onGenreSelect(${genre.id}, '${genre.name}')" >${genre.name}</div>`
		).join('')

	document.querySelector('.genre-list').innerHTML = strHtml
}

function onGenreSelect(id, genre){
    console.log(id, genre)
    getMovies(renderMovies, id, genre)
}

function renderMovies(data, id, genre){
    const strHtml = data.map(movie => `
        <div class="movie-card"> 
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
        </div>`
    ).join('')

document.querySelector('.movie-list').innerHTML = strHtml
    
}