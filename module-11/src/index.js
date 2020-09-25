import './styles.scss';
import './images/logo.png';
import imageUrlGenerator from './scripts/imageUrlGenerator';
import heroListTemplate from './templates/hero-list.hbs';
import { fetchHeroes } from './scripts/api/heroesApi';
import { fetchUserById } from './scripts/api/userApi';


// const regExp = /hh/gi;
// const regExpOnlyNumbers = /\d/gi;
// const regExpOnlyB = /\bHe/gi;
// const regExpOnlyFromBeginning = /^He/gi;
// const regExpOnlyExclude = /[ab^c]/gi;
// const str = 'HhelloHhoo11111111';
// const str1 = '231232Hello11111111';
// const str2 = '231232Hello Hello11111111';

// console.log(str.replace(regExp, ''));
// console.log(str1.replace(regExpOnlyNumbers, ''));
// console.log(str2.replace(regExpOnlyB, ''));

const heroes = document.querySelector('.heroes');

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


fetchUserById('41729661').then(console.log)
