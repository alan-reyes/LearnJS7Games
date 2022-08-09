document.addEventListener('DOMContentLoaded', () => {
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
            img: 'images/pingu.jpg'
        },
        {
            name: 'pingu',
            img: 'images/pingu.jpg'
        },
        {
            name: 'hongo',
            img: 'images/hongo.jpg'
        },
        {
            name: 'hongo',
            img: 'images/hongo.jpg'
        }        
    ];
    
    // nice shortcut to shuffling an array 😃
    cardArray.sort(() => 0.5 - Math.random());
    
    // get the element with id = 'grid'
    const gridDisplay = document.querySelector('#grid');
    
    const resultDisplay = document.querySelector('#result');
    let cardsChoosen = [];
    let cardsChoosenIds = [];
    let cardsWon = [];
    
    // function to create board and append to div grid element
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/white.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gridDisplay.append(card);
        }
    }
    
    function checkMatch() {
        // get all the cards
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenIds[0];
        const optionTwoId = cardsChoosenIds[1];
    
        if (optionOneId == optionTwoId) {            
            alert('You clicked the same image');
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
        }
        // match
        else if (cardsChoosen[0] == cardsChoosen[1]) {        
            alert('You found a match!');
            // set another img for every card selected
            cards[optionOneId].setAttribute('src', 'images/check.jpg');
            cards[optionTwoId].setAttribute('src', 'images/check.jpg');
            // remove the hability to click on the card
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChoosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            alert('Sorry try again!');
        }
        // reset the cards choosen
        cardsChoosen = [];
        cardsChoosenIds = [];
        resultDisplay.textContent = cardsWon.length;    
        if (cardsWon.length == cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations you found them all';
        }
    }
    
    //
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name);
        cardsChoosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChoosen.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
    
    createBoard();
})


