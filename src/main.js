// Слайдер с видео
document.addEventListener('DOMContentLoaded', function () {
  showSlides(1);
});

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('reviews-inner');
  var modalIds = ['videoModal1', 'videoModal2', 'videoModal3'];
  var videoFrameIds = ['videoFrame1', 'videoFrame2', 'videoFrame3'];

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < modalIds.length; i++) {
    closeModal(modalIds[i]);
  }

  slides[n - 1].style.display = 'block';
}

function openModal(modalId, videoSrc) {
  var modal = document.getElementById(modalId);
  var videoFrameId = 'videoFrame' + modalId.charAt(modalId.length - 1);
  var videoFrame = document.getElementById(videoFrameId);
  videoFrame.src = videoSrc;
  modal.style.display = 'block';
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  var videoFrameId = 'videoFrame' + modalId.charAt(modalId.length - 1);
  var videoFrame = document.getElementById(videoFrameId);
  modal.style.display = 'none';
  videoFrame.src = '';
}

document.getElementById('playButton1').addEventListener('click', function () {
  openModal('videoModal1', 'https://www.youtube.com/embed/VqP11Ma_2Fk');
});

document.getElementById('playButton2').addEventListener('click', function () {
  openModal('videoModal2', 'https://www.youtube.com/embed/BUyLpf-u97Y');
});

document.getElementById('playButton3').addEventListener('click', function () {
  openModal('videoModal3', 'https://www.youtube.com/embed/NgtznBDFRUo');
});

document
  .getElementById('paginatorButton1')
  .addEventListener('click', function () {
    currentSlide(1);
  });

document
  .getElementById('paginatorButton2')
  .addEventListener('click', function () {
    currentSlide(2);
  });

document
  .getElementById('paginatorButton3')
  .addEventListener('click', function () {
    currentSlide(3);
  });

// FAQ
const questions = document.querySelectorAll('.FAQ-list-item');

questions.forEach(question => {
  const hiddenText = question.querySelector('.FAQ-list-text-question');
  let isOpen = false;

  question.addEventListener('click', () => {
    if (isOpen) {
      hiddenText.style.display = 'none';
    } else {
      hiddenText.style.display = 'block';
    }
    isOpen = !isOpen;
  });
});

// Order
const blackButton = document.querySelector('.order-btn-black');
const whiteButton = document.querySelector('.order-btn-white');
const blackImage = document.querySelector('.order-img-black');
const whiteImage = document.querySelector('.order-img-white');
const orderIconBlack = document.querySelector('.order-icon-black');
const orderIconWhite = document.querySelector('.order-icon-white');

blackButton.addEventListener('click', () => {
  blackImage.style.display = 'block';
  whiteImage.style.display = 'none';
  orderIconBlack.style.stroke = '#df3d3a';
  orderIconWhite.style.stroke = '';
});

whiteButton.addEventListener('click', () => {
  blackImage.style.display = 'none';
  whiteImage.style.display = 'block';
  orderIconWhite.style.stroke = '#df3d3a';
  orderIconBlack.style.stroke = '';
});

// mobile menu
const menuBtn = document.querySelector('.menu-btn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open-mobile');
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open-mobile');
  body.style.overflow = '';
});
