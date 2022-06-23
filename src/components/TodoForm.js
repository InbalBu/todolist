import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }
  
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add a Todo"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
