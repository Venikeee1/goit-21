import toDoView from './toDoView.js';

export default class ToDo {
  constructor({ description }) {
    this.id = Date.now(); // создаем уникальный айди
    this.description = description;
    // заимпортировали для отрисовки самого Todo как html элемента
    this.$el = toDoView({
      id: this.id,
      description: this.description
    })
  }

  // метод нужен для удаление элемента с ДОМ
  destroy() {
    this.$el.remove();
  }
}