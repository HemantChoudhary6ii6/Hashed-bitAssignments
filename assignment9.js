//1
function variableScopeDemo() {
  var varVariable = "I am var";     // Function scoped
  let letVariable = "I am let";     // Block scoped
  const constVariable = "I am const"; // Block scoped

  if (true) {
    var varVariable = "var changed in block";
    let letVariable = "let inside block";
    const constVariable = "const inside block";

    console.log("Inside block:");
    console.log(letVariable); // "let inside block"
    console.log(constVariable); // "const inside block"
  }

  console.log("Outside block:");
  console.log(varVariable); // "var changed in block"
  console.log(letVariable); // "I am let"
  console.log(constVariable); // "I am const"
}
variableScopeDemo();

//2 
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());

//3 
function modifyArray(arr) {
  arr.push("NewElement");
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray(["One", "Two", "Three"]));

//4 
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));

//5
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers(numbers));

//6 
const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};
function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and work as a ${p.occupation}.`);
}
greetPerson(person);

//7 
function getArea(rect) {
  return rect.width * rect.height;
}
console.log("Area of rectangle:", getArea({ width: 5, height: 10 }));

//8
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));

//9 
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));

//10 
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of array:", sumArray(numbers));
