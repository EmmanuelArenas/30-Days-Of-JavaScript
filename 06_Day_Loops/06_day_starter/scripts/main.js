// console.log(countries);
// alert('Open the console and check if the countries has been loaded')
// Exercises: Level 1
// 1==========================================================
console.log("De 0 a 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let ii = 0;
do {
  console.log(ii);
  ii++;
} while (ii <= 10);
// 2==========================================================
console.log("de 10 a 0");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let iInverso = 10;
while (iInverso >= 0) {
  console.log(iInverso);
  iInverso--;
}

let iiInverso = 10;
do {
  console.log(iiInverso);
  iiInverso--;
} while (iiInverso >= 0);
// 3==========================================================
console.log("De 0 a n");
const array = ["A", "E", "I", "O", "U"];
for (let i = 0; i <= array.length - 1; i++) {
  console.log(i);
}
// 4==========================================================
let simbol = "#";
for (let i = 1; i <= 6; i++) {
  console.log(simbol.repeat([i]));
}
// 5==========================================================
for (let i = 0; i <= 10; i++) {
  console.log(`${[i]} * ${[i]} = ${[i] * [i]}`);
}
// 6==========================================================
console.log(`i    i²    i³`);
for (let i = 0; i <= 10; i++) {
  console.log(`${[i]}   ${[i] ** 2}    ${[i] ** 3}`);
}
// 7==========================================================
for (let i = 0; i <= 100; i++) {
  [i] % 2 === 0 ? console.log(`Numeros pares: ${i}`) : false;
  continue;
}
// 8==========================================================
for (let i = 0; i <= 100; i++) {
  [i] % 2 === 1 ? console.log(`Numeros impares: ${i}`) : false;
  continue;
}
// 9==========================================================
const primos = [];
let iterador = 0;
for (let i = 2; i <= 100; i++) {
  let primo = true;
  for (let divisor = 2; divisor < i; divisor++) {
    iterador++;
    if (i % divisor === 0) {
      primo = !primo;
      break;
    }
  }
  if (primo) primos.push(i);
}
console.log(primos);
// 10=========================================================
let arrayNum = [];
for (let i = 0; i <= 100; i++) {
  arrayNum.push(i);
}
console.log(arrayNum);
let total = 0;
for (const num of arrayNum) {
  total = total + num;
}
console.log(`La suma de 0 a 100 es ${total}`);
// 11=========================================================
let arrayPar = [];
let arrayImpar = [];
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? arrayPar.push(i) : arrayImpar.push(i);
  continue;
}
console.log(arrayPar);
console.log(arrayImpar);
let totales = 0;
for (const num of arrayPar) {
  totales = totales + num;
}
let s = 0;
for (const num of arrayImpar) {
  s = s + num;
}
console.log(
  `La suma de 0 a 100 de los numeros pares es ${totales} y la suma de los numeros impares de 0 a 100 es ${s}`
);
// 12=========================================================
console.log([totales, s]);
// 13=========================================================
let random = [];
while (random.length < 5) {
  let numeroAleatorio = Math.ceil(Math.random() * 50);
  random ? (random[random.length] = numeroAleatorio) : false;
}
console.log(random);
// 14=========================================================
let arrayRandom = [];
while (arrayRandom.length < 5) {
  let numeroAleatorio = Math.ceil(Math.random() * 50);
  let existe = false;
  for (let i = 0; i < arrayRandom.length; i++) {
    if (arrayRandom[i] == numeroAleatorio) {
      existe = true;
      break;
    }
  }
  if (!existe) {
    arrayRandom[arrayRandom.length] = numeroAleatorio;
  }
}
console.log(arrayRandom);
// 15=========================================================
const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = " ";
for (let i = 0; i < 6; i++) {
  id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
console.log(id);

// Exercises: Level 2
// 1==========================================================
let numRandom = [];
while (numRandom.length < 1) {
  let numeroAleatorio = Math.ceil(Math.random() * 50);
  numRandom ? (numRandom[numRandom.length] = numeroAleatorio) : false;
}
const caracter = "abcdefghijklmnopqrstuvwxyz0123456789";
let uid = " ";
for (let i = 0; i < numRandom; i++) {
  uid += caracter.charAt(Math.floor(Math.random() * caracter.length));
}
console.log(uid);
// 2==========================================================
const hexa = "123456789abcdef";
let uuid = "";
for (let i = 0; i < 6; i++) {
  uuid += hexa.charAt(Math.floor(Math.random() * hexa.length));
}
console.log(`#${uuid}`);
// 3==========================================================
let rgb = [];
while (rgb.length < 3) {
  let numeroAleatorio = Math.ceil(Math.random() * 255);
  rgb ? (rgb[rgb.length] = numeroAleatorio) : false;
}
console.log(`rgb(${rgb})`);
// 4==========================================================
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const arrayCountries = [];
for (let i = 0; i < countries.length; i++) {
  arrayCountries.push(countries[i].toUpperCase());
}
console.log(arrayCountries);
// 5==========================================================
const numCaracter = [];
for (let i = 0; i < countries.length; i++) {
  numCaracter.push(countries[i].length);
}
console.log(numCaracter);
// 6==========================================================
for (const tech of countries) {
  console.log([tech, tech.slice(0, 3), tech.length]);
}
// 7==========================================================
let resultado = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].includes("land")
    ? resultado.push(countries[i])
    : console.log("No hay paises con la que contengan 'land'");
}
console.log(resultado);

