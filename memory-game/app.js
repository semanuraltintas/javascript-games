const cardArray = [
    {
        name: 'camera',
        img: 'images/camera.jpg',
    },
    {
        name: 'computer',
        img: 'images/computer.jpg',
    },
    {
        name: 'microphone',
        img: 'images/microphone.jpg',
    },
    {
        name: 'phone',
        img: 'images/phone.jpg',
    },
    {
        name: 'radio',
        img: 'images/television.jpg',
    },
    {
        name: 'camera',
        img: 'images/camera.jpg',
    },
    {
        name: 'computer',
        img: 'images/computer.jpg',
    },
    {
        name: 'microphone',
        img: 'images/microphone.jpg',
    },
    {
        name: 'phone',
        img: 'images/phone.jpg',
    },
    {
        name: 'radio',
        img: 'images/television.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId) {
        alert('You found the same picture')
    }

    console.log('check for match!')

    if cardsChosen[0] == cardsChosen[1] {
        cards[optionOneId[0]].setAttribute('src', 'images/blue.jpg')
        cards[optionTwoId[1]].setAttribute('src', 'images/blue.jpg')
        cards[optionOneId[0]].removeEventListener('click', flipCard)
        cards[optionTwoId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    }
    cardsChosen = []
    cardsChosenIds = []


}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId])
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }



}