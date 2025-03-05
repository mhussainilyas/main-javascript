let arrStr = ["Hussain", "Idrees", "Awais", "Waqas"];
let arrNum = [100, 200, 300, 400, 500];

// forEach()
// it take every element of an array and perform some operations.

arrStr.forEach((val, i) => {
  document.write(i + ": " + val + "<br>");
});

arrNum.forEach((num, i) => {
  document.write(i + ": " + num * num + "<br>");
});