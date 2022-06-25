document.addEventListener('DOMContentLoaded', () => {
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
        name: 'television',
        img: 'images/television.jpg',
    },
    {
        name: 'radio',
        img: 'images/radio.jpg',
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
        img: 'images/radio.jpg',
    },
    {
        name: 'television',
        img: 'images/television.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// Build image board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found the same picture')
        cards[optionOneId].setAttribute('src', 'images/blue.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blue.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkForMatch, 500)
    }
  }
  
  createBoard()
})