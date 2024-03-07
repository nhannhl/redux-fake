import React, { useContext, useState } from 'react'
import AppContext from '../../redux-fake/stateContext';

function AddTodo() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleAddTodo = () => {
    dispatch({type: "MASTER_TODO_LIST/ADD_TODO_ITEM", todoItemLabel: todo})
  }

  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAddTodo} >+</button>
    </div>
  )
}

export default AddTodo;