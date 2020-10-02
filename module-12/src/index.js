import './styles.scss';
import './images/logo.png';
import imageUrlGenerator from './scripts/imageUrlGenerator';
import heroListTemplate from './templates/hero-list.hbs';
import { fetchHeroes } from './scripts/api/heroesApi';
import { fetchUsersListByHeroName } from './scripts/api/userAPI';
import Worker from 'worker-loader!./worker.js';
import NavBar from './scripts/NavBar';

const heroes = document.querySelector('.heroes');
const navBar = new NavBar('.nav-container');

const handleHeroClick = event => {
  event.stopPropagation();
  const { target } = event;
  const closest = target.closest('.hero-item');

  if (closest) {
    const { id } = closest.dataset;
    fetchUsersListByHeroName(id).then(({ rankings }) => {
      navBar.open(rankings.slice(0, 20))
    })
  }
}

const addImageUrlToHero = hero => {
  const { name } = hero;

  return {
    ...hero,
    imgUrl: imageUrlGenerator(name, 'full_quality'),
  };
};

const renderHeroList = heroList => {
  heroes.innerHTML = heroListTemplate(heroList);
};

fetchHeroes()
  .then(data => {
    const heroList = data.map(hero => addImageUrlToHero(hero));
    renderHeroList(heroList);
  })
  .catch(error => {
    console.log(`There wa an error: ${error.message}`);
  });

navBar.init();
heroes.addEventListener('click', handleHeroClick)



























/** web worker example */

// if (window.Worker) {
//   const myWorker = new Worker('worker.js', 'some-path.js');
//   myWorker.postMessage('hello i ma sending data to webworker');
//   myWorker.onmessage = (event) => {
//     const { data } = event;
//     console.log(data)
//   }

//   heroes.addEventListener('click', () => {

//   })
// }

