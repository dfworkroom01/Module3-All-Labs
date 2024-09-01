//1
function makeCounter() {
  let currentCount = 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2
//1a. a second counter counter2 using the makeCounter function and test to see if
//it remains independent to counter1
let counter2 = makeCounter();

counter2(); //printed as 1
counter2(); //printed as 2
//Answer: It is independent from Counter1 as it starts with 1 and 2 counts. The function adopted
//makes variables counter 1 and counter 2 start from 1.

//1b.  Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0 incremented to 1 and so on...)
let startFrom = 1;
function makeCounter2() {
  startFrom += 0;
  return function () {
    startFrom++;
    console.log(startFrom);
    return startFrom;
  };
}

let counter3 = makeCounter2();

counter3(); // print as 2 as I start from 1
counter3(); //print as 3
//1c. Modify makeCounter to take another argument incrementBy, which specifies how
//much each call to counter() should increase the counter value by.
let incrementBy = 1;
function makeCounter3() {
  incrementBy += 1;
  return function () {
    incrementBy++;
    console.log(incrementBy);
    return incrementBy;
  };
}

let counter4 = makeCounter3();

counter4(); // print as 3 because I start from 1 and increment for 1.
//The return part increment it further.
counter4(); // print as 4

//2.
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//2a. What order will the four tests below print in? Why?
//Answer: It will start from message #4 because there is no delay at all.
//The next messages will follow the sequence of the delayed time.

//2b. Rewrite delayMsg as an arrow function
const delayMsg2 = (msg2) => {
  return console.log(`This message will be printed after a delay: ${msg2}`);
};

setTimeout(delayMsg2, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg2, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg2, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
//2c. Add a fifth test which uses a large delay time (greater than 10 seconds)
setTimeout(delayMsg2, 15000, "#5: Delayed by 15000ms");
//2d. Use clearTimeout to prevent the fifth test from printing at all.
//To cancel the fifth test, I create a variable for the fifth tets
//to use it as a testID to cleartimeout.
const timeOut2 = delayMsg3(15000, "#5: Delayed by 10000ms");

function delayMsg3(msg3) {
  return console.log(`This message will be printed after a delay: ${msg3}`);
  {
    function timeStop() {
      while (timeOut2.length) {
        clearTimeout(timeOut2);
      }
    }
  }
}

setTimeout(delayMsg3, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg3, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg3, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//3.
//3a.
//a debounce(func) decorator, which is a wrapper that takes a function func and
//suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
//pause, the most recent call to func should be executed and any others ignored.
function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe);
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
//3b. Extend the debounce decorator function to take a second argument ms, which defines the
//length of the period of inactivity instead of hardcoding to 1000ms
function debounce(func, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}
function printMe2() {
  console.log("printing debounced message");
}
printMe2 = debounce(printMe2, 1000);
setTimeout(printMe2, 100);
setTimeout(printMe2, 200);
setTimeout(printMe2, 300);
//3c. Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement.
function debounce(func, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}
function printMe3(msg) {
  msg = "printing debounced message";
  return console.log(msg);
}

printMe3 = debounce(printMe3, 1000);
setTimeout(printMe3, 100);
setTimeout(printMe3, 200);
setTimeout(printMe3, 300);

//4. As Fibonacci cannot be printed into console as it messes with the rest of the timeout, 
//I make a second js file called fibo.js.
//5.
let car = { 
  make: "Porsche", 
  model: '911', 
  year: 1964, 

  description() { console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
} 
}; 

car.description(); //works 
setTimeout(car.description, 200);//fail
//5a. Answer: The setTimeOut is outside the object, therefore it is fail. 
//5b. Change the year for the car by creating a clone of the original and overriding it 
let cloneCar = { ...car };
cloneCar.year = 1980
console.log(cloneCar); 
//5c. Does the delayed description() call use the original values or the new values from 
//b)? Why? 
//Answer: because the clone is a shallow copy that does not read the function of description.
//5d. Use bind to fix the description method so that it can be called from within 
//setTimeout without a wrapper function
let car2 = { 
  make: "Porsche", 
  model: '911', 
  year: 1964, 

  description() { console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 

} 
}; 
let description = car2.description.bind(car2)

setTimeout(description, 200);

//5e. Change another property of the car by creating a clone and overriding it, and test that 
//setTimeout still uses the bound value from d) 
let cloneCar2 = { ...car2 };
cloneCar2.year = 1999
cloneCar2.model = 'x10'
console.log(cloneCar2);
//Answer: The clone version still does not read the description function inspite of the bind.

//6.
function multiply(a, b) { 
  console.log( a * b ); 
} 
//setTimeout(function() {multiply (5, 5)
  //}, 500)
//6a. Use the example multiply function below to test it with, as above, and assume that all 
//delayed functions will take two parameters
//please note that actulally the original multiply.delay(500)(5,5) cannot run in console. 
//so I modify it using setimeout and set a longer timeout into test.It seems delay is a rxjs lib.
//setTimeout(function() {multiply (6, 6)
//}, 5000)
//6b. Use apply to improve your solution so that delayed functions can take any number of 
//parameters 
//function multiply(a, b) { 
//  console.log( a * b ); 
//} 
//let time = function delay(ms, callback) {
  //setTimeout(callback, ms);
//}
//let opr = multiply(5, 6)
//let result = time(400).apply(opr);
//console.log(result);
//6c. Modify multiply to take 4 parameters and multiply all of them, and test that your 
//delay prototype function still works. 

//function multiplyAll() {
  let mult = 0;
  for (let i = 0; i < arguments.length; i++) {
    multiply += arguments[i];
  }
  return mult;
//}
//x = multiplyAll(1, 123, 500, 115, 44, 88);
//multiplyAll();

