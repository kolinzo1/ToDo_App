import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build Todo App", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? todo.completed
      : !todo.completed
  );

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/todos">Todos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route
            path="/todos"
            element={
              <TodoList
                todos={filteredTodos}
                onAddTodo={handleAddTodo}
                onToggleComplete={handleToggleComplete}
                onDeleteTodo={handleDeleteTodo}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
