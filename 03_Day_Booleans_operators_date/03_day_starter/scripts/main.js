// this is your main.js script
/*ejercicios nivel 1
1*/
let firstName = "Emma";
let lastName = "Robson";
let country = "México";
let city = "CDMX";
let age = 214;
let isMarried = true;

console.log(`variable      tipo
firstName:    ${typeof firstName}
lastName:     ${typeof lastName} 
country:      ${typeof country}
city:         ${typeof city}
age:          ${typeof age}
isMarried:    ${typeof isMarried}`);

// 2===================================================
let a = "10";
let b = 10;
console.log(typeof a === typeof b);

// 3===================================================
let parse = parseInt("9.8");
let num = 10;
console.log(parse === 10);

// 4.1 true=============================================
console.log("HOLA" === "HOLA");
console.log(6 > 1);
console.log("10" !== 10);
// 4.2 false
console.log([] === []);
console.log(10 > 100);
console.log(2 * 1 === 10);

// 5====================================================
console.log(`4 > 3 es: ${4 > 3}`); //true
console.log(`4 >= 3 es: ${4 >= 3}`); //true
console.log(`4 < 3 es: ${4 < 3}`); //false
console.log(`4 <= 3 es: ${4 <= 3}`); //false
console.log(`4 == 4 es: ${4 == 4}`); //true
console.log(`4 === 4 es: ${4 === 4}`); //true
console.log(`4 != 4 es: ${4 != 4}`); //false
console.log(`4 !== 4 es:${4 !== 4}`); //false
console.log(`4 != '4' es: ${4 != "4"}`); //false
console.log(`4 == "4" es: ${4 == "4"}`); //true
console.log(`4 === "4" es: ${4 === "4"}`); //false

let word1 = "python";
let word2 = "jargon";

console.log(word1 === word2);

// 6===================================================
console.log(`4 > 3 && 10 < 12 es: ${4 > 3 && 10 < 12}`); //true
console.log(`4 > 3 && 10 > 12 es: ${4 > 3 && 10 > 12}`); //false
console.log(`4 > 3 || 10 < 12 es: ${4 > 3 || 10 < 12}`); //true
console.log(`4 > 3 || 10 > 12 es: ${4 > 3 || 10 < 12}`); //true
console.log(`!(4 > 3) es: ${!(4 > 3)}`); //false
console.log(`!(4 < 3) es: ${!(4 > 3)}`); //false
console.log(`!false es: ${!false}`); //true
console.log(`!(4 > 3 && 10 < 12) es: ${!(4 > 3 && 10 < 12)}`); //false
console.log(`!(4 > 3 && 10 > 12) es: ${!(4 > 3 && 10 > 12)}`); //true
console.log(`!(4 === "4") es: ${!(4 === "4")}`); //true

let wordPython = "python";
let wordDragon = "dragon";
let on = "on";

console.log(!(wordPython.includes(on) && wordDragon.includes(on))); //false

