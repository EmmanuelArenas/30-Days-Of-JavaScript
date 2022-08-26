// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1
// 1=========================================================
const array = [];
// 2=========================================================
const arrayNum = [1, 2, 3, 4, 5, 6, 7];
// 3=========================================================
console.log(`La longitud de arrayNum = [${arrayNum}] es de ${arrayNum.length}`);
// 4=========================================================
console.log(arrayNum);
console.log(`El primer elemento es ${arrayNum[0]}`);
console.log(
  `El elemento de enmedio es ${arrayNum[Math.floor(arrayNum.length / 2)]}`
);
console.log(`El ultimo elemento es ${arrayNum[arrayNum.length - 1]}`);
// 5=========================================================
let mixedDataTypes = ["Hi", 5, [4], { name: "Emma" }, true, 9.4];
// 6=========================================================
const itCompanie = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7=========================================================
console.log(itCompanie);
// 8=========================================================
console.log(itCompanie.length);
// 9=========================================================
console.log(itCompanie);
console.log(`La primer compañia es ${itCompanie[0]}`);
console.log(
  `La compañia de enmedio es ${itCompanie[Math.floor(itCompanie.length / 2)]}`
);
console.log(`La ultima compañia es ${itCompanie[itCompanie.length - 1]}`);
// 10========================================================
console.log(itCompanie[0]);
console.log(itCompanie[1]);
console.log(itCompanie[2]);
console.log(itCompanie[3]);
console.log(itCompanie[4]);
console.log(itCompanie[5]);
console.log(itCompanie[6]);
// 11========================================================
let facebook = itCompanie[0].toString().toUpperCase();
console.log(facebook);
let google = itCompanie[1].toString().toUpperCase();
console.log(google);
let microsoft = itCompanie[2].toString().toUpperCase();
console.log(microsoft);
let apple = itCompanie[3].toString().toUpperCase();
console.log(apple);
let ibm = itCompanie[4].toString().toUpperCase();
console.log(ibm);
let oracle = itCompanie[5].toString().toUpperCase();
console.log(oracle);
let amazon = itCompanie[6].toString().toUpperCase();
console.log(amazon);
// 12========================================================
console.log(
  `${itCompanie.toString().replaceAll(",", ", ")} are big IT companies.`
);
// 13========================================================
let companie = prompt("Ingrese una compañia");
let companieMin = companie.toLowerCase().trim(" ");
let result = companieMin.charAt(0).toUpperCase() + companieMin.slice(1);
let index = itCompanie.indexOf(result);
index === -1 ? console.log("La empresa no existe") : console.log(result);
// 14=========================================================

// 15=========================================================
let orderSort = itCompanie.sort();
console.log(orderSort);
// 16=========================================================
let orderReverse = itCompanie.reverse();
console.log(orderReverse);
// 17=========================================================
let sliceFirst = itCompanie.splice(3);
console.log(sliceFirst);
// 18=========================================================
let sliceLast = itCompanie.slice(0, 4);
console.log(sliceLast);
// 19=========================================================
let sliceMiddle = itCompanie.slice(2, 5);
console.log(sliceMiddle);
// 20============================================================
itCompanie.shift();
console.log(itCompanie);
// 21============================================================
let removeMiddle = itCompanie.splice(3, 3);
console.log(`Lo elementos eliminados son ${removeMiddle}`);
console.log(itCompanie);
// 22===========================================================
let removeLast = itCompanie.pop();
console.log(`La empresa ${removeLast} fue eliminada`);
console.log(itCompanie);
// 23===========================================================
console.log(itCompanie.splice());

// Exercise: Level 2
// 1============================================================
console.log(webTechs);
console.log(countries);
// 2===========================================================
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let regEx = /[^\w\s]/g;
let words = text.replace(regEx, "").split(" ");
console.log(words);
console.log(words.length);
// 3===========================================================
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.includes("Meat")
  ? console.log("Ya hay carne")
  : shoppingCart.push("Meat");

console.log(shoppingCart);

shoppingCart.includes("Sugar")
  ? console.log("Ya hay azucar")
  : shoppingCart.push("Sugar");

console.log(shoppingCart);

let allergic = prompt("Eres alergico a la miel", "SI o No");
let allergicControl = allergic.toLowerCase().trim(" ");
let indice = shoppingCart.indexOf("Honey");
allergicControl === "si"
  ? console.log(`La ${shoppingCart.splice(indice, 1)} se elimino de tu lista`)
  : console.log(`Tu lista no se modifico: ${shoppingCart}`);

console.log(shoppingCart);

let indexTea = shoppingCart.indexOf("Tea");
shoppingCart[indexTea] = "Green Tea";
console.log(shoppingCart);
// 4===========================================================
let countriesExists = countries.includes("Ethiopia");

countriesExists
  ? console.log(countries[countries.indexOf("Ethiopia")])
  : countries.push("Ethiopia");
// 5===========================================================
let webTechsExists = webTechs.includes("Sass");

webTechsExists
  ? console.log(`${webTechs[webTechs.indexOf("Sass")]} is a CSS preprocess`)
  : console.log(webTechs[webTechs.push("Sass") - 1]);
// 6===========================================================
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// Exercise: Level 3
// 1===========================================================
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let agesOrder = ages.sort();
console.log(agesOrder);
console.log(`La edad minima es: ${ages[0]}`);
console.log(`La edad maxima es: ${ages[ages.length - 1]}`);

let median = ages.length / 2;
console.log(median);
console.log(ages[median]);

let n = agesOrder.length;
let totalAges = ages.reduce((acc, curr) => acc + curr);
let resul = totalAges / n;
console.log(`La edad promedio es de: ${resul}`);

console.log(
  `El rango de edades tiene un max ${agesOrder[ages.length - 1]} y un min de ${
    agesOrder[0]
  } años`
);

let min = Math.abs(agesOrder[0]);
let max = Math.abs(agesOrder[ages.length - 1]);
let comparacion = min === max;
console.log(comparacion);

// 1=======================================================
console.log(countries.splice(0, 9));
// 2=======================================================
let a = countries.length / 2 - 1;
let b = countries.length / 2 - 91;
console.log(countries.splice(95, 5));
// 3========================================================
let par = countries.length % 2;

par === 0
  ? console.log("Ya es par")
  : console.log(countries.push("Yugoslavia"));

let mitad = countries.length / 2;
let arrayA = countries.slice(0, mitad);
let arrayB = countries.slice(mitad);

console.log(arrayA);
console.log(arrayB);
