const container = document.querySelector("#cardcontainer");
const arrow = document.querySelector("#arrow-right");
const wrapper = document.querySelector(".carousel-wrapper");

const cards = document.querySelectorAll(".project-card");

let index = 0;
const visibleCards = window.innerWidth <= 768 ? 1 : 2;
window.addEventListener("resize", () => {
  location.reload();
});

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

const skillValues = {
  html: "70%",
  css: "60%",
  js: "52%",
  csharp: "75%",
  aprem: "80%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const bars = document.querySelectorAll(".bar span");

    bars.forEach((bar) => {
      const cls = [...bar.classList].find((c) => skillValues[c]);

      if (cls) {
        bar.style.width = skillValues[cls];
      }
    });
  });
});

observer.observe(document.querySelector("#skill-section"));


const blogContainer =
    document.querySelector("#blogcontainer");

const blogArrow =
    document.querySelector("#blog-arrow");

let blogIndex = 0;

blogArrow.addEventListener("click", () => {

    const cards =
        blogContainer.querySelectorAll(".blog");

    blogIndex++;

    if (blogIndex >= cards.length)
        blogIndex = 0;

    blogContainer.style.transform =
        `translateX(-${blogIndex * cards[0].offsetWidth}px)`;
});