const hamburgerIcon = document.querySelector(".hero__hamburger");
const closeIcon = document.querySelector(".navigation__close");
const heroNav = document.querySelector(".navigation");

const handleOpenNav = () => {
  heroNav.classList.remove("closed");
};

const handleCloseNav = () => {
  heroNav.classList.add("closed");
};

hamburgerIcon.addEventListener("click", handleOpenNav);
closeIcon.addEventListener("click", handleCloseNav);
