"use strict"
// Animação Scroll suave
const navItems = document.querySelectorAll('.nav_list a[href^="#"]')
navItems.forEach(item => {
    item.addEventListener('click', scroolToElementOnClick)
})
//Função de callback do evento click
function scroolToElementOnClick(event) {
    event.preventDefault();
    const section = getScroolPositionTop(event.target)
    scroolToPosition(section)
}
// Encontrar posição vertical do alvo
function getScroolPositionTop(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}
//Scrool até a section
function scroolToPosition(y) {
    window.scroll({
        top: y - 65,
        behavior: 'smooth'
    })
}

// Animação ao scroll

// Debounce para "segurar" o scroll
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Fazendo o efeito de aparecimento ao Scroll
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScrool() {
    const windowTop = window.scrollY + (window.innerHeight * .85);
    target.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}
animeScrool();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScrool();
    }, 20))
};
