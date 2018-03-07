// Game begins with this state: 
//Random number generated between 19 and 120, crystal numbers generated between 1 and 12. Your total score = 0. 

//Select crystal, add number to total score. 
//If total score is > randomNumber, then increase losses and restart game.
//If total score is < randomNumber, play again. 
//If total score is === randomNumber, then increase wins and restart game. 

let randomNumber; 
let totalScore = 0; 
let buttonOne = " ";
let buttonTwo = " ";
let buttonThree = " ";
let buttonFour = " ";
let wins = 0;
let losses = 0;
// let randomTwo = 0;

// var numberOptions = [10, 5, 3, 7];

$(document).ready(function(){
    randomNumber = Math.floor((Math.random() * 100) + 19);
    console.log(randomNumber);
    $('#random-number').text(randomNumber); 

    randomTwo = Math.floor((Math.random() * 12) + 1);
    console.log(randomTwo);
    $("#button1").val(randomTwo);
    
    randomTwo = Math.floor((Math.random() * 12) + 1);
    console.log(randomTwo);
    $("#button2").val(randomTwo);
    
    randomTwo = Math.floor((Math.random() * 12) + 1);
    console.log(randomTwo);
    $("#button3").val(randomTwo);

    randomTwo = Math.floor((Math.random() * 12) + 1);
    console.log(randomTwo);
    $("#button4").val(randomTwo);

    $('#button1').on('click', function(){
        buttonOne = $(this).val();
        buttonOne = parseInt(buttonOne);
        totalScore += buttonOne; 
        console.log(totalScore);
        $('#total-score').text(totalScore);
    })
    $('#button2').on('click', function(){
        buttonTwo = $(this).val();
        buttonTwo = parseInt(buttonTwo);
        totalScore += buttonTwo; 
        console.log(totalScore);
        $('#total-score').text(totalScore);
    })
    $('#button3').on('click', function(){
        buttonThree = $(this).val();
        buttonThree = parseInt(buttonThree);
        totalScore += buttonThree; 
        console.log(totalScore);
        $('#total-score').text(totalScore);
    })

    $('#button4').on('click', function(){
        buttonFour = $(this).val();
        buttonFour = parseInt(buttonFour);
        totalScore += buttonFour; 
        console.log(totalScore);
        $('#total-score').text(totalScore);

        if (totalScore === randomNumber) {
            $('#wins').text(wins++)
        }
        if (totalScore > randomNumber) {
            $('#losses').text(losses++)
        }
    })
    
    

});



// $(".number").on('click', function() {
//     if (isSecondNumber === false) { 
//     console.log(this.value);
//       // firstNumber = firstNumber + $(this).val();
//      firstNumber += $(this).val();
//      $('#first-number').text(firstNumber);
//      console.log(firstNumber);
//     } else {
//     console.log(this.value);
//     // firstNumber = firstNumber + $(this).val();
//     secondNumber += $(this).val();
//     $('#second-number').text(secondNumber);
//     console.log(secondNumber);
//     }
//   });




// $('.crystal-image').on("click", function() {   
//     randomTwo = Math.floor((Math.random() * 12) + 1);
//     console.log(randomTwo);
//     $('.crystal-image').attr('data-crystalvalue', randomTwo);
//     // append(imageCrystal)
    
// }); 

// img.on("click", ".crystal-image", function() {
//  var crystalValue = ($(this).attr('data-crystalvalue'));
//  randomTwo = Math.floor((Math.random() * 12) + 1);
//  crystalValue = parseInt(crystalValue); 

// })



// crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

// var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);






// $('#first-number').text(firstNumber);

//     for (var i = 0; i < numberOptions.length; i++) {

// var targetNumber = 53;

//   $("#number-to-guess").text(targetNumber);

//   var crystals = $("#crystals");

//   var counter = 0;

//   // Now for the hard part. Creating multiple crystals each with their own unique number value.

//   // We begin by expanding our array to include four options.
//   var numberOptions = [10, 5, 3, 7];

//   // Next we create a for loop to create crystals for every numberOption.
//   for (var i = 0; i < numberOptions.length; i++) {

//     // For each iteration, we will create an imageCrystal
//     var imageCrystal = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Each imageCrystal will be given a src link to the crystal image
//     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     crystals.append(imageCrystal);
//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   crystals.on("click", ".crystal-image", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });