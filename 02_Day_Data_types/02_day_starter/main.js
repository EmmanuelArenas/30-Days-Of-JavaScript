// this is your main.js script
// this is your main.js script
// ejercicios nivel 1
let challenge = "30 Days Of JavaScript"; //1
console.log(challenge); //2
console.log(challenge.length); //3
console.log(challenge.toUpperCase()); //4
console.log(challenge.toLowerCase()); //5
console.log(challenge.substring(3, 7)); //6
console.log(challenge.substring(3)); //7
console.log(challenge.includes("Script")); //8
console.log(challenge.split("")); //9
console.log(challenge.split(" ")); //10

//11
let company = "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
console.log(company.split(","));
//12
console.log(challenge.replace("JavaScript", "Python"));
// 13
console.log(challenge.charAt(15));
// 14
console.log(challenge.charCodeAt(11));
// 15
console.log(challenge.indexOf("a"));
// 16
console.log(challenge.lastIndexOf("a"));
// 17
let frase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(frase.indexOf("because"));
// 18
console.log(frase.lastIndexOf("because"));
// 19
console.log(frase.search("because"));
// 20
let challenge2 = " 30 Days Of JavaScript ";
console.log(challenge2.trim(" "));
// 21
console.log(challenge.startsWith("3"));
// 22
console.log(challenge.endsWith("t"));
// 23
console.log(challenge.match(/a/gi));
// 24
let a = "30 Days of";
let b = " JavaScript";
console.log(a.concat(b));
// 25
console.log(challenge2.repeat(2));

// ejercicios nivel 2
// 1
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
// 2
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
// 3
let strNum = "10";
let n = 10;
console.log(typeof strNum === 10);
let num = +strNum;
console.log(num);
console.log(typeof num === typeof n);
//4
let nume = "9.81";
let numFloat = parseFloat(nume);
console.log(Math.round(numFloat) === 10);
//5
let Python = "Python";
let jargon = "jargon";
console.log(Python.includes("on") && jargon.includes("on"));
// 6
let sentence = "I hope this course is not full of jargon.";
console.log(`existe jargon en la frase? ${sentence.includes("jargon")}`);
// 7
console.log(Math.floor(Math.random() * 101));
// 8
let min = 10;
let max = 50;
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);
// 9
console.log(Math.floor(Math.random() * 256));
// 10
let ramndomNum = Math.floor(Math.random() * 10);
let string = "JavaScript";
console.log(string.split(""));
console.log(ramndomNum);
console.log(string[ramndomNum]);
// 11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 2\n74 1 4 16 64\n5 1 5 25 125");
// 12
let sentenceNew =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentenceNew.substr(31, 23));

// ejercicio nivel 3
// 1
let sentenceLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentenceLove.match(/love/gi).length);
// 2
let sentenceBecause =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentenceBecause.match(/because/gi).length);
// 3
const sentenceClean =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let regEx = /[^\w\s]/g;

let clean = sentenceClean.replace(regEx, "");
console.log(`Texto Limpio 
${clean}`);

let word = clean.match(/\w+/g).reduce((acc, index) => {
  acc[index] = acc[index] + 1;
  if (!(acc[index] < acc[acc])) acc = index;
  return acc;
});

console.log(`La palabra que mas se repite es: ${word}`);

// Intente todo esto pero no pude solucionarlo de esta manero XD

/*let texMin = clean.toLowerCase();
console.log(texMin);
let frequentWord = texMin.split(" ");
console.log(frequentWord);
let regExWord = /[A-Za-z]/gi;
let repeat = frequentWord.match(regExWord);
console.log(repeat);
let orden = frequentWord.sort();
console.log(orden);
console.log(clean.match(/\w+/g));
array = clean.repeat(frequentWord.length === frequentWord);
console.log(array);*/

// 4
let annualIncome =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let money = annualIncome.match(/\d+/gi);
// console.log(money);
let salaryMonth = +money[0] * 12; //12 meses de un año
let bonus = +money[1];
let onlineCourses = +money[2] * 12;
let result = salaryMonth + bonus + onlineCourses;
console.log(`Esa persona gana $${result} al año.`);
