// script.js
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  const slideText = document.getElementById("slideText");
  const content = document.getElementById("content");

  // Fade out preloader
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
    // Show sliding text
    slideText.classList.remove("hidden");
    slideText.classList.add("show");

    // After sliding animation, show content (do not hide slideText)
    setTimeout(() => {
      content.classList.remove("hidden");
      // slideText remains visible
    }, 1200); // 1s animation + 0.2s buffer
  }, 500); // matches fade-out duration
});