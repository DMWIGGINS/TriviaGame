$(document).ready(function () {



    var value = "";
    var result = 0;
    var answer = 0;
    i = 0;


    //how to code the return of the radio button selected and tell the computer to tally results when done button is pressed.
    $(".done").on("click", function () {
        // alert($("input:radio").val());


        if ($('input:radio[name="questionone"]:checked').val()) {
            // alert($('input:radio').val());

            //     // function(index,currentvalue)
            answer = (document.getElementById("twodollars").checked);
            console.log(answer);
            if (answer === true) {
                alert("correct");
                console.log("questionone");
                result++;


            } else {
                alert("incorrect");
                console.log("questionone");

            }
        }

        if ($('input:radio[name="questiontwo"]:checked').val()) {

            answer = (document.getElementById("nothing").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questiontwo");
                result++;

            } else {
                alert("incorrect");
                console.log("questiontwo");

            }
        }


        if ($('input:radio[name="questionthree"]:checked').val()) {

            answer = (document.getElementById("jennifer").checked);
            console.log(answer);
            if (answer === true) {
                alert("correct");
                console.log("questionthree");
                result++;

            } else {
                alert("incorrect");
                console.log("questionthree");
            }
        }

        if ($('input:radio[name="questionfour"]:checked').val()) {

            answer = (document.getElementById("jeans").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionfour");
                result++;

            } else {
                alert("incorrect");
                console.log("questionfour");

            }
        }

        if ($('input:radio[name="questionfive"]:checked').val()) {

            answer = (document.getElementById("yellow").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionfive");
                result++;

            } else {
                alert("incorrect");
                console.log("questionfive");

            }
        }

        if ($('input:radio[name="questionsix"]:checked').val()) {

            answer = (document.getElementById("tenderness").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionsix");
                result++;

            } else {
                alert("incorrect");
                console.log("questionsix");

            }
        }

        if ($('input:radio[name="questionseven"]:checked').val()) {

            answer = (document.getElementById("dull").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionseven");
                result++;

            } else {
                alert("incorrect");
                console.log("questionseven");

            }
        }

        if ($('input:radio[name="questioneight"]:checked').val()) {

            answer = (document.getElementById("frances").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questioneight");
                result++;

            } else {
                alert("incorrect");
                console.log("questioneight");

            }
        }

        if ($('input:radio[name="questionnine"]:checked').val()) {

            answer = (document.getElementById("banana").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionnine");
                result++;

            } else {
                alert("incorrect");
                console.log("questionnine");

            }
        }

        if ($('input:radio[name="questionten"]:checked').val()) {
            
                        answer = (document.getElementById("conceive").checked);
                        console.log(answer);
            
                        if (answer === true) {
                            alert("correct");
                            console.log("questionten");
                            result++;
            
                        } else {
                            alert("incorrect");
                            console.log("questionten");
            
                        }
                    }
            
                    $("#result").text(result);

        if ($('input:radio[name="questionbonus"]:checked').val()) {

            answer = (document.getElementById("fire").checked);
            console.log(answer);

            if (answer === true) {
                alert("correct");
                console.log("questionbonus");
                result++;

            } else {
                alert("incorrect");
                console.log("questionbonus");

            }
        }

        $("#result").text(result);
    });
})
//returning the same true or false responses depending on what the first question is.
// So if the first question is answer === true then all questions are returning as true. 
// Likewise is answer === false for question one then all are returning false.  
// I changed the id's of each question so they are not the same-seems to have fixed the issue but not efficient. 




// function myFunction() {
//     var x = document.getElementById("myRadio").checked;
//     document.getElementById("demo").innerHTML = x;



// for (i = 0; i < "questionone".length; i++) {
//    val = (document.getElementById("triviaquestions"), "questionone");
//     alert(val);
// }





/* <button id="button-minus" class="btn btn-danger operator" value="plus"><h1>&minus;</h1></button>
 if (operator === "plus") {
    result = firstNumber + secondNumber; */


// $('input:radio[name="genderS"]:checked').val()
// $( "input[name=gender]:radio" )
// or
// $("input:radio")

// $( "input[radio][questionone]:checked" ).val();

// document.querySelector('input[name="genderS"]:checked').value;


// if ("questionone" === "correct") {
//     rightanswers++;
//     cosole.log(rightanswers);


//can i make the return values of the correct answers different than the incorrect ones and then tally how many correct ones are returned? 

//how to get answer choices to display correctly as a horizontal list? ok


//only one choice can be selected for each question ok

//Don't forget the timer! 




// * <input type="radio" onclick="if(this.checked){myFunction()}">