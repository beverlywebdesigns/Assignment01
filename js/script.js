// Step 1
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

//Step 2
// Example of a numeric literal expression
// 15   

// Example of a string literal expression
// 'JavaScript'

// Example of a Boolean literal expression
// false
// 

// Example of a null literal literal expression
// null

//Step 3
// Two examples of complex expressions
// let X = 3 + 6
// let y = x * 3

// Two examples of variable expressions
// let fname = 'Beverly'
// let lname = 'Jordan'

//Step 4
//Declare (but do not assign) 9 variables for the following idenfiers:
/* 
let firstName
let lastName
let strAddress
let strCity
let strState
let strZipCode
let strYourAge
let strReferralSource
let strMayWeContactYou
*/

// STEP 5
// 3 ways for declaring and assigning values
/*
let strCity = 'La Jolla'
let strState = 'California'
let strZipCode = '92037'

let strCity, strState, strZipCode
strCity = 'La Jolla'
strState = 'California'
strZipCode = '92037'

let strCity = 'La Jolla', strState = 'California', strZipCode = '92037'

*/
// STEP 6
// Create a variable. Add a number and a string and display 
// the coerced result in the browser’s console window.

/* 
let totalPants= 10 + ' pairs of jeans'
console.log(totalPants)
10 pairs of jeans
*/

// STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.
/*
let testTotal= false + ' results are not accurate'
let testSummary = 10 + false
console.log(testTotal)
console.log(testSummary)
false results are not accurate
10
*/

// STEP 8. 
// Is the following string literal valid?   NO
// If not, how would you fix it?// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, 
// and I'm not sure about the former."' console.log(someString)
/*
let someString = function() {
    console.log('Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"') 
}
someString()
 Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.
 */


// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
/*
let paycheck = null
let bankAccount;
console.log(paycheck)
console.log(bankAccount) 
*/


// STEP 10
// Use the unary typeof operator on various literals to return 
// the following types within the console window: 
// string, number,Boolean, object, and undefined.
 /*
 let color = 'Blue';
let weight = 120;
let x = true;
const director = {name: "Rose" }
let y;
console.log(typeof strColor)
console.log(typeof intSize)
console.log(typeof x)
console.log(typeof director)
console.log(typeof  y)

undefined
undefined
boolean
object
undefined
  
 */

//STEP 11. 
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Hello Zak Ruvalcaba, welcome to the JavaScript class! // Subsitute my name for your name. 
// Although not necessary in practie, I want you to use 2 concatenation operators to construct
//this string of text. One a#er the text “Hello” and a second one after your name and before the comma.
/*
alert('Hello '  + 'Beverly '  + 'Jordan' + ', welcome to the JavaScript class!')

// STEP 12 
// Declare a variable called name and set it equal to your name.
//  Subsitute your name in the previous alert string with the variable instead.
/*
let name = 'Beverly Jordan'
alert('Hello ' + name +  ', welcome to the JavaScript class!')
*/

// STEP 13
//  Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but 
// using the variables as opposed to hard coded text.
/* 
let name = 'Beverly Jordan'
let course = 'Javascript'
alert('Hello ' + name +  ', welcome to the ' + course + ' class!')
*/

// STEP 14
//  Rework the above string // so that a line break is added right before the word “Welcome”. 
//  Your alert box should display as follows: Hello Zak Ruvalcaba. Welcome to the JavaScript class!
/*
let name = 'Zak Rulvacaba'
let course = 'Javascript'
alert('Hello ' + name +  '. \nWelcome to the ' + course + ' class!')
*/

// STEP 15
//  Replace the hardcoded string of your name with a prompt that asks the user 
// for their name. The prompt’s response will now be captured in the name variable.
/*
let name = prompt('Type in your name')
let course = 'Javascript'
alert('Hello ' + name +  '. \nWelcome to the ' + course + ' class!')
*/

// STEP 16
//  Replace the hardcoded string of the class you are taking with a prompt 
// that asks the user for the class they are taking. 
// The prompt’s response will now be captured in the course variable.
/*
let name = 'Beverly Jordan'
let course = prompt('Type in the name of course you are taking')
alert('Hello ' + name +  '. \nWelcome to the ' + course + ' class!')
*/


// STEP 17
// Declare a variable called x and assign it a value of 10. 
// Declare a variable called y and assign it a value of 20.
// Display the // sum of those two numbers in the console window.
/*
let x = 10
let y = 20
console.log(x+y)
*/

// STEP 18
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
/* 
let x = 20
x+= 20
console.log(x)
40
*/


// STEP 19
// Declare a variable called x and assign it a value of 20. Muliply and assign 5 to that variable and 
// display the result in the console window. The result should be 100.
/* 
let x = 20
x*= 5
console.log(x)
100
*/


// STEP 20
//  Declare a variable called x and assign it a value that equals 
// the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
/*
let x = 20 / 3
x=1
console.log(x+1)
2
*/


//STEP 21 
// Using a set of Comparison and Logical operators, write an application that evaluates
//  to true and displays the result within the console window.
/*
let milesRan = prompt('What is the number of miles ran between 1 and 26')
if (milesRan <= 26) 
       alert('You are in good shape')
*/


//STEP 22
//  Using a set of Comparison and Logical operators, write an 
// application that evaluates to false and displays the result within the
// console window. The application cannot use the same operators used in 
// the previous application. 
/*
let milesRan = 25
if (milesRan == 5) 
       console.log('You are out of shape')
*/