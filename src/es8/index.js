//Object.entries para generar matrices

const data = {
  frontend: "Alessandro",
  backend: "Roberto",
  design: "Giovanni",
};

const entries = Object.entries(data);
console.log(entries); //Creando matriz
console.log(entries.length);

//Object.value
const data2 = {
  frontend: "Alessandro",
  backend: "Roberto",
  design: "Giovanni",
};

const values = Object.values(data2);
console.log(values); //Arreglo de valores
console.log(values.length); //3

//Padding
const string = "Hello";
console.log(string.padStart(7, "hi ")); //"hi Hello"
console.log(string.padEnd(12, "----")); //"Hello----"

//Trailing commas
const obj = {
  name: "Alessandro",
  age: 30,
};

//Async y Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
