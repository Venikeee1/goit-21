// import _ from 'lodash';
// const temp =  _.join(['Hello', 'webpack'], ', ');
// console.log(temp);
import Swiper from 'swiper';

console.log('Hello webpack');

const mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});