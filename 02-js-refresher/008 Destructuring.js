// On Destructuring

// Array destructuring
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// Object destructuring
class Person {
  name = "Max";
  age = 28;
}
const person = new Person();
console.log(person);
const { name } = person;
console.log(name);

// Example of object destructuring on ChatGPT
// Define an object
const person2 = {
  names: "John",
  age: 30,
  gender: "male",
};

// Destructure the object
const { names, age, gender } = person2;

// Log the destructured variables
console.log(names); // Output: "John"
console.log(age); // Output: 30
console.log(gender); // Output: "male"
