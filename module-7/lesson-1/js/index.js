'use strict';

/* DOM */
const list = document.querySelector('#list');
const title = document.querySelector('.title');
const picture = document.querySelector('.picture');
const addButton = document.querySelector('.btn--success');
const deleteButton = document.querySelector('.btn--alert');
const firstItem = document.querySelectorAll('.item')[0];
/* Так лучше не делать, используйте делегирование событий */
// const listItems = Array.from(document.querySelectorAll('.item'));
let isButtonEnabled = false;

/* Так лучше не делать, используйте делегирование событий */
// listItems.forEach(item => {
//   item.addEventListener('click', () => {
//     setPictureSrc(picture, item.dataset.src)
//   })
// })
// addButton.setAttribute('disabled', '')

const setPictureSrc = (imgElement, src) => imgElement.setAttribute('src', src);
const toggleButtonTransparency = () => {
  deleteButton.classList.toggle('transparent')
}

const toggleBtnText = () => {
  if(isButtonEnabled) {
    isButtonEnabled = false;
    addButton.textContent = 'Add';
    return;
  }

  isButtonEnabled = true;
  addButton.textContent = 'Super button';
}
// Меняли текст кнопки
// addButton.addEventListener('click', toggleBtnText);
// меняли прозрачность
// deleteButton.addEventListener('click', toggleButtonTransparency);

/* Делегирование события */
list.addEventListener('click', (event) => {
  const { target, currentTarget } = event;
  const { src } = target.dataset;

  if(!src) return;

  setPictureSrc(picture, src);
})
/* inline добавление стиля */
// title.style.color = 'purple';

/* Создание элемента li */
const createListItem = () => {
  const li = document.createElement('li');
  li.textContent = 'New li';
  li.setAttribute('data-src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOrPHWk75H38CbZNyg1_hCryQd4nFXlQXAng&usqp=CAU')
  li.classList.add('item');
  return li;
}

/* добавление элемента */
const addItem = () => {
  // Клонирование первого элемента списка
  // const newItem = firstItem.cloneNode(true);
  const newItem = createListItem();
  list.appendChild(newItem);
}

/* удаление элемента */
const deleteItem = () => {
  const item = list.lastChild;
  // старый метод удаление элемента из списка
  item.parentNode.removeChild(item);
}

/* вешаем слушатели событий */
addButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteItem);

/* Уязвимость HTML*/
// const data = 'Alex <img src="dasasdas" onError="alert(1111)">';
// const data = 'John Wick';
// title.insertAdjacentHTML('afterBegin', data);
