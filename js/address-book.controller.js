'use strict'
 
function onInit() {
    getNames(renderCards)   
}

function renderCards(data) {
       const strHtml = data.map((card, idx) => `
                <div class = card>
                    <h2>${card.fname} ${card.lname}</h2> 
                    <img src="https://robohash.org/{${idx+1}}?set=set5" alt="">
                    <div class="card-text">
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
                    </div>   
                </div>`
                ).join('')

    document.querySelector('.cards').innerHTML = strHtml
}

