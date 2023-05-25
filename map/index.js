const closeButton = document.querySelector(".close__button");
const popUp = document.querySelector(".pop-up__bg");
const ub = document.querySelector(".ub");

closeButton.addEventListener('click', (event) => {
    popUp.classList.add('hidden');
})

ub.addEventListener('click', (event) => {
    popUp.classList.remove('hidden');
})