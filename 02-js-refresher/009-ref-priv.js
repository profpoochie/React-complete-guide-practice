// Reference and primitive types

// Primitive types - copy the value
const number = 1;
const num2 = number;
console.log(num2);

// Reference types - objects and arrays - pointer
const person = {
  name: "Max",
};

const secondPerson = person;
//using the spread operator ... to get the real copy
const thirdPerson = {
  ...person,
};
person.name = "Manu";
console.log(secondPerson);
console.log(thirdPerson);
