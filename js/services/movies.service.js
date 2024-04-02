'use strict'

var gCacheGenres = loadFromStorage('genresCache') || []
var gCacheMovies = loadFromStorage('moviesCache') || {}


function getGenres(onSuccess) {

    if(gCacheGenres.length > 0){
        console.log('Getting from cache...')
        onSuccess(gCacheGenres)
        return 
    }
    
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=43b2712ec9502986912ef9345a0766e7 `
    
	const req = new XMLHttpRequest()

	req.onreadystatechange = () => {

		if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
			const data = JSON.parse(req.responseText)
            console.log('Getting from network...')
			onSuccess(data)
            gCacheGenres = data.genres
            saveToStorage('genresCache', gCacheGenres)
		}
	}

	req.open('GET', url, true)
	req.send()
}

function getMovies(onSuccess, id, genre){
    if(gCacheMovies[id]){
        console.log('Getting from cache...')
        onSuccess(gCacheMovies[id])
        return 
    }
 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=43b2712ec9502986912ef9345a0766e7&with_genres=${id}`
    
	const req = new XMLHttpRequest()

	req.onreadystatechange = () => {

		if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
			const rawData = JSON.parse(req.responseText)
            console.log('Getting from network...')

            const data = rawData.results.map(result => {
                return {
                    title: result.title,
                    overview: result.overview,
                    image: result.poster_path,
                }
            })

            onSuccess(data)
            gCacheMovies[id] = data
            saveToStorage('moviesCache', gCacheMovies)
		}
	}

	req.open('GET', url, true)
	req.send()
}