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

// Ternary Operator

import React from "react"

export default function App() {

  const isGoingOut = true

  // let answer  // Use ternary here
  // if (isGoingOut === true) {
  //   answer = "Yes"
  // } else {
  //   answer = "No"
  // }

  // let answer = isGoingOut === true ? "Yes" : "No" 
  let answer = isGoingOut ? "Yes" : "No"  // Another Method
  /**
   * isGoingOut === true ? --> mean if isGoingOut === true
   * ? "Yes" --> the it will be yes
   * : "No" --> Otherwise Not
   */


  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  )
}

// Ternary Operator - Practice

import React from "react"

export default function App() {

  cosnt[isGoingOut, setIsGoingOut] = React.useState(true)
  /**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={changeMind}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  )
}


//setThingsArray(prevThingsArray => prevThingsArray.push()) ...this will still modify state

// For Array

import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [originalSet, copyOriginalState] = React.useState(["Things 1", "Things 2"])

  // handleOnClick() func will be executed when onClick Event Listner Called
  function handleOnClick() {
    copyOriginalState(prev => {
      return [...prev, `Things ${prev.length + 1}`]
    })
  }

  // For Render New Data
  const renderThings = originalSet.map((thing) => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={handleOnClick}>Add Item</button>
      {renderThings}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// For Object

const [contact, setContact] = React.useState({
  firstName: "John",
  lastName: "Doe",
  phone: "+1 (719) 555-1212",
  email: "itsmyrealname@example.com",
  isFavorite: true
})

let starIcon = ""
starIcon = contact.isFavorite ? `../images/star-filled.png` : `../images/star-empty.png`


function toggleFavorite() {
  setContact(prevContact => {
    return {
      isFavorite: !prevContact.isFavorite
    }
  })
}

// In this code it replace all object value with only isFavorite
//So Overcome we have to bring all object in to setContact() with spread opertaor..isFavorite also come, but later it will replcae by new one which
// is set maually

function toggleFavorite() {
  setContact(prevContact => {
    return {
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }
  })
}

// with implicit retrun 
function toggleFavorite() {
  setContact(prevContact => ({
    ...prevContact,
    isFavorite: !prevContact.isFavorite
  }))
}

