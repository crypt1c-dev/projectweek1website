const container = document.querySelector("#cardcontainer");
const arrow = document.querySelector("#arrow-right");
const wrapper = document.querySelector(".carousel-wrapper");

const cards = document.querySelectorAll(".project-card");

function setupCarousel({ containerSelector, wrapperSelector, arrowSelector, cardSelector }) {
  const container = document.querySelector(containerSelector);
  const wrapper = document.querySelector(wrapperSelector);
  const arrow = document.querySelector(arrowSelector);
  const cards = container ? container.querySelectorAll(cardSelector) : [];

  if (!container || !wrapper || !arrow || cards.length === 0) return;

  let index = 0;

  function updateUI() {
    const containerWidth = container.parentElement.clientWidth;
    const totalCardsWidth = Array.from(cards).reduce((sum, card) => {
      const style = getComputedStyle(card);
      const marginLeft = parseFloat(style.marginLeft) || 0;
      const marginRight = parseFloat(style.marginRight) || 0;
      return sum + card.offsetWidth + marginLeft + marginRight;
    }, 0);

    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    const totalWidthWithGaps = totalCardsWidth + gap * Math.max(cards.length - 1, 0);

    const fitsOnScreen = totalWidthWithGaps <= containerWidth + 1;

    arrow.style.display = fitsOnScreen ? "none" : "flex";
    wrapper.classList.toggle("has-overflow", !fitsOnScreen);

    if (fitsOnScreen) {
      index = 0;
      container.style.transform = "translateX(0px)";
    } else {
      const maxIndex = Math.max(0, cards.length - 1);
      index = Math.min(index, maxIndex);
      move();
    }
  }

  function move() {
    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    const cardWidth = cards[0].offsetWidth + gap;
    container.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  arrow.addEventListener("click", () => {
    const containerWidth = container.parentElement.clientWidth;
    const gap = parseFloat(getComputedStyle(container).gap) || 0;
    const cardWidth = cards[0].offsetWidth + gap;
    const visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
    const maxIndex = Math.max(0, cards.length - visibleCards);

    index = index >= maxIndex ? 0 : index + 1;
    move();
  });

  window.addEventListener("resize", updateUI);
  updateUI();
}

setupCarousel({
  containerSelector: "#cardcontainer",
  wrapperSelector: ".carousel-wrapper",
  arrowSelector: "#arrow-right",
  cardSelector: ".project-card",
});

setupCarousel({
  containerSelector: "#blogcontainer",
  wrapperSelector: ".blog-carousel-wrapper",
  arrowSelector: "#blog-arrow",
  cardSelector: ".blog-card",
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