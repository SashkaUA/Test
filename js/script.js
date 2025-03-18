const btnDarkToggle = document.getElementById("darkToggle");
const hederBar = document.querySelector("header");
const btnToTop = document.getElementById("btnToTop");
const navbarToggle = document.getElementById("navbar-toggle");
const page = document.body;
let lastScrolValue = 0;

btnDarkToggle.addEventListener("click", () => {
  const icon = btnDarkToggle.querySelector("i");
  if (page.classList.contains("dark-mode")) {
    page.classList.remove("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    page.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});


window.addEventListener("scroll", () => {
  let distanseScrolled = document.documentElement.scrollTop;
  if (distanseScrolled > lastScrolValue) {
    hederBar.classList.add("hide");
  } else {
    hederBar.classList.remove("hide");
  }
  if (distanseScrolled < 1000) {
    btnToTop.style.bottom = "-2rem";
  } else {
    btnToTop.style.bottom = "2rem";
  }
  lastScrolValue = distanseScrolled;
});

btnToTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

navbarToggle.addEventListener('input', ()=>{
  if(navbarToggle.checked){
    page.style.overflow = "hidden"
  }else{
    page.style.overflow = "auto"
  }

})