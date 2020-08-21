export default ({ id, description }) => {
  const toDoWrapper = document.createElement('div');
  const text = document.createElement('p');
  const deleteButton = document.createElement('button');

  deleteButton.textContent = 'Delete';
  text.textContent = description;

  toDoWrapper.classList.add('to-do');
  text.classList.add('to-do__description');
  deleteButton.classList.add('btn', 'btn--alert');
  deleteButton.setAttribute('data-id', id);

  toDoWrapper.append(text, deleteButton);

  return toDoWrapper
}