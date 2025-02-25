$(document).ready(function () {

    // set variables for timer

    var number = 10;
    var intervalId;

    // create timer to countdown

    function timer() {
        intervalId = setInterval(decrement, 1000);
    }

    // timer should stop at 0
    function decrement() {
        if (number === 0) {
            $("#timeleft").text(number);  
            setTimeout(function() {
                alert("Sorry you are out of time!");
            }, 100);
            stop();
        } else {
            $("#timeleft").text(number);
            number--;
        }
        
    }

    

    // when timer gets to 0 it resets 

    function stop() {
        clearInterval(intervalId);
    }

    // storing the questions and answers in an object so program is easy to reuse with new questions

    const Trivia = {
                    QuestionOne:{Heading:"Better Off Dead",
                                  QuestionText: "What is the paperboy stalking Lane for?",
                                Answers: {
                                    Correct:"His two dollars", 
                                    InCorrect: [
                                                "His skiis", 
                                                "His bike", 
                                                "His apple"]
                                            }
                                        },
                    QuestionTwo:"Why is the 'crazy girl' in detention?",
                                Answers: {
                                    Correct:"She had nothing better to do on a Saturday",
                                    InCorrect: [
                                               "She tripped a popular kid in the cafeteria" ,
                                               "She is a mole for the teachers",
                                               "She was caught selling drugs"
                                              ]
                                             },
                    QuestionThree:"Who played Ferris' cranky sister?",
                                Answers: {
                                    Correct:"Jennifer Grey", 
                                    InCorrect: [
                                                "Mia Sara", 
                                                "Demi Moore", 
                                                "Phoebe Cates"]
                                            },
                    QuestionFour:"What did Gary and Wyatt wear when showering with the woman they created??",
                                Answers: {
                                    Correct:"Jeans", 
                                    InCorrect: [
                                                "Sexy speedos", 
                                                "Flotation Devices", 
                                                "Smiles"]
                                            },
                    QuestionFive:"What color car did Daniel choose as a birthday present from Mr. Miyagi?",
                                Answers: {
                                    Correct:"Yellow", 
                                    InCorrect: [
                                                "White", 
                                                "Light Blue", 
                                                "Silver"]
                                            },
                    QuestionSix:"What song did Duckie lip-sync his heart out to at the record store?",
                                Answers: {
                                    Correct:"Try a Little Tenderness", 
                                    InCorrect: [
                                                "Let's Get it On", 
                                                "Sexual Healing", 
                                                "Superfreak"]
                                            },
                    QuestionSeven:"What does 'All work and no play' make Jack?",
                                Answers: {
                                    Correct:"A dull boy", 
                                    InCorrect: [
                                                "A psycho killer", 
                                                "Really boring", 
                                                "A weirdo"]
                                            },
                    QuestionEight:"What is Baby's real name?",
                                Answers: {
                                    Correct:"Frances", 
                                    InCorrect: [
                                                "Alma", 
                                                "Agnes", 
                                                "Ingrid"]
                                            },
                    QuestionNine:"When the ghosts temporarily possessed the family during dinner, what song did they make them sing and dance to?",
                                Answers: {
                                    Correct:"The Banana Boat Song", 
                                    InCorrect: [
                                                "The Monster Mash", 
                                                "Purple People Eater", 
                                                "Thriller"]
                                            },
                    QuestionTen:"What word did the clergyman with the speech impediment love to say?",
                                Answers: {
                                    Correct:"Inconceivable", 
                                    InCorrect: [
                                                "Unbelievable", 
                                                "Irretrievable", 
                                                "Irresponsible"]
                                            },
                    QuestionBonus: "Which of the following movies did NOT star Molly Ringwald",
                                Answers: {
                                 Correct:"St Elmo's Fire", 
                                 InCorrect: [
                                                "Sixteen Candles", 
                                                "The Breakfast Club", 
                                                "Pretty in Pink"]
                                             },
                                        };

  

   
   $("#testing").text(Trivia.QuestionOne.Answers.InCorrect[0])

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