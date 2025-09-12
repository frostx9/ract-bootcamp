import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  // const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  let btnRef = useRef(null)
  const [todos] = useState([
    {
      id: 1,
      title: "Learn React",
      desc: "Ongoning"
    },
    {
      id: 2,
      title: "Learn Vue",
      desc: "Not Done"
    },
    {
      id: 3,
      title: "Learn Angular",
      desc: "Not Done"
    }
  ])


  /**
   * onClick={() => setShow(!show)}>  This Line Of Code Says That When Click on Button.. show State Will be Updated 
   * Everytime to Opposite of the Current State
   */

  const buttonShow = () => {
    setShow(!show)
    show ? btnRef.current.style.color = "green" : btnRef.current.style.color = "red"
  }

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
        <button onClick={buttonShow}>
          Click Me
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Conditional Rendering By True And False */}
      <button ref = {btnRef}>{show ? "Hide" : "Show"}</button>


      {/* List Rendering With Map. Remember Always Pass A Unique Value Throush Props in List Rendering */}
      {todos.map((item)=>{
        return <Todo key={item.id} todo={item}/> // In This Code We Return Todo Compoment Multipale Time
      })}

    </>
  )
}

export default App
