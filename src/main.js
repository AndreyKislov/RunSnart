import './assets/sass/main.scss';
import slider from './assets/js/slider.js'
import {tabs, cardSlide} from './assets/js/tabs.js'
import modal from './assets/js/modal.js'
import reset from "./assets/js/reset.js";
document.addEventListener('DOMContentLoaded', () => {
    slider({
        btnPrevSelector: '.slider__btn-left',
        btnNextSelector: '.slider__btn-right',
        sliderInnerSelector: '.slider__inner',
        dotsSelector: '.slider__dots'
    });
    tabs(
        {
            containerClass: '.catalog__tabs',
            activeTabClass: '.catalog__tabs-item-active',
            tabClass: '.catalog__tabs-item',
            cardClass: '.card',
            hiddenClass: '.hidden',
            pagesSelector: '.card__inner'
        }
    );
    cardSlide(
        {
            cardClass: '.card',
            containerClass: '.catalog__grid-container',
            cardLinkNext: '.card__link-next',
            cardLinkPrev: '.card__link-prev',
            pagesSelector: '.card__inner',

    });

    modal(
        {
            modalClass: '.modal',
            dataConsultation: 'data-target="consultation"',
            consultationModalId: 'consultation',
            dataOrder: 'data-target="order"',
            orderModalId: 'order',
            thanksModalId: 'thanks',
            productTitleClass: '.card__title',
            productCardClass: '.card',
            modalClose: '.modal__close'
        }
    );
    reset();
})