// 8==========================================================
let res = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].includes("ia")
    ? res.push(countries[i])
    : console.log("No hay paises con la que contengan 'ia'");
}
console.log(res);
// 9==========================================================
let result = [];
for (let word of countries) {
  result.push(word.length);
}
let max = Math.max(...result);
for (let longestCountrie of countries) {
  if (longestCountrie.length === max) {
    console.log(longestCountrie);
  }
}
// 10=========================================================
let countriesFive = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].length === 5 ? countriesFive.push(countries[i]) : false;
}
console.log(countriesFive);
// 11=========================================================
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let t = [];
for (let palabra of webTechs) {
  t.push(palabra.length);
}
let maximo = Math.max(...t);
for (let longestWord of webTechs) {
  if (longestWord.length === maximo) {
    console.log(longestWord);
  }
}
// 12=========================================================
let arrWebTechs = [];
for (let i = 0; i <= webTechs.length - 1; i++) {
  console.log(arrWebTechs.push([webTechs[i], webTechs[i].length]));
}
console.log(arrWebTechs);
// 13=========================================================
const arrayMern = ["MongoDB", "Express", "React", "Node"];
let mernF = [];
for (const mern of arrayMern) {
  mernF.push(mern[0]);
}
console.log(mernF.join(""));

// 14=========================================================
const techArray = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let i = 0; i <= techArray.length; i++) {
  console.log(`${techArray[i]} `);
}
// 15=========================================================
const fruitArray = ["banana", "orange", "mango", "lemon"];
let arrayReverse = [];
for (let i = fruitArray.length - 1; i >= 0; --i) {
  arrayReverse.push(fruitArray[i]);
}
console.log(arrayReverse);
// 16=========================================================
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let arrayFull = fullStack[0].concat(fullStack[fullStack.length - 1]);
for (let i = 0; i <= arrayFull.length - 1; i++) {
  console.log(`${arrayFull[i]} `);
}

//Exercises: Level 3
// 1==========================================================
const newCountries = [];
for (const country of countries) {
  newCountries.push(country);
}
console.log(newCountries);
// 2==========================================================
const sortedCountries = [];
for (const country of countries) {
  sortedCountries.push(country);
}
console.log(sortedCountries.sort().reverse());
// 3==========================================================
const mernStack = ["MongoDB", "Express", "React", "Node"];

const sortedwebTechs = [];
for (const country of webTechs) {
  sortedwebTechs.push(country);
}
console.log(sortedwebTechs.sort());

const sortedmernStack = [];
for (const country of mernStack) {
  sortedmernStack.push(country);
}
console.log(sortedmernStack.sort());
// 4==========================================================
let resul = [];
for (let i = 0; i < countriesArray.length; i++) {
  countriesArray[i].includes("land")
    ? resul.push(countriesArray[i])
    : console.log("No hay paises con la que contengan 'land'");
}
console.log(resul);
// 5==========================================================
let numWord = [];
for (word of countriesArray) {
  numWord.push(word.length);
}
let maxWord = Math.max(...numWord);
for (let longestCountrie of countriesArray) {
  if (longestCountrie.length === maxWord) {
    console.log(longestCountrie);
  }
}
// 6==========================================================
let resulta = [];
for (let i = 0; i < countriesArray.length; i++) {
  countriesArray[i].includes("land")
    ? resulta.push(countriesArray[i])
    : console.log("No hay paises con la que contengan 'ia'");
}
console.log(resulta);
// 7==========================================================
let countriesFour = [];
for (let i = 0; i < countriesArray.length; i++) {
  countriesArray[i].length === 4
    ? countriesFour.push(countriesArray[i])
    : false;
}
console.log(countriesFour);
// 8==========================================================
let twoMore = [];
for (const tech of countriesArray) {
  [tech.split(" ").length] >= 2 ? twoMore.push(tech) : false;
}
console.log(twoMore);
// 9==========================================================
let reverseCountri = [];
for (let i = countriesArray.length - 1; i >= 0; --i) {
  reverseCountri.push(countriesArray[i].toUpperCase());
}
console.log(reverseCountri);