// 7===============================================
const now = new Date();
console.log(now.getFullYear()); //What is the year today?
console.log(now.getMonth() + 1); //What is the month today as a number?
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`); //What is the date today?
console.log(now.getDay()); //What is the day today as a number?
console.log(now.getHours()); //What is the hours now?
console.log(now.getMinutes()); //What is the minutes now?
console.log(now.getTime()); //Find out the numbers of seconds elapsed from January 1, 1970 to now.

/*ejercicios nivel 2
1==============================================*/
let base = prompt("Introdusca la base");
let height = prompt("Introdusca la altura");
let area = 0.5 * base * height;
let message = alert(`El area del triangulo es de: ${area}cm²`);
console.log(message);

// 2==========================================
let ladoA = prompt("Introdusca lado a");
let ladoB = prompt("Introdusca lado b");
let ladoC = prompt("Introdusca lado c");
let perimetro = +ladoA + +ladoB + +ladoC;
let msg = alert(`El perimetro del triangulo es de: ${perimetro}cm`);
console.log(msg);

//3==========================================
let length = prompt("Introdusca el largo");
let width = prompt("Introdusca el ancho");
let areaR = +length * +width;
let perimeter = 2 * (+length + +width);
let msge = alert(
  `El rectangulo tiene un perimetro de: ${perimeter}cm y un area de: ${areaR}cm² `
);
console.log(msge);

//4===========================================
const PI = 3.14;
let radio = prompt("Introdusca el radio del circulo");
let areaC = PI * +radio * +radio;
let circumference = 2 * PI * +radio;
let mssge = alert(
  `El circulo tiene un area de: ${areaC}cm² y una circunferencia de: ${circumference}cm `
);
console.log(mssge);

//5===========================================

let x_1 = 0;
let y_1 = 2 * x_1 - 2;
let y_2 = 0;
let x_2 = 2 / 2;

let intecepA = `(${x_1},${y_1})`;
let intecepB = `(${x_2},${y_2})`;

console.log(`X se intesecta en ${intecepA}`);
console.log(`Y se intesecta en ${intecepB}`);

let slope_1 = (y_2 - y_1) / (x_2 - x_1);
console.log(`la pendiente de ${intecepA} y ${intecepB} es: ${slope_1}`);

// 6===========================================
let y1 = 2;
let y2 = 10;
let x1 = 2;
let x2 = 6;

let intecepX = `(${x1},${y1})`;
let intecepY = `(${x2},${y2})`;

let slope = (y2 - y1) / (x2 - x1);
console.log(`la pendiente de ${intecepX} y ${intecepY} es: ${slope}`);

// 7============================================

slope === slope_1
  ? console.log(
      `Las pendientes de ${intecepA} ${intecepB} y ${intecepX} ${intecepY} son iguales`
    )
  : console.log(
      `Las pendientes de ${intecepA} ${intecepB} y ${intecepX} ${intecepY} son diferentes`
    );

// 8===========================================
let x = prompt("Ingrese el valor de X para igualar Y a 0", "y = x² + 6x + 9");
let y = x ** 2 + 6 * x + 9;
y === 0
  ? alert(`Cuando X=${x} Y=0`)
  : y >= 1 && y < 26
  ? alert(`Ingresa otro numero porque ahora Y=${y}`)
  : alert(`Ingresa un numero Negativo porque ahora Y=${y}`);

// 9============================================
let hours = prompt("Ingrese las horas de trabajo");
let pay = +hours * 28;
let menssge = alert(`Your weekly earning is: ${pay}`);
console.log(menssge);

// 10==========================================
let nombre = prompt("Ingresa tu nombre");
nombre.length >= 7 ? alert("Tu nombre es largo") : alert("Tu nombre es corto");

// 11========================================
let firstNameA = prompt("Ingresa tu nombre");
let lastNameA = prompt("Ingresa tu apellido");
firstNameA.length >= 7 && lastNameA.length >= 7
  ? alert(`Tu nombre ${firstNameA} es tan largo como tu apellido ${lastNameA}`)
  : firstNameA.length >= 7 && lastNameA.length < 7
  ? alert(`Tu nombre ${firstNameA} es mas largo que tu apellido ${lastNameA}`)
  : firstNameA.length < 7 && lastNameA.length >= 7
  ? alert(`Tu nombre ${firstNameA} es mas corto que tu apellido ${lastNameA}`)
  : alert(`Tu nombre ${firstNameA} y apellido ${lastNameA} son cortos`);

// 12=========================================
let myAge = 145;
let yourAge = 24;
let mensage = alert(`I am ${myAge - yourAge} years older than you`);
console.log(mensage);

// 13=========================================
let birthYear = prompt("Ingrese el año en que nacio");
let year = now.getFullYear() - +birthYear;
year >= 18
  ? alert(`Tienes ${year}. Si puedes manejar`)
  : alert(`Tienes ${year} te faltna ${18 - year} para manejar`);

// 14==========================================
let years = prompt("Ingrese los años que ha vivido");
let messge = alert(`Usted ha vivido ${+years * 365 * 24 * 60 * 60} segundos `);
console.log(messge);

// 15=========================================
console.log(
  `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
);

console.log(
  `${now.getDate()}-${
    now.getMonth() + 1
  }-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

console.log(
  `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

/*ejercicios nivel 3
1====================================================*/
console.log(
  `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).slice(-2)}-${(
    "0" + now.getDate()
  ).slice(-2)} ${("0" + now.getHours()).slice(-2)}:${(
    "0" + now.getMinutes()
  ).slice(-2)}`
);
