// const with array
const arr = [1, 2, 3, 4, 5];
arr[0] = 10;
arr[3] = 40;
// arr = [10, 20, 30, 40, 50]; // Error
console.log(arr);

// const with objects
const obj = {
  name: "Hussain",
  age: 19,
};

obj.name = "Suleman";
obj.age = 20;
obj = { name: "suleman", age: 20 }; // Error
console.log(obj);
