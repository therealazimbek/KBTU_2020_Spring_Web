// This is a comment
// alert('Hello JavaScript')

// Variables: let mutable, const immutable
// let name = 'Azimbek'
// let age = 20

const pi = 3.14
const RED = '#F00'

// variable section tasks
let admin
let name = 'John'
admin = name
console.log(admin);
let ourPlanetName = 'Earth'
let currentUserName = 'Bob'

// numbers
let intNum = 1
let floatNum = 1.2
let inf = Infinity
console.log(2 / 0); // inf
console.log('z'/ 2); // NaN

// bigint
const bigInt = 123456789876543212345678987654321n

// strings
console.log(`Hello, ${name}`); // kinda formats

// boolean
const isStudent = true
console.log(isStudent);

// null
let wierd = null
console.log(wierd);

// undefined - value is not assigned
let age
console.log(age);

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

// Interaction
// alert() - modal window
// result = prompt("How old are you?") - input filed
// confirm(question) - modal window with a question: ok and cancel


// Type Conversions
let value = false
value = String(value)
console.log(typeof value)

let num = '123'
num = Number(num) 
console.log(num);
console.log(Number(' 123 '))
console.log(Number('123z'))
console.log(Number(true))
console.log(Number(false))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean('ji'))
console.log(Boolean(''))

// simple math
let a = 41
let b = 9
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

console.log('1' + 2)
console.log(2 + 2 + '1')
console.log('1' + 2 + 2)

let apples = '3'
let bananas = '4'
console.log(+apples + +bananas)


// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)