import React from "react";
//Import components
import Todo from "./Todo";

const TodoList = () => {
  const todos = ["My first todo", "My second todo"];
  return (
    <div>
      <ul className="fullTodoList">
        <Todo />
        <Todo />

        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
