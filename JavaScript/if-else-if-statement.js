// =========================
//   if-else-if-statement
// =========================

// Example 01
let time = 10;
if (time <= 12) {
  document.writeln("Good Morning!!!");
} else if (time > 12 && time <= 18) {
  document.writeln("Good Afternoon!!!");
} else {
  document.writeln("Good Evening!!!");
}

document.write("<br />");

// Example 02
let per = 55;
if (per >= 80 && per <= 100) {
  document.writeln("You are in merit.");
} else if (per >= 60 && per < 80) {
  document.writeln("You are in Ist Division.");
} else if (per >= 45 && per < 60) {
  document.writeln("You are in IInd Division.");
} else if (per >= 33 && per < 45) {
  document.writeln("You are in IIIrd Division");
} else if (per < 33) {
  document.writeln("You are fail.");
} else {
  document.write("Please enter the valid percentage.");
}
