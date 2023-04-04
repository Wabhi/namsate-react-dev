import React from "react";
import ReactDOM from "react-dom/client";

//react element
const jsxHeading = (
  <h1 className="heading" id="jsxHeading">
    HI ABHISHEK WELCOME BACK !
  </h1>
);

//react component 1

const Title = () => {
  return <p>Hi There</p>;
};
//react component 2
const Heading = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading">Hello React ! How are you?</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
