let randomNumber = 0; 
let totalScore = 0; 
let wins = 0;
let losses = 0;



$(document).ready(function(){


//Functions----------------

function resetRandom(){
    randomNumber = Math.floor((Math.random() * 100) + 19);
    console.log(randomNumber);
    $('#random-number').text(randomNumber);
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
};


    function updateTotal (btn) {
        totalScore += parseInt(btn.val()) 
        console.log(totalScore);
        $('#total-score').text(totalScore);

        if (totalScore === randomNumber) {
            $('#wins').text(wins++);
            resetRandom()
            resetGame()
        }

        if (totalScore > randomNumber) {
            $('#losses').text(losses++);
            resetRandom()
            resetGame() 
            
        }
    };


    
    
    
//Events ----------------------------

    $('#button1').on('click', function(){
        updateTotal($('#button1'));
    })

    $('#button2').on('click', function(){
       updateTotal($('#button2')); 
    })


    $('#button3').on('click', function(){
        updateTotal($('#button3'));
    })


    $('#button4').on('click', function(){
        updateTotal($('#button4'));

    })


    
    resetRandom()
    resetGame()    


});



    
