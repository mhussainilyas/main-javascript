let arr = [
  ["Hussain", 19, "male", "BSCS"],
  ["Hamid", 20, "male", "BSIT"],
  ["Farah", 22, "female", "BSSC"],
  ["Husnain", 18, "male", "BBA"],
];

// Accessing values
document.write(arr[0][3] + "<br>"); // BSCS
document.write(arr[2][2] + "<br>"); // female
document.write(arr[3][1] + "<br>"); // 18

document.write("<br><br>");

// Loop through multi-dimensional array
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

document.write("<br><br>");

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}

// Table
document.write("<table border=1>");
for (let i = 0; i < arr.length; i++) {
  document.write("<tr>");
  for (let j = 0; j < arr[i].length; j++) {
    document.write("<td>" + arr[i][j] + "</td>");
  }
  document.write("</tr>");
  document.write("<br>");
}
document.write("</table>");
