const menu = document.querySelector(".header__menuToggle");
const header = document.querySelector(".header");
const hasFade = document.querySelectorAll(".has-fade");

menu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    hasFade.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    header.classList.add("open");
    hasFade.forEach(function(element){
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
