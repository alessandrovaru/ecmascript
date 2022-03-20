//Dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

//BIG INT
const bigInt = 9007199254740991n;
const anotherBigInt = BigInt(9007199254740991);
console.log(bigInt);
console.log(anotherBigInt);

// Promise AllSettled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// Global This
console.log(globalThis);

//Operador nulo
const foo = null ?? "default";
console.log(foo);

//Optional Chaining
const user = {};

console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log(user.profile.email);
} else {
  console.log("No hay email");
}
