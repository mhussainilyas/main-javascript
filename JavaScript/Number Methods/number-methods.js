// 1. Number()
// let a = "100";
// let a = true;
// let a = false;
// let a = "10 99";
// let num = Number(a);
// console.log(typeof a);
// console.log(typeof num);
// console.log(num);

// 2. parseInt()
// let a = "10 88";
// let a = "88.78";
// let a = 100.99;
// console.log(a);
// console.log(typeof a);
// let num = Number.parseInt(a);
// console.log(num);
// console.log(typeof num);

// 3. parseFloat()
// let a = "10 88";
// let a = "88.78";
// let a = 100.99;
// console.log(a);
// console.log(typeof a);
// let num = Number.parseFloat(a);
// console.log(num);
// console.log(typeof num);

// 4. isFinite()
// let a = 10n;
// let a = 10;
// let a = "10";
// let a = Infinity;
// console.log(a);
// console.log(typeof a);
// let result = Number.isFinite(a);
// console.log(result);

// 5. isInteger()
// let a = "100";
// let a = 100;
// let a = true;
// let a = 100.76;
// console.log(a);
// console.log(typeof a);
// let result = Number.isInteger(a);
// console.log(result);

// 6. toFixed()
// let a = 5.56789;
// console.log(a);
// console.log(typeof a);
// let num = a.toFixed(4);
// console.log(num);
// console.log(typeof num);

// 7. toPrecision()
let a = 5.56789;
console.log(a);
console.log(typeof a);
let num = a.toPrecision(10);
console.log(num);
console.log(typeof num);

// 8. isNaN()