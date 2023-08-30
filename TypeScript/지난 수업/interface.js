"use strict";
class Person {
    constructor(n) {
        this.age = 25;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("hi");
        }
    }
}
let user1;
user1 = new Person();
// user1.name = "Suji";
user1.greet("Hi there - I am");
console.log(user1); // Person {name: 'Jisu', age: 30}
// let add: AddFn;
let add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(1, 2));
