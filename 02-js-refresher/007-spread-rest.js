// use of the spread and rest operator "..."

// use of spread operator
const numbers = [1, 2, 3];
const newNumbersNoSpread = [numbers, 4];
const newNumbersSpread = [...numbers, 4];
console.log(newNumbersNoSpread);
console.log(newNumbersSpread);

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// Use of rest operator
const filtermod = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filtermod(1, 2, 3));
