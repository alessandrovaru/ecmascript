const obj = {
  name: "John",
  age: 30,
  country: "MX",
};

let { name, ...all } = obj;
console.log(name, all);

//Spread Operator
const obj1 = {
  name: "John",
  age: 30,
};

const obj2 = {
  ...obj1,
  country: "MX",
};

console.log(obj2);

//Promise .finally
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

//Agrupar regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
