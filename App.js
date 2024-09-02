import React from "react";
import ReactDOM from "react-dom/client";
//JSX- jsx is not html in js.it is html-like or XML-like syntax.
//React.createElement => ReactElement - JS object => htmlElement(render)
//JSX=>React.createElement=>ReactElement - JS object => htmlElement(render)
// JSX (transpiled before it reaches the JS Engine) -> parcel -> babel
//JSX prevents cross site scripting attack.means it sanitize the code of api.

//React Element
const jsxheading = <h1>Hello React using JSX</h1>;
console.log(jsxheading); //object

//React Component
//Class based Component
//Functional Component - Functional comp. is a function that returns some piece of JSX code.
//Component Composition - pass one component to another component.
/* const Title = () => (
  <h1 className="head" tabindex="5">
    Namaste React using JSX
  </h1>
); */

const title = (
  <h1 className="head" tabindex="5">
    Namaste React using JSX
  </h1>
);
const Heading = (Component = () => (
  <div id="container">
    {title}
    <h1 className="heaidng">Namaste React Fucntional Component</h1>
  </div>
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
