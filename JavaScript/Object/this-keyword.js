// Example 01
let obj = {
  fname: "Hussain",
  age: 19,
  greet: function () {
    return this.fname + " is " + this.age + " years old.";
  },
};

// Example 02
// let obj = {
//   fname: "Hussain",
//   age: 19,
//   greet: () => {
//     return obj.fname + " is " + obj.age + " years old.";
//   },
// };

console.log(obj.greet());
