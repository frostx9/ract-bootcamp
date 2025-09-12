import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
   const [count2, setCount2] = useState(0)

    // Case 1: Without useCallback
    // const getNavStatus = ()=>{  
    //   return `Bad: ${count2}`
    // }
    /**
     * When We First Render The Main App <Navbar navStatus={"Good"} getNavStatus={getNavStatus}/> Also Render
     * It Will console log Navbar Rendered Bad: 0
     * Because We Set count2 State to 0
     * 
     * Now When We Click on Count Button, count state was updated, So Main App Again Re-Rende.
     * As Well as getNavStatus() function also re-creted in memory. It Retrun Same Value Bad: 0 and 
     * pass to the <Navbar navStatus={"Good"} getNavStatus={getNavStatus}/>. Though its not changed the
     * value but memo() will see as props was cahnged so Navbar will re-render.
     * 
     * Function Was Re-Created again Memory.... Again And Again When We Click in Count Button
     * 
     */

    // Case 2: With useCallback
    const getNavStatus = useCallback(()=>{
        return `Bad: ${count2}`
    },[count2])

    /**
     * When We First Render The Main App <Navbar navStatus={"Good"} getNavStatus={getNavStatus}/> Also Render
     * It Will console log Navbar Rendered Bad: 0
     * Because We Set count2 State to 0
     * 
     * But This Time When We Click on Count Button, count state was updated, Main App Render Again, But
     * We getNavStatus() function set as a useCallback().. It Will Not Re-creted in Memory. memo() Will See
     * No Props was changed so Navbar Will Not Re-Render.
     * 
     * It Will Re-Created When We Click on Second Count Button, Because count2 State was Updated, So Dependancy 
     * Changed, New Value set as Bad: 1. It Will pass to the props. memo() Will Props was changed so
     * Navbar Will Re-Render
     * 
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
