/*********************************************
***** Lecture: let and const
*/

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// //console.log(name5);
//
// // const becomes constant and you cant change, let becomes like old var and you can change
// // const name6 = 'Jane Smith';
// let name6 = 'biob';
//  name6 = 'Jane Miller';
// console.log(name6);


// // ES5
// function driversLicense5(passedTest){
//   if(passedTest){
//     console.log(firstname); //becomes undefinied
//
//     //are function based so can be used anywhere inside of a function
//     var firstname = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(firstname + ' born in ' + yearOfBirth+ ' is now officially allowed to drive a car');
// };
// driversLicense5(true);
//
// // ES6
// function driversLicense6(passedTest){
//
//   //let can be declared outside of the block and definied inside and still be used, however const cant. they are called block based so anything between the {}
//   let firstname;
//   const yearOfBirth = 1990;
//
//   if(passedTest){
//     firstname = 'John';
//     //yearOfBirth = 1990;
//   }
//
//   console.log(firstname + ' born in ' + yearOfBirth+ ' is now officially allowed to drive a car');
// };
// driversLicense6(true);
//
// // because they are blocked scope they are 2 different variables that share the same name so i = 23 and i = [0,1,2,3,4]
// //if it was var then it would be overriden so in the end i would be 5
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);




/****************************************
*** Lecture: Blocks and IIFE's
*/


// // ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
//
// //console.log(a + b);
// console.log(c);
// // ES5
// (function(){
//   var c = 3
// })
//
// console.log(c);





/*****************************************
*** Lecture: strings
*/

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year){
//   return 2019 - year;
// }
//
// //template literals using ${} and `` instead of '' and +
// // ES5
// console.log('This is ' + firstName + ' ' + lastName + ' and was born in ' + yearOfBirth + ' Today he is ' + calcAge(yearOfBirth));
//
//
// // ES6
// console.log(`This is ${firstName} ${lastName} and he was born in ${yearOfBirth}, today he is ${calcAge(yearOfBirth)}`);
//
// //some new ways to manipulate strings
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('t'));
// console.log(n.includes('Smith'));
// console.log(`${firstName} `.repeat(5));





/****************************************
*** Lecture: Arrow Functions
*/

// const years = [1990, 1982, 1975, 1937];
//
// // ES5
// var ages5 = years.map(function(el){
//   return 2016-el;
// })
// console.log(ages5);
//
// // ES6
// let ages6 = years.map(el => 2016-el);
// // (argument{el} arrow{=>} return statement{2016-el})
// console.log(ages6);
//
// //if the function has more then 1 argument you need to put in parenthesis
// ages6 = years.map((el, index) => `Age element ${index + 1 }: ${2016-el}.`);
// console.log(ages6);
//
// //if you have more then 1 arugment and want more then 1 line code use {return}
// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1 }: ${age}.`
// });
// console.log(ages6);




/***************************************
*** Lecture: Arrow Functions 2
*/

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function (){
    //the 'this' keyword is either pointing to the object being box 5 if it is in method (function in an object )
    var self = this;
    //as there is a function for the onclick event the 'this' keyword now points to the global scope and not the object box 5 any more so the 'this' becomes undefined, to get it to work inside you need to create a variable called self and assign 'this' to it
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    })
  }
}
box5.clickMe();


// ES6
const box6 = {
  color: 'blue',
  position: 2,
  clickMe: function (){

    // the => shares a surrounding 'this' keyword with the box/container that it is apart of
    document.querySelector('.blue').addEventListener('click', () => {
      let str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    })
  }
}
box6.clickMe();


const box66 = {
  color: 'blue',
  position: 2,
  clickMe: () => { //(up) if you make this also a => function then it will then share up lexically the 'this' keyword with the global scope which means it then loses its own this keyword

    // (down)the => shares a surrounding 'this' keyword with the box/container that it is apart of
    document.querySelector('.blue').addEventListener('click', () => {
      let str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    })
  }
}
//box66.clickMe();



function Person (name) {
  this.name = name;
}


// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function(el){
    return this.name + ' is friends with ' + el
  }.bind(this))

  console.log(arr);
};

var friends = ['bob', 'jane', 'mark'];

new Person('john').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map((el) => `${this.name} is friends with ${el}`)
  console.log(arr);
};

let friends6 = ['Bob', 'Jane', 'Mark'];
new Person('Harry').myFriends6(friends6);





/******************************************
*** Lecture: Destructuring
*/
//
// // ES5
// var john = ['john', 26];
// //var name = john[0];
// //var age = john[1];
//
// // ES6
// // for and array
// //giving it the same index and name of what you want variable to be called
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);
//
//
// // for an object
// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// }
// // you deconstruct it by putting them in {} the key names that would be seen in the object
// const {firstName, lastName} = obj;
// // console.log(firstName);
// // console.log(lastName);
//
//
// //and if you want to rename the keys as a new variable name then you just have to do the {key: variable} and then it becomes your variable
// const {firstName: a, lastName: surname} = obj;
// console.log(a);
// console.log(surname);
//
//
// //returning multiple values from a Functions
// // in ES5 you returned an object but now you Destructuring
//
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
//
// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);




