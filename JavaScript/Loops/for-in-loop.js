// for-in loop is usually used with objects.
let obj = {
  fname: "Muhammad",
  lname: "Hussain",
  age: 19,
  email: "h3980796@gmail.com",
};

for (let key in obj) {
  document.write(key + "<br>");
}

document.write("<br>");

for (let key in obj) {
  document.write(obj[key] + "<br>");
}

document.write("<br>");

for (let key in obj) {
  document.write(key + ": " + obj[key] + "<br>");
}
