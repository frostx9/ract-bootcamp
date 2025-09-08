import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
   const [count2, setCount2] = useState(0)

 
    // const getNavStatus = ()=>{  
    //   return `Bad: ${count}`
    // }
    /**
     * When We Write This getNavStatus() Function Without useCallback
     * It Will always Render the Function Everytime When State Update 
     * When We Call onClick={() => setCount((count) => count + 1)}
     * Method. Because Everytime App.jsx Will Re-Render
     */

    const getNavStatus = useCallback(()=>{
        return `Bad: ${count2}`
    },[count2])

    /**
     * If We Dont use memo It Will Still Re-Render The Navbar Component Everytime When State Update
     * But Navbar Component Will Point To One Function. Because We Have Used useCallback
     * 
     * [count2] This is Called Dependancy Array
     * It means, If count2 State Will Change, It Will Re-Render getNavStatus Function with App() Component
     */


  return (
    <>
      <Navbar navStatus={"Good"} getNavStatus={getNavStatus}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
