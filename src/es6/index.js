//parametros por defecto
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 23;
  var country = country || "MX";
  console.log(name, age, country);
}
//Nueva forma de hacerlo con ES6
function newFunction2(name = "oscar", age = 23, country = "MX") {
  console.log(name, age, country);
}

newFunction2();

//Template Literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilínea en strings
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" +
  "Pellentesque euismod, urna eu tincidunt consectetur, nisl nunc consequat eros, \n";

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque euismod, urna eu tincidunt consectetur, nisl nunc consequat eros,
`;

console.log(lorem);
console.log(lorem2);

//Destructuración de Elementos
let person = {
  name: "Elea",
  age: 23,
  country: "VE",
};

let { name1, age2, country3 } = person;

console.log(name1, age2, country3);

//Spread Operator
let team1 = ["Cristina", "Rafael", "Juan"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);
console.log(team1);

//Scope
{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";

//Propiedad de objeto mejorada
let name = "Alessandro";
let age = 22;

object = { name, age };
console.log(object);

//Arrow Functions
const names = [
  { name: "Cristina", age: 22 },
  { name: "Alessandro", age: 22 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};

const listOfNames4 = (name) => {
  console.log(name, age, country);
};

const square = (num) => num * num;

//Promises(algo va a pasar) and Asynchrony
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hello");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

//Clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Import y Export de ES6
import hello from "./module.js";

console.log(hello());

//Generators
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
