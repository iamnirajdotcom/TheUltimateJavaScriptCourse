// <<<<<<<<<<  003 - const, let, var in JavaScript  >>>>>>>>>>

// We will learn about the [ let || var || const ]

// 1] var is globally scoped or functionally scoped while let and const are block scoped
// 2] var can be updated and redefined within it's scope
// 3] let can be updated but can not be redeclared
// 4] const can neither be updated and nor can be redeclared
// 5] The var, let and const all hoisted to the top of their scope.
//    But while var variable are initialized with undefined whereas,
//    let and const variable are not initialized
// 6] const must be initialized during declaration unlike let and var

// note :-> always try to use let and const
//          don't use var (THUMB RULE)


//       !!!!!!!!!!!!!!! TO USE CODE UNCOMMENT  !!!!!!!!!!!!!!!!!!!


// 1] var is globally scoped or functionally scoped while let and const are block scoped

// -------------------------------------CODE-------------------------------------------

// var firstNum = 45;
// {
//     let secondNum = 78
//     const thirdNum = 45
//     console.log(firstNum)
// }
//
// console.log(firstNum)  //  45
// // console.log(secondNum)  //  ReferenceError: secondNum is not defined
// // console.log(thirdNum )  //  ReferenceError: thirdNum is not defined

// -------------------------------------CODE-------------------------------------------


// 2] var can be updated and redefined within it's scope

// -------------------------------------CODE-------------------------------------------

// var firstNum = 89
// console.log(firstNum)  //89
//
// firstNum = 45 // update the value of the firstNum
// console.log(firstNum)  //45
//
// var firstNum = 78 // can be redefined  again in the scope
// console.log(firstNum) //76

// -------------------------------------CODE-------------------------------------------


// 3] let can be updated but can not be redeclared

// -------------------------------------CODE-------------------------------------------

// let firstNum = 45;
// console.log(firstNum)  // 45
//
// firstNum = 55 // update the value of the firstNum
// console.log(firstNum) // 55
//
// let firstNum = 100 // when you try to redefine let variable error will come
// // SyntaxError: Identifier 'firstNum' has already been declared

// -------------------------------------CODE-------------------------------------------


// 4] const can neither be updated and nor can be redeclared

// -------------------------------------CODE-------------------------------------------

const firstNum = 45
console.log(firstNum) //45

firstNum = 56 // when you try to update value error will come
// TypeError: Assignment to constant variable.

const firstNum = 89 // when you redefine it error will come
//TypeError: Assignment to constant variable.


// -------------------------------------CODE-------------------------------------------


// 5] The var, let and const all hoisted to the top of their scope.
//    But while var variable are initialized with undefined whereas,
//    let and const variable are not initialized

    //  What is hoisting ?
// read from the link-> https://www.programiz.com/javascript/hoisting#:~:text=Hoisting%20in%20JavaScript%20is%20a%20behavior%20in%20which,no%20value%2C%20undefined%20value%20is%20assigned%20to%20it.





