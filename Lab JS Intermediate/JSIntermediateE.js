//1
//Explanation:
//^ matches the beginning of the string. \w matches any word character.
//{1} takes only the first character.
//| works like the boolean OR. It matches the expression after and before the |.
//\s+ matches any amount of whitespace between the words.
const city = "st andrews";
const cityName = city.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);
console.log(cityName);

//2a.
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
console.log(truncate("This text will be truncated if it is too long", 25));
//2b.
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}
console.log(
  truncateString("This text will be truncated if it is too long", 25)
);

//3a.Add 2 new values to the end
const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Zebra");
console.log(animals);
//3b. Add 2 new values to the beginning
const animals2 = ["Tiger", "Giraffe"];
animals2.unshift("Cow", "Horse");
console.log(animals2);
//3c. Sort the values alphabetically. I assume I must use the latest version of the animals variable,
//which is animals2. Therefore I process it for 3c.
console.log(animals2.sort()); //will print [ 'Cow', 'Giraffe', 'Horse', 'Tiger' ]
//3d. Write a function replaceMiddleAnimal(newValue)
//since under animals2 there are 4 values, I assume the middle value is Horse (after the variable sorted)
//I will need to ensure I know the index of 'Horse'
let animals2Index = animals2.indexOf("Horse");
console.log(animals2Index); //print 2
//Replacing Horse with Ants
const modifiedAnimals2 = animals2.splice(2, 1, "Ants");
console.log(animals2); //print [ 'Cow', 'Giraffe', 'Ants', 'Tiger' ]
//3e. Write a function findMatchingAnimals(beginsWith)
//I continue using animals2 array
animals2.find((value) => {
  console.log("beginsWith", value);
});

//4a. Write a function camelCase(cssProp)
//Explanation: [A-Z]{2,} matches two or more consecutive uppercase letters.
//(?=[A-Z][a-z]+[0-9]*|\b) is a lookahead assertion that matches a word boundary.
//[A-Z]?[a-z]+[0-9]* matches a word starting with an optional uppercase letter, followed by one or more lowercase letters and zero or more digits.
//[A-Z] matches a single uppercase letter. it is [0-9] when numbers.
//g is a global flag that allows the regular expression to match all occurrences in the string.
let str = "margin-left";

function camelCase(str) {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
}

console.log(camelCase(str)); //print marginLeft
//4b.
function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(toCamelCase("margin-left"));

//4c. with the conditional operator
if (!String.prototype.tocamelize)
  String.prototype.tocamelize = function () {
    return this.replace(/-+(.)?/g, function (match, chr) {
      return chr ? chr.toUpperCase() : "";
    });
  };

console.log("margin-left".tocamelize());
//4c. without conditional operator
function toCamelCase2(str) {
  return str.replace(/[-_](.)/g, (match, char) => char.toUpperCase());
}

console.log(toCamelCase2("margin-left"));

//5
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004
let fixedTwenty = (0.2).toFixed(2);
let fixedTen = (0.1).toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working? This a question from the Lab Exercise.
//5a:
//Floating point numbers canot be accurately represented in binary.
//The precision is lost when the number of digits reaches 16 or more.
//For integer it will accuarate for less, i.e. up to 15 digits.
//Also, the toFixed method converts a number to a string. The addition symbol in the
//console.log will just inaccurately concat the "decimal numbers"

//5b.

function currencyAddition(float1, float2) {
  float1 = "0.1";
  float2 = "0.2";
  console.log(
    "0.1 + 0.2 = " + (parseFloat(float1) + parseFloat(float2)).toFixed(2)
  );
}
currencyAddition();

//5c.

const currencyOperation = (float1, float2, operation) => {
  if (float2 === 0) {
    throw new Error("Invalid number");
  }

  let convertedFloat1 = float1 * 100;
  let convertedFloat2 = float2 * 100;
  let result = 0;

  switch (operation) {
    case "+":
      result = convertedFloat1 + convertedFloat2;
      break;
    case "-":
      result = convertedFloat1 - convertedFloat2;
      break;
    case "*":
      result = convertedFloat1 * convertedFloat2;
      break;
    case "/":
      result = convertedFloat1 / convertedFloat2;
      break;
  }
  return result / 100;
};

