// script.js
window.addEventListener("load", function() {
  const introVideo = document.getElementById("introVideo");
  const preloader = document.getElementById("preloader");
  const slideText = document.getElementById("slideText");
  const content = document.getElementById("content");

  // Show preloader first
  preloader.style.display = "flex";
  preloader.classList.remove("hidden");
  preloader.style.opacity = "1";
  slideText.style.display = "none";
  if(content) content.style.display = "none";

  // After preloader duration, show slideText (video stays as background)
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      slideText.classList.remove("hidden");
      slideText.classList.add("show");
      slideText.style.display = "flex";
      setTimeout(() => {
        if(content) content.classList.remove("hidden");
      }, 1200);
    }, 500);
  }, 1200); // preloader duration
});