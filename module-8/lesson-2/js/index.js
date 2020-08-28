'use strict';
import IObserver from './IntersectionObserver.js';
import setActiveArticleText from './activeArticle.js';
import Search from './Search.js';

const subTitles = document.querySelectorAll('.sub-title');
new Search('.search-input');

const observerHandler = (entries) => {
  entries.forEach(entry => {
    const { target, isIntersecting } = entry;
    const { textContent } = target;
    console.log(entries.length);

    target.classList.remove('sub-title--active');

    if(isIntersecting) {
      setActiveArticleText(textContent);
      target.classList.add('sub-title--active');
    }
  })
}
const observer = new IObserver(observerHandler);

subTitles.forEach(subtitle => observer.observe(subtitle));



// document.querySelector('.sub-title');