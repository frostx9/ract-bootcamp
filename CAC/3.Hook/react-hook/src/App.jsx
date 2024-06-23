import { useState } from 'react'
import './App.css'

// In React - React controll the ui updatation
// Hook 
function App() {

  let [counter, setCounter] = useState(0) // 0 is the intial value of the . counter value will be 0 intaiily
  // In Here when we update the counter update then setCounter will update the counter value everywhere in ui
  
  // Add Value Not more than 10
  const addValue = () => {           
    if(counter < 10){
      setCounter(counter + 1)
    }           
  }  

  // Remove Value Not less than 0     
  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>
        Add Value
        </button>
      <br />
      <button onClick={removeValue}>
        Remove Value</button>
    </>
  )
}
                                                                                                                          
export default App
