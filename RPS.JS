const options = ["rock", "paper", "scissors"];

function getComputterChoice(){
    const choice = options[Math.floor(Math.random()
* options.length)];

console.log(choice)

    }
getComputterChoice();