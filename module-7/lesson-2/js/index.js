'use strict'

import ToDoList from './ToDoList.js';
import Form from './Form.js';
import StyledInput from './StyledInput.js';

const toDoList = new ToDoList('.list');
const form = new Form('.actions');
new StyledInput('#input1');

const log = (data) => console.log(data);
form.subscribe(toDoList.add);
form.subscribe(log);
