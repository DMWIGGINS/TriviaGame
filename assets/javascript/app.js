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
        answer = (document.getElementById("dance").checked);
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
          
            answer = (document.getElementById("smile").checked);
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

            answer = (document.getElementById("loopsarefun").checked);
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