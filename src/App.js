import React from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Form />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
