'use strict'

function getGenres(onSuccess) {
    const cacheGenres = loadFromStorage('genresCache') || []

    if(cacheGenres.length > 0){
        console.log('Getting from cache...')
        onSuccess(cacheGenres)
        return 
    }
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=43b2712ec9502986912ef9345a0766e7 `
	const req = new XMLHttpRequest()

	req.onreadystatechange = () => {
		if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
			const data = JSON.parse(req.responseText)
            console.log('Getting from network...')
			onSuccess(data)
            cacheGenres = data.genres
            saveToStorage('genresCache', cacheGenres)
		}
	}

	req.open('GET', url, true)
	req.send()
}

function getMovies(onSuccess, id){
    const cacheMovies = loadFromStorage('moviesCache') || {}

    if(cacheMovies[id]){
        console.log('Getting from cache...')
        onSuccess(cacheMovies[id])
        return 
    }
 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=43b2712ec9502986912ef9345a0766e7&with_genres=${id}`
	const req = new XMLHttpRequest()

	req.onreadystatechange = () => {
		if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
			const rawData = JSON.parse(req.responseText)
            console.log('Getting from network...')
            const data = rawData.results.map(result => {
                const image = `https://image.tmdb.org/t/p/w500` + result.poster_path 
                return {
                    title: result.title,
                    overview: result.overview,
                    image,
                }
            })
            onSuccess(data)
            cacheMovies[id] = data
            saveToStorage('moviesCache', cacheMovies)
		}
	}

	req.open('GET', url, true)
	req.send()
}