import React from "react";
import App from "./App.js";
import reactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context.js";

reactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
