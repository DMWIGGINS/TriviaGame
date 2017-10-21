$(document).ready(function () {

    // set variables for timer

    var number = 150;
    var intervalId;

    // create timer to countdown

    function timer() {
        intervalId = setInterval(decrement, 1000);
    }

    // timer should stop at 0
    function decrement() {
        if (number === 0) {
            stop();
            alert("Sorry, you are out of time!");
        } else {
            $("#timeleft").text(number);
            number--;
        }
    }

    // when timer gets to 0 it resets 

    function stop() {
        clearInterval(intervalId);
    }

    // variables for correct answer counter, if question was answered correctly(boolean), unanswered counter, and incorrect counter

    var result = 0;
    var answer = 0;
    var unanswered = 0;
    var incorrect = 0;

    // start the timer when the game is loaded

    timer();

    //    When done button is clicked ....

    $("#done").on("click", function () {

        // stop the timer

        stop();

        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionone"]:checked').val()) {

            answer = (document.getElementById("twodollars").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }

            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }

        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questiontwo"]:checked').val()) {

            answer = (document.getElementById("nothing").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }

            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }

            // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionthree"]:checked').val()) {

            answer = (document.getElementById("jennifer").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine if question was answered - was a radio button selected?
        if ($('input:radio[name="questionfour"]:checked').val()) {

            answer = (document.getElementById("jeans").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }

            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }

        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionfive"]:checked').val()) {

            answer = (document.getElementById("yellow").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }

            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionsix"]:checked').val()) {

            answer = (document.getElementById("tenderness").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }

            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }

        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionseven"]:checked').val()) {

            answer = (document.getElementById("dull").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;
                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }

        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questioneight"]:checked').val()) {

            answer = (document.getElementById("frances").checked);

            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;
                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionnine"]:checked').val()) {

            answer = (document.getElementById("banana").checked);
            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;
                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;

            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionten"]:checked').val()) {

            answer = (document.getElementById("conceive").checked);
            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;

                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;

            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine if question was answered - was a radio button selected?

        if ($('input:radio[name="questionbonus"]:checked').val()) {

            answer = (document.getElementById("fire").checked);
            //  Is it the correct answer? Add 1 to result

            if (answer === true) {
                result++;
                // For wrong answer add 1 to incorrect

            } else {
                incorrect++;
            }
            // if no answer selected, add 1 to unanswered

        } else {
            unanswered++;
        }
        // determine how many unanswered questions

        unanswered = 11 - (result + incorrect);

        // create results page to replace original question page

        $("#newpage").html('<div id="new"></div>');

        // style for results page

        $("#new").css({
            'background-color': 'rgb(216, 55, 55)',
            'height': '320px',
            'width': '650px',
            'margin': 'auto',
            'margin-top': '100px',
            'border-style': 'solid',
            'border-color': 'black',
            'padding-left': '20px',
            'position': 'relative',
        });

        // Adding stats and image to results page

        $("#new").html("<h1>Results</h1>");
        $("#new").append("<h2>Correct: " + result + "</h2>");
        $("#new").append("<h2>Incorrect: " + incorrect + "</h2>");
        $("#new").append("<h2>Unanswered: " + unanswered + "</h2>");
        $("#new").append("<img id='duckie2' class='inline' src='assets/images/duckie2.jpg'>");

        // styling for image

        $("#duckie2").css({
            'position': 'absolute',
            'top': '20px',
            'right': '80px',
        });
    });
});