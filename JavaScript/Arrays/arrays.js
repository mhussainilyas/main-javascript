let ary = ["Hussain", "Suleman", "Zaryab"];
let ary2 = ["Hamid", 17, null];
let ary1 = [19, 20, 18];

// Accesing values
document.write(ary[1] + "<br>"); // Suleman
document.write(ary2[2] + "<br>"); // null
document.write(ary1[0] + "<br>"); // 19

// Array Length
document.write(ary.length + "<br>");

// Loop through arrays
for (let i = 0; i < ary.length; i++) {
  document.write(ary[i] + "<br>");
}

// for of loop
for (let val of ary2) {
  document.write(val + "<br>");
}

// Calculation
let sum = 0;
for (let val of ary1) {
  sum += val;
}
document.write("Sum is: " + sum);
