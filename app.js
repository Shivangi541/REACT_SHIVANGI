import React from "react";
import ReactDOM from "react-dom/client";

// react element
// const heading = React.createElement("h1", { id: "heading" }, "good morning!!");
// console.log(heading);

//jsx headingcreation
const jsxHeading = // babel needs to uunderstand where it is beginning an where it is ending
  (
    <h1 id="heading" className="head">
      Hello Everyone!!
    </h1>
  );
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(jsxHeading);
