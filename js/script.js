//Game Score 
let score = 100;

//Generate random number for dice one two and three and write to DOM
function rollDice() 
{
    let dice1 = document.getElementById("diceOne");
    dice1.innerHTML = Math.floor(Math.random() * 6 )+ 1;
    let dice2 = document.getElementById("diceTwo");
    dice2.innerHTML = Math.floor(Math.random() * 6 )+ 1;
    let dice3 = document.getElementById("diceThree");
    dice3.innerHTML = Math.floor(Math.random() * 6 )+ 1;
}

// Disable the button 
function disableBtn()
{
    let button = document.getElementById("button");
    button.disabled = true;
}

// Reset All three dices to zero and set the score-text to an empty string. Finally enable roll-dice button 
function resetScore()
{
 score = 100;
 document.getElementById("button").disabled = false;
 document.getElementById("diceOne").textContent = "0";
 document.getElementById("diceTwo").textContent = "0";
 document.getElementById("diceThree").textContent = "0";
 document.getElementById("message").textContent = "";
 document.getElementById("score").textContent = score;

}

// Game play - check if there is a Jack-POT (all dices have the same number) and give points. Subtract if there is no Jack-POT!!!.
function playGame() 
{
    if (score !== 1) {
        document.getElementById("message").textContent = "";
        rollDice();
        if (
            
            (document.getElementById("diceOne").textContent) == (document.getElementById("diceTwo").textContent) 
            && 
            (document.getElementById("diceTwo").textContent) == (document.getElementById("diceThree").textContent)
           )
           {
               console.log("JackPOT XXX!!!");
               score = score + 50;
               document.getElementById("score").textContent = score;
               document.getElementById("message").style.color ="#dbaf18";
               document.getElementById("message").style.fontSize ="2rem";
               document.getElementById("message").style.fontWeight ="bolder";
               document.getElementById("message").textContent = "JackPOT - 50 Points";
           } 
        else 
           {
              score = score - 1;
              document.getElementById("score").textContent = score;
           }
    }
    else
    {
        disableBtn();
        alert("You loose the GAME");
        console.log("You loose the GAME");
        document.getElementById("message").textContent = "You lost All your MONEY!!!";
    }
}
