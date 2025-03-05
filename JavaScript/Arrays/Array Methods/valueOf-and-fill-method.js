let arr = ["Hussain", "Asad", "Shahran", "Khuzaima"];
let newArr = [100, 200, 300, 400];

// valueOf()
// return the all elements as value of an array.
let val = arr.valueOf();
document.write(val + "<br>");

// fill()
// fill all the elements of array with a static value.
let result = newArr.fill(50);
// let result = arr.fill("Ahmad");
document.write(result + "<br>");