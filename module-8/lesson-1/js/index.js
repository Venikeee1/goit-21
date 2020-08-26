'use strict';
/* Всплытие событий */

const subTitle = document.querySelector('.sub-title');
const subTitleText = document.querySelector('.sub-title__span');
const description = document.querySelector('.description');

subTitle.addEventListener('click', (event) => {
  const { target, currentTarget } = event;
  console.log(target, '-----target');
  console.log(currentTarget, '-----currentTarget');
})

subTitleText.addEventListener('click', (event) => {
  const { target, currentTarget } = event;
  event.stopPropagation();
  console.log('This is span');
})

/* Throttle и Debounce */

const { throttle, debounce } = _;
const logger = event => {
  const { target } = event;
  console.log(target.value)
};

// debounce(fn, durationTime)
// fn ф-ция колбек
// durationTime - время меджу событиями
const loggerWithDebounce = debounce(logger, 200);
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', loggerWithDebounce);

// throttle(fn, durationTime)
// fn ф-ция колбек
// durationTime - время интервала
const showMouseCords = event => {
  const { pageX, pageY } = event;
  console.log(pageX, pageY);
}
const showMouseCordsWithThrottle = throttle(showMouseCords, 100);

window.addEventListener('mousemove', showMouseCordsWithThrottle);

/* Intersection Observer */
const observerHandler = (entries, observer) => {
  const { isIntersecting, target } = entries[0];
  if(!isIntersecting) return;

  target.classList.add('sub-title--visible');
}
const options = {
  rootMargin: '-10px 0px 0px 0px',
  threshold: 0
}
const observer = new IntersectionObserver(observerHandler, options);
observer.observe(subTitle);