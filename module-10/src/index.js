import './styles.scss';
import favoriteVideoCardView from './templates/favorite-video.hbs';
import localStorageApi from './scripts/localStorageApi';
import videoListView from './templates/video-list.hbs';

const localStorageKeys = {
  videoList: 'videoList'
}

const videoListContainer = document.querySelector('.favorite-video-list');
const videoForm = document.querySelector('.favorite-video-form');

// ф-ция добавления любимого видео
const addFavoriteVideo = video => {
  const videoList = localStorageApi.get(localStorageKeys.videoList);
  addFavoriteVideoItemToView(video);

  if(!videoList) {
    localStorageApi.set(localStorageKeys.videoList, [video]);
    return;
  }

  localStorageApi.set(localStorageKeys.videoList, [video, ...videoList])
}

// хендлер для сабмита формы
const handleSubmit = event => {
  event.preventDefault();
  
  const { currentTarget } = event;
  // используем формдату для обработки сабмита
  const formData = new FormData(currentTarget);

  addFavoriteVideo({
    id: Date.now(),
    title: formData.get('title'),
    iframeLink: formData.get('iframe-link')
  })
}

// ф-ция отрисовки начального списка
const renderVideoList = () => {
  const videoList = localStorageApi.get(localStorageKeys.videoList);

  if(!videoList) return;

  videoListContainer.innerHTML = videoListView(videoList);
}

// ф-ция отрисовки добавленного элемента
const addFavoriteVideoItemToView = video => {
  const videoView = favoriteVideoCardView(video);
  videoListContainer.insertAdjacentHTML('afterbegin', videoView)
}

videoForm.addEventListener('submit', handleSubmit);

renderVideoList();