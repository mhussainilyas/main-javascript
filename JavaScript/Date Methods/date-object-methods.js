// let now = new Date();
// let now = new Date("April 27 2005");
// document.write(now);

// toDateString()
// document.write(now.toDateString());

// date get methods
// document.write(now.getDate());
// document.write(now.getFullYear());
// document.write(now.getMonth());
// document.write(now.getDay());
// document.write(now.getTime());
// document.write(now.getHours());
// document.write(now.getMinutes());
// document.write(now.getSeconds());
// document.write(now.getMilliseconds());

// date set methods
// now.setDate(14);
// now.setMonth(7);
// now.setFullYear(2026);
// now.setHours(2);
// now.setMinutes(50);
// now.setSeconds(50);
// now.setMilliseconds(500);
// document.write(now);

// Example 01
// const addDayToDate = (date, days) => {
//   let new_date = date.setDate(date.getDate() + days);
//   return new Date(new_date);
// };
// let now = new Date("2005-04-28");
// let newDate = addDayToDate(now, 7);
// document.write(newDate);

// Example 02
// function diffBetTwoDates(d1, d2) {
//   let val = Math.abs(d1 - d2);
//   let millSec = 24 * 60 * 60 * 1000;
//   return Math.round(val / millSec);
// }
// let date1 = new Date();
// let date2 = new Date("April 27 2005");
// document.write(diffBetTwoDates(date1, date2));
