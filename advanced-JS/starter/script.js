// Function constructor
/*
// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(2019-this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');
var mark = new Person('mark', 1997, 'Learning Tech');
var jane = new Person('Mark', 1948, 'Retired');
john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
 */


// Object.create
/*
var personProto = {
  calculateAge: function (){
    console.log(2016-this.yearOfBirth);
  }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';



var jane = Object.create(personProto, {
  name: { value : 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value:'designer'}
})
*/



///////////////////////////////////
// Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a= 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


//Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a,b){
  a=30;
  b.city = 'San Francisco';
}
change(age,obj);

console.log(age);
console.log(obj.city);

*/

/////////////////////////////////////////
// Lecture: Passing functions as arguments


// var years = [1990,1965,1937,2005,1995];
//
// function arrayCalc(arr, fn){
//   var arrRes= [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(element){
//   return (2016-element);
// }
// function isFullAge(element){
//   return element >= 18;
// }
// function maxHeartRate(element){
//   if (element >= 18 && element <= 81){
//     return Math.round(206.9 - (0.67 * element));
//   } else {
//     return -1;
//   }
// }
//
// var ages = arrayCalc(years,calculateAge);
// var fullAges = arrayCalc(ages,isFullAge);
// var maxRate = arrayCalc(ages,maxHeartRate);
//
// console.log(ages);
// console.log(fullAges);
// console.log(maxRate);



////////////////////////////////////////
// Lecture Returning Functions

// function intervewQuestion(job){
//   if (job === 'designer'){
//     return function(name){
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher'){
//     return function(name){
//       console.log('What subject do you teach? ' + name);
//     }
//   } else {
//     return function(name) {
//       console.log('Hello ' + ', What do you do?');
//     }
//   }
// }
//
//
// var teacherQuestion = intervewQuestion('teacher');
// var designerQuestion = intervewQuestion('designer');
//
//
// teacherQuestion('Meitar');
// designerQuestion('Meitar');
//
//
// //another way to do it
// //first takes left to right first it fulls in the interview question function then it calls the one before being Mark
// intervewQuestion('teacher')('mark');
//
//
// //OWn first class Functions
//
// function ageRestrict(age){
//   if (age >= 18){
//     return function(name){
//       console.log('welcome to this website ' + name);
//     }
//   }else {
//     return function(name){
//       console.log('you are too young to visit, come again when you are older :)');
//     }
//   }
// }
//
// var userFilledName = ageRestrict(22);
//
// userFilledName('john');
//


////////////////////////////////////////////
//Immediatly invoked function expression (IIFE)

// function game(){
//   var score = Math.random()*10;
//   console.log(score >= 5);
// }
// game();

// (function() {
//   var score = Math.random()*10;
//   console.log(score >= 5);
// }());
//
// (function(goodLuck) {
//   var score = Math.random()*10;
//   console.log(score >= 5 - goodLuck);
// }(5));



////////////////////////////////////////
// CLosures


// function retirement(retirementAge){
//   var a = ' years left until retirement.';
//   return function (yearOfBirth){
//     var age = 2019 - yearOfBirth;
//     console.log((retirementAge-age)+ a);
//   }
// }
//
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
//
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

//retirement(66)(1990);
//
// ///////////////////
// //retrying interview quetsion function as closers
//
// ///////MY ATTEMPT ------------
// function interviewQ(job){
//   var designerQ = ', can you please explain what UX design is?';
//   var teacherQ = 'What subject do you teach? ';
//   var otherJobs = ' What do you do?';
//   return function(name){
//     if (job === 'teacher') {
//       console.log(teacherQ + name);
//     } else if (job === 'designer'){
//       console.log(name + designerQ);
//     } else {
//       console.log('Hello ' + name + otherJobs);
//     }
//   }
// }
//
// var teachingQuestion = interviewQ('teacher');
// teachingQuestion('Mark');
// var programmerQuestion = interviewQ('programmer')('John');
//

//
// /////// Jonas attempt ------
// function interviewQuestion(job){
//   return function(name){
//     if (job === 'teacher') {
//       console.log('What subject do you teach? ' + name);
//     } else if (job === 'designer'){
//       console.log(name + ', can you please explain what UX design is?');
//     } else {
//       console.log('Hello ' + name + ' What do you do?');
//     }
//   }
// }
//
// interviewQuestion('teacher')('John')


// function ageRestrict(ageLimit){
//   return function(userAge, userName){
//     if (userAge >= 18){
//       console.log('You are old enough to partake ' + userName);
//     } else {
//       console.log('Sorry ' + userName + ', are too young to partake comeback in ' + (18 - userAge) + ' years');
//     }
//   }
// }
//
// var ageLimitUS = ageRestrict(21);
// var ageLimitUK = ageRestrict(18);
//
// ageLimitUS(14, 'John');
// ageLimitUS(23, 'Mark');
// ageLimitUK(44, 'Mary');
// ageLimitUK(13, 'Harry');
//
// ageRestrict(18)(23, 'Jacob');



///////////////////////////////////////////
// Lecture: Bind, Call and apply

