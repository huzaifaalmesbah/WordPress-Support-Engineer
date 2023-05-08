var now = new Date();
var day = now.getDay();
var time = now.getHours();

// Day Name Show Using switch

let dayName;
switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
}

console.log("Day: " + dayName);

// Time Show
var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();

console.log("Time:" + h + ":" + m + ":" + s);

// Greeting
let greeting;
switch (true) {
  case time < 12:
    greeting = "Good Moring";
    break;
  case time < 17:
    greeting = "Good Afternoon";
    break;
  case time < 18:
    greeting = "Good Evening";
    break;
  case time < 23:
    greeting = "Good Night";
    break;
  case time < 5:
    greeting = "Good Night";
    break;
}

console.log(greeting);
