let naam = prompt("welkom wat is je naam?");

alert("Hi ({naam})!");

let myGuess = prompt("Enter a number between 0 and 25 to start guessing...")


var userNumber = 25;
var counter = 0;
var axTries = 5;

var randomNumber = math.floor(Math.random() * userNumber) + 1;

while (attempts != randomNumber) {
    var attempts = prompt("Please pick a number between 1 and" + userNumber);
    counter += 1;

    if (counter > maxTries) {
        document.write("You have no more tries lefrt. Press F5 to play again");
        break
    }

    if (attempts == randomNumber) {
        document.write("Congrats you have the correct number!");
        document.write("<p> The random number was " + randomNumber + "</p>");
        document.write("</p> It took you" + counter + "attempts to get the correct number</p>");


    }

}

console.log("prgram complete")