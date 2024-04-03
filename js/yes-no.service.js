'use strict'

function getAns(onSuccess) {
    $.get('https://yesno.wtf/api', onSuccess)
}