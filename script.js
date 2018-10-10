
var shortTime = "10:00";
var workTime = "45:00";
var longTime = "20:00";
var realTime = workTime;

var currentTime = "work";

var timerClock = document.querySelector("#timerClock");
timerClock.innerHTML = workTime;

var shortButton = document.getElementById("short");
var workButton = document.getElementById("work");
var longButton = document.getElementById("long");

workButton.style.backgroundColor = "lightgreen";

shortButton.addEventListener("click", (e) => {
  if (currentTime !== "short"){
    timerClock.innerHTML = shortTime;
    currentTime = "short";
    realTime = shortTime;
    shortButton.style.backgroundColor = "lightgreen";
    workButton.style.backgroundColor = "lightblue";
    longButton.style.backgroundColor = "lightblue";
  }

});
workButton.addEventListener("click", (e) => {
  if (currentTime !== "work"){
    timerClock.innerHTML = workTime;
    currentTime = "work";
    realTime = workTime;
    workButton.style.backgroundColor = "lightgreen";
    shortButton.style.backgroundColor = "lightblue";
    longButton.style.backgroundColor = "lightblue";
  }

});
longButton.addEventListener("click", (e) => {
  if (currentTime !== "long"){
    timerClock.innerHTML = longTime;
    currentTime = "long";
    realTime = longTime;
    longButton.style.backgroundColor = "lightgreen";
    shortButton.style.backgroundColor = "lightblue";
    workButton.style.backgroundColor = "lightblue";
  }
});




var actButton = document.getElementById("act");
var resetButton = document.getElementById("reset")
var editButton = document.getElementById("edit");

var myInterval = -1;

function actButtonListener(){
  actButton.addEventListener("click", function(event){
    actionTimer();
  });
}
function actionTimer(){
  // If the timer is not running...
  if (myInterval === -1) {
    actButton.innerHTML = "Pause";
    myInterval = setInterval(function(){
      var realTimeUnits = realTime.split(":");
      var minutes = parseInt(realTimeUnits[0]);
      var seconds = parseInt(realTimeUnits[1]);

      // Condition if timer runs out, we stop the interval and reset the time to whatever it was originally set to. Should implement an alarm of some sort.
      if(minutes === 0 && seconds === 0){
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
        alert("Timer is up!");
      }else{
        // Case just to run. Normal time countdown.
        if (seconds > 0){
          seconds--;
        }else{
          minutes--;
          seconds = 59;
        }

        realTime = `${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
      }
      timerClock.innerHTML = realTime;

    }, 1000);
  }else{
    actButton.innerHTML = "Start";
    clearInterval(myInterval);
    myInterval = -1;
  }
}


function resetButtonListener(){
  resetButton.addEventListener("click", event => {
    resetTimer();
  });
}
function resetTimer(){
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
  timerClock.innerHTML = realTime;
}

function editButtonListener(){
  editButton.addEventListener("click", (e) => {
    editTimer();
  });
}

function editTimer(){
  validTime = false;
  while(validTime === false){
    var newTime = prompt("Please enter a new time in format xx:xx");
    if (newTime.length !== 5 || newTime[2] !== ":" || newTime[0] >= 6 || newTime[3] >= 6){
      alert("Your input is not valid. Please input it again with proper formatting.")
    }else{
      validTime = true;
    }
  }

  switch (currentTime){
    case "short":
      shortTime = newTime;
      realTime = newTime;
      timerClock.innerHTML = shortTime;
      break;
    case "work":
      workTime = newTime;
      realTime = newTime;
      timerClock.innerHTML = workTime;
      break;
    case "long":
      longTime = newTime;
      realTime = newTime;
      timerClock.innerHTML = longTime;
      break;
    default:
      console.log("Something went wrong!");
  }
}




actButtonListener();
resetButtonListener();
editButtonListener();
