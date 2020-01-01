/************************************
 * Variables and data types
 * */

// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'teacher';
// console.log(job);
//
// //Variable naming rules
// var _3years = 3;
// var johnMark = 'john and mark';
// var if = 23;


/**************************************
 * Variable mutation and type coercion
 * */

// var firstName = 'John';
// var age = 28;
//
// // Type coercion
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);
//
// // Variable mutation
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);


/********************************
 * Basic Operators
 * */

// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
//
// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
//
// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
//
//
// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older then John');
// var x;
// console.log(typeof x);


/********************************
 * Operator precedence
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * */


// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// // Multiple operators
// var  isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);
//
// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageMark + ageJohn) / 2;
// console.log(average);
//
// // Multiple assignments
// var x,y;
// x = y = (3+5)*4-6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x , y);
//
// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);


/**************************
 * CODING CHALLENGE 1
 * */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in matter).

1. Store Mark's ajd John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI then John.
4. Print a string to the console containing the variable from step 3. (Something like "is Mark's BMI higher than John's? true").

Goodluck :)
*/

// var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark, higherBMI, moreBMI;
// massJohn = 92; heightJohn = 1.95; //kg ; meters
// massMark = 78; heightMark = 1.69; //kg ; meters
//
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
// console.log('john ' + bmiJohn, 'mark ' + bmiMark);
// moreBMI = bmiMark > bmiJohn;
// higherBMI = 'Is Mark\'s BMI higher than John\'s? ' + moreBMI;
//
// console.log(higherBMI);


/************************
 * If / Else statements
 * */

// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log( firstName + ' is not married');
// }
//
// var isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log( firstName + ' is not married');
// }
//
// var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark, higherBMI, moreBMI;
// massJohn = 92; heightJohn = 1.95; //kg ; meters
// massMark = 78; heightMark = 1.69; //kg ; meters
//
// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
//
// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\s')
// } else {
//     console.log('John\'s BMI is higher than Mark\s')
// }


/*************************
 *  Boolean logic
 * */

// var firstName = 'John';
// var age = 20;
//
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age <20 && age >=13) { // Between 13 and 20
//     console.log(firstName + ' is a teenager.');
// } else if (age < 30 && age >= 20){
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }


/******************************
 * The Ternary Operator and Switch Statement
 * */

// var firnName = 'John';
// var age = 16;
//
// // Ternary operator
// age >=19 ? console.log(firnName + ' drinks beer.') : console.log(firnName + ' drinks jucie.');
//
//
// var drink = age>= 18 ? 'beer' : 'juice';
// console.log(firnName + ' can only drink ' + drink);
//
// /*
// * Same as
// *  if(age>=18){
// *   var drink = 'beer';
// *  } else {
// *   var drink = 'juice';
// *  }
// * */
//
// // Switch statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firnName + ' teaches kid how to code');
//         break;
//     case 'driver':
//         console.log(firnName + ' drives uber in lisbon');
//         break;
//     case 'designer':
//         console.log(firnName + ' design beautiful websites');
//         break;
//     default:
//         console.log(firnName + ' does something else');
// }
//
// age = 30;
// switch (true) {
//     case age <13 :
//         console.log(firnName + ' is a boy.');
//         break;
//     case age <20 && age >=13:
//         console.log(firnName + ' is a teenager.');
//         break;
//     case age < 30 && age >= 20:
//         console.log(firnName + ' is a young man.');
//         break;
//     default:
//         console.log(firnName + ' is a man.');
// }


/***************************
 * Truthy and Falsy values and equality operators
 * */
//
// // falsy values: undefined, null, 0, '', NaN
// // Truthy values: NOT falsy values (everything else)
//
// var height;
//
// height = 23;
//
// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('The variable has NOT been defined');
// }
//
// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }
//
// //it does type coercion so that 23 string and 23 number are same (better to use === as it is more strict and can cause less errors and bugs)


/**************************
 * CODING CHALLENGE 2
 * */

/*
John and Mike both play basketball in different teams. in the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score output
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws

GOOD LUCK :D
*/

// var scoresAverageJohn, scoresAverageMike, scoresAverageMary;
// scoresAverageJohn = (89 + 120 + 103) / 3;
// scoresAverageMike = (116 + 94 + 123) / 3;
// scoresAverageMary = (97 + 134 + 105) / 3;
//
// console.log('John\'s teams average is ' + scoresAverageJohn);
// console.log('Mark\'s teams average is ' + scoresAverageMike);
// console.log('Mary\'s teams average is ' + scoresAverageMary);
/**
 * My version
 */

// if (scoresAverageJohn === scoresAverageMike) {
//     console.log('The Teams tied on average highest score');
// } else if (scoresAverageMike > scoresAverageJohn) {
//     console.log('Mike\s Teams has the highest average')
// } else {
//     console.log('John\s Teams has the highest average')
// }

