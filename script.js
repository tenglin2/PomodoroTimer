// const shortButton = document.getElementById("short");
// shortButton.addEventListener("click", (e) => {
//   shortButton.textContent = "Jump";
//   shortButton.style.backgroundColor = "yellow";
// });
var shortTime = "10:00";
var workTime = "45:00";
var longTime = "20:00";

var currentTime = "work";

// var timerclock = document.querySelector(".timer_container");
// timerclock.addEventListener("click", (e) => {
//   timerclock.style.backgroundColor = "yellow";
// });
var timerclock = document.querySelector("#timerclock");
timerclock.textContent = workTime;

var shortButton = document.getElementById("short");
var workButton = document.getElementById("work");
var longButton = document.getElementById("long");

shortButton.addEventListener("click", (e) => {
  if (currentTime !== "short"){
    timerclock.textContent = shortTime;
    currentTime = "short";
  }

});
workButton.addEventListener("click", (e) => {
  if (currentTime !== "work"){
    timerclock.textContent = workTime;
    currentTime = "work";
  }

});
longButton.addEventListener("click", (e) => {
  if (currentTime !== "long"){
    timerclock.textContent = longTime;
    currentTime = "long";
  }
});

var hello = document.getElementById("hello");
hello.textContent = "Mongoose";
