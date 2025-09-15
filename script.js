const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const section1 = document.querySelector("#section--1");
const learnMore = document.querySelector(".btn--scroll");

// Nav Open Button
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  btnNav.blur();
});

// Navigation:
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    e.target.blur();

    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href"); 
      console.log(id);  // id has to be specified as thats the location we scrolling to
      document.querySelector(id).scrollIntoView({ 
        behavior: "smooth",
      });
    }
  });

// Learn More button
learnMore.addEventListener("click", function () {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
