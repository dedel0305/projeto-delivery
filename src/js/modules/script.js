import mostrarSlider from '../modules/esliderFuncional.js'
import abrirModal from '../modules/abrirFecharModal.js'

mostrarSlider()
abrirModal()

// Menu responsivo
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.top-nav nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});