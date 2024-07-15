//x
const close = document.querySelector('span')


//Boton para enviar
const buttonForm = document.querySelector('button')

//Pared donde van las cartas
const wall = document.getElementById('wall')

function createCardPoster(text, color, style) {
    const div = document.createElement('div')
    const span = document.createElement('span')
    const h2 = document.createElement('h2')


    div.className += `flex flex-col ml-7 mr-7 w-[300px] h-[300px] bg-[${color}] overflow-hidden rounded-lg`
    span.className += 'self-end mb-20 mr-4 mt-4 text-2xl'
    h2.className += `text-5xl place-self-center ${style}`
    h2.style.fontFamily += 'Bona Nova SC', 'serif';
    span.textContent = 'x'
    h2.textContent = text
    span.setAttribute('onclick', 'return this.parentNode.remove();')

    div.append(span, h2)
    return div
}

// console.log($wall)
function createCardGraffiti(text, color, style) {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const h2 = document.createElement('h2')


    div.className += `flex flex-col ml-7 mr-7 w-[300px] h-[300px] bg-[${color}] overflow-hidden rounded-lg`
    span.className += 'self-end mb-20 mr-4 mt-4 text-2xl'
    h2.className += `text-5xl place-self-center ${style}`
    h2.style.fontFamily += 'Caveat', 'cursive'
    span.textContent = 'x'
    h2.textContent = text
    span.setAttribute('onclick', 'return this.parentNode.remove();')

    div.append(span, h2)
    return div
}
buttonForm.addEventListener('click', function(e) {
    e.preventDefault();
    const inputText = document.getElementById('textEntered').value;
    const inputColor = document.getElementById('colorSelect').value;
    
    if (document.getElementById('graffiti').checked) {
        const inputStyleGraffiti = document.getElementById('graffiti').value;
        fillCardGraffiti(inputText, inputColor, inputStyleGraffiti);
    } else if (document.getElementById('poster').checked) {
        const inputStylePoster = document.getElementById('poster').value;
        fillCardPoster(inputText, inputColor, inputStylePoster);
    }
});
function fillCardGraffiti(text, color, style) {
    let card = document.createDocumentFragment()

    card.appendChild(createCardGraffiti(text, color, style))
    wall.appendChild(card)

}
function fillCardPoster(text, color, style) {
    let card = document.createDocumentFragment()
    card.appendChild(createCardPoster(text, color, style))
    wall.appendChild(card)

}

