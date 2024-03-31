let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
        isRunning = false;
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").innerText = "Stop";
        isRunning = true;
    }
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").innerText = formattedTime;
}

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, "0");
    return `${minutes}:${seconds}:${centiseconds}`;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    document.getElementById("startStop").innerText = "Start";
    isRunning = false;
}

function lap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    document.getElementById("laps").appendChild(lapItem);
}
