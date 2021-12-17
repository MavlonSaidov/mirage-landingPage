const toggleBtn = document.querySelector(".header__burger_btn");
const sideBar = document.querySelector(".navbar__move");
toggleBtn.addEventListener("click", function () {
	sideBar.classList.toggle("move");
});