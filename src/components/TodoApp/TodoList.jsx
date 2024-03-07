import React from 'react'
import { useContext } from 'react';
import AppContext from '../../redux-fake/stateContext';

function TodoList() {
  const { state, dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({type: "MASTER_TODO_LIST/REMOVE_TODO_ITEM", todoItemId: id});
  }

  return (
    <div>
      <ul>
        {state.todoList.map(item => (
          <li key={item.id}>{item.label} <button onClick={() => handleDelete(item.id)}>X</button></li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;