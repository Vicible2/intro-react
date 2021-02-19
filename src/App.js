import React, { useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // [inputText = current state/default state, setInputText = update of currentstate]
  const [todos, setTodos] = useState([]); // State for todolist itsself
  return (
    <div className="App">
      <Header />
      {/* export useState parameters to components */}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      {/* give access to setInputText inside of form.js through props*/}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
