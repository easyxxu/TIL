interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 25;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = "Suji";

user1.greet("Hi there - I am");
console.log(user1); // Person {name: 'Jisu', age: 30}

interface AddFn {
  (a: number, b: number): number;
}

// let add: AddFn;

let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(1, 2));