/********************************
*** Lecture Arrays:
*/
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = 'dodgerblue';
})

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//simplified
const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//LOOPS
//ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {

  if (boxesArr5[i].className === 'box blue') {
    continue;
    //break;
  }

  boxesArr5[i].textContent = 'I Changed to Blue';
}
*/
/*
//ES6
//for (variable of current element OF the array)
for (const cur of boxesArr6) {
  if(cur.className.includes('blue')){
    continue;
  }
  cur.textContent = `I have changed to blue!`;
}


//ES5
var ages = [12, 17, 8, 21, 14, 11,23];

var full = ages.map(function(cur){
  return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
//to find the index position of the item in the array
console.log(ages.findIndex(cur => cur >= 18));
//to find the values of the the item in the array that matches the critera
console.log(ages.find(cur => cur >= 18));

*/



/**************************************************
***** Lecture: Spread Operator
*/

function addFourAges(a, b, c, d) {
  return a+b+c+d;
}

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
//apply + bind + call you have to set the this variable
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6
// ... = a spread operator to seperate them into their slots
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary','Bob','Ann'];
const bigFamily = [...familySmith, 'Lily' ,...familyMiller];
console.log(bigFamily);


const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const allColor = [heading, ...boxes];
Array.from(allColor).forEach(cur => cur.style.color = 'purple');

//also works
// for (const cur of allColor) {cur.style.color = 'purple';}






/***************************************************
***** Lecture: Rest Parameters
*/

//KEY DIFFERENCE BETWEEN REST PARAMETERS AND SPREAD OPERATOR (BECAUSE THEY LOOK THE SAME). IS THAT SPREAD OPERATOR TAKES AN ARRAY AND SPLITS IT INTO INDIVIDUAL VALUES, BUT REST PARAMETERS TAKES SINGLE VALUES AND PUTS THEM INTO AN ARRAY WHEN WE CALL FUNCTION WITH MULTIPLE PARAMENTERS


//ES5
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur){
    console.log((2016 - cur) >= 18);
  })

}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965,2016,1987);


//ES5
function isFullAge5(limit) {
  //console.log(arguments);
  //we are slice it at position one so it starts at 1 in the array allowing for position 0 to stay as the parameter being the age limit;
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function(cur){
    console.log((2016 - cur) >= limit);
  })

}
//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//so where as before you would need to splice the first item here it just picks up that the first item is the limit variable and continues
//ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(25,1990, 1999, 1965,2016,1987);




/***************************************************
***** Lecture: Default Parameters
*/

//Used when we want 1 or more parameter of a function to be preset: have a default a values;


// //ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//   lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//   nationality === undefined ? nationality = 'American' : nationality = nationality;
//
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
//
// //ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');




/***************************************************
***** Lecture: Maps
*/

//new key value data structure (object) in ES6, big difference is that in maps you can use anything for the keys. so in object we are limited to strings but in maps you can use any kind of primitive value or even functions or objects as keys

const question = new Map();
// you use SET to add key-value pairs to a map like such:
//variableName.set('key', 'value');
question.set('question', 'What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer! :D');
question.set(false, 'Wrong, please try again!');

//to retrieve data from the Map
console.log(question.get('question'));
// to get the size of it
//console.log(question.size);
//to check if it has the key-values
if(question.has(4)){
  //to delete key-value pair from Maps
  //question.delete(4);
  //console.log('Answer 4 is here');
}
//to delete all the key-values in the Maps
//question.clear();


//they a iterable (so you can loop through them which you cant for objects)
//question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

//if you wanted to get more then just the key and the value as well you need to grab the whole structure of the Map so you and .entries() to grab everything and then use Destructuring to store the key and value in 2 differente values ^ see above lecture on destructing (also work for arrays)
for (let [key,value] of question.entries()) {
  //to check type of variable use typeof
  if (typeof(key) === 'number') {
  console.log(`Answer ${key}: ${value}`);
  }
}

//comes out as a string so use parseInt to make it a number
const ans = parseInt(prompt('Write the correct answer'));
//we can use the ans === question.get('correct') to tell if the answer is true or false and then with power of using true and false as keys in Maps we can then get it to find the value
console.log(question.get(ans === question.get('correct')));




/***************************************************
***** Lecture: Classes
*/

//ES5
//they are function constructors or expressions
var Person5 = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear - this.year;
  console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');


//ES6
//class are not hoisted!
//can only add methods to classes not properties (but its not best practice)
class Person6 {
  //every class has to have a constructor declaration (which is vary similar to the way its done in es5)
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear - this.year;
    console.log(age);
  }

//instances wont inheret the static class
  static greeting(){
    console.log('Hey there!');
  }
}
const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();




/***************************************************
***** Lecture: Sub-Classes
*/

//ES5
var Person5 = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