/*if (scoresAverageJohn === scoresAverageMike && scoresAverageMary === scoresAverageJohn && scoresAverageMike === scoresAverageMary) {
    console.log('The Teams tied on average highest score');
} else if (scoresAverageMike > scoresAverageJohn && scoresAverageMike > scoresAverageMary) {
    console.log('Mike\s Teams has the highest average')
} else if (scoresAverageJohn > scoresAverageMike && scoresAverageJohn > scoresAverageMary) {
    console.log('John\s Teams has the highest average')
} else {
    console.log('Mary\'s Teams has the highest average');
}

switch (true) {
    case scoresAverageJohn === scoresAverageMike && scoresAverageMary === scoresAverageJohn && scoresAverageMike === scoresAverageMary :
        console.log('The Teams tied on average highest score');
        break;
    case scoresAverageMike > scoresAverageJohn && scoresAverageMike  > scoresAverageMary:
        console.log('Mike\s Teams has the highest average');
        break;
    case scoresAverageJohn > scoresAverageMike && scoresAverageJohn > scoresAverageMary:
        console.log('John\s Teams has the highest average');
        break;
    default:
        console.log('Mary\'s Teams has the highest average');
}*/

/**
 *  Jonas solution
 */

/*if (scoresAverageJohn > scoresAverageMike){
    console.log('John\'s team wins with ' + scoresAverageJohn + ' points')
} else if (scoresAverageMike > scoresAverageJohn){
    console.log('Mikes\'s team wins with ' + scoresAverageMike + ' points')
} else {
    console.log('There is a draw')
}

if (scoresAverageJohn > scoresAverageMike && scoresAverageJohn > scoresAverageMary) {
    console.log('John\'s Team wins the game')
} else if (scoresAverageMike > scoresAverageJohn && scoresAverageMike > scoresAverageMary) {
    console.log('Mike\'s Team wins the game')
} else if (scoresAverageMary > scoresAverageMike && scoresAverageMary > scoresAverageJohn) {
    console.log('Mary\'s Team wins the game')
} else {
    console.log('There is a draw');
}*/


/*********************************
 *  Functions
 * */

// function calculateAge(birthYear) {
//     return 2018 - birthYear
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
//
//
// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');


/******************************
 * Function Statements and Expressions
 */

// Function Declaration
//     function whatDoYouDo(job, firstName){}

// Function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// };
//
// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('designer','Jane'));
// console.log(whatDoYouDo('retired','Mark'));


/****************************
 * Arrays
 * */

// Initialize new array
// var names = ['John','Mark','Jane'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// console.log(names.length);
//
// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
//
// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];
//
// // Adding to array
// john.push('blue'); // Last item
// john.unshift('Mr'); // First item
// console.log(john);
//
// // Removing from array
// john.pop(); //Last item
// john.shift(); // First item
// console.log(john);
//
// // Find if item is in array and its position
// console.log(john.indexOf(199));
//
// var isDesginer = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesginer);


/**********************************
 * CODING CHALLENGE 3
 * */

/*
John and his family went on holiday and went to 3 different restaurants. the bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function), He likes to tips 20% of the bill when the bill is less then $50, 15% when the bill is between $50 and $200, and 10% if the bill is more then $200.

in the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

(NOTE: to calculate 20% of a value, simple multiply if with 20/100 = 0.2)

GOOD LUCK :D
*/

// My version
// var bills = [124, 48, 268];
// function addingTip(bill){
//     if (bill < 50) {
//        return (bill * 0.2) + bill;
//     } else if (bill >= 50 && bill < 200) {
//         return (bill * 0.15) + bill;
//     } else {
//         return(bill * 0.10) + bill;
//     }
// }
//
// console.log([addingTip(bills[0])-bills[0], addingTip(bills[1])-bills[1], addingTip(bills[2])-bills[2]]);
// console.log([addingTip(bills[0]), addingTip(bills[1]), addingTip(bills[2])]);
//
// // Jonas version
// function tipCalculator(bill){
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
//
// console.log(tipCalculator(10));
//
// var bills = [124,48,268];
// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ];
// var finalValues = [
//     bills[0]+tips[0],
//     bills[1]+tips[1],
//     bills[2]+tips[2],
// ];
//
// console.log(tips);
// console.log(finalValues);


/**************************************
 * Objects and properties
 * */

// // Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
//
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
//
// // Mutate objects
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
//
// console.log(jane);


/*************************************
 * Object Methods
 * */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };
//
// john.calcAge();
//
// console.log(john);


/**************************************
 * CODING CHALLENGE 4
 * */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Lets now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method
3. In the end, log to the console who has the Highest BMI, together wit the full name and the respective BMI. Don't forget they might have the same BMI.

