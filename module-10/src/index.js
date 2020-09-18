import './styles.scss';
import MicroModal from 'micromodal';
import VideoList from './scripts/VideoList';

const videoList = new VideoList('.favorite-video-list');
videoList.render();

MicroModal.init();

const videoForm = document.querySelector('.favorite-video-form');

// хендлер для сабмита формы
const handleSubmit = event => {
  event.preventDefault();
  
  const { currentTarget } = event;
  // используем формдату для обработки сабмита
  const formData = new FormData(currentTarget);

  videoList.addItem({
    id: Date.now(),
    title: formData.get('title'),
    iframeLink: formData.get('iframe-link')
  })
}

const handleEditFavoriteVideo = event => {
  const { target } = event;

  if(!target.classList.contains('edit-video')) return;

  MicroModal.show('modal-1');
}

videoForm.addEventListener('submit', handleSubmit);