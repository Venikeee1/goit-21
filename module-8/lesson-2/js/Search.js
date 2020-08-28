const { debounce } = _;

class Search {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.descriptionList = Array.from(document.querySelectorAll('.description'));
    this.handleInputOnChange = this.handleInputOnChange.bind(this);

    this.init();
  }

  handleInputOnChange(event) {
    const { target } = event;
    const { value } = target;
    this.descriptionList.forEach(descriptionRef => this.searchInText(descriptionRef, value))
  }

  // оборачиваем гадйнное слово в span
  wrapSearchedText(text) {
    return `<span class="searched-word">${text}</span>`
  }

  // создаем регулярное выражение на основе значения инпута
  // и делаем по нему поиск с заменной на обертку со span
  searchInText(element, searchedText) {
    const regExp = new RegExp(`${searchedText}`, 'gi');
    const { textContent } = element;

    if(!searchedText) {
      element.innerHTML = textContent;
      return;
    }

    element.innerHTML = textContent.replace(regExp, this.wrapSearchedText(searchedText))
  }

  init() {
    const handleChangeWithDebounce = debounce(this.handleInputOnChange, 200);
    this.$el.addEventListener('input', handleChangeWithDebounce);
  }
}

export default Search;
