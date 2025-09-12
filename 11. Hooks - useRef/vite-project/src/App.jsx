import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  /*
  Use Case : 1
  When Any State Change... The Whole Component Will Re-Render Every Time. So Below This Code Though We Want to a a increase 
  by 1 .. But Sill it will always be 1. Becuse Eveytime Render a beacme count updated, State Change So the whole
  component will re-render. So a will be 0 again and next line will be 1 again.

  So We Have to use useRef Hook.
  */ 
  let a = 0

  useEffect(() => {
    a += 1
    console.log(`App Rendered Every Time ${a}`);
  })
  

  /**
   * UseRef Hook is used to create a mutable variable that persists across renders. It Does Not Cause a Re-Render.
  */

  let b = useRef(0)

  useEffect(() => {
    b.current += 1
    console.log(`App Rendered Every Time ${b.current}`);
  })


  /**
   * Use Case : 2
   * We Can Also used For Refernce A Element to access a DOM element directly.
  */

  let btnRef = useRef(null)

  useEffect(() => {
    btnRef.current.style.color = "Yellow"
  }, [])
  

  return (
    <>
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
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => btnRef.current.style.color = "Red"}>Click Me</button>
    </>
  )
}

export default App
