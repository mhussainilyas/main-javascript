let str = "Javascript is a great language.";

// charAt()
// Returns the character at a specified index in a string.
// let output = str.charAt(3);

// charCodeAt()
// Returns the Unicode of the character at a specified index.
// let output = str.charCodeAt(3);

// fromCharCode()
// Creates a string from the specified Unicode values.
// let output = String.fromCharCode(65);
// let output = String.fromCharCode(97);

// concat()
// Concatenates two or more strings and returns a new string.
// let str1 = "Muhammad";
// let str2 = "Hussain";
// let str3 = "Ilyas";
// let newStr = str1.concat(" ", str2, " ", str3);

// split()
// Splits a string into an array of substrings based on a specified delimiter.
// let output = str.split(" ");
// let output = str.split("a");
// let output = str.split("");

// repeat()
// Repeats a string a specified number of times.
// let output = str.repeat(1);
// let output = str.repeat(2);
// let output = str.repeat(4);

// slice()
// Extracts a section of a string and returns it as a new string.
// let output = str.slice(3);
// let output = str.slice(3, 10);
// let output = str.slice(0);
// let output = str.slice(-1);
// let output = str.slice(-2);

// substr()
// Extracts a substring from a string, starting from a specified index for a specified number of characters. it is deprecated.
// let output = str.substr(2);
// let output = str.substr(2, 6);
// let output = str.substr(3, 2);

// substring()
// Extracts characters from a string between two specified indexes.
// let output = str.substring(2, 7);
// let output = str.substring(0, 1);

// toString()
// Converts and returns a string representation of a string object.
// let num = 100;
// let arr = [10, 20, 30];
// let arr = [10, 20, 30];
// let output = arr.toString();
// console.log(typeof arr);
// console.log(typeof output);

// valueOf()
// Returns the primitive string value of a String object.
let output = str.valueOf();

console.log(output);
