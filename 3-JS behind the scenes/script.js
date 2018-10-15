Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @TonghuiJiang Sign out
130
517 707 jonasschmedtmann/complete-javascript-course
 Code  Issues 0  Pull requests 3  Projects 0  Wiki  Insights
complete-javascript-course/3-how-JS-works/final/script.js
f387a37  on 14 Jun
@jonasschmedtmann jonasschmedtmann Initial commit rocket
     
Executable File  114 lines (83 sloc)  1.57 KB
/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}
// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
// variables
console.log(age);
var age = 23;
function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/

