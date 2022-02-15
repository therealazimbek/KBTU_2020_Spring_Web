// nullish ??

// || returns the first truthy value.
// ?? returns the first defined value.
let user = "John";
console.log(user ?? "Anonymous") // John (user defined)

// loops
// while – The condition is checked before each iteration.
// do while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.
console.log('While and for loop')
let i = 3;
while (i) {
    console.log(i--);
}
console.log('---------')

i = 0;
while (++i < 5) console.log(i)
console.log('---------')

i = 0;
while (i++ < 5) console.log(i)
console.log('---------')

for (let n = 1; n <= 10; n++) {
    if (n%2 === 0) console.log(n)
}
console.log('---------')

i = 0
while (i < 3) console.log(i++)
console.log('---------')

// while (parseInt(prompt('Enter number greater than 100: ')) < 100) {
//     alert('Try again!')
// }

let n = 10
for (i = 2; i <= n; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i%j === 0) isPrime = false
    }
    if (isPrime) console.log(i)
}
console.log('---------')
console.log('Switch statement')

let browser = 'Chrome'
switch (browser) {
    case 'Edge':
        console.log( "You've got the Edge!" )
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log( 'Okay we support these browsers too' )
        break

    default:
        console.log( 'We hope that this page looks ok!' )
}
if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    console.log( 'Okay we support these browsers too' );
} else {
    console.log( 'We hope that this page looks ok!' );
}

let a = +prompt('a?','')
switch (a) {
    case 0:
        console.log(0)
        break
    case 1:
        console.log(1)
        break
    case 2:
    case 3:
        console.log('2,3')
        break
    default:
        console.log('?')
}