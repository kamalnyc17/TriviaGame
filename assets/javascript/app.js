var gameName = [];
// these need to reset at start
var correctAnswer;
var gameCounter = 0;
var gameTimeLeft;
var mySelection = "";
var totalWin = 0;
var totalLose = 0;
var totalUnAnswer = 0;

/* initializing array. 1st element is question. last element is the correct answer.  */
gameName[0] = ["What was the first hit of Michael Jackson?", "AAA1", "AAA2", "AAA3", "AAA4", "AAA1"];
gameName[1] = ["What was the first movie of whitney houston?", "BBB1", "BBB2", "BBB3", "BBB4", "BBB2"];
gameName[2] = ["What is the name of the song with David Bowie & Mick Jagger?", "CCC1", "CCC2", "CCC3", "CCC4", "CCC3"];
gameName[3] = ["When was the song Hotel California released?", "DDD1", "DDD2", "DDD3", "DDD4", "DDD4"];

// start the game with only <start> button visible
var startGame = function () {
    $(".gen-style, .sub-style, img").hide();
}

// opening screen of the game
var openingScreen = function () {
    if (gameCounter < 4) {
        $("#start").hide();
        $(".gen-style, .sub-style, img").hide();
        $(".time-count-down, .game-question, ul, li").show();
        gameTimeLeft = 15;
        $("#time-left").text(gameTimeLeft);
        var gameTime = setInterval(function () {
            $("#time-left").text(gameTimeLeft);
            gameTimeLeft--;
            if (gameTimeLeft <= 0) {
                $("#time-left").text(gameTimeLeft);
                clearInterval(gameTime);
                // if the time is up and user didn't select anything
                if (mySelection === "") {
                    $("#correct2").text(correctAnswer);
                    $(".timeout-result, .correct-answer2, #timeout").show();
                    totalUnAnswer++;
                    // go to the next question
                    var nextQuestion = setInterval(function () {
                        openingScreen();
                        clearInterval(nextQuestion);
                    }, 1000);
                }
            }
        }, 1000);

        $(".game-question").text(gameName[gameCounter][0]);
        for (let j = 1; j < 5; j++) {
            $("#ans-" + (j).toString().trim()).text(gameName[gameCounter][j]);
        }
        correctAnswer = gameName[gameCounter][5];
        gameCounter++;
        optSelect(gameTime);
    } else {
        // game over. display score board and allow the user to play again without reloading the page
        gameCounter = 0;
        var gameRestart = function() {            
        $("#start").hide();
        $(".time-count-down, .game-question, #start, .winer-result, .loser-result, .correct-answer1, .timeout-result, .correct-answer2, li, img").hide();

        }
        
    }
}
// action after selecting an option
var optSelect = function (gameTime1) {
    $("li").on('click', function () {
        mySelection = $(this).text();
        if (correctAnswer === mySelection) { // if the answer was correct
            $(".winer-result, #winner").show();
            clearInterval(gameTime1);
            totalWin++;
            // go to the next question
            var nextQuestion = setInterval(function () {
                openingScreen();
                clearInterval(nextQuestion);
            }, 1000);
        } else if (correctAnswer !== mySelection) {
            $("#correct1").text(correctAnswer);
            $(".loser-result, .correct-answer1, #loser").show(); // if the answer was wrong
            clearInterval(gameTime1);
            totalLose++
            // go to the next question
            var nextQuestion = setInterval(function () {
                openingScreen();
                clearInterval(nextQuestion);
            }, 1000);
        }
    });
}

// main loop
$(document).ready(function () {
    startGame();

    $("#start").on('click', function () {
        openingScreen();
    })
});
