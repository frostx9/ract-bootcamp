import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)


  // Case 3 : Run On Dependancy Changed
   useEffect(() => {
    alert("Hey I Will Run on Dependancy Changed : Main App")
    setColor(count + 1)
  }, [count])


  /**
   * React always renders parent component first (App in this case). Rendering = React building the "virtual DOM tree" of what UI should look like.
   * 
   * During this phase, React calls App() to know what to render inside it. After Finishing parent rendering completed , When React reaches <Navbar color={color}/> inside App’s JSX, it will then 
   * render the Navbar component.
   * 
   * So the render order is:
   * 1. App runs first.
   * 2. Then, inside App's JSX, Navbar runs.
   * 
   * Important: useEffect does not run during rendering. It runs after the DOM is painted (commit phase).
   * 
   * 
   * So the lifecycle looks like this:
   * 
   * 1.App renders → builds JSX tree.
   *       While rendering, React sees <Navbar color={color}/>.
   *       It calls Navbar() to know what to render inside it.
   * 
   * 2. Navbar renders → React builds Navbar’s JSX tree
   * 3. React commits both App and Navbar UI to the DOM.
   * 
   * 4. Now, React runs all useEffect hooks:
   *        First useEffect in Navbar (since it mounted).
   *        Then useEffect in App.
   * 
   * First render order:
   *  App → then Navbar (because Navbar is inside App).
   * 
   * First effect order:
   * Navbar useEffect runs before App useEffect, because React runs child effects first, then parent effects.
   * 
   * Render + Effect Flow : 
   * App renders (initial count=0, color=0)
   * Inside App’s JSX → Navbar renders (color=0)
   * 
   * During render, no effects run yet only commit happens. 
   * 
   * Now, React runs all effects (child before parent).
   * Effects order:
   * 
   * Navbar Case 1 → "Hey I Will Run on Every Render : Navbar"
   * Navbar Case 2 → "Hey I Will Run on First Render : Navbar"
   * Navbar Case 3 (dependency: color=0 changed from undefined) -> "Hey I Will Run on Dependancy Changed : Navbar"
   * 
   * App useEffect [count] (dependency: count=0 changed from undefined) -> "Hey I Will Run on Dependancy Changed : Main App"
   * Inside it: setColor(count+1) → updates color to 1.
   * State update (color). So It triggers for re-render.
   * 
   * App renders again (count=0, color=1).
   * Navbar renders again with color=1. Because State Update Afain With Color=1.
   *
   * Child Component Effect Run First
   * Navbar Case 1 → "Hey I Will Run on Every Render : Navbar"
   * Navbar Case 3 (dependency: color changed from 0 → 1) → "Hey I Will Run on Dependancy Changed : Navbar"
   * App useEffect does not run (since count didn’t change this time).
   * 
   * 
   * When Click The Button :
   * count goes from 0 → 1. State Was Updated. App re-renders (count=1, still color=1 for now).Navbar renders with color=1. Though Its Re Rendering, App Render First.. Navbar Render Secound
   * But Child UseEffect Run First
   * 
   * Navbar Case 1 → "Hey I Will Run on Every Render : Navbar"
   * App useEffect [count] (dependency count changed 0→1) → "Hey I Will Run on Dependancy Changed : Main App"
   * Inside it: setColor(count+1) → updates color=2.
   * 
   * App renders again (count=1, color=2). Navbar renders again with color=2. Navbar Useeffect Run First
   * Navbar Case 1 → "Hey I Will Run on Every Render : Navbar"
   * Navbar Case 3 (dependency: color changed 1→2) → "Hey I Will Run on Dependancy Changed : Navbar"
   * 
   */

  return (
    <>
      <Navbar color={color}/>
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
