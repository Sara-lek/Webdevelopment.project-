let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = document.getElementById("display").innerText;
  const lapContainer = document.getElementById("laps");
  const lapEntry = document.createElement("div");
  lapEntry.innerText = `Lap: ${lapTime}`;
  lapContainer.appendChild(lapEntry);
}
