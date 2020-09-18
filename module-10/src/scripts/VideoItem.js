import favoriteVideoCardView from '../templates/favorite-video.hbs';

export default class VideoItem {
  constructor(videoData) {
    const { title, iframeLink, id } = videoData;
    this.id = id;
    this.title = title;
    this.iframeLink = iframeLink;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = favoriteVideoCardView(videoData);
    this.$el = wrapper.firstChild;
  }

  destroy() {
    this.$el.remove();
  }

  update() {
    this.$el.innerHTML = favoriteVideoCardView({
      id: this.id,
      name: this.name,
      iframeLink: this.iframeLink
    });
  }
}