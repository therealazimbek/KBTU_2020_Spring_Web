'use strict' // to fully enable modern javascript

// Functions
function sayHi() {
    console.log('Hello everybody!')
}

function checkAge(age) {
    if (age > 18) {
        return true
    }
    return confirm('Did parents allow you?')
}

function checkAge2(age) {
    return (age > 18) ? true : confirm('Did parents allow you?')
}

function checkAge3(age) {
    return (age > 18) || confirm('Did parents allow you?')
}

function min(a, b) {
    return (a >= b) ? b : a
}

function pow(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result
}

// Function expressions

let sum = function (a, b) {
    return a + b
}
console.log(sum(2, 3))

// Arrow functions
let sum2 = (a, b) => a + b
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);

