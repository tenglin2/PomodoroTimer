// const shortButton = document.getElementById("short");
// shortButton.addEventListener("click", (e) => {
//   shortButton.textContent = "Jump";
//   shortButton.style.backgroundColor = "yellow";
// });
var shortTime = "10:00";
var workTime = "45:00";
var longTime = "20:00";
var realTime = workTime;

var currentTime = "work";


// var timerClock = document.querySelector(".timer_container");
// timerClock.addEventListener("click", (e) => {
//   timerClock.style.backgroundColor = "yellow";
// });
var timerClock = document.querySelector("#timerClock");
timerClock.textContent = workTime;

var shortButton = document.getElementById("short");
var workButton = document.getElementById("work");
var longButton = document.getElementById("long");

workButton.style.backgroundColor = "lightgreen";

shortButton.addEventListener("click", (e) => {
  if (currentTime !== "short"){
    timerClock.textContent = shortTime;
    currentTime = "short";
    realTime = shortTime;
    shortButton.style.backgroundColor = "lightgreen";
    workButton.style.backgroundColor = "lightblue";
    longButton.style.backgroundColor = "lightblue";
  }

});
workButton.addEventListener("click", (e) => {
  if (currentTime !== "work"){
    timerClock.textContent = workTime;
    currentTime = "work";
    realTime = workTime;
    workButton.style.backgroundColor = "lightgreen";
    shortButton.style.backgroundColor = "lightblue";
    longButton.style.backgroundColor = "lightblue";
  }

});
longButton.addEventListener("click", (e) => {
  if (currentTime !== "long"){
    timerClock.textContent = longTime;
    currentTime = "long";
    realTime = longTime;
    longButton.style.backgroundColor = "lightgreen";
    shortButton.style.backgroundColor = "lightblue";
    workButton.style.backgroundColor = "lightblue";
  }
});

// var hello = document.getElementById("hello");
// hello.textContent = "Mongoose";
var newTime;

function editButtonListener(){
  editButton.addEventListener("click", (e) => {
    validTime = false;
    while(validTime === false){
      newTime = prompt("Please enter a new time in format xx:xx");
      if (newTime.length !== 5 || newTime[2] !== ":" || newTime[0] >= 6 || newTime[3] >= 6){
        alert("Your input fucking sucks, do it again.")
      }else{
        validTime = true;
      }
    }

    switch (currentTime){
      case "short":
        shortTime = newTime;
        timerClock.textContent = shortTime;
        break;
      case "work":
        workTime = newTime;
        timerClock.textContent = workTime;
        break;
      case "long":
        longTime = newTime;
        timerClock.textContent = longTime;
        break;
      default:
        console.log("Something went wrong!");
    }
  });
}
var editButton = document.getElementById("edit");



var actButton = document.getElementById("act");

function actButtonListener(){
  actButton.addEventListener("click", function(event){
    var myInterval = -1;
    if (myInterval == -1) {
      actButton.innerHTML = "Pause";
      myInterval = setInterval(function(){
        console.log(realTime);
        var minutes, seconds = realTime.split(":");
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);
        console.log(minutes);
        console.log(typeof minutes)
        if(minutes === 0 && seconds < 0){
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
          timerClock.innerHTML
        }
        // if (realTime < 0){
        //   actButton.innerHTML = "Start";
        //   clearInterval(myInterval);
        //   myInterval = -1;
        //   switch (currentTime){
        //     case "short":
        //       realTime = shortTime;
        //       break;
        //     case "work":
        //       realTime = workTime;
        //       break;
        //     case "long":
        //       realTime = longTime;
        //       break;
        //     default:
        //       console.log("Something went wrong here.");
        //   }
        // }
        timerClock.innerHTML = realTime;
      }, 1000);
    }else{
      actButton.innerHTML = "Start";
      clearInterval(myInterval);
      myInterval = -1;
    }
  });
}


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
//   timerClock.textContent = realTime;
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
//   // var time = parseInt(timerClock.textContent) - 1;
//   // timerClock.textContent = time;
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

editButtonListener();
actButtonListener();
