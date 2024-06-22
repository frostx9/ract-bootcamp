// import "React" from "react";

// Create Element From React Elelment which is passed to React Render Function

const variable = "Click Me Again"
const ReactElelmt = React.createElement(
  "a",
  {
    href: "http://google.com",
    target: "_blank",
  },
  "Click Me",
  variable  // This is Variable Passed to React Element
)

// React Render Function
ReactDom.createRoot(document.querySelector('#root'))
  .render(ReactElelmt)