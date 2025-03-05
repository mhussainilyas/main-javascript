let obj = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
  email: "h3980796@gmail.com",
  "full name": "Muhammad Hussain Ilyas",
};

// Accessing values
console.log(obj);
console.log(obj.age);
console.log(obj.fname);
console.log(obj["email"]);
console.log(obj["full name"]);

// Adding values
obj.dep = "BSCS";
obj.phone = "03020133320";
console.log(obj);

// updating values
obj.fname = "Suleman";
obj.lname = "Amjad";
obj.age = 20;
console.log(obj);

// deleting values
delete obj.phone;
delete obj.age;
console.log(obj);
