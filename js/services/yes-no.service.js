'use strict'

function getAns(onSuccess) {
    $.get('https://yesno.wtf/api', onSuccess)
}

function isValid (quest){
    const size = quest.length
    if(quest.length < 4 || quest.charAt(size-1)!=='?') {
        alert('Question must be at least 3 letters long and end with a ?')
        return false
    }
    else return true
}

function getDog(onSuccess) {
    $.get('https://dog.ceo/api/breeds/image/random', onSuccess)
}

function getJoke(onSuccess) {
    $.get('https://api.chucknorris.io/jokes/random', onSuccess)
}

