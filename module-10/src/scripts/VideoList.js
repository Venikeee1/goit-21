import VideoStore from './VideoStore';
import VideoItem from './VideoItem';

export default class VideoList {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.videoStore = new VideoStore();
    this.videoItems = this.videoStore
      .getVideos()
      .map(video => new VideoItem(video));

    this.init();
  }

  addItem(video) {
    const item = new VideoItem(video)
    this.videoItems = [...this.videoItems, item];
    this.videoStore.addVideo(video);
    this.$el.prepend(item.$el)
  }

  deleteItem(id) {
    const itemToBeDeleted = this.videoItems.find(videoItem => +videoItem.id === +id);
    
    if(!itemToBeDeleted) return;

    itemToBeDeleted.destroy();
    this.videoItems = this.videoItems.filter(videoItem => +videoItem.id !== +id);
    this.videoStore.deleteVideoById(id);
  }

  handleDeleteItem(event) {
    const { target } = event;

    if(!target.classList.contains('delete-video')) return;
    const id = target.dataset.id;
    this.deleteItem(id);
  }

  init() {
    this.$el.addEventListener('click', event => {
      this.handleDeleteItem(event);
    })
  }

  updateItem() {
    this.render();
  }

  render() {
    this.$el.innerHTML = '';
    this.$el.append(...this.videoItems.map(video => video.$el))
  }
}