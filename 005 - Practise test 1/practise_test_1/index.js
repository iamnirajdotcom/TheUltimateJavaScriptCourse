// <<<<<<<<<< 004 - Practise test 1 >>>>>>>>>>

// This is a practise test of five question

// 1] Create a variable of type String and try to add number to it.
let newString = "My Home is INDIA"
newString = newString+45
console.log(newString)
// Using the [+] operator leads to concatenation of the string and the integer

// 2] use the typeOf operator to find the datatype of the String in the last question
console.log(typeof newString)
// the type of operator is used to check the type of the value inside the variable

// 3] create a const object in javascript, can you change it to hold the number later
const firstObject = {
    name : "Niraj",
    class : 5,
    aim : "SDE - 1"
}
// firstObject = 46 // Assignment to constant variable.
// because the const reference value cannot be changed so reassigning is not possible
// But you can add key value pair to the const object

// 4] Try to add new key value pair to the firstObject
firstObject['phoneNo'] = 965894
console.log(firstObject)

// 5]  create an object using the 5 key value pair
const dict = {
    afraid : "Scared of something ",
    aptitude : "the logical Ability",
    action : " Action jaction" ,
    motion : "In the state of movement",
    newton : "papa of relativity"
}
