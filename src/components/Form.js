import REACT from "react";
//Giving classes to these html elements -> change to className (React doesnt react very well to classes)
const Form = () => {
  return (
    <div className="basicForm">
      <form action="">
        <input type="text" />
        <button type="submit">Add to (do) list</button>
      </form>
    </div>
  );
};

export default Form;
