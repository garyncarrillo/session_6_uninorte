import React, { Fragment, useState, useRef } from 'react';

import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [lists, setLists ]  = useState([
    { id: 1, task: "tarea no 1", completed: false },
    { id: 2, task: "tarea no 2", completed: false },
    { id: 3, task: "tarea no 3", completed: false }
  ]);
  const [task, setTask] = useState(null);

  const onChangeInput = (event) => {
    setTask(event.target.value);
  }

  const handleTaskRemove = () => {
    alert("removiendo")
  }

  const handleTaskAdd = () => {
    console.log("alert ", task);
    setLists((valuePrev) => {
      return [ ...valuePrev, { id: uuidv4(), task: task, completed: false }]
    })
  }

  console.log(lists)

  return (
    <Fragment>
      <TodoList lists={lists}/>
      <input
        onChange={onChangeInput}
        type="text"
        placeholder="Nueva tarea"
      />
      <button onClick={handleTaskAdd}>+</button>
      <button onClick={handleTaskRemove}>-</button>
    </Fragment>
  );
}

export default App;
