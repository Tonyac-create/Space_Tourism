const burgerMenu = document.getElementById("burgerMenu");
const navBar = document.getElementById("navBar");
const ulNavBar = document.getElementById("linksNavBar");
const logoNavBar = document.getElementById("logoNavBar");
const logoMenuBurger = document.getElementById("logoMenuBurger");
const linkMoon = document.getElementById("linkMoon");
const linkMars = document.getElementById("linkMars");
const linkEuropa = document.getElementById("linkEuropa");
const linkTitan = document.getElementById("linkTitan");
const imgMoon = document.getElementById("imgMoon");
const imgMars = document.getElementById("imgMars");
const imgEuropa = document.getElementById("imgEuropa");
const imgTitan = document.getElementById("imgTitan");
const artMoon = document.getElementById("artMoon");
const artMars = document.getElementById("artMars");
const artEuropa = document.getElementById("artEuropa");
const artTitan = document.getElementById("artTitan");

let isMenuOpen = false;

burgerMenu.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    logoMenuBurger.src = "/assets/xmark-solid.svg";
    navBar.classList.add("menu-slide-down");
    navBar.classList.add("fixed");
    navBar.classList.add("top-[80px]");
    navBar.classList.add("right-0");
    navBar.classList.add("pl-4");
  } else {
    logoMenuBurger.src = "/assets/bars.svg";
    navBar.classList.remove("fixed");
    navBar.classList.remove("top-[80px]");
    navBar.classList.remove("right-0");
    navBar.classList.remove("pl-4");
  }

  navBar.classList.toggle("flex");
  navBar.classList.add("ml-auto");
  ulNavBar.classList.toggle("flex-col");
  logoNavBar.classList.remove("my-auto");
  navBar.classList.toggle("hidden");
  navBar.classList.remove("px-14");
});

linkMoon.addEventListener("click", function () {
  linkMars.classList.remove("border-b-2");
  linkEuropa.classList.remove("border-b-2");
  linkTitan.classList.remove("border-b-2");
  linkMoon.classList.add("border-b-2");
  linkMoon.classList.add("border-white");

  imgMars.classList.add("hidden");
  imgEuropa.classList.add("hidden");
  imgTitan.classList.add("hidden");

  artMars.classList.add("hidden");
  artEuropa.classList.add("hidden");
  artTitan.classList.add("hidden");

  imgMoon.classList.remove("hidden");
  imgMoon.classList.remove("flex");
  artMoon.classList.remove("hidden");
  artMoon.classList.add("flex");
});

linkMars.addEventListener("click", function () {
  linkEuropa.classList.remove("border-b-2");
  linkMoon.classList.remove("border-b-2");
  linkTitan.classList.remove("border-b-2");
  linkMars.classList.add("border-b-2");
  linkMars.classList.add("border-white");

  imgMoon.classList.add("hidden");
  imgEuropa.classList.add("hidden");
  imgTitan.classList.add("hidden");

  artMoon.classList.add("hidden");
  artEuropa.classList.add("hidden");
  artTitan.classList.add("hidden");

  imgMars.classList.remove("hidden");
  imgMars.classList.remove("flex");
  artMars.classList.remove("hidden");
  artMars.classList.add("flex");
});

linkEuropa.addEventListener("click", function () {
  linkTitan.classList.remove("border-b-2");
  linkMars.classList.remove("border-b-2");
  linkMoon.classList.remove("border-b-2");
  linkEuropa.classList.add("border-b-2");
  linkEuropa.classList.add("border-white");

  imgMoon.classList.add("hidden");
  imgMars.classList.add("hidden");
  imgTitan.classList.add("hidden");

  artMoon.classList.add("hidden");
  artMars.classList.add("hidden");
  artTitan.classList.add("hidden");

  imgEuropa.classList.remove("hidden");
  imgEuropa.classList.remove("flex");
  artEuropa.classList.remove("hidden");
  artEuropa.classList.add("flex");
});

linkTitan.addEventListener("click", function () {
  linkMoon.classList.remove("border-b-2");
  linkMars.classList.remove("border-b-2");
  linkEuropa.classList.remove("border-b-2");
  linkTitan.classList.add("border-b-2");
  linkTitan.classList.add("border-white");

  imgMoon.classList.add("hidden");
  imgMars.classList.add("hidden");
  imgEuropa.classList.add("hidden");

  artMoon.classList.add("hidden");
  artEuropa.classList.add("hidden");
  artMoon.classList.add("hidden");

  imgTitan.classList.remove("hidden");
  imgTitan.classList.remove("flex");
  artTitan.classList.remove("hidden");
  artTitan.classList.add("flex");
});

