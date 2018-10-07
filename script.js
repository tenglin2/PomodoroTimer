// const shortButton = document.getElementById("short");
// shortButton.addEventListener("click", (e) => {
//   shortButton.textContent = "Jump";
//   shortButton.style.backgroundColor = "yellow";
// });
var shortTime = 10;
var workTime = 45;
var longTime = 20;
var realTime = 45;

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
    realTime = shortTime;
  }

});
workButton.addEventListener("click", (e) => {
  if (currentTime !== "work"){
    timerclock.textContent = workTime;
    currentTime = "work";
    realTime = workTime;
  }

});
longButton.addEventListener("click", (e) => {
  if (currentTime !== "long"){
    timerclock.textContent = longTime;
    currentTime = "long";
    realTime = longTime;
  }
});

// var hello = document.getElementById("hello");
// hello.textContent = "Mongoose";
var newTime;

var editButton = document.getElementById("edit");
editButton.addEventListener("click", (e) => {
  newTime = prompt("Please enter a new time in format xx:xx");
  switch (currentTime){
    case "short":
      shortTime = newTime;
      timerclock.textContent = shortTime;
      break;
    case "work":
      workTime = newTime;
      timerclock.textContent = workTime;
      break;
    case "long":
      longTime = newTime;
      timerclock.textContent = longTime;
      break;
    default:
      console.log("Something went wrong!");
  }
});

var myInterval = -1;
var actButton = document.getElementById("act");
actButton.addEventListener("click", function(event){
  // actButton.textContent = "Works";
  // timerclock.textContent = parseInt(timerclock.textContent)-1;
  if (myInterval == -1) {
    actButton.innerHTML = "Pause";
    myInterval = setInterval(function(){
      realTime--;
      if (realTime < 0){
        actButton.innerHTML = "Start";
        clearInterval(myInterval);
        myInterval = -1;
        switch (currentTime){
          case "short":
            realTime = shortTime;
            break;
          case "work":
            realTime = workTime;
            break;
          case "long":
            realTime = longTime;
            break;
          default:
            console.log("Something went wrong here.");
        }
      }
      timerclock.innerHTML = realTime;
    }, 1000);
  }else{
    actButton.innerHTML = "Start";
    clearInterval(myInterval);
    myInterval = -1;
  }
});

// var myInterval = -1;

// var myInterval = -1;
// var actButton = document.getElementById("act");
// actButton.addEventListener("click", (e) => {
//   console.log(myInterval)
//   if (myInterval === -1){
//     myInterval = setInterval(startTimer, 1000);
//   }else{
//     clearInterval(myInterval);
//     myInterval = -1;
//   }
// })
//
// function startTimer(){
//   console.log("runs")
//   realTime--;
//   if (realTime < 0){
//     realTime == 45;
//   }
//   timerclock.textContent = realTime;
// }
//
//
// function startTimer(){
//   actButton.addEventListener("click", (e) => {
//     // if (myInterval === -1){
//       // myInterval = setInterval(changeColor(), 1000);
//     // }else{
//     //   clearInterval(myInterval);
//     // }
//
//     var myVar = setInterval(changeColor, 1000);
//   });
// }
//
//
// function changeColor(){
//   // if (startButton.style.backgroundColor === "lightblue"){
//   //   startButton.style.backgroundColor = "lightgreen";
//   // }else{
//   //   startButton.style.backgroundColor = "lightblue";
//   // }
//   // alert("hello");
//
//   // var time = parseInt(timerclock.textContent) - 1;
//   // timerclock.textContent = time;
//
//   actButton.style.Background = actButton.style.backgroundColor == "lightblue" ? "pink" : "lightblue";
// }
//
// function stopColor(){
//   actButton.addEventListener()
//   clearInterval(myVar);
// }
//
// startTimer();
