


const deg = 6;
let day = new Date();
setInterval(() => {

  let hh = day.getHours() / 12;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  document.getElementById("hr").style.transform = "rotate(" + (hh + mm / 2) + "deg)";
  document.getElementById("mn").style.transform = "rotate(" + mm + "deg)";
  document.getElementById("sc").style.transform = "rotate(" + ss + "deg)";
})






// if (day.getHours() < 12) {
//   console.log("hii");
//   $("h1").innerHTML = "Good Morning";
// } else if (day.getHours() < 18) {
//   console.log("hii");
//   $("h1").innerHTML = "Good Afternoon";
// } else {
//   console.log("hiii");
//   $("h1").innerHTML = "Good Evening";
