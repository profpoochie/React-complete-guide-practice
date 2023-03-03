// Classes, properties and methods on ES6
class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}
// inheritance using extends and super()
class Person extends Human {
  name = "Max";
  gender = "female";
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
