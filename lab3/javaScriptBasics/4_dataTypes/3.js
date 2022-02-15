// weakMap and weakSet

let visitedSet = new WeakSet()

let john = { name: "John" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

visitedSet.add(john)
visitedSet.add(pete)
visitedSet.add(john)

console.log(visitedSet.has(john))
console.log(visitedSet.has(mary))
john = null

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]
let readMessages = new WeakSet()
readMessages.add(messages[0])
readMessages.add(messages[1])
readMessages.add(messages[0])
console.log("Read message 0: " + readMessages.has(messages[0]))
messages.shift()


// Object.keys, values, entries

let user = {
    name: "John",
    age: 30
}

for (let value of Object.values(user)) {
    console.log(value)
}

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
console.log(sumSalaries(salaries))

function count(obj) {
    return Object.keys(obj).length
}

// destructing
// Destructuring assignment allows for instantly mapping an object or array onto many variables.
//     The full object syntax:
//     let {prop : varName = default, ...rest} = object

let user3 = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user3

function topSalary(salaries) {
    let maxSalary = 0
    let maxName = null

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary
            maxName = name
        }
    }
    return maxName
}

// date time
let now = new Date()
console.log(now)
let Jan01_1970 = new Date(0)
console.log(Jan01_1970)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0))// 1 Jan 2011, 00:00:00

let d1 = new Date(2012, 1, 20, 3, 12)
let d2 = new Date("February 20, 2012 03:12:00")
console.log(d1)
console.log(d2)

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return days[date.getDay()]
}

console.log(getWeekDay(d2))

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

console.log(getLastDayOfMonth(2023, 1))

function getSecondsToday() {
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let diff = now - today
    return Math.round(diff / 1000)
}

console.log(getSecondsToday())

function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
    let diff = tomorrow - now
    return Math.round(diff / 1000)
}

console.log(getSecondsToTomorrow())