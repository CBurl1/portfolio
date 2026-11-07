import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* Brave reports background-clip:text as supported but often paints flat gray. Use CSS fallback. */
if (typeof navigator !== "undefined" && navigator.brave && typeof navigator.brave.isBrave === "function") {
  navigator.brave.isBrave().then((isBrave) => {
    if (isBrave) document.documentElement.classList.add("brave-text-fallback");
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
