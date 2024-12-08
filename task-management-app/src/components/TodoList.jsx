import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import FilterTodos from "./FilterTodos";

const TodoList = ({
  todos,
  onAddTodo,
  onToggleComplete,
  onDeleteTodo,
  filter,
  setFilter,
}) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        <FilterTodos filter={filter} setFilter={setFilter} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
      <div className="todo-form">
        <TodoForm onAddTodo={onAddTodo} />
      </div>
    </div>
  );
};

export default TodoList;
