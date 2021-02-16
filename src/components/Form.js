import REACT from "react";
//Giving classes to these html elements -> change to className (React doesnt react very well to classes)
const Form = ({ setInputText }) => {
  //Here I can write JavaScript code and functions
  const inputTextHandler = (e) => {
    console.log(e.target.value); // e = event (onChange on input, e.target = input field, e.target.value = value of input field on change (every keystroke))
    setInputText(e.target.value); // Passes on target.value (input text) to App.js
  };
  return (
    <div className="basicForm">
      <form action="">
        <input onChange={inputTextHandler} type="text" />
        {/* Everytime our input changes, the inputTextHandler function is ran */}
        <br />
        <button type="submit">Add to (do) list</button>
        <button>Clear todo list</button>
      </form>
      <div className="leftTodo">
        <p>Left to do: 0</p>
      </div>
    </div>
  );
};

export default Form;
