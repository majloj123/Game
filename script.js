document.addEventListener("DOMContentLoaded", () => {
    //cards
    const cardArray = [
        {
            name: "apple",
            img: "images/apple.png"
        },
        {
            name: "apple",
            img: "images/apple.png"
        },
        {
            name: "bee",
            img: "images/bee.png"
        },
        {
            name: "bee",
            img: "images/bee.png"
        },
        {
            name: "hipo",
            img: "images/hipo.png"
        },
        {
            name: "hipo",
            img: "images/hipo.png"
        },
        {
            name: "pinguin",
            img: "images/pinguin.png"
        },
        {
            name: "pinguin",
            img: "images/pinguin.png"
        },
        {
            name: "purple",
            img: "images/purple.png"
        },
        {
            name: "purple",
            img: "images/purple.png"
        },
        {
            name: "shark",
            img: "images/shark.png"
        },
        {
            name: "shark",
            img: "images/shark.png"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //gamebord
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }


    //check
    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute("src", "iamges/blank.png");
            cards[optionTwoId].setAttribute("src", "iamges/blank.png");
            alert("You choose the same image!");
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("It's a match!");
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("Bad! Try again!");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congrats! You found all of them!";
        }
    }

    //flip
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }

    createBoard();
})