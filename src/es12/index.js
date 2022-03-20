//ReplaceAll
const string = "JavaScript es maravilloso, pero no es lo mismo que JavaScript";

const replace = string.replace("JavaScript", "Python");
console.log(replace);
const replace2 = string.replaceAll("JavaScript", "Python");
console.log(replace2);

//Private Methods
class Message {
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show("Hello World");
message.delete("Hello World");

//Promise any (El que se resuelva primero)
const promise = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise, promise2, promise3]).then((response) =>
  console.log(response)
);

//WeakRef
class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

//Expresiones y operadores NUEVOS
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));
console.log((isTrue ||= isFalse));
console.log((isTrue ??= isFalse));
