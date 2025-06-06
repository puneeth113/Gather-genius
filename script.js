// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Show Loader on Page Load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000); // Loader disappears after 1 second
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Slider Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

if (slides.length > 0) {
  showSlide(slideIndex);
  setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 seconds
}
