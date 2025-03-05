let arrStr = ["Hussain", "Suleman"];
let arrStr1 = ["Zaryab", "Hamid"];
let arrStr2 = ["Ahmad", "Umar"];
let arrNum = [10, 20];
let arrNum1 = [30, 40];
let arrNum2 = [50, 60];

// concat()
// merge two or more arrays as a single array.
let newArrStr = arrStr.concat(arrStr1, arrStr2);
let newArrNum = arrNum.concat(arrNum1, arrNum2);
document.write(newArrStr + "<br>");
document.write(newArrNum + "<br>");

// join()
// convert array into string.
// let newAryStr = arrStr.join(" ");
let newAryStr = arrStr.join(" / ");
// let newAryNum = arrNum.join(" ");
let newAryNum = arrNum. join(" / ");
document.write(newAryStr + "<br>");
document.write(newAryNum + "<br>");
document.write(typeof newAryNum + "<br>");