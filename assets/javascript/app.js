var gameName = [];
var correctAnswer;
var gameCounter = 0;
var gameTimeLeft = 15;

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
    $("#start").hide();
    $(".gen-style, .sub-style, img").hide();
    $(".time-count-down, .game-question, ul, li").show();
    var gameTime = setInterval(function () {
        $("#time-left").text(gameTimeLeft);
        gameTimeLeft--;
        if (gameTimeLeft <= 0) {
            $("#time-left").text(gameTimeLeft);
            clearInterval(gameTime);
        }
    }, 1000);

    $(".game-question").text(gameName[gameCounter][0]);
    for (let j = 1; j < 5; j++) {
        $("#ans-" + (j).toString().trim()).text(gameName[gameCounter][j]);
    }
    correctAnswer = gameName[0][5];
    gameCounter++;
    optSelect(gameTime);
}
// action after selecting an option
var optSelect = function ( gameTime1 ) {
    var mySelection = "";
    $("li").on('click', function () {
        mySelection = $(this).text();
        if (correctAnswer === mySelection) {
            $(".winer-result, #winner").show();
            clearInterval(gameTime1);
        } else if (correctAnswer !== mySelection) {
            $("#correct1").text(correctAnswer);
            $(".loser-result, .correct-answer1, #loser").show();
            clearInterval(gameTime1);
        } 
    });

    if ((gameTimeLeft <= 0) && (mySelection="")){
        clearInterval(gameTime);
        $("#correct2").text(correctAnswer);
        $(".timeout-result, .correct-answer2, #timeout").show();
    }
}



// main loop
$(document).ready(function () {
    startGame();

    $("#start").on('click', function () {
        openingScreen();
    })
});


/* game work flow starts here after the whole page is loaded
$(document).ready(function () {

    for (i = 0; i < 4; i++) {
        $(".game-question").text(gameName[i][0]);
        for (let j = 1; j < 5; j++) {
            $("#ans-" + (j).toString().trim()).text(gameName[i][j]);
        }
    }

    // testing show & hide
    $("#winner").on('click', function () {
        $("#loser").show();
        $("#winner").hide();
    });
    $("#loser").on('click', function () {
        $("#loser").hide();
        $("#winner").show();
    });
});
*/