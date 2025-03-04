// Example 01
function fullName(fname = "first", lname = "last") {
  let statement = fname + " " + lname;
  return statement;
}

let fn = fullName("Muhammad", "Hussain");
document.write(fn);

// Example 02
function sum(sub1, sub2, sub3) {
  let s = sub1 + sub2 + sub3;
  return s;
}

function percentage(total) {
  let p = (total / 300) * 100;
  return p;
}

let total = sum(87, 92, 76);
let result = percentage(total);
console.log(result + "%");
