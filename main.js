const container = document.querySelector("#cardcontainer");
const arrow = document.querySelector("#arrow-right");
const wrapper = document.querySelector(".carousel-wrapper");

const cards = document.querySelectorAll(".project-card");

let index = 0;
const visibleCards = 2; // 👈 aanpassen naar jouw layout

arrow.addEventListener("click", () => {
    index++;

    const maxIndex = cards.length - visibleCards;

    if (index > maxIndex) {
        index = 0;
    }

    const gap = parseFloat(getComputedStyle(container).gap);
    const cardWidth = cards[0].offsetWidth + gap;

    container.style.transform = `translateX(-${index * cardWidth}px)`;

    // 👇 fade toggle (WERKT NU WEL)
    if (index === maxIndex) {
        wrapper.classList.add("no-fade");
    } else {
        wrapper.classList.remove("no-fade");
    }
});