//4a.Write a function printFibonacci() using setInterval that outputs a number in
//the Fibonacci sequence every second.
const fiboFun = (length) => {
  let fibos = [];

  for (let i = 0; i < length; i++) {
    if (fibos[i - 2] && fibos[i - 1]) {
      let add = fibos[i - 2] + fibos[i - 1];
      fibos.push(add);
    } else {
      fibos.push(i);
    }
  }
  return fibos;
};

console.log(fiboFun(10));

let fibos2 = fiboFun(10);
const iterator = fibos2.values();
for (const value of iterator)
  setInterval(function () {
    console.log(value);
  });

//let fibos2 = fiboFun(10);
//const iterator = fibos2.values();
//for (const value of iterator)
//setInterval(function () {
//console.log(value);
//});
//4b. Write a new version printFibonacciTimeouts() that uses nested setTimeout
//calls to do the same thing

const fiboFun2 = (length) => {
  let fibos = [];

  for (let i = 0; i < length; i++) {
    if (fibos[i - 2] && fibos[i - 1]) {
      let add = fibos[i - 2] + fibos[i - 1];
      fibos.push(add);
    } else {
      fibos.push(i);
    }
  }
  return fibos;
};

console.log(fiboFun2(10));

let fibos3 = fiboFun2(10);
const iterator2 = fibos3.values();
for (const value of iterator2) {
  setTimeout(function () {
    console.log(value);
  }, 10000);
}
//4c. Extend one of the above functions to accept a limit argument, which tells it how many
//numbers to print before stopping.
const fiboFun3 = (length) => {
  let fibos = [];

  for (let i = 0; i < length; i++) {
    if (fibos[i - 2] && fibos[i - 1]) {
      let add = fibos[i - 2] + fibos[i - 1];
      fibos.push(add);
    } else {
      fibos.push(i);
    }
  }
  return fibos;
};

console.log(fiboFun3(5));

let fibos4 = fiboFun3(5);
const iterator3 = fibos4.values();
for (const value of iterator3) {
  clearTimeout(function () {
    console.log(value);
  }, 1000);
}
