"use strict"

class SmothScroll {
    constructor(links) {
        this.linkElements = document.querySelectorAll(links);
        this.addClickEvent();
    }
    addClickEvent() {
        this.linkElements.forEach(link => {
            link.addEventListener('click', this.handleClick)
        })
    }
    handleClick(event) {
        event.preventDefault()
        const hrefSectionTarget = event.target.getAttribute('href')
        const sectionTarget = document.querySelector(hrefSectionTarget)
        window.scrollTo({
            top: sectionTarget.offsetTop - 65,
            behavior: 'smooth'
        })
    }
}
const scroll = new SmothScroll("a[href^='#']")

// Botão Home
const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

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
    const windowTop = window.scrollY + (window.innerHeight * .9);
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
