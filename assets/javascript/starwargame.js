$(document).ready(function() {
let luke = {
    "name": "luke", 
    "health" : 200,
    "multiplier" : 100,
    "power" : function () {
        return Math.floor(Math.random() * this.multiplier)
    },
    
};

let darthMaul = {
    "name": "darth maul", 
    "health" : 300,
    "multiplier" : 5,
    "power" : function () {
        return Math.floor(Math.random() * this.multiplier)
    },
};

function powerBoost(jedi){
    jedi.multiplier++;
    return jedi;
}

// function called attack two jedi
function attack(jediOne, jediTwo) {
    let j1Power = jediOne.power();
    let j2Power = jediTwo.power();
    jediOne.health = jediOne.health - j2Power;
    jediTwo.health = jediTwo.health - j1Power;
    
    console.log(jediOne.health);
    console.log(jediTwo.health);
//power boost
    powerBoost(jediOne);
    console.log("m" + jediOne.multiplier); 

//check health
    if (isJediDead(jediOne) === true){
        alert(jediOne.name + " is lost");
    }
    if (isJediDead(jediTwo) === true){
        alert(jediTwo.name + " is lost");
    }
    
    
}

function isJediDead(jedi) {
    if(jedi.health <= 0){
        return true; 
    } 
    return false;
}



$('#attackBtn').on('click', function(){
    attack(luke, darthMaul);
});

// attack(luke, darthMaul)

// //variables
// let darthMaulDiv = $('#darthmaul');
// let charAttacksDiv = $('#attackcharacters');


// //Functions
// function moveAttacker(attacker) {
//     charAttacksDiv.append(attacker);
// }

// //Events

// //clicking Luke will move darth maul below

// $("#luke").on('click', function() {
//     alert('clicked luke');
//     moveAttacker(darthMaulDiv);
    
// });

// $("#attackBtn").on('click', function() {
    
    
// });

// resetGame() {
//     //reset vlaues
//     startGame();
// }

// funciton playGame() {
//     if win {
//         resetGame();
//     }
// }

});