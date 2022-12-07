
// FAQ
const accordionBtn = document.querySelectorAll(".accordion-btn");
const panels = document.querySelectorAll(".panel");

accordionBtn.forEach(acc => {
    acc.addEventListener("click", function(){
        acc.nextElementSibling.classList.toggle("hidden");
    })
})

// nav menu
const nav = document.querySelector(".nav");
const openNav = document.querySelector(".openNav");
const menuBar = document.querySelector(".openNav i");

openNav.addEventListener("click", () => {
    if(openNav.classList.contains("isOpened")){
        openNav.classList.remove("isOpened");
        nav.classList.remove("closeNav");
        menuBar.classList.replace("fa-times", "fa-bars");
    }else{
        openNav.classList.add("isOpened");
        nav.classList.add("closeNav");
        menuBar.classList.replace("fa-bars", "fa-times");
    }
})

//arrow up
const arrowUp = document.querySelector(".arrowUp");
window.onscroll = () => {
    if(window.scrollY > 200){
        arrowUp.style.opacity = "1";
    }
    else{
        arrowUp.style.opacity = "0";
    }
}