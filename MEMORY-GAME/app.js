const cardArray = [
    {
        name: 'diamon',
        img: 'images/diamond.png'
    },
    {
        name: 'diamon',
        img: 'images/diamond.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },  
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'mario',
        img: 'images/mario.png'
    },
    {
        name: 'mario',
        img: 'images/mario.png'
    },
    {
        name: 'pingu',
        img: 'images/diamond.jpg'
    },
    {
        name: 'pingu',
        img: 'images/diamond.jpg'
    },
    {
        name: 'white',
        img: 'images/white.jng'
    },
    {
        name: 'check',
        img: 'images/check.jpg'
    }
];

// Nice shortcut to shuffling an array 😃
cardArray.sort(() => 0.5 - Math.random());

// Get the element with id = 'grid'
const gridDisplay = document.querySelector('#grid');

const cardsChoosen = [];

createBoard();

// function to create board and append to div grid element
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/white.jpg');
        card.setAttribute('date-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

function checkMatch() {

}

//
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChoosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

