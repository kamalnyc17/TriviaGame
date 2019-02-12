var gameName = [];
var correctAnswer;

/* initializing array. 1st element is question. last element is the correct answer.  */
gameName[0] = ["What was the first hit of Michael Jackson?", "AAA1", "AAA2", "AAA3", "AAA4", "AAA1"];
gameName[1] = ["What was the first movie of whitney houston?", "BBB1", "BBB2", "BBB3", "BBB4", "BBB2"];
gameName[2] = ["What is the name of the song with David Bowie & Mick Jagger?", "CCC1", "CCC2", "CCC3", "CCC4", "CCC3"];
gameName[3] = ["When was the song Hotel California released?", "DDD1", "DDD2", "DDD3", "DDD4", "DDD4"];

// start the game with only <start> button visible
var startGame = function() {
    $(".gen-style, .sub-style, img").hide();
} 

// opening screen of the game
var openingScreen = function() {
    $("#start").hide();
    $(".time-count-down, game-question, ul, li").show();
    $(".game-question").text(gameName[0][0]);
    for (let j = 1; j < 5; j++) {
        $("#ans-" + (j).toString().trim()).text(gameName[0][j]);
    }
    correctAnswer = gameName[0][5];
}

// action after selecting an option
var optSelect = function() {
    $("li").on('click', function() {        
        var mySelection  = $(this).text(); 
        if (correctAnswer === mySelection) {
            $(".winer-result, #winner").show();
        } else if (correctAnswer !== mySelection){
            $("#correct1").text( correctAnswer);
            $(".loser-result, .correct-answer1, #loser").show();
        }
    })
}



// main loop
$(document).ready(function() {
    startGame();

    $("#start").on('click', function() {
        openingScreen();
        optSelect();
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