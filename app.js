/* This code snippet is using React to create and render elements in the DOM. Here's a breakdown of
what it does: */
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!!"
); // javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // converting an object to a react element and rendering it in the DOM

/* This code snippet is creating a nested structure of elements using React's `createElement` function.
  Here's a breakdown of what it does: */
const nestedHeading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "sibling1" }, "I am h1 tag "),
    React.createElement("h2", { className: "sibling2" }, "I am h2 tag"),
  ])
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(nestedHeading);
console.log(nestedHeading);
