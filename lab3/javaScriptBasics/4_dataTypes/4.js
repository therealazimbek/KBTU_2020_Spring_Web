// JSON
// .stringify to JSON, .parse from JSON
let user = {
    name: "John",
    age: 30,
    toString() {
        return `{name: "${this.name}", age: ${this.age}}`
    }
}
console.log(user)

let student = {
    name: 'Azimbek',
    age: 20,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}
let json = JSON.stringify(student)
console.log(json)

let numbers = "[0, 1, 2, 3]"
numbers = JSON.parse(numbers)
console.log(numbers)

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'
let meetup = JSON.parse(str)
console.log(meetup)

let user2 = {
    name: "John Smith",
    age: 35
}
let user3 = JSON.parse(JSON.stringify(user2))
console.log(user3)