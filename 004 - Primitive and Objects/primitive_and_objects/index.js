//   <<<<<<<<<< 004 - Primitive and Objects >>>>>>>>>>

// we will study about the data types in the javascript

// total  8  data types
// 7 of which are primitive
// 1 is non-primitive


// The primitive data types
// nn bb ss u
// 1] Null
// 2] Number
// 3] string
// 4] symbol
// 5] boolean
// 7] big Int

// The non-primitive
// Objects


// Number >>>>>>>>>>
let  number = 45 + 5
let numbf  =number+65
console.log(numbf)

let plusInfinity = Infinity  // Infinity
let minusInfinity = -Infinity  // -Infinity
let naN = "abc"-5 // Not a Number
let maxvalue = Number.MAX_VALUE  // 1.79E+308 or 2^1024 Values larger than MAX_VALUE are represented as Infinity.
let minvalue = Number.MIN_VALUE  // 5e-324 Values smaller than MIN_VALUE are converted to 0.
// The MOst negative number is negative number is negative of Number.MAX_VALUE
// console.log(plusInfinity, minusInfinity, naN, maxvalue, minvalue)

// Null >>>>>>>>>>
// represents intentional absence of value
let varNull = null

// String
let varString = " How are you "  // double quote
let varString2 = 'Hello again'  // single quote
let varString3 = `How Are You` // backtick
console.log(varString, varString2, varString3)

// Symbol
let varSymbol =Symbol("I am a nice symbol")
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(varSymbol.description)
console.log(value1 === value2); // false
// Though value1 and value2 both contain the same description, they are different.

// Boolean
let varBoolean = true

// BigInt
// Number represents variables whose value is either an integer or float. It can have
// numbers in range between (2^53 - 1) to -(2^53 - 1)
// if you need to use a larger number than that, you can use the BigInt data type
let bigInt = 45n
let newBIgInt = BigInt("4564")

// Undefined
// It is recommended not to explicitly assign undefined to a variable.
// Usually, null is used to assign 'unknown' or 'empty' value to a variable.
let varunde


console.log(number, varNull, varString, varSymbol, varBoolean, bigInt, varunde)
console.log(typeof varNull)

//-----------------------------------------------------------------------------------------
// All of them except Object have immutable values, i.e. the values which cannot be changed.
// https://techstacker.com/what-does-it-mean-that-primitive-values-are-immutuable-in-javascript/
//-----------------------------------------------------------------------------------------



// the  Non-Primitive
// Objects

// ---------------------------------------------------------------------------------
//You can create an object in three different ways:

// Using object literal -> the normal way
const person = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
}


// By creating instance of Object directly -> using he [new] key word
const person2 = new Object ( {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
})

// By using constructor function

function Person3() {
    this.name = 'John',
        this.age = 20,
        this.hobbies = ['reading', 'games', 'coding'],
        this.greet = function() {
            console.log('Hello everyone.');
        },
        this.score = {
            maths: 90,
            science: 80
        }

}

const person8 = new Person3()
// ---------------------------------------------------------------------------------

// An object is a complex data type that allows us to store collections of data.
// In the form of key value pair.

//------------------------------------------------------------------
// It is a common practice to declare objects with the const keyword.
// JavaScript objects are containers for named values called properties.

// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.
// Because of this you can NOT:

// * Reassign a constant value
// * Reassign a constant array
// * Reassign a constant object


// But you CAN:
// Change the elements of constant array
// Change the properties of constant object
// Add properties in the constant object

//------------------------------------------------------------------
// The name:values pairs in JavaScript objects are called properties:
const student = {
    firstName: 'ram',
    lastName: null,
    class: 10,
    class2 : 45,
    123_8 : 45
}
console.log("<<<<<testing>>>>> ")
//=============================================================================================================//
// Use the Dot Notation. But if you’re dealing with invalid identifier or variables, use the Bracket notation. //
//=============================================================================================================//
// access using the Dot
console.log(student.lastName)
// access invalid identifier - > the use  the Bracket
console.log(student["123_8"])
// access the object using te variable
const Niraj = "firstName"
console.log(student[Niraj])

// In JavaScript, objects can also contain functions. For example,
// object containing method
const personMethod = {
    name: 'John',
    greet: function() { console.log('hello'); }
}
// A method is a function stored as a property.
console.log("<<<<<testing>>>>> ")
// You can create properties using the dot and bracket operator
student.subject = "science"
student['Dream']= "Pilot"
// You can access the object properties using the dot and bracket operator
console.log(student.subject)
console.log(student['subject'])
// you can print the whole object using the object name
console.log(student)

// using delete keyword you can delete properties
delete student.class2
console.log(student)

//----------------------------------------------------------------------------------------------------//
// As a general rule, always declare a variable with const unless you know that the value will change //
//----------------------------------------------------------------------------------------------------//
