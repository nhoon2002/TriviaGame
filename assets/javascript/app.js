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
var Qindex = 0;



var number = 5;

// When  button gets clicked, run the stop function.
// $('answers').on('click', stop);
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
      null_count++;
    }
}
// The stop function
function stop(response, index){
    clearInterval(counter);
    number = 5;
    answerScreen(response, index)

}



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
      $('.answers').html('');
      $('#image_container').html('<img src=' + objects[index].image +'>');

   } else if (response == "incorrect") {
      //SHOW INCORRECT SCREEN
      $('.questionBox').html('<h1>Incorrect...!</h1><br /><h2>The correct answer was: ' + objects[index].display_correct);
      $('.answers').html('');
      $('#image_container').html('<img src=' + objects[index].image +'>');

   } else {
      $('#timer').html('Out of time!');
      //SHOW OUT OF TIME SCREEN
      $('.questionBox').html('<h1>You did not provide an answer...!</h1>');
      $('.answers').html('');
      $('#image_container').html('<img src = "assets/images/pokerface.jpg" height="50%" width="50%">');
      Qindex++
      setTimeout(function() { nextQuestion(Qindex); }, 3000);
   }



}

function resultScreen() {
   $('.questionBox').html('<h1>You have completed the survey! Here are your results: </h1><br /><h2># Correct: ' + correct_count + '<br># Incorrect: ' + incorrect_count + '<br># Unanswered: ' + null_count);
   $('.answers').html('');
   $('#image_container').html('<img src = "assets/images/result.jpg">');
}

function nextQuestion(num) {
   console.log(correct_count, incorrect_count, null_count);

   userGuess = null;
   number = 5;
   run()
   // TODO: new questions


   $('.questionBox').html(objects[num].question);
   $('#image_container').html('');
   $('#first').html(objects[num].answer_choices[0]);
   $('#second').html(objects[num].answer_choices[1]);
   $('#third').html(objects[num].answer_choices[2]);
   $('#fourth').html(objects[num].answer_choices[3]);


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
   Qindex = 0;
   gameStart();
   run();
   //Shuffle Questions
   shuffleArray(objects);
   console.log(objects);

   //Show Questions and choices
   $('.questionBox').html(objects[Qindex].question);
   $('#first').html(objects[Qindex].answer_choices[0]);
   $('#second').html(objects[Qindex].answer_choices[1]);
   $('#third').html(objects[Qindex].answer_choices[2]);
   $('#fourth').html(objects[Qindex].answer_choices[3]);


   var userGuess = null;



      $('.answers').on("click", function(){
         userGuess = ($(this).attr('id'));
         console.log(userGuess);
         // TODO: Stop timer on click




         if (userGuess == objects[Qindex].answer_correct) {

            var checker = "correct";
            //Correct! Show correct screen and embed image/video graphics
            stop(checker,Qindex);
            // answerScreen(checker, Qindex);
            correct_count++;

         } else if (userGuess !== objects[Qindex].answer_correct) {

            var checker = "incorrect";
            //Wrong answer! Incorrect screen and show the correct answer
            stop(checker,Qindex);
            // answerScreen(checker, Qindex);
            incorrect_count++;

         }

      Qindex++;

      if (Qindex < 8) {
         setTimeout(function() { nextQuestion(Qindex); }, 3000);
      } else {
         resultScreen();
      }
         // } else if (userGuess == null)  {
         //
         //    var checker = "null";
         //    //Out of time! No answer selected! Show correct answer
         //    stop(checker, Qindex);
         //    null_count++;
         //    Qindex++;
         // }
      console.log(Qindex);
      });












});
