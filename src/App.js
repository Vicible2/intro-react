import React, { useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // [inputText = current state/default state, setInputText = update of currentstate]
  return (
    <div className="App">
      <Header />
      <Form setInputText={setInputText} />
      {/* give access to setInputText inside of form.js through props*/}
      <TodoList inputText={inputText} />
    </div>
  );
}

export default App;
