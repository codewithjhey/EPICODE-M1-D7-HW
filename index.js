/* Datatypes, Operators and Conditionals Exercises */

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 1. String - This is a sequence of one or more character that may consist of letter,number or symbols. they can be inside a single, double quotes or backticks.
2. Boolean - is a data type which has one of only two possible values: true or false also called flags.
3. Undefined - this is simply an undeclared variable. that means a variable that has not been assigned a value 'value not defined yet'.
4. Null - "an empty value" used when you wish to point to the absence of a value.
5. Number - this data type accomodates integers, decimals (floating)
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variable can be called named storage for data or container that carries or store data value that can be changed laer on ( a label)*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20
console.log(sum)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let victor
let x
// what is the content of x now? undefined
x = 12
console.log("value of x just after assignment:", x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"
console.log("this variable has been assigned a string:", "John Doe")

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let difference = 12 - 12
console.log(difference)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"

console.log("john" === "John") /* Checking equality to be false*/
if (name1 === name2) {
  console.log("\nThis becomes true, They are both lowercase")
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let stefano = 8

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let workHours = 47
let bigBonusAdded = 10
let smallBonusAdded = 5

let timeSheet

//if workHours is more than 50, you get Big Bonus added
// if workHours is more than 45, you get small Bonus Added
// if workHors is less than 40, no bonus added

timeSheet = workHours >= 45 ? workHours : workHours + smallBonusAdded
console.log("\nYour timesheet is " + workHours + ". You will get a total of?")
