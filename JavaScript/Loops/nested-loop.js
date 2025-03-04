// Example 01
// let i, j;
// for (i = 1; i <= 100; i = i + 10) {
//   for (j = i; j < i + 10; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// Example 02 (Table)
// let i, j;
// document.write("<table border=1>");
// for (i = 1; i <= 100; i = i + 10) {
//   document.write("<tr>");
//   for (j = i; j < i + 10; j++) {
//     document.write("<td>");
//     document.write(j);
//     document.write("</td>");
//   }
//   document.write("</tr>");
//   document.write("<br>");
// }
// document.write("</table>");

// Example 03
// let i, j;
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

// Example 04
// let i, j;
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(i + " ");
//   }
//   document.write("<br>");
// }

// Example 05
// let i, j;
// for (i = 5; i >= 1; i--) {
//   for (j = 1; j <= i; j++) {
//     document.write(i + " ");
//   }
//   document.write("<br>");
// }

// Example 06
let i, j;
for (i = 5; i >= 1; i--) {
  for (j = i; j >= 1; j--) {
    document.write(j + " ");
  }
  document.write("<br>");
}