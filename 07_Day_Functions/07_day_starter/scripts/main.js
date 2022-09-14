//To display it on the console add console.log to the function call
// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// Exercises: Level 1
// =============================1=============================
function fullName() {
  let firstName = "Emmanuel";
  let lastName = "Arenas";
  return `${firstName} ${lastName}`;
}
fullName();
// =============================2=============================
function fullNameA(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
fullNameA("Emmanuel", "Arenas");
// =============================3=============================
function addNumber(a, b) {
  return a + b;
}
addNumber(1, 3);
// =============================4=============================
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
areaOfRectangle(3, 5);
// =============================5=============================
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
perimeterOfRectangle(5, 5);
// =============================6=============================
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
volumeOfRectPrism(2, 3, 4);
// =============================7=============================
function areaOfCircle(r) {
  const PI = 3.14;
  let area = PI * r ** 2;
  return area;
}
areaOfCircle(2);
// =============================8=============================
function circumOfCircle(r) {
  const PI = 3.14;
  let circumference = (2 * PI * r).toFixed(2);
  return circumference;
}
circumOfCircle(5);
// =============================9=============================
function density(mass, volume) {
  let density = mass / volume;
  return density;
}
density(4, 5);
// =============================10============================
function speed(distance, time) {
  let speed = distance / time;
  return speed;
}
speed(50, 23);
// =============================11============================
function weight(mass) {
  const Gravity = 9.8;
  let weigth = mass * Gravity;
  return weigth;
}
weight(5);
// =============================12============================
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
convertCelsiusToFahrenheit(10);
// =============================13============================
function bmi(year, weight, height) {
  let bmi = (weight / (height * height)).toFixed(2);
  const underweight = bmi < 18.5;
  const normalWeight = bmi >= 18.5 && bmi <= 24.9;
  const overweight = bmi >= 25 && bmi <= 29.9;
  const obese = bmi >= 30;

  if (year && weight && height) {
    if (year >= 20) {
      if (underweight) {
        return `Your BMI is ${bmi}, which indicates your weight is in the Underweight category for adults over 20 years of age.`;
      } else if (normalWeight) {
        return `Your BMI is ${bmi}, which indicates your weight is in the Normal weight category for adults over 20 years of age.`;
      } else if (overweight) {
        return `Your BMI is ${bmi}, which indicates your weight is in the Overweight category for adults over 20 years of age.`;
      } else if (obese) {
        return `Your BMI is ${bmi}, which indicates your weight is in the Obese category for adults over 20 years of age.`;
      }
    } else {
      return "You have to be over 20 years old for the calculations to be useful.";
    }
  }
  return "Enter your age, weight in kg and height in meter";
}
console.log(bmi(20, 80, 1.63));
// =============================14============================
function checkSeason(month) {
  let mont = month.toLocaleLowerCase().trim();
  switch (true) {
    case mont === "september" || mont === "october" || mont === "november":
      return "it is Autumn";
      break;
    case mont === "december" || mont === "january" || mont === "february":
      return "it is Winter";
      break;
    case mont === "march" || mont === "april" || mont === "may":
      return "it is Spring";
      break;
    case mont === "june" || mont === "july" || mont === "august":
      return "it is Summer";
      break;
    default:
      return "That month does not exist";
  }
}
checkSeason("july ");
// =============================15============================
const findMax = (a, b, c) => {
  let arr = [];
  arr.push(a, b, c);
  let all = arr.length - 1;
  max = arr[all];
  while (all--) {
    if (arr[all] > max) {
      max = arr[all];
    }
  }
  return max;
};
// Exercises: Level 2
// =============================1=============================
const solveLinEquation = (a, b, c) => {
  m = -a / b;
  b = -c / b;
  return `La pendiente es: ${m.toFixed(2)} y la ordenada es: ${b.toFixed(2)}`;
};

solveLinEquation(12, 2, -6);
// =============================2=============================
const solveQuadratic = (a, b, c) => {
  let firstPart = -b;
  let secondPart = Math.sqrt(b ** 2 - 4 * a * c);
  let thirdPart = 2 * a;
  let result1 = (firstPart + secondPart) / thirdPart;
  let result2 = (firstPart - secondPart) / thirdPart;

  if ((a && b && c) || a == 0 || b === 0 || c === 0) {
    if (result1 != result2) {
      return `{${result1}},{${result2}} `;
    } else if (result1 === result2) {
      return `{${result1}}`;
    }
  } else {
    return `{${0}}`;
  }
};
// =============================3=============================
const array = ["blue", 1, 2, "Hello", 4, 5, 6, 7, 8, "hi"];
const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printArray(array);
// =============================4=============================
const showDateTime = () => {
  const date = new Date();
  return `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
};
showDateTime();
// =============================5=============================
const swapValues = (x, y) => {
  tem = x;
  x = y + ((y = x), 0);
  return `x => ${x}, y => ${y}`;
};
swapValues(1, 2);
// =============================6=============================
const reverseArray = (arr) => {
  if (arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(arr[i]);
    }
    return reverse;
  } else {
    throw TypeError("An array is not entered");
  }
};
// =============================7=============================
const capitalizeArray = (arr) => {
  return arr;
};
// =============================8=============================
const addItem = (item) => {
  let arr = [];
  arr.push(item);
  return arr;
};
// =============================9=============================
const removeItem = (index) => {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (index < arr.length) {
    arr.splice(index, 1);
    return arr;
  } else {
    return `El index ${index} es mayor que los index totales del array`;
  }
};
removeItem(5);
// =============================10============================
const sumOfNumbers = (...num) => {
  let sum = 0;
  if (num.length > 1) {
    for (let e of num) {
      sum += e;
    }
    return sum;
  } else {
    return "You need to enter more than two numbers";
  }
};
sumOfNumbers(2, 2);
// =============================11============================
const sumOfOdds = (...num) => {
  let sum = 0;
  let odd = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      odd.push(num[i]);
    }
  }
  for (let e of odd) {
    sum += e;
  }
  return sum;
};
sumOfOdds(3, 2, 5, 2, 1);
// =============================12============================
const sumOfEven = (...num) => {
  let sum = 0;
  let even = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    }
  }
  for (let e of even) {
    sum += e;
  }
  return sum;
};
sumOfEven(3, 2, 5, 2, 1);
// =============================13============================
const evensAndOdds = (num) => {
  arrEven = [];
  arrOdd = [];
  for (let i = 0; i <= num; i++) {
    i % 2 == 0 ? arrEven.push(i) : arrOdd.push(i);
    continue;
  }
  return `El número de impares es: ${arrOdd.length} 
  El número de pares es: ${arrEven.length}`;
};
evensAndOdds(100);
// =============================14============================
const sumNum = (...num) => {
  let result = 0;
  for (const i of num) {
    result = result + i;
  }
  return result;
};
sumNum(1, 2, 3);
// =============================15============================
const randomUserIp = () => {
  ip = "172.";
  const num = Math.round(Math.random() * (31 - 28) + 28);
  const num2 = Math.round(Math.random() * 255);
  const num3 = Math.round(Math.random() * 255);
  ip = ip + num + "." + num2 + "." + num3;
  return ip;
};
randomUserIp();
// =============================16============================
const randomMacAddress = () => {
  const hex = "0123456789abcdef";
  let macAddres = "";
  let mac = [];
  while (mac.length < 6) {
    for (let i = 0; i < 2; i++) {
      macAddres += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    mac.push(macAddres);
    macAddres = "";
  }
  result = mac.toString();
  return result.replaceAll(",", ":");
};
randomMacAddress();
// =============================17============================
const randomHexaNumberGenerator = () => {
  const char = "0123456789abcdef";
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += char.charAt(Math.floor(Math.random() * char.length));
  }
  return hexa;
};
randomHexaNumberGenerator();
// =============================18============================
const userIdGenerator = () => {
  const char = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = " ";
  for (let i = 0; i < 7; i++) {
    id += char.charAt(Math.floor(Math.random() * char.length));
  }
  return id;
};
userIdGenerator();
// Exercises: Level 3
// =============================1=============================

const userIdGeneratedByUser = () => {
  let char = prompt("Ingrese el numero de caracteres que tendra el ID");
  let ide = prompt("Ingrese la cantidad de ID's que desea generar");
  const str = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = " ";
  let arr = [];
  while (arr.length < ide) {
    for (let i = 0; i < char; i++) {
      id += str.charAt(Math.floor(Math.random() * str.length));
    }
    arr.push(id);
    id = "";
  }
  return arr;
};
console.log(userIdGeneratedByUser());
// =============================2=============================
const rgbColorGenerator = () => {
  let rgb = [];
  while (rgb.length < 3) {
    acc = "";
    acc = Math.floor(Math.random() * 256);
    rgb.push(acc);
  }
  return `rgb(${rgb.toString()})`;
};

rgbColorGenerator();
// =============================3=============================
const arrayOfHexaColors = () => {
  const character = "0123456789abcdef";
  let hex = "#";
  let arr = [];
  random = Math.floor(Math.random() * (10 - 1) + 1);
  while (arr.length < random) {
    for (let i = 0; i < 6; i++) {
      hex += character.charAt(Math.floor(Math.random() * character.length));
    }
    arr.push(hex.toUpperCase());
    hex = "#";
  }
  return arr;
};
arrayOfHexaColors();
// =============================4=============================
const arrayOfRgbColors = () => {
  random = Math.floor(Math.random() * (10 - 1) + 1);
  let rgb = [];
  let arrRGB = [];
  while (arrRGB.length < random) {
    while (rgb.length < 3) {
      acc = "";
      acc = Math.floor(Math.random() * 256);
      rgb.push(acc);
    }
    arrRGB.push(`rgb(${rgb.toString()})`);
  }
  return arrRGB;
};
arrayOfRgbColors();
// =============================5=============================
const convertHexaToRgb = (hex) => {
  let newArr = hex.toUpperCase().split("");
  let Arr = [];
  let color = [];
  let i = 0;
  for (let i in newArr) {
    switch (newArr[i]) {
      case "A":
        newArr[i] = 10;
        continue;
      case "B":
        newArr[i] = 11;
        continue;
      case "C":
        newArr[i] = 12;
        continue;
      case "D":
        newArr[i] = 13;
        continue;
      case "E":
        newArr[i] = 14;
        continue;
      case "F":
        newArr[i] = 15;
        continue;
      default:
        break;
    }
  }
  while (i < newArr.length) {
    Arr.push(newArr.slice(i, i + 2));
    i += 2;
  }
  for (let i in Arr) {
    const R = Arr[i];
    let red = R[0] * 16 + +R[1];
    color.push(red);
  }
  return `rgb (${color})`;
};
// #19BD1E -> RGB(25,189,30)
convertHexaToRgb("19BD1E");
// =============================6=============================
// =============================7=============================
// =============================8=============================
// =============================9=============================
// =============================10============================
// =============================11============================
// =============================12============================
// =============================13============================
// =============================14============================
// =============================15============================
// =============================16============================
// =============================17============================
// =============================18============================
// =============================19============================
// =============================20============================
