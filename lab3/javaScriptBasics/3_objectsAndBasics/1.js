// Objects
let user = {
    name: 'John',
    surname: 'Smith',
}

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)

// Object cloning

let user2 = {
    name: "John",
    age: 30
};

let clone = {}

for (let key in user) {
    clone[key] = user[key]
}

clone.name = "Pete"

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2)

// this keyword

function makeUser() {
    return {
        name: "John",
        ref() {
            return this
        }
    }
}
let user3 = makeUser()
console.log( user3.ref().name )

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)
    }
}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
}

ladder.up().up().down().showStep().down().showStep()

function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)
    };

    this.sum = function() {
        return this.a + this.b
    };

    this.mul = function() {
        return this.a * this.b
    };
}