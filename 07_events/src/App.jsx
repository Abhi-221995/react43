import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  // function clicked() {
  //   alert("button click : event triggered");
  // }

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   setText(event.target.value);
    // console.log(setText(event.target.value));
  // }

  function submitHandler(e) {
    // v imp
    e.preventDefault();
    alert("form submitted");
  }

  return (
    <div>
      {/* <button onClick={clicked}>Button</button> */}

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          placeholder="enter something"
          onChange={(e) => setText(e.target.value)}
        />

        <p>you typed : {text}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
