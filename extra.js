/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\n\n\nEXERCISE 1")
let isMale = false
let gender = isMale === true ? "male" : "female"
console.log("your gender is " + gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 2")

let j = 6
let k = 5
let condition = k - j === 12 || j + k === 12 || 2 === 8 || k === 8
console.log("The condition is :" + condition)

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 3")

let myDog = "Billy"
console.log("My dog is named " + myDog + ".")

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 4")
let a = 7
let b = 5
let c = 8
if (a > b && a > c && b > c) {
  console.log("The order is: a,b,c")
} else if (b > a && b > c && a > c) {
  console.log("The order is: b,a,c")
} else if (c > a && c > b && a > b) {
  console.log("The order is: c,a,b")
} else if (a > b && a > c && b < c) {
  console.log("The order is: a,c,b")
} else if (b > a && b > c && a < c) {
  console.log("The order is: b,c,a")
} else if (c > a && c > b && a < b) {
  console.log("The order is: c,b,a")
} else {
  console.log("Please choose different positive integers")
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 5")
let e = 11
let f = 15
let average = (e + f) / 2
console.log("The average is: " + average)

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 6")

let stringOne = "Happiness"
let stringTwo = "Grace"
if (stringOne.length > stringTwo.length) {
  console.log("The longest String is: " + stringOne)
} else if (stringOne.length < stringTwo.length) {
  console.log("The longest String is: " + stringTwo)
} else if ((stringOne.length = stringTwo.length)) {
  console.log("Both Strings' length is equal!")
} else {
  console.log("Please input two Strings!")
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 7")

let g = 59
let isInteger = number.isInteger(g)
console.log("g is Integer is: " + isInteger)

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 8")
// Our number
let o = 50
let percentToget = (20 * 100) / o

//Calculate the percent.
let percent = (percentToget / 100) * 20
console.log("20% of " + o + " is: " + percentToget)

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 9")

let n = "myNumber"
if (Number.isInteger(n / 2)) {
  console.log("The number is even.")
} else if (Number.isInteger(n) === false) {
  console.log("Please insert a number")
} else {
  console.log("The number is odd.")
}
