import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id != todo.id));
    console.log(todo);
  };
  return (
    <div className="todo">
      <li className="todo-item">
        <input type="checkbox" name="" id="" />
        <i>{text}</i>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    </div>
  );
};
export default Todo;
