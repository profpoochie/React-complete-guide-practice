/*
function printMyName(name) {
    console.log(name);
}

printMyName('name');*/

const printMyName = (name) => {
  console.log(name);
};
printMyName("Max");

// alternative syntax for one argument
const printMyName2 = (name) => {
  console.log(name);
};
printMyName2("Max2");

// function with no argument
const printMyName3 = () => {
  console.log("Max3");
};
printMyName3();

// more than one argument
const printMyName4 = (name, age) => {
  console.log(name, age);
};
printMyName4("Max", 13);

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(2));

// shorter version
const multiply2 = (number) => number * 2;
console.log(multiply2(2));
