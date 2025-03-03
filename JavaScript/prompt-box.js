// prompt("Please Enter Your Password: ");
// let a = prompt("Enter your name: ");
// document.write(a);

let day = prompt("Enter a day number: ");

switch (day) {
  case "1":
    document.write("Today is Sunday");
    break;
  case "2":
    document.write("Today is Monday");
    break;
  case "3":
    document.write("Today is Tuesday");
    break;
  case "4":
    document.write("Today is wednesday");
    break;
  case "5":
    document.write("Today is Thursday");
    break;
  case "6":
    document.write("Today is Friday");
    break;
  case "7":
    document.write("Today is Saturday");
    break;
  default:
    document.write("Please enter the valid day number.");
}
