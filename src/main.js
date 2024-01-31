// Слайдер с видео
document.addEventListener("DOMContentLoaded", function () {
  showSlides(1);
});

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews-inner");
  var modalIds = ["videoModal1", "videoModal2", "videoModal3"];
  var videoFrameIds = ["videoFrame1", "videoFrame2", "videoFrame3"];

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < modalIds.length; i++) {
    closeModal(modalIds[i]);
  }

  slides[n - 1].style.display = "block";
}

function openModal(modalId, videoSrc) {
  var modal = document.getElementById(modalId);
  var videoFrameId = "videoFrame" + modalId.charAt(modalId.length - 1);
  var videoFrame = document.getElementById(videoFrameId);
  videoFrame.src = videoSrc;
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  var videoFrameId = "videoFrame" + modalId.charAt(modalId.length - 1);
  var videoFrame = document.getElementById(videoFrameId);
  modal.style.display = "none";
  videoFrame.src = "";
}

document.getElementById("playButton1").addEventListener("click", function () {
  openModal("videoModal1", "https://www.youtube.com/embed/VqP11Ma_2Fk");
});

document.getElementById("playButton2").addEventListener("click", function () {
  openModal("videoModal2", "https://www.youtube.com/embed/BUyLpf-u97Y");
});

document.getElementById("playButton3").addEventListener("click", function () {
  openModal("videoModal3", "https://www.youtube.com/embed/NgtznBDFRUo");
});

document.getElementById("paginatorButton1").addEventListener("click", function () {
  currentSlide(1);
});

document.getElementById("paginatorButton2").addEventListener("click", function () {
  currentSlide(2);
});

document.getElementById("paginatorButton3").addEventListener("click", function () {
  currentSlide(3);
});
