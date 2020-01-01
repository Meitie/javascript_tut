///////////////////////////////////////
// Lecture: Hoisting

//functionns
// // Function decleration
// calculateAge(1985);
// function calculateAge(year) {
//     console.log(2016-year);
// }
// calculateAge(1999);
//
//
// // Function expression
// retirement(1945);
// var retirement = function (year) {
//     console.log(65 - (2016-year))
// };
// retirement(1990);


// variables
// console.log(age)
// var age = 23;
//
//
// function foo() {
//     console.log(age)
//     var age = 65;
//     console.log(age)
// }
// foo()
// console.log(age)



///////////////////////////////////////
// Lecture: Scoping


// First scoping example
//
// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }



// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }
//
// function third() {
//     var d = 'John';
//     console.log(a+d);
// }



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calculateAge(1990);

function calculateAge(year){
    console.log(2016-year);
    //console.log(this);
}

var john = {
    fullName: 'John',
    yearOfBirth: 1963,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth)

        // function innerFunctioN(){
        //     console.log(this);
        // }
        // innerFunctioN();
    }
};

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: '1984'
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
