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

    const acceptable_seqs_nums = ['9356021', '2398492', '8768767', '0948756', '1098745']

    if (answer_1 == "your name" && answer_2 == "red" && answer_3 == "Fakecapitalia" && acceptable_seqs_nums.includes(answer_4) && answer_5 == "I live on the planet Earth." && answer_6.checked) {
        document.getElementById("results-section").innerText = "You did it!";
    } else {
        document.getElementById("results-section").innerText = "Incorrect answer(s). Try again!";
    }
});