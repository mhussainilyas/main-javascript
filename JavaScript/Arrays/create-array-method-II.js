let arr = new Array("Hussain", 19, "BSCS", null);
document.write(arr.length + "<br>");

// Adding value to an array
let arr1 = new Array();
arr1[0] = "Pakistan";
arr1[1] = "India";
arr1[2] = "China";
arr1[3] = "USA";
for (let val of arr1) {
  document.write(val + "<br>");
}

// Array with specific values
let newArray = new Array(3);
newArray[0] = 10;
newArray[1] = 20;
newArray[2] = 30;
document.write(newArray + "<br>");

// Getting values of array from user
let ary = new Array();
for (let i = 0; i <= 2; i++) {
  ary[i] = prompt("Enter the value: ");
}
document.write(ary);