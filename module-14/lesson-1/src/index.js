import './styles.scss';
import messageTemplate from './templates/message.hbs';
import mapStyle from './scripts/mapStyle.json';

// подключение к вебсокету
const ws = new WebSocket("wss://venify.herokuapp.com/chat");
const form = document.querySelector('.form');
const messageList = document.querySelector('.message-list');
const mapContainer = document.querySelector('.map');
let map;
let userCoords;

const handleOpenedSocket = () => {
  console.log('socked is opened');
}

const handleReceivedMessage = ({ data }) => {
  const result = JSON.parse(data);
  const newMessage = messageTemplate(result);
  const { coords } = result;
  // +1 используется только в качестве теста новых маркеров
  if (coords) {
    const lngLat = {
      lng: +coords.lng + 1,
      lat: +coords.lat + 1
    }
    addMarker(lngLat);
  }

  messageList.insertAdjacentHTML('beforeend', newMessage);
}

const handleSubmit = event => {
  event.preventDefault();
  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const message = formData.get('message');
  const date = new Date();

  const messageBody = JSON.stringify({
    message,
    name: 'Alex',
    coords: userCoords,
    image: '',
    date: date.toLocaleDateString()
  })
  
  ws.send(messageBody);
  form.reset();
}

// Так как метод navigator.geolocation.getCurrentPosition асинхронный,
// то лучше его завернуть в промис для более удобной работы
const navigatorPositionRequest = new Promise(resolve => {
  navigator.geolocation.getCurrentPosition(position => {
    resolve(position)
  })
});

// метод создания новых маркеров
const addMarker = (lngLat) => {
  new google.maps.Marker({
    position: lngLat,
    map,
    title: 'This is me',
  });
}

// Иницилизация карты карты
const initMap = (lngLat) => {
  map = new google.maps.Map(mapContainer, {
    zoom: 5,
    center: lngLat,
    styles: mapStyle
  });

  addMarker(lngLat)
}

// Подключение карты
const loadGoogleMap = async () => {
  const { coords } = await navigatorPositionRequest;
  const lngLat = {
    lng: +coords.longitude,
    lat: +coords.latitude
  }

  userCoords = lngLat;
  initMap(lngLat);
}

loadGoogleMap();

// колбек срабатывай один раз при открытии сокета
ws.onopen = handleOpenedSocket;
// колбек срабатывай каждый раз когда приходит сообщение
ws.onmessage = handleReceivedMessage;

form.addEventListener('submit', handleSubmit);




/** Пример прокси */
const input = document.querySelector('#test');
const title = document.querySelector('#title');
const obj = {
  title: 'First proxy'
}

const renderTitle = value => {
  title.textContent = value;
}

// set должен возвращать boolean значение
const handler = {
  set(obj, prop, value) {
    renderTitle(value);
    obj[prop] = value;
    return true;
  }
}

// Оборачиваем наш объект в прокси
const objWithProxy = new Proxy(obj, handler);
console.log(objWithProxy.title);
console.log(objWithProxy.c);

// теперь когда мы меняем значение прокси объекта, то будет вызван его сеттер,
// который использует метод renderTitle и наш тайтл всегда будет синхронно менятся с инпутом
input.addEventListener('input', event => {
  const value = event.target.value;
  objWithProxy.title = value;
})


