let displayTime = document.getElementById("displayTime");
let timer = null;

let [sec, min, hour] = [0, 0, 0];

stopWatch = () => {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hour++;
        }
    }
    let h = hour <= 9 ? "0" + hour : hour;
    let m = min <= 9 ? "0" + min : min;
    let s = sec <= 9 ? "0" + sec : sec;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}


startTime = () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000);
}

resetTime = () => {
    clearInterval(timer);
    [sec, min, hour] = [0, 0, 0];
    displayTime.innerHTML = "00" + ":" + "00" + ":" + "00";
}
pauseTime = () => {
    clearInterval(timer);
}
