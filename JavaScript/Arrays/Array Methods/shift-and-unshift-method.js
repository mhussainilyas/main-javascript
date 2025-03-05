let arrNum = [10, 20, 30, 40];
let arrStr = ["Hussain", "Ali", "Hassan", "Noman"];
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");

// shift()
// delete first element of an array.
arrNum.shift();
arrStr.shift();
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");

// unshift()
// add new element at the starting of an array.
arrNum.unshift(100);
arrNum.unshift(70, 5);
arrStr.unshift("Ahmad");
arrStr.unshift("Aftab", "Umar");
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");
