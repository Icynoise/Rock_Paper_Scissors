function getComputerChoice(){
    let a = ["paper","rock","scissors"];
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 3);
    return a[randomNumber];
}

function game () {

    let player = 0;
    let comp = 0;

    while(player != 3 && comp != 3){

        let playerSelection = prompt("Unesite vas izbor").toLowerCase();

        let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
        console.log("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        player++;
        console.log(`Player wins! Score is: Player:${player} Comp: ${comp}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`Player wins! Score is: Player:${player} Comp: ${comp}`);
        player++;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        player++;
        console.log(`Player wins! Score is: Player:${player} Comp: ${comp}`);
    } else {
        comp++;
        console.log(`Comp wins! Score is: Player:${player} Comp: ${comp}`);
    }
  }

  if (player === 3){
    console.log(`Player wins! Player has reached ${player}!`);
  } else if(comp === 3){
    console.log(`Comp wins! Comp has reached ${comp}`);
  }
}

game();

