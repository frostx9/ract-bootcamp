// .addEventListner

/**
 * .addEventListener("click", function() {})
 */

import React from "react"

export default function App() {
  function handleClick() {
    console.log("I was clicked!")
  }

  function handleOnMouseOver() {
    console.log("MouseOver")
  }

  /**
   * Challenge: 
   * Log something to the console when the mouse hovers over the image
   */

  return (
    <div className="container">
      <img
        src="https://picsum.photos/640/360"
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}



// For Array

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}> {thing} </p>)  // map the array and retrun within p tag

  function handleOnClick() {
    thingsArray.push(`Thing ${thingsArray.length + 1}`)
  }

  return (
    <div>
      <button onClick={handleOnClick}>Add Item</button>
      {thingsElements}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));