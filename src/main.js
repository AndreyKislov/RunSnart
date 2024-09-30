import './assets/sass/main.scss';
import slider from './assets/js/slider.js'

document.addEventListener('DOMContentLoaded', () => {
    slider({
        btnPrevSelector: '.slider__btn-left',
        btnNextSelector: '.slider__btn-right',
        sliderInnerSelector: '.slider__inner',
        dotsSelector: '.slider__dots'
    });
})