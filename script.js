// highlight menu for max-width 1024px
const navIconEl = document.getElementById("navIcon-el");
const navHiglight = document.querySelector(".nav-highlight");
const highlightEl = document.getElementById("highlight-el");

navIconEl.addEventListener("click", function () {
  navHiglight.classList.add("nav-highlight-active");
});

highlightEl.addEventListener("click", function () {
  if (navHiglight.classList.contains("nav-highlight-active")) {
    navHiglight.classList.remove("nav-highlight-active");
  }
});

// animation for carousel
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");

const activeSlide = () => {
  let active = document.querySelector(".header-content__img--active");
  active.classList.remove("header-content__img--active");
};

const addActicveClass = (slide) => {
  slide.classList.add("header-content__img--active");
};

const colorDots = (dotArray) => {
  for (const char of dotArray) {
    char.setAttribute("src", "./images/dot-gray.png");
  }
}

const showSlide1 = () => {
  addActicveClass(slide1);
  dot1.setAttribute("src", "./images/dot-white.png");
  colorDots([dot2, dot3])
};

const showSlide2 = () => {
  addActicveClass(slide2);
  dot2.setAttribute("src", "./images/dot-white.png");
  colorDots([dot1, dot3])
};

const showSlide3 = () => {
  addActicveClass(slide3);
  dot3.setAttribute("src", "./images/dot-white.png");
  colorDots([dot1, dot2])
};

dot1.addEventListener("click", () => {
  activeSlide();
  showSlide1();
});

dot2.addEventListener("click", () => {
  activeSlide();
  showSlide2();
  dot2.setAttribute("src", "./images/dot-white.png")
});

dot3.addEventListener("click", () => {
  activeSlide();
  showSlide3();
});

console.log(dot1.getAttribute("src"))

// highlight button for donate in section Header and Event
const headerBtn = document.getElementById("header-btn");
const eventBtn1 = document.getElementById("event-btn1");
const eventBtn2 = document.getElementById("event-btn2");

headerBtn.addEventListener("click", () => {
  donateBtn(headerBtn);
});

eventBtn1.addEventListener("click", () => {
  donateBtn(eventBtn1);
});

eventBtn2.addEventListener("click", () => {
  donateBtn(eventBtn2);
});

function donateBtn(event) {
  event.textContent = "THANK YOU";
  event.style.background = "goldenrod";
}
