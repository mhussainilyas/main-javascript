// 1st Method
// let obj = {
//   fname: "Hussain",
//   age: 19,
//   salary: () => {
//     return 10_000;
//   },
// };

// 2nd Method
let obj = {
  fname: "Hussain",
  age: 19,
  salary: function () {
    return 10_000;
  },
};

// output
console.log(obj.salary());
