let music = document.getElementById("music");
let progress = document.getElementById("progress");
let pauseBtn = document.getElementById("pause");


pausePlay = () => {
    if (pauseBtn.classList.contains("fa-pause")) {
        music.pause();
        pauseBtn.classList.remove("fa-pause")
        pauseBtn.classList.add("fa-play")
    }
    else {
        music.play();
        pauseBtn.classList.remove("fa-play")
        pauseBtn.classList.add("fa-pause")
    }
}

if (music.play()) {
    setInterval(() => {
        progress.value = music.currentTime;
    }, 500);
}

progress.onchange = () => {
    music.play();
    music.currentTime = progress.value;
    pauseBtn.classList.remove("fa-play")
    pauseBtn.classList.add("fa-pause")
}


