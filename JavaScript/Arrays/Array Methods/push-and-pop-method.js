let arrStr = ["Hussain", "Suleman", "Zaryab"];
let arrNum = [10, 20, 30];
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");

// pop()
// delete the last array element.
arrStr.pop();
arrNum.pop();
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");

// push()
// add new element in the last of array.
arrStr.push("Hamid");
arrStr.push("Faizan", "Shoaib");
arrNum.push(50);
arrNum.push(60, 70);
document.write(arrStr + "<br>");
document.write(arrNum + "<br>");