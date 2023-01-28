// Using React package via NPM

import React from "react"
import ReactDOM from "react-dom" // For React 17
import ReactDOM from "react-dom/client" // For React 18

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

// Practice

import React from "react"
import ReactDOM from "react-dom"

const page = (
  <div>
    <h1> <strong> Fun Fact About React</strong></h1>
    <ul>
      <li>Was First Released in 2013</li>
      <li>Was Origianlly created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintaiend By Facebook</li>
    </ul>
  </div>
)

ReactDOM.render(page, document.getElementById("root"))

