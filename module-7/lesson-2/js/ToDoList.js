import ToDo from './toDo.js';

export default class ToDoList {
  constructor(selector) {
    this.items = [];
    this.$el = document.querySelector(selector);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);

    this.init();
  }

  add(payload) {
    const toDo = new ToDo(payload);
    this.items = [...this.items, toDo]; // добавили элемент
    this.$el.appendChild(toDo.$el); // отрисовали элемент в списке
  }

  delete(id) {
    this.items = this.items.filter((toDo) => {
      if(+toDo.id !== +id) return true;

      toDo.destroy(); // убераем элемент из дома если айдишники совпали
    })
  }

  deleteHandler(event) {
    const { target } = event;
    const id = target.dataset.id;

    if(!id) return;

    this.delete(id);
  }

  init() {
    this.$el.addEventListener('click', this.deleteHandler);
  }
}