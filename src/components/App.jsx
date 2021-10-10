import React, { useState } from "react";
import "./App.css";

function App() {
  const randomNumber1 = Math.ceil(Math.random() * 10);
  const randomNumber2 = Math.ceil(Math.random() * 10);

  const [state, setState] = useState({
    num1: randomNumber1,
    num2: randomNumber2,
    response: "",
    score: 0,
    onScreen: "RESPOND CORRECTLY",
  });

  function inputKeyPress(event) {
    if (event.key === "Enter") {
      const answer = parseInt(state.response);
      if (state.num1 + state.num2 === answer) {
        setState({
          num1: randomNumber1,
          num2: randomNumber2,
          score: state.score + 1,
          response: "",
          onScreen: "CORRECT!",
        });
      } else {
        setState({
          ...state,
          score: state.score - 1,
          response: "",
          onScreen: "WRONG!",
        });
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  return (
    <div className="body-component">
      <div className="on-screen">{state.onScreen}</div>
      <div className="line"></div>
      <div className="num-math">
        {state.num1}+{state.num2}
      </div>
      <div className="response-input">
        <input
          onKeyPress={inputKeyPress}
          onChange={updateResponse}
          value={state.response}
        />
      </div>
      <div className="res">
        Score: <span>{state.score}</span>
      </div>
    </div>
  );
}

export default App;
