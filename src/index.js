import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Counter from "./components/Counter.jsx"
import "./index.css";

ReactDOM.render(
  <>
    <App />
    <Counter />
  </>,
  document.querySelector("#root")
);
