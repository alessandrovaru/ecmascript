//Array.flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

//flat map
let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap((value) => [value, value * 2]));

//trimStart()
let hello = "                Hello World";
console.log(hello);
console.log(hello.trimStart());

//trimEnd()
let hello1 = "Hello World                ";
console.log(hello1);
console.log(hello1.trimEnd());

//Optional catch binding
// try {}
// catch {error}

//Object From Entries
let entries = [
  ["name", "John"],
  ["age", 30],
];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo
let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
