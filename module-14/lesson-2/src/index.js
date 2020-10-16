// подключаем роутинг
import { createRouter } from 'routerjs';
import UserPage from './scripts/pages/User';
import Homepage from './scripts/pages/Homepage';

const backBtn = document.querySelector('.back-btn');
const renderApp = el => template => {
  el.innerHTML = template;
}

const renderAppWithSelector = renderApp(document.querySelector('#app'));

// нициализируем роутинг и делаем запрос по страницам
const router = createRouter()
  .get('/', (req, context) => {
    renderAppWithSelector(Homepage.template)
  })
  .get('/user', (req, context) => {
    renderAppWithSelector(UserPage.template)
  })
  .run()

backBtn.addEventListener('click', () => {
  history.back();
})

window.onpopstate = (event) => {
  console.log('changed');
}

// ф-ция фабрика
const furnitureFactory = name => {
  if(name === 'table') return new Table()
  if(name === 'chair') return new Chair()
}


