/*
   Kevin Morrison
   301316650
   Oct 9 2023
*/

const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let currentIndex = 0;

function showImage(index) {
  // Hide all images
  images.forEach((img) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
setInterval(nextImage, 3000); // Auto slide every 3 seconds
