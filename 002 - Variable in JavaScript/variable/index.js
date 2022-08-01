//  <<<<<<<<<<  002 - Variable in JavaScript  >>>>>>>>>>

/*
    handwritten notes -> https://drive.google.com/drive/folders/1Tz1-Iq9TtHUSgIGeohxK3nxIyFE7ktYI

    Before we start the lecture let's get familiar with the naming convention of javascript files.
    1] all letter should be lower-case.
    2] may include underscore(_) or dashes(-) no other punctuation.
    3] can start with number also.
    
    What is variable ?
    -> A variable is a container that stores a value.
       This is very similar to the containers used to store rice, water and oats ( Analogy )
       The value of a javascript variable can be changed during the exceution of a program.
       
    How to declare variable?
    -> Three way to define a variable 
       var 
       let
       const
       
    Some points to keep in mind when you write javaScript code
    -> Always declare JavaScript variables with var,let, or const.
    -> The var keyword is used in all JavaScript code from 1995 to 2015.
    -> The let and const keywords were added to JavaScript in 2015 (i.e. ES6 ).
    -> If you want your code to run in older browser, you must use var.
    -> in modern javascript programming people don't use var they mostly use let and const.
    
    
    Rules for naming the variable (look in to the notes)
    -> 1] letters, digits(number), underscore and $ sign is allowed
    -> 2] must begin with a $(dollar), _(underscore) or a letter.
    -> 3] javascript reserved words cannot be used as a variable name.
    -> 4] Noble, noble and NOBLE all the three values are different variable (JavaScript is case sensitive)
    

 */

// begin with letter
let a = 45
// begin with underscore
let _num = 45
// begin with Dollar ($)
let $num2 = 26
// Start with capital letter
let Num = 96
let num = 45

// num and Num both are different variable  as javascript is case sensitive.
console.log("Num "+ Num)
console.log("num "+ num)

console.log(a,_num,$num2,Num)

// let 5first_name = "noble"  // throw error because variable name starting with number is not allowed.


// In the next lecture we will look into different ways to declare variable using
//  let || var
// We will also learn about the use of the
//  const
// for declaring the constants


