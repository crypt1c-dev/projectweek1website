const iframe = document.getElementById("game-frame");
const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");

/* animatie puntjes */
let dots = 0;

const animation = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingText.textContent = "Loading" + ".".repeat(dots);
}, 500);

/* iframe load */
iframe.addEventListener("load", () => {

    /* extra wachttijd voor Unity */
    setTimeout(() => {

        clearInterval(animation);

        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "opacity 0.5s";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);

    }, 10000); // pas aan indien nodig
});