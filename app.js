
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}




function moveSlide(step, carouselId) {
  const carousel = document.getElementById(carouselId);
  const track = carousel.querySelector('.carousel-track');
  const slides = track.children;
  const totalSlides = slides.length;
  let index = parseInt(carousel.getAttribute('data-index') || '0');

  index = (index + step + totalSlides) % totalSlides;
  carousel.setAttribute('data-index', index);

  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 4 seconds
function autoSlide(carouselId) {
  setInterval(() => moveSlide(1, carouselId), 4000);
}

autoSlide('scheme-carousel');
autoSlide('offer-carousel');


// js for section 2
let index = 0;
function plusSlides(step) {
  const carousel = document.getElementById("carousel");
  const cards = document.querySelectorAll(".carousel-card");
  const totalSlides = cards.length;
  const visibleSlides = 3;
  index += step;
  if (index < 0) index = totalSlides - visibleSlides;
  if (index >= totalSlides) index = 0;
  
  carousel.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
}

setInterval(() => {
  plusSlides(1);
}, 3000); 
