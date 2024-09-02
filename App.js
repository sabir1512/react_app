import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  //React.createElement=> object => htmlElement(render)
  React.createElement("div", { id: "div1" }, [
    React.createElement("p", {}, "This is a paragraph1 for sabir ali"),
    React.createElement("p", {}, "This is a paragraph2"),
    React.createElement("p", {}, "This is a paragraph3"),
    React.createElement("p", {}, "This is a paragraph4"),
    React.createElement("p", {}, "This is a paragraph5"),
  ]),
]);
/*<div id="parent">
<div id="child">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
<div id="child2">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div>*/
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
