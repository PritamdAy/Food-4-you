const menu = document.querySelector(".menu-ul");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const parent2 = document.querySelector(".parent2");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
}

closeBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    closeBtn.classList.add("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? parent2.classList.add("sticky") : parent2.classList.remove("sticky");
}