// Example 01
let day = 3;

switch (day) {
  case 1:
    document.write("Today is Sunday");
    break;
  case 2:
    document.write("Today is Monday");
    break;
  case 3:
    document.write("Today is Tuesday");
    break;
  case 4:
    document.write("Today is wednesday");
    break;
  case 5:
    document.write("Today is Thursday");
    break;
  case 6:
    document.write("Today is Friday");
    break;
  case 7:
    document.write("Today is Saturday");
    break;
  default:
    document.write("Please enter the valid day number.");
}

document.write("<br>");

// Example 02
let number = 4;

switch (number) {
  case 1:
  case 2:
  case 3:
    document.write("Good Numbers...");
    document.write("<br>");
    document.write("Happiness");
    break;
  case 4:
  case 5:
  case 6:
    document.write("Bad Numbers...");
    document.write("<br>");
    document.write("Sadness");
    break;
}

document.write("<br>");

// Example 03
let age = 25;

switch (true) {
  case age >= 10 && age < 20:
    document.write("You are eligible");
    break;
  case age >= 20 && age < 30:
    document.write("You are not eligible");
    break;
  default:
    document.write("Enter the valid age.");
}
