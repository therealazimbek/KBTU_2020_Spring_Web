// Data types
// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined
console.log('--- Integers ---')
let str = 'hi'

console.log(str.toUpperCase())
console.log((1.22).toFixed())

// Numbers
let billion = 1_000_000_000
console.log(billion)
console.log(1e9)

console.log(0xff) // hex
console.log(0b1111111) // binary
console.log(0o127) // octal

console.log((0b10101011).toString(10)) // toString(base)

// Rounding
console.log(Math.floor(3.7)) // to smaller
console.log(Math.ceil(3.1)) // to next int
console.log(Math.round(3.4)) // becomes 3
console.log(Math.round(3.5)) // becomes 4
console.log(Math.trunc(4.1)) // removes float, becomes 4
console.log(0.1 + 0.2) // not 0.3
console.log((0.1 + 0.2).toFixed(1)) // 0.3

console.log(parseInt('123dd'))
console.log(+'123')

console.log(Math.random())

function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}
console.log(randomInteger(1, 4))
console.log('------------')



// Strings
console.log('--- Strings ---')

let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

console.log(single)
console.log(double)
console.log(backticks)

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);
console.log("\u{1F60D}")

let name = 'Azimbek'
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.startsWith('Az'))
console.log(name.endsWith('es'))
console.log(name.indexOf('i'))
console.log(name.split(''))

console.log('--------')

// Arrays
console.log('--- Arrays ---')

let fruits = ["Apple", "Orange", "Plum"]
console.log(fruits)
console.log(fruits.length)

console.log(fruits.push("Banana")) // add last fast
console.log(fruits.pop()) // get last fast
console.log(fruits.shift()) // get first slow
console.log(fruits.unshift("Mango")) // add to first slow

for (let fruit of fruits) console.log(fruit)

// splice
let arr = ["I", "study", "JavaScript"]
arr.splice(1, 1) // from index 1 remove 1 element

// slice
let newArr = arr.slice(0)

// foreach
newArr.forEach(console.log)

// indexOf
console.log(arr.indexOf('I'))

// map - transform
let lengths = ["Bilbo", "Gandalf", "Gulnaz"].map(item => item.length)
console.log(lengths)

// reverse
console.log(arr.reverse())

// reduce
let arr2 = [1, 2, 3, 4, 5]
let result = arr2.reduce((sum, current) => sum + current, 0)
console.log(result)

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('')
}