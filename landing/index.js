const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");
const header = document.getElementById("header");

burgerMenu.addEventListener('click',(event) => {
    menu.classList.toggle("menu-hidden");
    burgerMenu.classList.toggle("burger-menu-active");
    lines.forEach(element => {
        element.classList.toggle("line-active");
    });
})

window.addEventListener('scroll', event => {
    if(window.innerWidth > 768){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('header__after-scroll');
          } else {
            header.classList.remove('header__after-scroll');
          }
    }
})
