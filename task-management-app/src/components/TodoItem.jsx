import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
