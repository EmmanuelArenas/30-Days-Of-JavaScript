// this is your main.js script

alert("Open the browser console whenever you work on JavaScript");

//  level 1 exercise 1=======================================
let question = prompt("enter your age");

question >= 18
  ? console.log("You are old enough to drive")
  : console.log(`You are left with ${18 - question} years to drive`);

// exercise 2=================================================
let myAge = prompt("Enter your age");
let yourAge = prompt("enter someone else's age");
if (myAge !== "" && yourAge !== "") {
  if (+myAge > +yourAge) {
    console.log(`I am ${+myAge - +yourAge} years older than you.`);
  } else if (+myAge === +yourAge) {
    console.log(`you and I are the same age.`);
  } else {
    console.log(`You are ${+yourAge - +myAge} years older than me.`);
  }
} else {
  alert("You have to enter the requested information");
}

// 3 =========================================================
let a = 4;
let b = 3;
// if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// operator ternary
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4===========================================================
let num = prompt("Enter a number");

num % 2 === 0
  ? console.log(`${num} is an even number`)
  : console.log(`${num} is an odd number`);

//  level 2 exercise 1=======================================

let scores = prompt("Enter a score");
let scoreNum = +scores;
typeof scoreNum === Number
  ? scoreNum >= 0 && scoreNum <= 49
    ? console.log("Your qualification is F")
    : scoreNum >= 50 && scoreNum <= 59
    ? console.log("Your qualification is D")
    : scoreNum >= 60 && scoreNum <= 69
    ? console.log("Your qualification is C")
    : scoreNum >= 70 && scoreNum <= 79
    ? console.log("Your qualification is B")
    : scoreNum >= 80 && scoreNum <= 100
    ? console.log("Your qualification is A")
    : console.log("Enter a number between 0 and 100")
  : console.log("Enter a number between 0 and 100");

// with switch
switch (true) {
  case scoreNum >= 80 && scoreNum <= 100:
    console.log("Your qualification is A");
    break;
  case scoreNum >= 70 && scoreNum <= 79:
    console.log("Your qualification is B");
    break;
  case scoreNum >= 60 && scoreNum <= 69:
    console.log("Your qualification is C");
    break;
  case scoreNum >= 50 && scoreNum <= 59:
    console.log("Your qualification is D");
    break;
  case scoreNum >= 0 && scoreNum <= 49:
    console.log("Your qualification is F");
    break;
  default:
    console.log("Enter a number between 0 and 100");
}

// 2=========================================================
let season = prompt("What month are we in?");
let mont = season.toLocaleLowerCase();
switch (true) {
  case mont === "september" || mont === "october" || mont === "november":
    console.log("it is Autumn");
    break;
  case mont === "december" || mont === "january" || mont === "february":
    console.log("it is Winter");
    break;
  case mont === "march" || mont === "april" || mont === "may":
    console.log("it is Spring");
    break;
  case mont === "june" || mont === "july" || mont === "august":
    console.log("it is Summer");
    break;
  default:
    console.log("Enter a month");
}

// 3========================================================
const weekendDay = ["saturday", "sunday"];
const workingDay = ["monday", "tuesday", "wdnesday", "thursday", "friday"];
let day = prompt("What is the day today?");
let dayMinuscula = day.toLowerCase();

switch (true) {
  case weekendDay.includes(dayMinuscula):
    console.log(`${dayMinuscula} is a weekend.`);
    break;
  case workingDay.includes(dayMinuscula):
    console.log(`${dayMinuscula} is a working day.`);
    break;
  default:
    console.log(`${dayMinuscula}does not exist`);
}

//  level 3 exercise 1=======================================

const monthMaxDay = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
const monthDay = ["april", "june", "september", "november"];
const monthMinDay = ["february"];

let month = prompt("Enter a month");
let monthMinuscula = month.toLowerCase().trim(" ");

switch (true) {
  case monthMaxDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } has 31 days`
    );
    break;
  // Para el ultimo ejercicio considerando el año bisiesto solo necesitas cambiar el 28 por 29 en el console.log
  case monthMinDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } has 28 days`
    );
    break;
  case monthDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } has 30 days`
    );
    break;
  default:
    console.log(`"${monthMinuscula.toUpperCase()}" does not exist`);
}
