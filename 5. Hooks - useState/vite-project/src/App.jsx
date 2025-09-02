import { useState } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  // Add Value On Click Function
  const addValue = () => {
    if(count >= 20) return
    setCount(count  + 1)
  }

  // Remove Value On Click Function
  const removeValue = () => {
    if(count <= 0) return
    setCount(count - 1)
  }


  return (
    <>
     <h1>Counter</h1>
     <h2>Counter Value : {count}</h2>
     <button onClick={addValue}>Add</button>
     <br />
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
