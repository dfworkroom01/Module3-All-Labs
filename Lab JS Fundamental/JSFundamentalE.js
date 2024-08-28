//JS Fundamne
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.group("\t \n" - 2);
//2
let three = "3";
let four = "4";
let thirty = "30";
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

let lessThan1 = three < four;
let lessThan2 = thirty < four;
console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

//3
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

//4
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log(result);

let result2 =
  a + b < 10 ? `${a} + ${b} is less than 10` : `${a} + ${b} is greater than 10`;

console.log(result2);
//Explanation for Case no. 4:
//The += is an addition operator that performs addition of numbers or, when it involves
//strings, it will concatenate the strings. In case number 4, it functions as an operator
//to concatenate the strings 'is less than 10' and 'is greater than 10'

//5
//Rewrite the following: function getGreeting(name) {return "Hello " + name + "!";}
//The function expression syntax:

const nameGreeting = function getGreeting(name) {
  return `Hello ${name}!`;
};
console.log(nameGreeting(`Chester`));

//Rewriting using the arrow function: Do note that since name is declared I modify it into name1 and
//the variable name I modify into nameGreeting2:
const nameGreeting2 = (name1) => `Hello ${name1}!`;
console.log(nameGreeting2(`Chelsea`));

//6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
  //Answer 6 b.
  greeting2(numFinger) {
    let greeting2 = `Hello ${numFinger.name}, my name is ${this.firstName}. `;
    console.log(greeting2 + this.getCatchPhrase2(numFinger));
  },
  getCatchPhrase2(numFinger) {
    numFinger.numFingers === 6;
    return "You killed my father. Prepare to die.";
  },
};

inigo.greeting(westley);
inigo.greeting2(rugen);

//6 a. adding last name:
inigo.lastName = "Montoya";
console.log(inigo); //will add key:value --> lastName:'Montoya' to the inigo Object

//6 b. Print famous catch phrase for Finger6 person to the console: See above for the answer.

//6 c. Update getCatchPhrase to use arrow function syntax and a conditional operator.

const inigo1 = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
  //Answer 6 b.
  greeting2(numFinger) {
    let greeting2 = `Hello ${numFinger.name}, my name is ${this.firstName}. `;
    console.log(greeting2 + this.getCatchPhrase2(numFinger));
  },
  getCatchPhrase2(numFinger) {
    numFinger.numFingers === 6;
    return "You killed my father. Prepare to die.";
  },
};

inigo1.greeting(westley);
inigo1.greeting2(rugen);

//6c. Use arrow syntax and conditional operator:
//Since arrow syntax cannot be used as a method, I modify the object and create a separate function using
//arrow syntax and conditional operator.

const inigo2 = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + getCatchPhrase3(person));
  },
};
const getCatchPhrase3 = (person) =>
  person.numFingers > 5
    ? "You killed my father. Prepare to die."
    : "Nice to meet you.";

inigo2.greeting(westley);
inigo2.greeting(rugen);

//7a.
const basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    console.log(`Free Throw action: ${this.score}`);
    this.score++;
    console.log(`After free Throw action: ${this.score}`);
    return this;
  },
  //7c.
  makeFoul() {
    this.foul++;
    return this;
  },
  basket() {
    console.log(`Basket action: ${this.score}`);
    this.score += 2;
    console.log(`After Basket action: ${this.score}`);
    return this;
  },
  threePointer() {
    console.log(`Three Pointer action: ${this.score}`);
    this.score += 3;
    console.log(`After Three Pointer action: ${this.score}`);
    return this;
  },
  //7c. modified half-time to include foul
  halfTime() {
    console.log(`Halftime score is ${this.score} and with  ${this.foul} foul`);
    return this;
  },
  //7b. full time without foul
  fulltime() {
    console.log("Final score is " + this.score);
    return this;
  },
  //7c. modified fulltime with foul
  fulltime() {
    console.log(`Final score is  ${this.score} and with  ${this.foul} foul`);
    return this;
  },
};
//print 7a a
basketballGame.basket().freeThrow().basket().threePointer().halfTime();
//print 7b.
basketballGame.basket().freeThrow().threePointer().halfTime().fulltime();
//7d. To test the method chaining in different combinations
basketballGame.basket().halfTime().fulltime();
basketballGame.basket().makeFoul().fulltime();

//8a.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
const cityClone1 = {};

for (let key in sydney) {
  cityClone1[key] = sydney[key];
}
console.log(cityClone1);

//8b.
const newYork = {
  name: "New York",
  population: 8.3,
  country: "USA",
  temperature: 24,
};
const cityClone = {};
for (let key in newYork) {
  cityClone[key] = newYork[key];
}
console.log(cityClone);

//9a.
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = ["Soccer", "Tennis", "Badminton"];
teamSports.unshift("Lacrosse");
teamSports.push(moreSports);
console.log(teamSports);
//9b.
let dog1 = "Bingo";
let dog2 = dog1;
dog1 = "Momo";
console.log(dog2); //The result will still be 'Bingo' as
//both refers to the same memory position at this stage.
//9c.
let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = { ...cat1, name: "Momo" };
console.log(cat2);
//9d. At this stage, the values of the three variables are modified as per
//the operators/modifications I applied over the original variables.
console.log(teamSports);
console.log(dog1);
console.log(cat1);

//10a.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
let person1 = new Person("Adam", 58);
//10b.
let person2 = new Person("Wlady", 60);
//10c.
console.log(person1);
console.log(person2);
//10d.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}
let person3 = new PersonClass("Prisca", 54);
console.log(person3);
//10e.
function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = this.age >= 17 ? true : false;
}
let person4 = new Person1("Bree", 16);
console.log(person4);

class PersonClass1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 17 ? true : false;
  }
}
let person5 = new PersonClass1("Dee", 28);
console.log(person5);
