document.addEventListener("DOMContentLoaded",() => {
    // const cardArray = new Array();
    // cardArray[0] = new Image(100,100);
    // cardArray[0].name= "apple";
    // cardArray[0].img = './image/apple.png';
    // cardArray[1] = new Image(100,100);
    // cardArray[1].name= "apple";
    // cardArray[1].img = './image/apple.png';
    // cardArray[2] = new Image(100,100);
    // cardArray[2].name= "cat";
    // cardArray[2].img = './image/cat.png';
    // cardArray[3] = new Image(100,100);
    // cardArray[3].name= "cat";
    // cardArray[3].img = './image/cat.png';
    // cardArray[4] = new Image(100,100);
    // cardArray[4].name= "minion";
    // cardArray[4].img = './image/minion.png';
    // cardArray[5] = new Image(100,100);
    // cardArray[5].name= "minion";
    // cardArray[5].img = './image/minion.png';
    // cardArray[6] = new Image(100,100);
    // cardArray[6].name= "pokemon";
    // cardArray[6].img = './image/pkm.png';
    // cardArray[7] = new Image(100,100);
    // cardArray[7].name= "pokemon";
    // cardArray[7].img = './image/pkm.png';
    // cardArray[8] = new Image(100,100);
    // cardArray[8].name= "mushroom";
    // cardArray[8].img = './image/mushroom.png';
    // cardArray[9] = new Image(100,100);
    // cardArray[9].name= "mushroom";
    // cardArray[9].img = './image/mushroom.png';
    // cardArray[10] = new Image(100,100);
    // cardArray[10].name= "puppy";
    // cardArray[10].img = './image/puppy.png';
    // cardArray[11] = new Image(100,100);
    // cardArray[11].name= "puppy";
    // cardArray[11].img = './image/puppy.png';

    const cardArray= [
        {
            name:"apple",
            img:"image/apple.png"
        },
        {
            name:"apple",
            img:"image/apple.png"
        },
        {
            name:"cat",
            img:"image/cat.png"
        },
        {
            name:"cat",
            img:"image/cat.png"
        },
        {
            name:"minion",
            img:"image/minion.png"
        },
        {
            name:"minion",
            img:"image/minion.png"
        },
        {
            name:"mushroom",
            img:"image/mushroom.png"
        },
        {
            name:"mushroom",
            img:"image/mushroom.png"
        },
        {
            name:"pkm",
            img:"image/pkm.png"
        },
        {
            name:"pkm",
            img:"image/pkm.png"
        },
        {
            name:"emo",
            img:"image/emo.png"
        },
        {
            name:"emo",
            img:"image/emo.png"
        }
    ];

    // document.write(imgArray[0].src);

    cardArray.sort(() =>.5 - Math.random())
    const grid=document.querySelector(".grid")
    const resultDisplay=document.querySelector("#result")
    let cardsChosen=[]
    let cardsChosenID=[]
    let cardsWon=[]

    function createBoard(){
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "image/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", filpCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        let cards =document.querySelectorAll("img")
        const optionOneId= cardsChosenID[0]
        const optionTwoId= cardsChosenID[1]
        if(cardsChosenID[0] === cardsChosenID[1]){
            alert("you have found a match")
            cards[optionOneId].setAttribute("src", "image/white.png")
            cards[optionTwoId].setAttribute("src", "image/white.png")
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute("src", "image/blank.png")
            cards[optionTwoId].setAttribute("src", "image/blank.png")
            alert("sorry, try again")
        }
        cardsChosen=[]
        cardsChosenID=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent="congratulation! you found them all!"
        }
    }

    function filpCard(){
        let cardId= this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenID.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if(cardsChosen.length ===2){
            setTimeout(checkForMatch, 200)
        }
    }

    createBoard();
})