console.log(currencyOperation("/"));
//5d
const currencyOperation2 = (float1, float2, operation, numDecimals) => {
  if (float2 === 0) {
    throw new Error("Invalid number");
  }

  let factor = 10 ** numDecimals; //10^1, 10^2, 10^3, 10^10
  console.log(factor);
  let convertedFloat1 = float1 * factor;
  console.log(convertedFloat1);
  let convertedFloat2 = float2 * factor;
  console.log(convertedFloat2);
  let result = 0;

  switch (operation) {
    case "+":
      result = convertedFloat1 + convertedFloat2;
      break;
    case "-":
      result = convertedFloat1 - convertedFloat2;
      break;
    case "*":
      result = convertedFloat1 * convertedFloat2;
      break;
    case "/":
      result = convertedFloat1 / convertedFloat2;
      break;
  }
  return Math.round(result) / factor;
};
console.log(currencyOperation2(1.5, 2.8, "*", 3));

//6
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const unique = (duplicatesArray) => {
  let result = [];
  //Go through one by one inside the array, check if the element is already existed in the result array , if it exists, we will ingore, otherwise we will add it into the array
  duplicatesArray.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};

console.log(unique(colours));
console.log(unique(testScores));
//Create another arrays to test
const fruits = [
  "apple",
  "apple",
  "banana",
  "orange",
  "avocado",
  "plum",
  "plum",
];
console.log(unique(fruits));

//7a.function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.
//Note: for 7a I apply the logic from the example provided in the jsintermediate PPT for "find Method"
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
let getBookTitle = books.find((bookId) => bookId.id === 3);
console.log(getBookTitle);
//7b. function getOldBooks() that uses the filter function to return all book
//objects written before 1950.
let getOldBooks = books.filter((book) => {
  return book.year < 1950;
});
console.log(getOldBooks);
//7c. function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.
const addGenre = books.map((book) =>
  Object.assign({}, book, { genre: "Classic" })
);
console.log(addGenre);
//7d.function getTitles(authorInitial) that uses map and
//filter together to return an array of book titles for books written by authors whose
//names start with authorInitial.
const getTitles = books
  .filter((authorInitial) => authorInitial.author == "J.D. Salinger")
  .map((authorInitial) => {
    return authorInitial.title;
  });
console.log(getTitles);

//7e. function latestBook() that uses find and forEach to get the
//book with the most recent publication date.
//using find:
const latestBooks = books.find((latestBook) => latestBook.year >= 1950);
console.log(latestBooks);
//usingforEach:
const latestBooks2 = [];
books.forEach(function (book) {
  latestBooks2.push(book.title, book.year >= 1950);
});
console.log(latestBooks2);

//8
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
console.log(phoneBookABC);
//8a. Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();
//8b. Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF.set("Danielle", "0412315555");
phoneBookDEF.set("Ella", "0412316666");
phoneBookDEF.set("Fanny", "0412317777");
console.log(phoneBookDEF);
//8c. Update the phone number for Caroline
phoneBookABC.set("Caroline", "0455221111");
console.log(phoneBookABC);
//8d. function printPhoneBook(contacts) that prints the names and phone
//numbers in the given Map. I assume the request is to print the ABC phonebook.
let printPhoneBook = "";
phoneBookABC.forEach((value, key) => {
  printPhoneBook += key + ":" + value + "\n";
});
console.log(printPhoneBook);
//8e. combine phonebooks ABC and DEF
let phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);
//8f. print all phonebooks from the two phonebooks, i.e. ABC and DEF
let printPhoneBook2 = "";
phoneBookABC.forEach((value, key) => {
  printPhoneBook2 += key + ":" + value + "\n";
});
phoneBookDEF.forEach((value, key) => {
  printPhoneBook2 += key + ":" + value + "\n";
});
console.log(printPhoneBook2);

//9
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
//9a. function sumSalaries(salaries) that calculates and returns the total of all salaries
//I modified the keys into properties and add the values.
let sumSalaries = 0;
for (let key in salaries) {
  sumSalaries += salaries[key];
}
console.log(sumSalaries);
//9b.function topEarner(salaries) that calculates and returns the name of the person
//earning the highest salary
let max = 0;
let topEarner = "";

for (let key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
    topEarner = key;
  }
}
console.log(topEarner);

//10.
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());

console.log(today.getHours() + " hours have passed so far today");
//10a. Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + " minutes have passed so far today");
//10b. Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + " seconds have passed so far today");
//10c. Calculate and print your age as: 'I am x years, y months and z days old'
function exactAge(birthdate) {
  let startDate = new Date(new Date(birthdate).toISOString().substring(0, 10));
  const endingDate = new Date().toISOString().substring(0, 10); // YYYY-MM-DD
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();

  // Leap years
  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  let dayDiff = endDate.getDate() - startDate.getDate();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  return {message: `I am`, 
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
  };
}
console.log(exactAge("04/01/1977"));
//10d. Write a function daysInBetween(date1, date2) which calculates and returns the amount 
//of days in between the two given dates. I copy this from my answer 10c.
let dayDiff2 = endDate.getDate() - startDate.getDate();


