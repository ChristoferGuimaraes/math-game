import React, { useState } from "react";

function App() {
  /* const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2); */
  const [state, setState] = useState({
    num1: 5,
    num2: 8,
    response: "",
    score: 0,
    onScreen: ''
  });

  function inputKeyPress(event) {
    if (event.key === "Enter") {
      const answer = parseInt(state.response);
      if (state.num1 + state.num2 === answer) {
        setState({
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          score: state.score + 1,
          response: '',
          onScreen: "Correct!"
        });
      } else {
        setState({
          ...state,
          score: state.score - 1,
          response: '',
          onScreen: "Wrong!"
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
    <>
      <div>{state.onScreen}</div>
      <div>
        {state.num1}+{state.num2}
      </div>
      <input
        onKeyPress={inputKeyPress}
        onChange={updateResponse}
        value={state.response}
      />
      <div>Score: {state.score}</div>
    </>
  );
}

export default App;
