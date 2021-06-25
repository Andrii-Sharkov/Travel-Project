// Slider
let slideIndex = 1;
showSlide(slideIndex);

function showSlide (number) {
  let slides = document.querySelectorAll('.slide');

  if (number > slides.length) {
    slideIndex = 1;
  }

  if (number < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';          
  }

  slides[slideIndex - 1].style.display = 'block';

}

function currentSlide (num) {
  showSlide(slideIndex = num);
}

function plusSlide (num) {
  showSlide(slideIndex = slideIndex + 1);
}

// Sticky Header
window.addEventListener('scroll', function () {
  const header = this.document.querySelector('#header');
  header.classList.toggle('sticky', this.window.scrollY > 0);
});

// Pointer
const pointer = document.querySelector('.fa-hand-pointer');
window.addEventListener('scroll', function () {
  if (this.scrollY > 500) {
    pointer.style.visibility = 'visible';
  } else {
    pointer.style.visibility = 'hidden';
  }
});

// Point Up
pointer.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

// Getting Current Year
function gettingCurrentYear () {
  const year = document.querySelector('.year');
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
}
gettingCurrentYear();

// Play Video
const myVideo = document.querySelector('#my-video');
const play = document.querySelector('.fa-play-circle');
const pause = document.querySelector('.fa-pause-circle');
play.addEventListener('click', function () {
  const myVideo = document.querySelector('#my-video');
  myVideo.play();
});

pause.addEventListener('click', function () {
  const myVideo = document.querySelector('#my-video');
  myVideo.pause();
});

// Side Menu
const navItem = document.querySelectorAll('.nav-item');
const bar = document.querySelector('.bar');
bar.addEventListener('click', () => {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.add('show-menu');
});

const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', function () {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.remove('show-menu');
});
