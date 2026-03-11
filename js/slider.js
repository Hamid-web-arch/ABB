function initSlider(sliderElement) {
  const cards = sliderElement.querySelectorAll(".slider-card");
  const nextBtn = sliderElement.querySelector(".right");
  const prevBtn = sliderElement.querySelector(".left");
  const count = sliderElement.querySelector(".slider-count");

  let current = 0;

  function showCard(index) {
    cards.forEach(card => card.classList.add("hidden"));
    cards[index].classList.remove("hidden");
    count.textContent = index + 1;
  }

  function nextSlide() {
    current = (current + 1) % cards.length;
    showCard(current);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });

  setInterval(nextSlide, 3000);

  showCard(current);
}

/* DESKTOP SLIDER */
const desktopSlider = document.querySelector(".slider-desktop .slider");
if (desktopSlider) initSlider(desktopSlider);

/* MOBILE SLIDER */
const mobileSlider = document.querySelector(".slider-mobile .slider");
if (mobileSlider) initSlider(mobileSlider);