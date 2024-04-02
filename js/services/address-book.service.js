'use strict'

function getNames(onSuccess) {

    const url = `http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true`

    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText)
            onSuccess(data)
        } 
    }
    xhr.open('GET', url, true)
    xhr.send()
}