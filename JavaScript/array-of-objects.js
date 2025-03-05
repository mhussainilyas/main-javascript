let student = [
  { sname: "Hussain", age: 19, dep: "BSCS" },
  { sname: "Suleman", age: 20, dep: "BSCS" },
  { sname: "Zaryab", age: 18, dep: "B.Phar" },
  { sname: "Hamid", age: 17, dep: "B.Com" },
  { sname: "Faizan", age: 19, dep: "BBA" },
];

// Iteration through array of object

// 1st method
for (let i = 0; i < student.length; i++) {
  //   console.log(student[i]);
  //   console.log(student[i].sname);
  //   console.log(student[i].age);
  //   console.log(student[i].dep);
  console.log(student[i].sname + " " + student[i].age);
}

// 2nd method
let data = student.map((val, i, arr) => {
  return val.sname + " is " + val.age + " years old.";
});
console.log(data);
for (let val of data) {
  console.log(val);
}
