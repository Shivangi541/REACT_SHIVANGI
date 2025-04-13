import React from "react";
import ReactDOM from "react-dom/client";
const title = (
  <h1 id="heading" className="head">
    Hello Everyone!!
  </h1>
);

// Functional component using JSX
const Headcomponent = () => (
  <div>
    {title}
    <h1>React component</h1>
  </div>
);

// Rendering the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headcomponent />);
