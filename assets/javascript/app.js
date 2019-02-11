var gameName = [];
var i;

/* initializing array */
gameName[0] = ["What was the first hit of Michael Jackson?", "AAA1", "AAA2", "AAA3", "AAA4"];
gameName[1] = ["What was the first movie of whitney houston?", "BBB1", "BBB2", "BBB3", "BBB4"];
gameName[2] = ["What is the name of the song with David Bowie & Mick Jagger?", "CCC1", "CCC2", "CCC3", "CCC4"];
gameName[3] = ["When was the song Hotel California released?", "DDD1", "DDD2", "DDD3", "DDD4"];

// game work flow starts here after the whole page is loaded
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