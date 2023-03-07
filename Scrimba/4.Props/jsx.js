import React from "react"
import ReactDOM from "react-dom"


// Example of Jsx with vanila javascript logics


function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  /**
   * Challenge: fix the h1 below to use the timeOfDay
   * string we determined in the code above
   * We put dynamic value in --> {}..like in js ${}
   */

  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))