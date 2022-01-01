let players = [];

function generateRandomNumber(){
    return Math.floor(Math.random() *6) + 1;
}

function rollDie(element, num){
    element.setAttribute("src", "images/dice" + num + ".png")
}

function assignWinner(){
    //get the header so i can change it
    let result = document.querySelector("h1");
    if(players[0] > players[1]){
        result.innerHTML = "Player 1 Wins!";
        console.log("Player 1 Wins");
    }
    else if(players[1] > players[0]){
        result.innerHTML = "Player 2 Wins!";

        console.log("Player 2 Wins");   
    }
    else{
        result.innerHTML = "Draw!";

        console.log("Draw");
    }
}

//select the two dice, and roll them
let dice = document.querySelectorAll("img");
//roll dice and save result
for(let die of dice){
    let num = generateRandomNumber();
    players.push(num);
    rollDie(die, num);
}
assignWinner();