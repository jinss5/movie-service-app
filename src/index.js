import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// <App /> is a component and a component is a function that returns html
// only one component should be rendered. Therefore, only <App /> exists. More components extend inside App