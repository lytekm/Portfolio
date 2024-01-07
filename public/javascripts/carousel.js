/*
   Kevin Morrison
   301316650
   Oct 9 2023
*/

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-container");
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");

  let currentIndex = 0;
  let totalWidth = 0;

  images.forEach((image) => {
    totalWidth += image.width;
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function updateCarousel() {
    let translateValue = 0;
    for (let i = 0; i < currentIndex; i++) {
      translateValue -= images[i].width;
    }
    carousel.style.transform = "translateX(" + translateValue + "px)";
  }

  setInterval(nextSlide, 2000);
});
