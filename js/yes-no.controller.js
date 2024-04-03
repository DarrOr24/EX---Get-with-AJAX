'use strict'

function onInit() {
    const elInput = document.querySelector('input')
    elInput.addEventListener('input', debounce(onAsk, 1000))
}

function onAsk() {
	getAns(renderAns)
}

function renderAns(ans) {
    console.log(ans)

    document.querySelector('.answer h2').innerText = ans.answer
    document.querySelector('.answer img').src = ans.image
}