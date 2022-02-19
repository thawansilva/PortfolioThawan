"use strict"

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