Remember BMI = mass / height^2 = mass/(height*height). (mass in kg and height in meter).

GOOD LUCK :D
*/

// // My version
// var john = {
//     firstName: 'John',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//     }
// };
//
// var mark = {
//     firstName: 'Mark',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height)
//     }
// };
//
// john.calcBMI();
// mark.calcBMI();
// console.log(john);
// console.log(mark);
//
// function higherBMI () {
//     if (mark.bmi > john.bmi){
//         return mark.firstName + ' Has the higher BMI of ' + mark.bmi;
//     } else if (john.bmi > mark.bmi){
//         return john.firstName + ' Has the higher BMI of ' + john.bmi;
//     } else {
//         return 'The BMI are the same';
//     }
// }
// console.log(higherBMI());

// Jonas version
// var john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has the higher BMI of ' + mark.bmi)
// } else {
//     console.log('They have the same BMi');
// }


/*******************************************
 * Loops and iterations
 * */

// For loop
// for (var i=1; i<=20; i+= 2){
//     //console.log(i);
// }
//
// // i = 0, 0 < 10 true, log i to console, i++
// // i = 1, 1 < 10 true, log i to console, i++
// //...
// // i = 10, 10 < 10 false, exit the loop!
//
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }
//
// // While loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }


// Continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
// // for (var i = 0; i < john.length; i++) {
// //     if (typeof john[i] !== 'string') continue;
// //     console.log(john[i]);
// // }
// //
// // for (var i = 0; i < john.length; i++) {
// //     if (typeof john[i] !== 'string') break;
// //     console.log(john[i]);
// // }
//
// // Looping backwards
// for (var i = john.length-1; i >= 0 ;i--){
//     console.log(john[i]);
// }


/*********************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went ot 5 different restaurants. the bills were $124, $48, $268, $180, $42.
John likes to tip 20% of the bill when the bill is less then $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill+tip). HINT: start with two empty arrays [] as properties and fill them up in the loop

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes ot tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same  functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (thats how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK :D
*/

// var john = {
//     bills: [124, 48, 268, 180, 42],
//     tips: [],
//     totalPay: [],
//     calcTips: function () {
//         var percentage;
//         for (var i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 50) {
//                 percentage = 0.2
//             } else if (this.bills[i] > 50 && this.bills[i] <= 200) {
//                 percentage = 0.15
//             } else {
//                 percentage = 0.1
//             }
//             this.tips[i] = percentage * this.bills[i];
//         }
//
//     },
//     addTipsTo: function () {
//         for (var i = 0; i < this.bills.length; i++) {
//             this.totalPay[i]= this.tips[i] + this.bills[i];
//         }
//     }
// };
// john.calcTips();
// john.addTipsTo();
// console.log(john);
// console.log(john.bills);
// console.log(john.tips);
// console.log(john.totalPay);
// console.log(john.tips[1]);
// var mark = {
//     bills: [77,375,110,45],
//     tips: [],
//     totalPay: [],
//     calcTips: function () {
//         var percentage;
//         for (var i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 100) {
//                 percentage = 0.2
//             } else if (this.bills[i] > 100 && this.bills[i] <= 300) {
//                 percentage = 0.1
//             } else {
//                 percentage = 0.25
//             }
//             this.tips[i] = percentage * this.bills[i];
//         }
//
//     },
//     addTipsTo: function () {
//         for (var i = 0; i < this.bills.length; i++) {
//             this.totalPay[i]= this.tips[i] + this.bills[i];
//         }
//     }
// };
// mark.calcTips();
// mark.addTipsTo();
// console.log(mark);
// console.log(mark.bills);
// console.log(mark.tips);
// console.log(mark.totalPay);
//
// function averageTip() {
//     for (var i = 0; i < john.tips.length; i++){
//         var added = john.tips[i]++;
//     }
//     return added;
// }
//
// console.log(averageTip());


// Jonas solution
var john = {
    fullName: 'John Smith',
    bills: [124,48,268,180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){
            // Deterermine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50){
                percentage = .2;
            } else if (bill >= 50 && bill < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill*percentage);
        }
    }
};

var mark = {
    fullName: 'Mark Miller',
    bills: [77,375,110,45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){
            // Deterermine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100){
                percentage = .2;
            } else if (bill >= 100 && bill < 300){
                percentage = .1;
            } else {
                percentage = .25;
            }
            // Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill*percentage);
        }
    }
};

function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
       sum = sum + tips[i];
    }
    return sum/tips.length;
}

// [2,6,4] -> 0 / 2 / 8 / 12
//do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john,mark);

if (john.average > mark.average){
    console.log('Johns family pays more average tips')
} else if (mark.average > john.average) {
    console.log('Marks family pays more average tips')
} else {
    console.log('They pay equal amount in tips')
}
