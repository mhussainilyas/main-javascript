let arrStr = ["Hussain", "Suleman", "Zaryab", "Ahmad", "Suleman"];
let arrNum = [100, 200, 300, 400, 500, 200];

// indexOf()
// syntax: indexOf(elem, start);
// return index value of spacified element.
// let i = arrStr.indexOf("Zaryab");
// let i = arrStr.indexOf("Suleman", 2);
// let i = arrNum.indexOf(400);
// let i = arrNum.indexOf(200, 2);
// document.write(i + "<br>");

// lastIndexOf()
// syntax: lastIndexOf(elem, start)
// return index value of spacified element from the last of an array.
// let i = arrStr.lastIndexOf("Zaryab");
// let i = arrStr.lastIndexOf("Suleman", 2);
// let i = arrNum.lastIndexOf(400);
let i = arrNum.lastIndexOf(200, 3);
document.write(i + "<br>");