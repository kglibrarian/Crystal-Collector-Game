$(document).ready(function() {
    

//variables
let darthMaulDiv = $('#darthmaul');
let charAttacksDiv = $('#attackcharacters');


//Functions
function moveAttacker(attacker) {
    charAttacksDiv.append(attacker);
}

//Events

//clicking Luke will move darth maul below

$("#luke").on('click', function() {
    alert('clicked luke');
    moveAttacker(darthMaulDiv);
    
});

resetGame() {
    //reset vlaues
    startGame();
}

funciton playGame() {
    if win {
        resetGame();
    }
}

});