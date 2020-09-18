import localStorageApi, { localStorageKeys } from './localStorageApi';

export default class VideoStore {
  constructor() {
    const storedVideoList = localStorageApi.get(localStorageKeys.videoList);
    this.videos = storedVideoList || [];
  }

  getVideos() {
    return this.videos;
  }

  updateLocalStorage() {
    localStorageApi.set(localStorageKeys.videoList, this.videos);
  }

  addVideo({id, title, iframeLink}) {
    this.videos = [...this.videos, {id, title, iframeLink}];
    this.updateLocalStorage();
  }

  deleteVideoById(id) {
    this.videos = this.videos.filter(video => +video.id !== +id);
    this.updateLocalStorage()
  }
  
  updateVideo(updatedVideo) {
    const { id } = updatedVideo;

    this.videos = this.videos.map(video => {
      if(id === video.id) {
        return updatedVideo;
      }

      return video;
    });

    this.updateLocalStorage();
  }
}