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
  caseSensitive
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let variableX = 7

if (variableX === 1) {
  console.log("X is one")
} else {
  console.log("X is not one")
}
if (variableX === 2) {
  console.log("X is two")
} else {
  console.log("X is not two")
}
if (variableX === 3) {
  console.log("X is three")
} else {
  console.log("X is not three")
}
if (variableX === 4) {
  console.log("X is four")
} else {
  console.log("X is not four")
}
if (variableX === 5) {
  console.log("X is five")
} else {
  console.log("X is not five")
}
if (variableX === 6) {
  console.log("X is six")
} else {
  console.log("X is not six")
}
if (variableX === 7) {
  console.log("X is seven")
} else {
  console.log("X is not seven")
}
if (variableX === 8) {
  console.log("X is eight")
} else {
  console.log("X is not eight")
}
if (variableX === 9) {
  console.log("X is nine")
} else {
  console.log("X is not nine")
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let myAge = 30
let canDrive = myAge >= 18 ? "drive." : " not drive"

console.log("you can", canDrive)
