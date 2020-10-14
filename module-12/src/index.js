import './styles.scss';
import './images/logo.png';
import imageUrlGenerator from './scripts/imageUrlGenerator';
import heroListTemplate from './templates/hero-list.hbs';
import { fetchHeroes } from './scripts/api/heroesApi';
import { fetchUsersListByHeroName } from './scripts/api/userAPI';
import NavBar from './scripts/NavBar';
// подключаем роутинг
import { createRouter } from 'routerjs';

const heroes = document.querySelector('.heroes');
const navBar = new NavBar('.nav-container');

const handleHeroClick = event => {
  event.stopPropagation();
  const { target } = event;
  const closest = target.closest('.hero-item');

  if (closest) {
    const { id } = closest.dataset;
    window.history.pushState(null, `hero ${id}`, `/user/${id}`)

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

// нициализируем роутинг и делаем запрос по страницам
const router = createRouter()
  .get('/', (req, context) => {
    console.log('welcome to homepage');
  })
  .get('/user', (req, context) => {
    console.log('welcome to user page');
  })
  .get('/:id', (req, context) => {
    console.log(`welcome to user page #${req.params.id}`);
  })
  .run()

/*
3-ий параметр отвечает за путь страницы как в replaceState так и в pushState
['/2', '/4', '/8']
заменяет последнию страницу в истории
// window.history.replaceState(null, `hero ${id}`, `/10`)
['/2', '/4', '/10']
добаляет страницу в истории
// window.history.pushState(null, `hero ${id}`, `/12`)
['/2', '/4', '/10', '/12']
*/

// Спрашивает подтверждение перед уходом со страницы
// window.onbeforeunload = function (e) {
//   e = e || window.event;

//   // For IE and Firefox prior to version 4
//   if (e) {
//       e.returnValue = 'Sure?';
//   }

//   // For Safari
//   return 'Sure?';
// };
