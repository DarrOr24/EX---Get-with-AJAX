'use strict'

function onInit() {
    getGenres(renderGenres)   
}

function renderGenres(data){
    const strHtml = data.map(genre => `
        <div onclick="onGenreSelect(${genre.id}, this)" >${genre.name}</div>`
		).join('')

	document.querySelector('.genre-list').innerHTML = strHtml
}

function onGenreSelect(id, elGenreBtn){
    const elGenreBtns = document.querySelectorAll('.genre-list div')
    elGenreBtns.forEach(btn => btn.classList.remove('clicked'))
    
    elGenreBtn.classList.add('clicked')
    getMovies(renderMovies, id)
}

function renderMovies(data){
    const strHtml = data.map(movie => `
        <div class="movie-card"> 
            <img src="${movie.image}" alt="">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
        </div>`
    ).join('')

document.querySelector('.movie-list').innerHTML = strHtml
    
}