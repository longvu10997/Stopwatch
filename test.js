let seconds = 0;
let tens = 0;
let appendSeconds = document.getElementById('seconds');
let appendTens = document.getElementById("tens");
let Interval;

function start() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(Interval);
}

function reset() {
    clearInterval(Interval);
    seconds = 0;
    tens = 0;
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
}

function startTimer() {
    tens++;
    if(tens <= 9 ) {
        appendTens.innerHTML = `0${tens}`;
    }
    if(tens > 9 ) {
        appendTens.innerHTML = tens;
    }
    if(tens > 99 ) {
        seconds++;
        appendSeconds.innerHTML = `0${seconds}`;
        tens = 0;
        appendTens.innerHTML = "00";
    }
    if(seconds > 9 ){
        appendSeconds.innerHTML = seconds;  
    }
}