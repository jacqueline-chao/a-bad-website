'use strict';

const submit_button = document.getElementById("quiz-form");
submit_button.addEventListener('submit', function (e) {
    e.preventDefault();

    const answer_1 = document.getElementById("answer-1").value;
    const answer_2 = document.getElementById("answer-2").value;
    const answer_3 = document.getElementById("answer-3").value;
    const answer_4 = document.getElementById("answer-4").value;
    const answer_5 = document.getElementById("answer-5").value;
    const answer_6 = document.getElementById("answer-6");

    const acceptable_seqs_nums = ['93560219438538931189838434857321', '23984929348509349892935375298222', '87687679082989490987824342818735', '09487569485392488775799509436567', '10987452983488231769382658398365']

    if (answer_1 == "your name" && answer_2 == "red" && answer_3 == "Fakecapitalia" && acceptable_seqs_nums.includes(answer_4) && answer_5 == "I live on the planet Earth." && answer_6.checked) {
        document.getElementById("results-section").innerText = "You did it!";
    } else {
        var hint = "";
        if (answer_1 != "your name") {
            hint = "It looks like you answered the first question incorrectly. Here's a hint: Think more LITERALLY about this question."
        }
        document.getElementById("results-section").innerText = "Incorrect answer(s). Try again!" + " " + hint;
    }
});