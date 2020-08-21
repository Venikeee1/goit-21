/*
  Этот инпут просто сделан для стилизации
*/

export default class StyledInput {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.init();
  }

  onBlur() {
    const { value } = this.$el
    const label = this.$el.parentNode.querySelector('.input-label')
  
    if (value) return
    label.classList.remove('input-label--focused');
  }

  onFocus() {
    const label = this.$el.parentNode.querySelector('.input-label')
    label.classList.add('input-label--focused')
  }

  init() {
    this.$el.addEventListener('focus', this.onFocus);
    this.$el.addEventListener('blur', this.onBlur);
  }
}