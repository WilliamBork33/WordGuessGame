//Define variables
var userWins = 0;
var userLoses = 0;
var guessesRemaining = 10;
var userGuess;
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


function addToarray()
    {
        guessArray.push(event.key);
        document.getElementById("p.guessedletters").innerHTML = guessArray;
    }


function addTocorrect()
    {
        document.getElementById("p.correctletters").innerHTML = guessArray;
    }

function captureGuess()
    {
        var userGuess = guessArray;
        console.log("User guess is: " + userGuess);
    }

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



//For loop that keeps the keyPress function running.
//for (i = 0; i < 5; i++)
 

//document.onkeyup = function(event)
//{
    //userGuesses = event.key;
// checks if the letter exists inside of the word and if it does... 
    //if (randomWord.indexOf(userGuesses)>-1)
    //{
      //for(var i=0; i < randomWord.length; i++)
      //{
       //if (randomWord[i] == userGuesses)
       //{
           //underScores[i]= userGuesses;
           //console.log(underScores);
           //winCounter++;
           //winLose();
       //}
      //}
    //}
    //else 
    //{
    //wrongAnswer.push(userGuesses);
    //guessesLeft--;
    //console.log(wrongAnswer);
    //winLose();
    //}
//}
