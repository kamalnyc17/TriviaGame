var temp;
var correctAnswer = ["The Girl Is Mine", "The Bodyguard", "Dancing in the Street", "1977", "Toy Story"];
var totalWin = 0;
var totalLose = 0;
var totalUnanswer = 0;

// reviewing answer
var answerReview = function () {
    for (let i = 1; i < 6; i++) {
        temp = 'question' + (i).toString().trim();
        alert($("input[name=" + temp + "]:checked").val());
    }
}

$(document).ready(function () {
    $("#done, .question-head, label, input, span").hide();

    $("#start").on('click', function () {
        $("#done, .question-head, label, input, span").show();
        $("#start").hide();
    });

    $("#done").on('click', function() {
        answerReview();
    });
});