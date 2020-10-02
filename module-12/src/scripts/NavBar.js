import navBarTemplate from '../templates/nav-bar.hbs'

export default class NavBar {
  constructor(selector) {
    this.selector = selector;
    this.$el = document.querySelector(selector);
    this.template = navBarTemplate;
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  open(data) {
    this.$el.classList.add('is-open');
    this.renderTemplate(data);
  }

  close() {
    this.$el.classList.remove('is-open');
  }

  renderTemplate(data) {
    this.$el.innerHTML = this.template(data);
  }

  handleClickOutside(event) {
    const { target } = event;

    if(target.closest(this.selector)) return

    this.close();
  }

  init() {
    document.body.addEventListener('click', this.handleClickOutside)
  }
}