var radioName;
var radioID;
var correctAnswer = ["The Girl Is Mine", "The Bodyguard", "Dancing in the Street", "1977", "Toy Story"];
var totalWin = 0;
var totalLose = 0;
var totalUnanswer = 0;
var newAnswer;
var isChecked = false;

// reviewing answer
var answerReview = function () {
    $("#done, .question-head, label, input, span").hide();
    $("#scoreboard, #win, #lose, #unanswer, #totwin, #totlose, #totun").show();
    for (let i = 1; i < 6; i++) {
        //grabbing the radio button selection 
        radioName = 'question' + (i).toString().trim();
        newAnswer = $("input[name=" + radioName + "]:checked").val();

        //checking if the radio button was unanswered
        radioID = "q"+ (i).toString().trim();
        isChecked = $("input[id=" +radioID + "]").is(':checked');

        if (!isChecked){
            totalUnanswer++;
        } else if (newAnswer === correctAnswer[i-1]){
            totalWin++;
        } else {
            totalLose++;
        }
    }
    
    $("#totwin").text(totalWin);
    $("#totlose").text(totalLose);
    $("#totun").text(totalUnanswer);
}

$(document).ready(function () {
    $("#done, #scoreboard, #win, #lose, #unanswer, .question-head, label, input, span").hide();

    $("#start").on('click', function () {
        $("#done, .question-head, label, input, span").show();
        $("#start").hide();
    });

    $("#done").on('click', function() {
        answerReview();
    });
});