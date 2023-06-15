/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Pagination, EffectFade, Autoplay, FreeMode } from 'swiper';

import "../../scss/base/swiper.scss";

function initSliders() {
   if (document.querySelector('.main-slider__slider')) {
      new Swiper('.main-slider__slider', {
         modules: [Pagination, EffectFade, Autoplay],
         initialSlide: 1,
         observer: true,
         grabCursor: true,
         observeParents: true,
         slidesPerView: 1,
         autoHeight: true,
         speed: 500,
         loop: true,
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },

         pagination: {
            el: '.main-slider__controll',
            clickable: true,
         },

         on: {
            init: function () {
               const controll = document.querySelectorAll('.main-slider__controll .swiper-pagination-bullet');
               controll.forEach((el, index) => {
                  let num = index < 10 ? `0` : '';
                  el.innerHTML = `${num}${index + 1}`;
               });
            },
         }

      });
   }
}


window.addEventListener("load", function (e) {
   initSliders();
});