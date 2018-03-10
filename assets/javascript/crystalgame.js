let randomNumber = 0; 
let totalScore = 0; 
let wins = 0;
let losses = 0;

$(document).ready(function(){

//Variables --------------

    

//Functions----------------

function render() {
    $('#losses').text(losses);
    $('#total-score').text(totalScore);
    $('#wins').text(wins);
    $('#random-number').text(randomNumber);
    
};

function resetRandom(){
    randomNumber = Math.floor((Math.random() * 100) + 19);
    console.log(randomNumber);
    // $('#random-number').text(randomNumber);
    // return randomNumber 
    // console.log("This is the Random Number " + randomNumber)
};

function resetGame() {

    totalScore = 0;

    function resetCrystals() {
        getRandomBtn = Math.floor((Math.random() * 12) + 1);
        return getRandomBtn
        // console.log("This is the random button number " + getRandomBtn);
    };

    $('#button1').val(resetCrystals()); 
    $('#button2').val(resetCrystals()); 
    $('#button3').val(resetCrystals()); 
    $('#button4').val(resetCrystals());
    
    render()
};


function updateTotal (btn) {
    totalScore += parseInt(btn.val()) 
    console.log(totalScore);
    render();
        // $('#total-score').text(totalScore);

    if (totalScore === randomNumber) {
        wins++;
            // $('#wins').text(wins++);
        resetRandom()
        resetGame()
    };

    if (totalScore > randomNumber) {
        losses++;
            // $('#losses').text(losses);
        resetRandom()
        resetGame() 
    };
};

//Events ----------------------------

    $('button').on('click', function(){
        updateTotal($(this));
    })
   
    resetRandom()
    resetGame()    


});



    
