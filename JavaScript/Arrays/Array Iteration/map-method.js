let data = [
  { fname: "Muhammad", lname: "Hussain" },
  { fname: "Zaryab", lname: "Haider" },
  { fname: "Suleman", lname: "Amjad" },
];

// map()
// perform operations on every element of an array and return a new array filled with that elements.

let newArr = data.map((val, i, arr) => {
  console.log(val);
  console.log(i);
  console.log(arr);
  return val.fname + " " + val.lname;
});
console.log(newArr);
