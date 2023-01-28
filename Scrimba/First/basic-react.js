// Using CDN

/*
Reason To Learn React - 
1. Composable
2. Declarative
*/


// Example Of Composable

function MyCompo() {
  return (
    < h1 > Hello </h1 >
  )
}

ReactDOM.render(
  <div>
    <MyCompo />
  </div>,
  document.getElementById("root")
)


// Declarative (React) - What should be done. mean tell computer what to do and computer will take care of rest
//Imperative - Tell Computer Step By Step


// JSX  - Javascript XML
//JSX / React return as plain javascript Onbject
// React retun only one parent Element

ReactDOM.render(
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
)
// In here <div> is the paraent element


// Save as a variable and render
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)