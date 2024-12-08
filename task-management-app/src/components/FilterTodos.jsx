import React from "react";

const FilterTodos = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>
    </div>
  );
};

export default FilterTodos;
