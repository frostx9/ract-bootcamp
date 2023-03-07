// State

/**
 * 
2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component)
 */

import React, { useState } from "react"
useState() // Hooks

// its retrun back array


import React from "react"

export default function App() {

  /**
   * "yes" it is just a value, but we pass through useStatr()
   * it retrun in array, so we have to destruture array
   */

  const [anyName, func] = React.useState("Yes")  // Array Destructure
  console.log(result)

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value">
        <h1>{anyName}</h1>
      </div>
    </div>

  )
}


// Counter Practice  - First Method for update state

import React from "react"

export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(count + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}


/**
 * count ++ ...dont use
 * it means count = count + 1 ... it is a no no, 
 * for modify state we use setCount
 */

//Counter Practice  - Second Method for update state with call back function. Most Appropriate

import React from "react"

export default function App() {
  const [count, setCount] = React.useState(0)
  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */
  function add() {
    setCount(prevCount => prevCount + 1)
  }
  // Challenge: update `substract` to use a callback function

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}