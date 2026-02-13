const music = document.getElementById("bg-music");
const button = document.getElementById("music-btn");
button.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        button.textContent = "⏸ Pause";
    } else {
        music.pause();
        button.textContent = "▶ Play";
    }
});
