import React from "react";

const Todo = ({ text, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {};
  return (
    <div className="todo">
      <li className="todo-item">
        <input type="checkbox" name="" id="" />
        <i>{text}</i>
        <button className="trash-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    </div>
  );
};
export default Todo;
