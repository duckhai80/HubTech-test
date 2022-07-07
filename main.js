const carouselSlider = document.querySelector(".carousel__slider");
const carouselTickets = document.querySelectorAll(".carousel__slider .ticket");

const previousBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselTickets[0].clientWidth;

carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselTickets.length - 1) return;
  counter++;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  carouselSlider.style.transition = "transform 0.8s ease-in-out";
});

previousBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  carouselSlider.style.transition = "transform 0.8s ease-in-out";
});

carouselSlider.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselTickets[counter].id === "firstClone") {
    carouselSlider.style.transition = "none";
    counter = carouselTickets.length - counter;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});
