// Iterables
let range = {
    from: 1,
    to: 5
}
// 1. call to for of initially calls this
range[Symbol.iterator] = function() {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}

for (let num of range) {
    console.log(num)
}

console.log('--- map and sets ---')

let map = new Map()

map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')

console.log(map.get(1))
console.log(map.get('1'))

console.log(map.size)

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
])


for (let vegetable of recipeMap.keys()) {
    console.log(vegetable)
}

for (let amount of recipeMap.values()) {
    console.log(amount)
}

for (let entry of recipeMap) {
    console.log(entry)
}


let set = new Set();

let john = { name: "John" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

set.add(john)
set.add(pete)
set.add(mary)
set.add(john)
set.add(mary)


console.log( set.size )

for (let user of set) {
    console.log(user.name)
}

let set2 = new Set(["oranges", "apples", "bananas"])

for (let value of set2) console.log(value)

set2.forEach((value, valueAgain, set) => {
    console.log(value)
})

function unique(arr) {
    return Array.from(new Set(arr))
}

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('')
        map.set(sorted, word)
    }

    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
console.log(aclean(arr))

let map2 = new Map()
map2.set("name", "John")
let keys = Array.from(map2.keys())
keys.push("more")
console.log(keys)