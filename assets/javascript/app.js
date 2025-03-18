$(document).ready(function () {
  // set variables for timer

  var number = 60
  var intervalId

  // create timer to countdown

  function timer() {
    intervalId = setInterval(decrement, 1000)
  }

  // timer should stop at 0
  function decrement() {
    if (number === 0) {
      $('#timeleft').text(number)
      setTimeout(function () {
        alert('Sorry you are out of time!')
      }, 100)
      stop()
    } else {
      $('#timeleft').text(number)
      number--
    }
  }

  // when timer gets to 0 it resets

  function stop() {
    clearInterval(intervalId)
  }

  // storing the questions and answers in an object so program is easy to reuse with new questions

  const Trivia = {
    QuestionOne: {
      Heading: 'Better Off Dead',
      Image: {
        ImageId: 'betteroffdead',
        ImageSrc: 'assets/images/betteroffdead.jpg',
      },
      QuestionText: 'What is the paperboy stalking Lane for?',
      Answers: {
        Correct: ['His two dollars'],
        Incorrect: ['His skiis', 'His bike', 'His apple'],
      },
    },
    QuestionTwo: {
      Heading: 'The Breakfast Club',
      Image: {
        ImageId: 'breakfastclub',
        ImageSrc: 'assets/images/breakfastclub.jpg',
      },
      QuestionText: "Why is the 'crazy girl' in detention?",
      Answers: {
        Correct: ['She had nothing better to do on a Saturday'],
        Incorrect: [
          'She tripped a popular kid in the cafeteria',
          'She is a mole for the teachers',
          'She was caught selling drugs',
        ],
      },
    },
    QuestionThree: {
      Heading: "Ferris Buellers' Day Off",
      Image: {
        ImageId: 'ferrisandfriends',
        ImageSrc: 'assets/images/ferrisandfriends.jpg',
      },
      QuestionText: "Who played Ferris' cranky sister?",
      Answers: {
        Correct: ['Jennifer Grey'],
        Incorrect: ['Mia Sara', 'Demi Moore', 'Phoebe Cates'],
      },
    },
    QuestionFour: {
      Heading: 'Weird Science',
      Image: {
        ImageId: 'weirdscience',
        ImageSrc: 'assets/images/weirdscience.jpg',
      },
      QuestionText:
        'What did Gary and Wyatt wear when showering with the woman they created?',
      Answers: {
        Correct: ['Jeans'],
        Incorrect: ['Sexy speedos', 'Flotation Devices', 'Smiles'],
      },
    },
    QuestionFive: {
      Heading: 'The Karate Kid',
      Image: {
        ImageId: 'karatekid',
        ImageSrc: 'assets/images/karatekid.jpg',
      },
      QuestionText:
        'What color car did Daniel choose as a birthday present from Mr. Miyagi?',
      Answers: {
        Correct: ['Yellow'],
        Incorrect: ['White', 'Light Blue', 'Silver'],
      },
    },
    QuestionSix: {
      Heading: 'Pretty in Pink',
      Image: {
        ImageId: 'duckie',
        ImageSrc: 'assets/images/duckie.jpg',
      },
      QuestionText:
        'What song did Duckie lip-sync his heart out to at the record store?',
      Answers: {
        Correct: ['Try a Little Tenderness'],
        Incorrect: ["Let's Get it On", 'Sexual Healing', 'Superfreak'],
      },
    },
    QuestionSeven: {
      Heading: 'The Shining',
      Image: {
        ImageId: 'theshining',
        ImageSrc: 'assets/images/theshining.jpg',
      },
      QuestionText: "What does 'All work and no play' make Jack?",
      Answers: {
        Correct: ['A dull boy'],
        Incorrect: ['A psycho killer', 'Really boring', 'A weirdo'],
      },
    },
    QuestionEight: {
      Heading: 'Dirty Dancing',
      Image: {
        ImageId: 'dirtydancing',
        ImageSrc: 'assets/images/dirtydancing.jpg',
      },
      QuestionText: "What is Baby's real name?",
      Answers: {
        Correct: ['Frances'],
        Incorrect: ['Alma', 'Agnes', 'Ingrid'],
      },
    },
    QuestionNine: {
      Heading: 'Beetlejuice',
      Image: {
        ImageId: 'beetlejuice',
        ImageSrc: 'assets/images/beetlejuice.jpg',
      },
      QuestionText:
        'When the ghosts temporarily possessed the family during dinner, what song did they make them sing and dance to?',
      Answers: {
        Correct: ['The Banana Boat Song'],
        Incorrect: ['The Monster Mash', 'Purple People Eater', 'Thriller'],
      },
    },
    QuestionTen: {
      Heading: 'The Princess Bride',
      Image: {
        ImageId: 'princessbride',
        ImageSrc: 'assets/images/princessbride.jpg',
      },
      QuestionText:
        'What word did the clergyman with the speech impediment love to say?',
      Answers: {
        Correct: ['Inconceivable'],
        Incorrect: ['Unbelievable', 'Irretrievable', 'Irresponsible'],
      },
    },
    QuestionBonus: {
      Heading: 'Multi-Movie Bonus',
      Image: {
        ImageId: 'molly',
        ImageSrc: 'assets/images/molly.jpg',
      },
      QuestionText: 'Which of the following movies did NOT star Molly Ringwald',
      Answers: {
        Correct: ["St Elmo's Fire"],
        Incorrect: ['Sixteen Candles', 'The Breakfast Club', 'Pretty in Pink'],
      },
    },
  }

  // Loop through each question in the Trivia object and add them to the UI

  function loadquestions() {
    for (let questionKey in Trivia) {
      let question = Trivia[questionKey]
      console.log(questionKey)
      //create well for each questionKey (bootstrap styling)
      let triviaItem = $('<div>')
      triviaItem.addClass('row')

      //add row class (bootstrap styling)
      let well = $('<div>')
      well.addClass('well')
      //triviaItem.append(well);

      //add heading
      let heading = $('<h2>')
      heading.text(question.Heading)
      well.append(heading)

      //add image
      let image = $('<img>')
      image.attr('id', question.Image.ImageId)
      image.attr('src', question.Image.ImageSrc)
      well.append(image)

      //add question text
      let quizItem = $('<h4>')
      quizItem.text(question.QuestionText)
      well.append(quizItem)

      //put correct and incorrect answers in array and shuffle
      let correctAnswers = question.Answers.Correct
      let incorrectAnswers = question.Answers.Incorrect
      let allAnswers = correctAnswers.concat(incorrectAnswers)
      allAnswers.sort(function () {
        return Math.random() - 0.5
      })

      //create a radiobutton for each question with and a label that displays the answer
      let answerBlock = $('<div>')
      for (j = 0; j < allAnswers.length; j++) {
        let answerOption = $('<div>')
        answerOption.addClass('radio-container')
        let radioButton = $('<input>')
        radioButton.attr('type', 'radio')
        radioButton.val(allAnswers[j])
        radioButton.attr('name', questionKey)
        let label = $('<label>')
        label.text(' ' + allAnswers[j])

        // add each radioButton and label to the answerBlock
        answerOption.append(radioButton)
        answerOption.append(label)
        answerBlock.append(answerOption)
      }

      // Add the answerBlock to the triviaItem div
      well.append(answerBlock)
      triviaItem.append(well)
      console.log(incorrectAnswers)
      console.log(correctAnswers)
      console.log(allAnswers)

      // Add the trivaItem to the #triviaquestions div
      $('#triviaquestions').append(triviaItem)
    }
  }

  function tallyResponses() {
    let answerDetails = $('<div>').addClass('row')

    // variables for correct answer counter, if question was answered correctly(boolean), unanswered counter, and incorrect counter
    let correctresponse = 0
    let noresponse = 0
    let incorrectresponse = 0

    for (let questionKey in Trivia) {
      let question = Trivia[questionKey]

      // determine if question was answered - was a radio button selected?

      let response = $('input:radio[name="' + questionKey + '"]:checked').val()
      if (response) {
        //  Is it the correct answer? Add 1 to result
        if (question.Answers.Correct.includes(response)) {
          correctresponse++
        }
        // For wrong answer add 1 to incorrect
        else {
          incorrectresponse++
          let displayresponse = $('<div>')
          displayresponse.append('<h3>' + question.Heading + '</h3>')
          console.log(question.Heading)
          displayresponse.append('<p>' + question.QuestionText + '</p>')
          console.log(question.QuestionText)
          displayresponse.append('<p>Your Answer: ' + response + '</p>')
          console.log(response)
          displayresponse.append(
            '<p>Correct Answer: ' + question.Answers.Correct + '</p>'
          )
          console.log(question.Answers.Correct)

          answerDetails.append(displayresponse)
        }
        // if no answer selected, add 1 to noresponse
      } else {
        noresponse++
      }
    }
    // create results page to replace original question page
    $('#newpage').html('<div id="new"></div>')

    $('#new').addClass('row')

    let movie = $('<div>')
    movie.addClass('moviescreen')

    // style for results page

    $('#new').css({
      'background-image':
        'url(assets/images/rob-laughter-WW1jsInXgwM-unsplash.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'right top',
      'margin-bottom': '0px',
    })

    // Adding stats and image to results page
    let firstRow = $('<div>').addClass('row')
    if (correctresponse === 11) {
      firstRow.append("<h2>Congratulations!  You are an 80's Movie Guru!</h2>")
      firstRow.append("<img id='duckie2' src='assets/images/duckie2.jpg'>")
    } else if (correctresponse > 7) {
      firstRow.append(
        '<h2>Not too bad but brush up on your wrong answers shown below!</h2>'
      )
    } else {
      firstRow.append(
        "<h2>I think you need an 80's movie marathon!  See answers below!</h2>"
      )
    }
    firstRow.append('<h4>Correct: ' + correctresponse + '</h4>')
    firstRow.append('<h4>Unanswered: ' + noresponse + '</h4>')
    firstRow.append('<h4>Incorrect: ' + incorrectresponse + '</h4>')

    firstRow.css({
      'padding-top': '20px',
    })

    movie.append(firstRow)
    movie.append(answerDetails)

    $('#new').append(movie)

    // styling for image
    $('#duckie2').css({
      'max-width': '100%',
      height: 'auto',
    })
  };

 // display trivia questions when the game is loaded
  loadquestions();

  // start the timer when the game is loaded
  timer();

  //When done button is clicked 

  $('#done').on('click', function () {
    
    // stop the timer
    stop();

    //tally results and display on results page
    tallyResponses();
  })
});

