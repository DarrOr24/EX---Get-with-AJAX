'use strict'

var gAddressBook = null

function onInit() {
    getNames(renderCards)   
}

function renderCards(data) {
   
    const strHtml = data.map((card, idx) => `
                <div class = card card${idx+1}>
                    <div>${card.fname}&nbsp${card.lname}</div> 
                    <img src="https://robohash.org/{${idx+1}}?set=set5" alt="">
                    <li>
                        <span>Phone:</span>
                        <span> ${card.tel}</span>
                    </li> 
                    <li>
                        <span>City:</span>
                        <span> ${card.city}</span>
                    </li> 
                    <li>
                        <span>State:</span>
                        <span> ${card.state}</span>
                    </li> 
                    <li>
                        <span>Zip:</span>
                        <span> ${card.zip}</span>
                    </li> 
                    <li>
                        <span>Address:</span>
                        <span> ${card.address}</span>
                    </li> 
                    
                </div>`
                ).join('')

    document.querySelector('.cards').innerHTML = strHtml
}

