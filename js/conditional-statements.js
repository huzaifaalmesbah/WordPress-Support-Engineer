var now = new Date();
var month = now.getMonth();
var time = now.getHours();
// If else with ==
if (month == 3) {
  console.log("Thanks, This Righ Month ");
} else {
  console.log("Sorry, This Worng");
}
// if else check with < and time
if (time < 5) {
  console.log("Hello, Good Night");
}
if (time < 11) {
  console.log("Hello, Good Mornig");
}
if (time < 16) {
  console.log("Hello, Good Afternoon");
}
if (time < 17) {
  console.log("Hey, Good Evening ");
}
if (time < 23) {
  console.log("Hello, Good Night");
} else {
  console.log("I can't Now");
}
