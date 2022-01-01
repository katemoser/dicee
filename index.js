

console.log("Hello")

function generateRandomNumber(){
    return Math.floor(Math.random() *6) + 1;
}

function rollDie(element){
    element.setAttribute("img", "images/dice1.png")
}

randomNumber1 = generateRandomNumber();
console.log(randomNumber1);


//select the two dice, and roll them
let dice = document.getElementsByClassName("dice");
console.log(dice);
for(let die of dice){
    console.log("working");
    rollDie(die);
}