//7a. Define a custom toString method for the Person object that will format and print
//their details
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
let person = new Person("Dee", 30);
console.log(person.toString());
//7b. Test your method by creating 2 different people using the below constructor function
//and printing them.
//Kindly note that in my VS the Person2 constructor is stated to be converted to class.
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
let person2 = new Person2("Ruby", 50);
let person3 = new Person2("Bob", 40);

console.log(person2.toString());
console.log(person3.toString());
//7c. Create a new constructor function Student that uses call to inherit from Person and
//add an extra property cohort
class Student {
  constructor(name, age) {
    new Person2(this, name, age);
    this.name = name;
    this.age = age;
    this.gender = "Female";
  }
  //7d.
  toString() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

const student1 = new Student("Brianna", 17);
const student2 = new Student("Jen", 18);
console.log(student1);
console.log(student2);

//8. Please refer to clock.js file for answers of this question.
//I separare it as it is hard to see results in console when the clock running :)

//9a. RandomDelay -> Create a promise-based alternative randomDelay() that delays execution for a
//random amount of time (between 1 and 20 seconds) and returns a promise we can use
//via .then(), as in the starter code below
function randomDelay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
randomDelay(1000).then(
  () => randomDelay(20000),
  console.log("There appears to have been a delay.")
);

//9b. If the random delay is even, consider this a successful delay and resolve the promise,
//and if the random number is odd, consider this a failure and reject it

function randomDelay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function delayedGreeting() {
  console.log("There appears to have been a delay");
  await randomDelay(1000);
  console.Error("Error!");
  await randomDelay(20000);
  console.log("There appears to have been a delay");
}
delayedGreeting();

//9c. Update the testing code to catch rejected promises and print a different message
function randomDelay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function delayedGreeting() {
  console.log("There appears to have been a delay");
  await randomDelay(1000);
  console.error("Sorry, Error!");
  await randomDelay(20000);
  console.log("There appears to have been a delay");
}
delayedGreeting();

//9d. Try to update the then and catch messages to include the random delay value

async function randomDelay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
for (let i = 0; i < 1; i++) {
  let i = 3000;
  console.log(`There appears to be a delay for: ${i} miliseconds`);
}

//10.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

function fetchURLData(url) {
  fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
}
//10a.
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

async function tryAPI () { try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch {(error) 
	console.error(error);
}}
//10b.
const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60';
//invalid const url =  'https://wft-geo-db.p.rapidapi.com/v1/geo/places/'

//10c. (Extension) Extend your new function to accept an array of URLs and fetch all of them, 
//using Promise.all to combine the results. I use a movie API fecth example as an answer here.
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('/movies'),
    fetch('/categories')
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();

  return [movies, categories];
}

fetchMoviesAndCategories().then(([movies, categories]) => {
  movies;     // fetched movies
  categories; // fetched categories
}).catch(error => {
  // /movies or /categories request failed
});