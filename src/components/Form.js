import REACT from "react";
//Giving classes to these html elements -> change to className (React doesnt react very well to classes)
//Import useState parameters
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  //Here I can write JavaScript code and functions
  const inputTextHandler = (e) => {
    console.log(e.target.value); // e = event (onChange on input, e.target = input field, e.target.value = value of input field on change (every keystroke))
    setInputText(e.target.value); // Passes on target.value (input text) to App.js
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, //... notation = if there were todos previously, add new setTodos after them(to not replace them)
    ]);
    setInputText(""); // Set inputText to empty again after submitting a todo
  };
  return (
    <div className="basicForm">
      <form action="">
        <input value={inputText} onChange={inputTextHandler} type="text" />
        {/* value={inputtext} is to make the value of inputfield equal to inputText, which becomes zero after adding to todolist */}
        {/* Everytime our input changes, the inputTextHandler function is ran */}
        <br />
        <button type="submit" onClick={submitTodoHandler}>
          Add to (do) list
        </button>
        <button>Clear todo list</button>
      </form>
      <div className="leftTodo">
        <p>Left to do: 0</p>
      </div>
    </div>
  );
};

export default Form;
