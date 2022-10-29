// ---------- SELECTING ELEMENTS ----------

const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
const closeMobileMenuBtn = document.querySelector(".close-mobile-menu-icon");

// ---------- CREATING THE MOBILE NAVBAR (HAMBURGER MENU) ----------

// OPENING NAVBAR
mobileMenuBtn.addEventListener("click", function () {
  mobileMenuBtn.classList.add("hidden");
  mobileNav.classList.remove("hidden");
});

// CLOSING NAVBAR
closeMobileMenuBtn.addEventListener("click", function () {
  mobileMenuBtn.classList.remove("hidden");
  mobileNav.classList.add("hidden");
});
