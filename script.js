// script.js

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= items.length) currentIndex = 0;
  else if (index < 0) currentIndex = items.length - 1;
  else currentIndex = index;

  items.forEach((item, i) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots[i].classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Initialize the first slide
showSlide(currentIndex);
