import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello Nested React1"),
    React.createElement("h2", { id: "heading" }, "Hello Nested React2"),
    React.createElement("h3", { id: "heading" }, "Hello Nested React3"),
    React.createElement("h4", { id: "heading" }, "Hello Nested React3"),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);
