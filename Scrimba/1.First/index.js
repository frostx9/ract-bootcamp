ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))
//                   What i Want to prin         where i want into print

//Practice
ReactDOM.render(<ul>
  <li> Milk </li>
  <li> Cheese </li>
</ul>, document.getElementById("lsit"))

// Imperative - Telling Step By Step
const h1 = document.createElement("h1") // Create Elelment
h1.textContent = "Hello React"
h1.className = "header" // Giving Classname
document.getElementById('root').append(h1)