var john = {
  name: 'John',
  age: 26,
  job: 'Teacher',
  presentation: function(style, timeOfDay){
    if (style === 'formal'){
      console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
    } else if (style === 'friendly'){
      console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'Designer'
};

john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon');
/////////
//also works for apply but it needs to take it as an array!
john.presentation.apply(emily, ['friendly', 'afternoon'])

////////
//For the bind method it sets in place one of the arguments already
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('midnight');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
emilyFormal('twilight');


//// Real world example
var years = [1990,1965,1937,2005,1997];

function arrayCalc(arr, fn){
  var arrRes= [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(element){
  return (2016-element);
}
function isFullAge(limit, element){
  return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,'20'));

console.log(ages);
console.log(fullJapan);


///////////////////////////////////////////////////
// CODING CHALLENGE
//

/*
--- Let's build a fun quiz-game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answer from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for a Question objects for this taks).

5. Use the 'prompt' function to ask the user for the correct answer. The user input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plug in for other programmers to use their code. So make sure that all the code is private and doesnt interfere with other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert Level ---

8. After you display the results, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. in this case, DON'T call the function from task 8.

10. Track the user's scoreto make the game for fun: so each time an answer is correct add 1 point to the score (Hint: I'm going to use the power of closures for this, but you dont have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/

//--------------------------------------------------
//My Version
//--------------------------------------------------

// // Variables // //
// var Question = function(questionForUser, possibleAnswers, correctAnswer) {
//   this.question = questionForUser;
//   this.possibleAnswer = possibleAnswers;
//   this.correctAnswer = correctAnswer;
// }
// var arrayQuestions = [
//   question1 = new Question('Who is the lecturer?', ['Jonas', 'Harry', 'John'], '0'),
//   question2 = new Question('What is 5x3?', ['10', '16', '15', '14'], '2'),
//   question3 = new Question('Is JavaScript fun ?', ['No', 'Yes'], '1'),
// ];
// // // Functions // //
//
// //Randomize Question
// var qArray = (function randomQuestion(questionArrays) {
//   var randomQ = questionArrays[Math.floor(Math.random() * questionArrays.length)];
//   return randomQ;
// }(arrayQuestions));
//
// //Seperate Question
// (function seperateQuestion(question, possibleAnswer, correctAnswer) {
//   var question = {
//     question: question,
//     possibleAnswer: possibleAnswer,
//     correctAnswer: correctAnswer
//   }
//
//   console.log(question.question);
//   for (var i = 0; i < question.possibleAnswer.length; i++) {
//     console.log([i] + '. ' + question.possibleAnswer[i]);
//   }
//
// }(qArray.question, qArray.possibleAnswer, qArray.correctAnswer));
//
// var userAnswer = prompt('Please answer the following question in the console. ' + qArray.question);
//
// //Check Answer
// (function isCorrectAnswer(userinput, rightAnswer) {
//   if (userinput === rightAnswer) {
//     return console.log('Well done!');
//   } else {
//     return console.log('Incorrect, please try again');
//   }
// }(userAnswer, qArray.correctAnswer));
//
//     (function nextQuestion() {
//       if (userAnswer || !userAnswer) {
//         console.log('---------------------------');
//
//         var qArray = (function randomQuestion(questionArrays) {
//           var randomQ = questionArrays[Math.floor(Math.random() * questionArrays.length)];
//           return randomQ;
//         }(arrayQuestions));
//
//         //Seperate Question
//         (function seperateQuestion(question, possibleAnswer, correctAnswer) {
//           var question = {
//             question: question,
//             possibleAnswer: possibleAnswer,
//             correctAnswer: correctAnswer
//           }
//
//           console.log(question.question);
//           for (var i = 0; i < question.possibleAnswer.length; i++) {
//             console.log([i] + '. ' + question.possibleAnswer[i]);
//           }
//
//         }(qArray.question, qArray.possibleAnswer, qArray.correctAnswer));
//
//         prompt('Please answer the following question in the console. ' + qArray.question);
//       }
//
//     }());
//   console.log(userAnswer);
//Jonas ATTEMPT
//
// (function() {
//   //function constructor
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//
//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);
//
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i]);
//     }
//   }
//
//   Question.prototype.checkAsnwer = function(ans) {
//     if (ans === this.correct){
//       console.log('Correct Asnwer!');
//     } else {
//       console.log('Wrong Answer. Try Again');
//     }
//   }
//
//   //questions
//   var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//   var q2 = new Question('What is the name of this courses\'s teacher', ['John', 'Michael', 'Jonas'], 2);
//   var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
//
//   // making them an array
//   var questions = [q1, q2, q3];
//
//   //chooose a random question
//   var n = Math.floor(Math.random() * questions.length);
//
//   //call this display question function to show them
//   questions[n].displayQuestion();
//
//   //prompt for users input possibleAnswers
//   var answer = parseInt(prompt('Please select the correct answer'));
//
//   questions[n].checkAsnwer(answer);
// }())







(function() {
  //function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAsnwer = function(ans, scoreCallBack) {
    var score;
    if (ans === this.correct) {
      console.log('Correct Asnwer!');
      score = scoreCallBack(true);
    } else {
      console.log('Wrong Answer. Try Again');
      score = scoreCallBack(false);
    }

    this.displayScore(score);
  }

//prototype to display a score
  Question.prototype.displayScore = function(score){
      console.log('Your current score is: '+ score);
      console.log('------------------------------');
  }

  //questions
  var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
  var q2 = new Question('What is the name of this courses\'s teacher', ['John', 'Michael', 'Jonas'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

  // making them an array
  var questions = [q1, q2, q3];

//to calculate and add a score
function score() {
  var sc = 0;
  return function(correct) {
    if (correct){
      sc++;
    }
    return sc;
  }
}

var keepScore = score();

  function nextQuestion() {

    //chooose a random question
    var n = Math.floor(Math.random() * questions.length);

    //call this display question function to show them
    questions[n].displayQuestion();

    //prompt for users input possibleAnswers
    var answer = prompt('Please select the correct answer, type \'exit\' to stop playing');

    if (answer !== 'exit') {
      questions[n].checkAsnwer(parseInt(answer), keepScore);
      nextQuestion()
    }
  }

  nextQuestion();
}())





//2
