export default class Form {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.subscribers = []; // массив подписчиков, подписчики - обыные функции, которые хранятся в массиве
    this.onSubmit = this.onSubmit.bind(this);

    this.init()
  }

  subscribe(fn) {
    // при подписке добавляем в this.subscribers функцию( она же подписчик)
    this.subscribers = [...this.subscribers, fn]
  }

  unsubscribe(fn) {
    // нигде не использовали, но стандартно должен быть метод отписки от события
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== fn
    )
  }

  onSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event

    const formData = new FormData(currentTarget)
    const result = {
      description: formData.get('text'),
    }

    // проходим по всем подписчиком(функциям) и передаем им результат сабмита формы
    this.subscribers.forEach((subscriber) => subscriber(result));
    this.$el.reset();
  }

  init() {
    this.$el.addEventListener('submit', this.onSubmit)
  }
}
