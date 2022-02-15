// Comparisons
// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false


// Statements
const year = 2022
if (year >= 2020) {
    console.log('Third decade of 21st century has begun!')
} else {
    console.log('You will not get this message)))')
}

let age = 17
let isAdult = (age >= 18) ? 'Yes' : 'No'
console.log(isAdult)
//
// let value = prompt('What is the "official" name of JavaScript?', '');
//
// if (value === 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You don't know? ECMAScript!");
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// logical operators

// tasks
// alert(null || 2 || undefined) -> 2
// alert( alert(1) || 2 || alert(3) ) -> 1 -> 2
// alert( 1 && null && 2 ) -> null
// alert( alert(1) && alert(2) ) -> 1 -> undefined
// alert( null || 2 && 3 || 4 ) -> 3
if (age >= 14 && age <= 90) {
    console.log('Condition satisfied')
}

if (!(age >= 14 && age <= 90)) {
    console.log('Condition satisfied')
}

if (age < 14 || age > 90) {
    console.log('Condition satisfied')
}

let userName = prompt("Enter username: ")

if (userName === 'Admin') {
    let password = prompt('Enter password: ')
    if (password === 'TheMaster') {
        alert('Welcome')
    } else if (password === '' || password === null) {
        alert('Cancelled')
    } else {
        alert('Wrong password')
    }
} else if (userName === '' || userName === null) {
    alert("Cancelled")
} else {
    alert('I don\'t know you')
}