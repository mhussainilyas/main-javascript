let obj = new Object();

// Adding values 
obj.fname = "Muhammad";
obj.lname = "Hussain";
obj.email = "h3980796@gmail.com";

console.log(obj);
console.log(obj.lname);
console.log(obj.fname);
console.log(obj.email);

// with fixed object limit value
let person = new Object(3);
person.first = "Hussain";
person.second = "Suleman";
person.third = "Zaryab";
person.fourth = "Hamid";
console.log(person);
console.log(person.fourth);