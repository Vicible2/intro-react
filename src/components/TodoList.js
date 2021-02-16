import React from "react";

const TodoList = () => {
  return (
    <div>
      <ul className="fullTodoList">
        <li>
          <input type="checkbox" name="todoListItem" id="todoItem1" /> Todo 1
        </li>
        <li>
          <input type="checkbox" name="todoListItem" id="todoItem2" /> Todo 2
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
