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

// Practice - Non Ideal

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


// Custom Component - Ideal

function TemporaryPage() { // Function Name Should be PascalCase
  return (
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
}

ReactDOM.render(<TemporaryPage />, document.getElementById("root"))


//Parent/Child Custom Component - Most Ideal
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  )
}

function Page() {      // Page () - Parent Component
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))


// CSS - Resacrch later

/**
 * .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    width: 60px;
}

.nav-items {
    list-style: none;
    display: flex;
}

.nav-items > li {
    padding: 10px;
}
 */