var Athelete5 = function (name, yearOfBirth, job, olympicGames, medals){
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

//first need to link them before you can create new function prototypes for just the subclass
Athelete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athelete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

//Must say it extends the superclass
class Athelete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals){
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal(){
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athelete6('John', 1990, 'Swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();



/***************************************************
***** Lecture: Coding Challenge 8
*/

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town
(formula: number of trees/park area)
2. Average age of each town's park
(formula: sum of all ages/number of parks)
3. The name of the park that has more then 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: use some of the ES6 features: classes, subclasses, template strings, default parameter, maps, arrow functions, destructirng, etc.
*/


//MY VERSION

console.log('---- PARK REPORT----');

//choose the type to display data
//set all the variables in the datatype
//it needs name + buildYear + numTrees + Square KM
class park {
  constructor(name, buildYear, numTrees, squareKM){
    this.name = name;
    this.buildYear = buildYear;
    this.numTrees = numTrees;
    this.squareKM = squareKM;
  }

  //find the park with more than 1000 trees planted
  more1000Trees(){
    if(this.numTrees > 1000){
      console.log(`${this.name}, has more then 1000 trees`);
    }
  }
}

const greenPark = new park ('Green Park', 1943 , 842 , 41);
const nationalPark = new park ('National Park', 1852  , 1638 , 130 );
const oakPark = new park ('Oak Park', 2003 , 321 , 98 );

let parks = new Map();
parks.set('greenpark', greenPark);
parks.set('nationalpark', nationalPark);
parks.set('oakpark', oakPark);

function parkAge (date) {
  let age = new Date().getFullYear() - date;
  return age;
}
let oakParkAge = parkAge(parks.get('oakpark').buildYear);
let nationalParkAge = parkAge(parks.get('nationalpark').buildYear);
let greenParkAge = parkAge(parks.get('greenpark').buildYear);

console.log(`Our parks have an average age of ${(oakParkAge + nationalParkAge + greenParkAge)/3} years`);

//find out the tree density
function treeDensity(name,numTrees, squareKM){
  let denisty = numTrees/squareKM;
  console.log(`${name} has a tree denisty of ${denisty} trees per a square km`);
}

let greenParkDensity = treeDensity(parks.get('greenpark').name, parks.get('greenpark').numTrees, parks.get('greenpark').squareKM);
let nationalParkDensity = treeDensity(parks.get('nationalpark').name, parks.get('nationalpark').numTrees, parks.get('greenpark').squareKM);
let oakParkDensity = treeDensity(parks.get('oakpark').name, parks.get('oakpark').numTrees, parks.get('greenpark').squareKM);

parks.forEach(cur => cur.more1000Trees());

console.log('---- STREETS REPORT ----');
// choose the type to display data
//set all possible varaibles out
//it needs name + buildYear, size, sizeInKm; all the defaults = normal
class street {
  constructor(name, buildYear, sizeInKm, size = 'normal'){
    this.name = name;
    this.buildYear = buildYear;
    this.squareKM = sizeInKm;
    this.size = size;
  }

  sentence() {
    console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street`);
  }
}

const onceanAve = new street ('Ocean Avenue', 1822, 3, 'big');
const evergreenStr = new street ('Evergreen Street', 2012, 5,'small');
const fourthStr = new street ('4th Street', 1953, 6);
const sunsetBlvd = new street ('Sunset Boulevard', 1899 ,1 ,'huge');

let streets = new Map();
streets.set('oceanave', onceanAve);
streets.set('evergreenstr', evergreenStr);
streets.set('fourthstr', fourthStr);
streets.set('sunsetblvd', sunsetBlvd);

//do a sum to add all the sizeInKm and to find average (sum)/4
let oceankm = streets.get('oceanave').squareKM;
let evergreenkm = streets.get('oceanave').squareKM;
let fourthkm = streets.get('oceanave').squareKM;
let sunsetkm = streets.get('oceanave').squareKM;

let distanceKm = (oceankm + evergreenkm + fourthkm + sunsetkm)/4

console.log(`Our 4 streets have a total length of ${oceankm + evergreenkm + fourthkm + sunsetkm} km, with an average of ${distanceKm} km.`);

streets.forEach(cur => cur.sentence());

JONAS VERSION

class Element {
  constructor(name, buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees){
    super(name,buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees/this.area;
    console.log(`${this.name} has a tree density of ${density} trees per a sqaure km.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3){
    super(name,buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)}`);
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
]

const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(array){
  //reduce adds upp all the numbers in an array and displays it as 1 number, it has access to the previous number, the current number and the index ( and then where it starts )
  const sum = array.reduce((previous, current,index) => previous + current, 0);
  return [sum, sum/array.length];
}

function reportPark(p){

  console.log('----- PARKS REPORT -----');

  //density
  p.forEach(el => el.treeDensity());

  //average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, averageAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${averageAge} age`)

  //which park has more then 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more then 1000 trees`)

}

function reportStreets(s){

  console.log('----- PARKS REPORT -----');

  //Total and average length of the town's streets
  const [totalLength, averageLeng] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${averageLeng} km`);

  // classify sizes
  s.forEach(el => el.classifyStreet())
}

reportPark(allParks);
reportStreets(allStreets);















//
