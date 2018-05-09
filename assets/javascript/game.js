//Define variables
var userWins = 0;
var userLoses = 0;
var guessesRemaining = 10;
var userGuess;
//hard coded for testing purposes
var machineGuess = "cat";
var guessArray = [];
var keyPress;
var win;


//function that recognizes user's key press and lowers the remaining guesses.
function keyPress()
    {
        var keyPress = event.key;
        document.getElementById("p.guessnumber").innerHTML = guessesRemaining;
        guessesRemaining = guessesRemaining - 1;
    }

//function that recognizes user's key press and adds them to an array.
function addToarray()
    {
        guessArray.push(event.key);
        document.getElementById("p.guessedletters").innerHTML = guessArray;
    }

//function that recognizes user's key press and prints the correct guesses.
function addTocorrect()
    {
        document.getElementById("p.correctletters").innerHTML = guessArray;
    }

//function that recognizes user's key press and states the user's key press.
function captureGuess()
    {
        var userGuess = guessArray;
        console.log("User guess is: " + userGuess);
    }

//function that checks the guessed key presses against the machine's word.
function wordChecker()
    {
        for (i = 0; i < 1; i++)
            {
                if (guessArray.includes("c", "a",  "t"))
                {
                    console.log("Yes");
                    document.getElementById("p.correctletters").innerHTML = machineGuess[i];
                    userWins++;
                    document.getElementById("p.yourwins").innerHTML = userWins;
                    
                    if (userWins++)
                    {
                        alert("Congratulations! You win!");
                    }
                }

                else
                {
                    console.log("no");
                    userLoses++;
                    document.getElementById("p.yourlosses").innerHTML = userLoses;
                    alert("Nope! Try again");
                }
            }
    }