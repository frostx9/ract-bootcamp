// Using React package via NPM

import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root")) // React 17 

ReactDOM.createRoot(document.getElementById("root")).render(navbar) // React 18
//or
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)