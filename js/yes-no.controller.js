'use strict'

function onInit() {
    const elInput = document.querySelector('input')
    elInput.addEventListener('input', debounce(onAsk, 1000))
}

function onAsk(ev) {
    if(!isValid(ev.target.value)) return
	getAns(renderAns1)
    getAns(renderAns2)
}

function renderAns1(ans) {
    document.querySelector('.step1-ans').innerText = ans.answer
    document.querySelector('.step1-img').src = ans.image
}

function renderAns2({answer}) {
    const elJoke = document.querySelector('.step2-joke')
    elJoke.classList.add('hidden')
    const elDogImg = document.querySelector('.step2-img')
    elDogImg.classList.add('hidden')
    const elAns = document.querySelector('.step2-ans')

    switch (answer){
        case 'yes':
            elAns.innerText = 'On second thought - YES'
            getJoke(renderJoke)
            elJoke.classList.remove('hidden')
            break
            
            case 'no':
            elAns.innerText = 'On second thought - NO'
            getDog(renderDog)
            elDogImg.classList.remove('hidden')
            break
    }
}

function renderDog(dog){
    document.querySelector('.step2-img').src = dog.message
}

function renderJoke(joke){
    document.querySelector('.step2-joke').innerText = joke.value
}