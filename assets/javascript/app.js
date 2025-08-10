$(document).ready(function () {
  // set variables for timer
  let number = 120;
  let intervalId;

  // create timer to countdown
  function timer() {
    intervalId = setInterval(decrement, 1000);
  }

  // timer should stop at 0
  function decrement() {
    if (number === 0) {
      $('#timeleft').text(number);
      setTimeout(function () {
        $('#outoftimeModal').modal('show')
      }, 100)
      stop();
      tallyResponses();
    } else {
      $('#timeleft').text(number)
      number--;
    }
  }

  // pop up message if times runs out
  $('#outoftimeConfirm').on('click', function () {
    $('#outoftimeModal').modal('hide');
  });

  // when timer gets to 0 it resets
  function stop() {
    clearInterval(intervalId);
  }

  // storing the questions and answers in an object so program can be reused with a different topic
  const Trivia = {
    QuestionOne: {
      Heading: 'Better Off Dead',
      Image: {
        ImageId: 'betteroffdead',
        ImageSrc: 'assets/images/betteroffdead.jpg'
      },
      QuestionText: 'What is the paperboy stalking Lane for?',
      Answers: {
        Correct: ['His two dollars'],
        Incorrect: ['His skiis', 'His bike', 'His apple']
      },
    },
    QuestionTwo: {
      Heading: 'The Breakfast Club',
      Image: {
        ImageId: 'breakfastclub',
        ImageSrc: 'assets/images/breakfastclub.jpg'
      },
      QuestionText: "Why is the 'crazy girl' in detention?",
      Answers: {
        Correct: ['She had nothing better to do on Saturday'],
        Incorrect: [
          'She tripped a popular kid in the cafeteria',
          'She is a mole for the teachers',
          'She was caught selling drugs'
        ]
      },
    },
    QuestionThree: {
      Heading: "Ferris Buellers' Day Off",
      Image: {
        ImageId: 'ferrisandfriends',
        ImageSrc: 'assets/images/ferrisandfriends.jpg'
      },
      QuestionText: "Who played Ferris' cranky sister?",
      Answers: {
        Correct: ['Jennifer Grey'],
        Incorrect: ['Mia Sara', 'Demi Moore', 'Phoebe Cates']
      },
    },
    QuestionFour: {
      Heading: 'Weird Science',
      Image: {
        ImageId: 'weirdscience',
        ImageSrc: 'assets/images/weirdscience.jpg'
      },
      QuestionText:
        'What did Gary and Wyatt wear when showering with the woman they created?',
      Answers: {
        Correct: ['Jeans'],
        Incorrect: ['Sexy speedos', 'Flotation Devices', 'Smiles']
      },
    },
    QuestionFive: {
      Heading: 'The Karate Kid',
      Image: {
        ImageId: 'karatekid',
        ImageSrc: 'assets/images/karatekid.jpg'
      },
      QuestionText:
        'What color car did Daniel choose as a birthday present from Mr. Miyagi?',
      Answers: {
        Correct: ['Yellow'],
        Incorrect: ['White', 'Light Blue', 'Silver']
      },
    },
    QuestionSix: {
      Heading: 'Pretty in Pink',
      Image: {
        ImageId: 'duckie',
        ImageSrc: 'assets/images/duckie.jpg'
      },
      QuestionText:
        'What song did Duckie lip-sync his heart out to at the record store?',
      Answers: {
        Correct: ['Try a Little Tenderness'],
        Incorrect: ["Let's Get it On", 'Sexual Healing', 'Superfreak']
      },
    },
    QuestionSeven: {
      Heading: 'The Shining',
      Image: {
        ImageId: 'theshining',
        ImageSrc: 'assets/images/theshining.jpg'
      },
      QuestionText: "What does 'All work and no play' make Jack?",
      Answers: {
        Correct: ['A dull boy'],
        Incorrect: ['A psycho killer', 'Really boring', 'A weirdo']
      },
    },
    QuestionEight: {
      Heading: 'Dirty Dancing',
      Image: {
        ImageId: 'dirtydancing',
        ImageSrc: 'assets/images/dirtydancing.jpg'
      },
      QuestionText: "What is Baby's real name?",
      Answers: {
        Correct: ['Frances'],
        Incorrect: ['Alma', 'Agnes', 'Ingrid']
      },
    },
    QuestionNine: {
      Heading: 'Beetlejuice',
      Image: {
        ImageId: 'beetlejuice',
        ImageSrc: 'assets/images/beetlejuice.jpg'
      },
      QuestionText:
        'When the ghosts temporarily possessed the family during dinner, what song did they make them sing and dance to?',
      Answers: {
        Correct: ['The Banana Boat Song'],
        Incorrect: ['The Monster Mash', 'Purple People Eater', 'Thriller']
      },
    },
    QuestionTen: {
      Heading: 'The Princess Bride',
      Image: {
        ImageId: 'princessbride',
        ImageSrc: 'assets/images/princessbride.jpg'
      },
      QuestionText:
        'What word did the clergyman with the speech impediment love to say?',
      Answers: {
        Correct: ['Inconceivable'],
        Incorrect: ['Unbelievable', 'Irretrievable', 'Irresponsible']
      },
    },
    QuestionBonus: {
      Heading: 'Multi-Movie Bonus',
      Image: {
        ImageId: 'molly',
        ImageSrc: 'assets/images/molly.jpg'
      },
      QuestionText:
        'Which of the following movies did NOT star Molly Ringwald?',
      Answers: {
        Correct: ["St Elmo's Fire"],
        Incorrect: ['Sixteen Candles', 'The Breakfast Club', 'Pretty in Pink']
      },
    },
  };

  // Loop through each question in the Trivia object and add them to the UI
  function loadQuestions() {
    for (let questionKey in Trivia) {
      let question = Trivia[questionKey];
      //create well for each questionKey (bootstrap styling)
      let triviaItem = $('<div>');
      triviaItem.addClass('row');
      //add row class (bootstrap styling)
      let well = $('<div>');
      well.addClass('well');
      //add heading
      let heading = $('<h2>');
      heading.text(question.Heading);
      well.append(heading);
      //add image
      let image = $('<img>')
      image.attr('id', question.Image.ImageId);
      image.attr('src', question.Image.ImageSrc);
      well.append(image);
      //add question text
      let quizItem = $('<h4>');
      quizItem.text(question.QuestionText);
      well.append(quizItem);
      //put correct and incorrect answers in array and shuffle to make sure they are always presented in random order
      let correctAnswers = question.Answers.Correct;
      let incorrectAnswers = question.Answers.Incorrect;
      let allAnswers = correctAnswers.concat(incorrectAnswers);
      allAnswers.sort(function () {
        return Math.random() - 0.5
      })

      //create a radiobutton and a label for each answerOption
      let answerBlock = $('<div>');
      for (j = 0; j < allAnswers.length; j++) {
        let answerOption = $('<div>');
        answerOption.addClass('radio-container');
        let radioButton = $('<input>');
        radioButton.attr('type', 'radio');
        radioButton.val(allAnswers[j]);
        radioButton.attr('name', questionKey);
        let label = $('<label>');
        label.text(allAnswers[j]);
        // add each radioButton and label to the answerBlock
        answerOption.append(radioButton);
        answerOption.append(label);
        answerBlock.append(answerOption);
      }

      // Add the answerBlock to the triviaItem div
      well.append(answerBlock);
      triviaItem.append(well);
      // Add the trivaItem to the #triviaquestions div
      $('#triviaquestions').append(triviaItem);
    }
  }

  function tallyResponses() {
    let answerDetails = $('<div>').addClass('row');
    // variables for correct answer counter, if question was answered correctly, unanswered counter, and incorrect counter
    let correctResponse = 0;
    let incorrectResponse = 0;
    let noResponse = 0;
    for (let questionKey in Trivia) {
      let question = Trivia[questionKey];
      // determine if question was answered - was a radio button selected?
      let response = $('input:radio[name="' + questionKey + '"]:checked').val();
      if (response) {
        //  Is it the correct answer? Add 1 to correctResponse
        if (question.Answers.Correct.includes(response)) {
          correctResponse++
        }
        // For incorrect answers, add 1 to incorrect and add the question, incorrect answer and corrected answer to the wrongAnswer section
        else {
          incorrectResponse++;
          let displayResponse = $('<div>');
          displayResponse.append('<h3>' + question.Heading + '</h3>');
          displayResponse.append('<p>' + question.QuestionText + '</p>').attr('Id', 'questionText');
          let wrongAnswer = $('<p><b>Your Answer: </b>' + response + '</p>').attr('Id', 'wrongAnswer');
          displayResponse.append(wrongAnswer);
          let correctAnswer = $('<p><b>Correct Answer: </b>' + question.Answers.Correct + '</p>').attr('Id', 'correctAnswer');
          displayResponse.append(correctAnswer);
          answerDetails.append(displayResponse);
        }
        // if no answer selected, add 1 to noresponse
      } else {
        noResponse++;
      }
    }
    
    // create results page to replace original question page
    $('#newpage').html('<div id="new"></div>');
    $('#new').addClass('row');
    let movie = $('<div>');
    movie.addClass('moviescreen');
    // Creating stats div and images for results page
    let firstRow = $('<div>').addClass('row').attr('Id', 'firstRow');

    function colorResponses() {
      let correctResponseDisplay = $('<h4>Correct: ' + correctResponse + '</h4>').attr('Id', 'correctResponseDisplay');
      firstRow.append(correctResponseDisplay);
      let incorrectResponseDisplay = $('<h4>Incorrect: ' + incorrectResponse + '</h4>').attr('Id', 'incorrectResponseDisplay');
      firstRow.append(incorrectResponseDisplay);
      let noResponseDisplay = $('<h4>Unanswered: ' + noResponse + '</h4>').attr('Id','noResponseDisplay');
      firstRow.append(noResponseDisplay);
    }

    // the results of the quiz will determine which image to display
    let finalImage = $('<img>').attr('Id', 'duckie2');
    finalImage.attr('src', 'assets/images/duckie2.jpg');
    let popcorn = $('<img>').attr('Id', 'popcorn');
    popcorn.attr('src','assets/images/popcorn-vitya-lapatey-Q-dusXpAH0I-unsplash.jpg');
    let thumbsUp = $('<img>').attr('Id', 'thumbsUp');
    thumbsUp.attr('src', 'assets/images/johan-godinez-dDYRYivNzbI-unsplash.jpg');
    let watchMovies = $('<img>').attr('Id', 'watchMovies');
    watchMovies.attr('src','assets/images/will-goodman-ZvJvTNm7CMo-unsplash.jpg');

    if (correctResponse === 11) {
      firstRow.append("<h2>Congratulations!  You are an 80's Movie Guru!</h2>");
      colorResponses();
      firstRow.append(finalImage);
    } else if (correctResponse > 7 && correctResponse < 11) {
      firstRow.append('<h2>Not too bad but brush up on your wrong answers shown below!</h2>');
      colorResponses();
      firstRow.append(thumbsUp);
    } else if (noResponse === 11) {
      firstRow.append('<h2>Did you step out for popcorn?  I hope you brought some for me!</h2>');
      colorResponses();
      firstRow.append(popcorn);
    } else {
      firstRow.append("<h2>I think you need an 80's movie marathon!  See incorrect answers below!</h2>");
      colorResponses();
      firstRow.append(watchMovies);
    }

    movie.append(firstRow);
    movie.append(answerDetails);
    $('#new').append(movie);
  }

  // display trivia questions when the game is loaded
  loadQuestions();

  // start the timer when the game is loaded
  timer();

  //When done button is clicked
  $('#done').on('click', function () {
    // stop the timer
    stop();

  //tally results and display on results page
    tallyResponses();
  });

});



