//Initialize all the variables and arrays.

var objects = [
   {
      question: "In 'The Little Mermaid,' who is NOT one of Triton’s daughters?",
      answer_choices: ["Adora", "Andrina", "Attina", "Alana"],
      answer_correct: ["first"],
      display_correct: "Adora",
      image: "assets/images/1st.jpg"

      //TODO: add imgs/gifs

   },
   {
      question: "Which phrase does the Evil Queen in 'Snow White' actually say?",
      answer_choices: ["Mirror, mirror, on the wall -- who is the fattest of them all?", "Magic mirror, on the wall -- who is the fairest one of all?", "Magic mike, on the boo -- who is the dopest of them all?", "Moo moo moo -- mooo moo moo moo moooo?"],
      answer_correct: ["second"],
      display_correct: "Magic mirror, on the wall -- who is the fairest one of all?",
      image: "assets/images/2nd.jpg"
   },
   {
      question: "In the movie 'Tangled,' Flynn Rider is wanted dead or alive according to his wanted poster because he's a...",
      answer_choices: ["Thief", "Rapist", "Serial Killer", "Arsonist"],
      answer_correct: ["first"],
      display_correct: "Thief",
      image: "assets/images/3rd.jpg"
   },
   {
      question: "Which item did Cinderella leave behind at the ball?",
      answer_choices: ["Right glass slipper", "Diamond tiara", "Left glass slipper", "Make-up bag"],
      answer_correct: ["third"],
      display_correct: "Left glass slipper",
      image: "assets/images/4th.jpg"
   },
   {
      question: "In 'Sleeping Beauty,' what is the name of Maleficent’s pet raven?",
      answer_choices: ["Baal", "Maluga", "Peekee", "Diablo"],
      answer_correct: ["fourth"],
      display_correct: "Diablo",
      image: "assets/images/5th.jpg"
   },
   {
      question: "In 'Frozen,' how many brothers does Hans have?",
      answer_choices: ["None", "3", "6", "12"],
      answer_correct: ["fourth"],
      display_correct: "12",
      image: "assets/images/6th.jpg"
   },
   {
      question: "In 'Aladdin,' what does Aladdin give to the poor children to eat?",
      answer_choices: ["Apples", "Pizza", "Bread", "Chicken Wings"],
      answer_correct: ["third"],
      display_correct: "Bread",
      image: "assets/images/7th.jpg"
   },
   {
      question: "In 'Peter Pan,' what did Captain Hook lose to the crocodile?",
      answer_choices: ["Left Foot", "Left Hand", "Right Foot", "Right Hand"],
      answer_correct: ["second"],
      display_correct: "Left Hand",
      image: "assets/images/8th.jpg"
   }

]



var correct_count = 0;
var incorrect_count = 0;
var null_count = 0;



var number = 30;

// When  button gets clicked, run the stop function.
$('answers').on('click', stop);
// When the resume button gets clicked, execute the run function.


// The run function sets an interval

function run(){
    counter = setInterval(decrement, 1000);
}

// The decrement function.
function decrement(){
    // Decrease number by one.
    number--;
    // Show the number in the #show-number tag.
    $('#timer').html('<h2> Time Remaining: ' + number + 's </h2>');

    // Once number hits zero...
    if (number === 0){
      // ...run the stop function.
      stop();
      //

    }
}

// The stop function
function stop(){
    // Clears our "counter" interval.
    // We just pass the name of the interval
    // to the clearInterval function.
    clearInterval(counter);
    number = 30;
    answerScreen(null);
}


// Execute the run function.



console.log(objects[0]);

function gameStart() {

}

function answerScreen(response, index) {
   // TODO: set delays to show this screen for 5 seconds
   // TODO: remove timer

   $('#timer').html('');
   $('.answers').html('');
   if (response == "correct") {
      $('.questionBox').html('<h1>Correct!</h1>')
      $('#answer_container').html('<img src=' + objects[index].image +'>');

   } else if (response == "incorrect") {
      //SHOW INCORRECT SCREEN
      $('.questionBox').html('<h1>Incorrect...!</h1><br /><h2>The correct answer was: ' + objects[index].display_correct);
      $('#answer_container').html('<img src=' + objects[index].image +'>');

   } else if (response == "null") {
      $('#timer').html('Out of time!');
      //SHOW OUT OF TIME SCREEN
      $('.questionBox').html('<h1>Incorrect...!</h1><br /><h2>The correct answer was: ' + objects[index].display_correct);
      $('#answer_container').html('<img src=' + objects[index].image +'>');
   }
}

function nextQuestion(num) {
   userGuess = null;
   stopwatch.reset;
   // TODO: new questions
   $('.questionBox').html(objects[num].question + ' ' + objects[num].answer_choices + ' ' + objects[num].answer_correct);
   $('#first').append(objects[num].answer_choices[0]);
   $('#second').append(objects[num].answer_choices[1]);
   $('#third').append(objects[num].answer_choices[2]);
   $('#fourth').append(objects[num].answer_choices[3]);


}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


$('button').on('click', function(){

   //start the game;
   // TODO: Start the timer

   gameStart();

   //Start Timer
   run();

   //Shuffle Questions
   shuffleArray(objects);

   console.log(objects);

   var Qindex = 0;
   $('.questionBox').html(objects[Qindex].question);
   $('#first').append(objects[Qindex].answer_choices[0]);
   $('#second').append(objects[Qindex].answer_choices[1]);
   $('#third').append(objects[Qindex].answer_choices[2]);
   $('#fourth').append(objects[Qindex].answer_choices[3]);

   // 3 cases: 1) user clicks on wrong answer, 2) user clicks on a correct answer, 3) user does not give an answer
   var userGuess = null;

      $('.answers').on("click", function(){
         userGuess = ($(this).attr('id'));
         console.log(userGuess);
         // TODO: Stop timer on click
         stop();



         if (userGuess == objects[Qindex].answer_correct) {

            var checker = "correct";
            //Correct! Show correct screen and embed image/video graphics
            answerScreen(checker, Qindex);
            correct_count++;
            Qindex++;
         } else if (userGuess !== objects[Qindex].answer_correct) {

            var checker = "incorrect";
            //Wrong answer! Incorrect screen and show the correct answer
            answerScreen(checker, Qindex);
            incorrect_count++;
            Qindex++;
         }
         // } else if (userGuess == null) {
         //
         //    var checker = "null";
         //    //Out of time! No answer selected! Show correct answer
         //    answerScreen(checker, Qindex);
         //    null_count++;
         //    Qindex++;
         // }

      });












});
