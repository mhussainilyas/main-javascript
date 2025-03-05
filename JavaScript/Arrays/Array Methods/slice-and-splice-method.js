let arrStr = ["Hussain", "Suleman", "zaryab"];
let arrNum = [10, 20, 30];

// slice()
// extract the different elements of an array.
// let newArrStr = arrStr.slice(1);
// let newArrStr = arrStr.slice(-2);
// let newArrStr = arrStr.slice(0, 2);
// let newArrNum = arrNum.slice(1);
// let newArrNum = arrNum.slice(-2);
// let newArrNum = arrNum.slice(0, 2);
// document.write(newArrStr + "<br>");
// document.write(newArrNum + "<br>");

// splice()
// it is used for multi purpose such as: add, delete, modify.
// syntax: splice(index, howManyDelete, elem...);
//1.  Adding
// arrStr.splice(1, 0, "Ahmad");
// arrStr.splice(-1, 0, "Ahmad");
// arrNum.splice(1, 0, 15);
// arrNum.splice(-1, 0, 15);
// 2. Deleting
// arrStr.splice(1, 2);
// arrStr.splice(-2, 2);
// arrNum.splice(1, 2);
// arrNum.splice(-2, 2);
// 3. Modifying
// arrStr.splice(1, 1, "Ali");
arrStr.splice(-1, 1, "Ali");
// arrNum.splice(1, 1, 25);
arrNum.splice(-1, 1, 25);
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");