// fname & lname are parameters.
function greet(fname, lname) {
  let greeting = "Assalam-o-alaikum" + " " + fname + " " + lname;
  document.write(greeting);
}

// "Muhammad" & "hussain" are arguments.
greet("Muhammad", "Hussain"); // Assalam-o-alaikum Muhammad Hussain
document.write("<br>");
greet("Muhammad"); // Assalam-o-alaikum Muhammad undefined
document.write("<br>");
greet(); // Assalam-o-alaikum undefined undefined
document.write("<br>");

// ======================
//   Default Parameters
// ======================

function sayHello(name = "Hussain") {
  document.write("Hye!!! " + name);
}

sayHello();
document.write("<br>");
sayHello("Suleman");
document.write("<br>");

// =====================================
//   Operations performed in Functions
// =====================================

function add(a, b) {
  let c = a + b;
  document.write(c);
}

add(10, 50); // 60
document.write("<br>");

function cal(a, b) {
  let c = a + b * 10 - 5 / 2;
  document.write(c);
}

cal(10, 50); // 507.5
