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
   * When First Time Open The URl The App Component Will Render. When It Will Render
   * <Navbar color={color}/> Component Render..Because It Written in First in Main Div, When this Navbar Component Render 
   * 
   * First Alert Message "Hey I Will Run on Every Render : Navbar"
   * 
   * Second Alert Message "Hey I Will Run on First Render : Navbar"
   * 
   * Third Alert Message "Hey I Will Run on Dependancy Changed : Navbar"... It Comes Because Intially Color State 
   * set None to 0, So Dependancy was Changed
   * 
   * Navbar Rendering Completed
   * 
   * Now Next Div Will Render  Fourth Alert Message "Hey I Will Run on Dependancy Changed : Main App".. Again Count
   * State set None to 0, So Dependancy was Changed. useEffect() Will Run.. When It Run setColor(count + 1) This is also 
   * run... Now color set to 0 + 1 => 1 .. And It Will Pass as Props to <Navbar color={color}/>
   * 
   * Now Props is Changed So <Navbar color={color}/> Component Again Re-Render
   * 
   * Fifth Alert Message "Hey I Will Run on Every Render : Navbar"
   * 
   * Though color was chaged 0 to 1 , Mean Dependancy was Changed... Case 3 UseEffect Run
   * 
   * Sixth Alert Message "Hey I Will Run on Dependancy Changed : Navbar"
   * 

   * When Firs Time Click is Count ... In The Back.. State Was Changed. When State
   * was changed the Whole App Component Will Re-Render. When Whole Componentr
   * re-rendered <Navbar color={color}/> Component Will Re-Render.
   * 
   * So It First Alert Message "Hey I Will Run on Every Render : Navbar"
   * 
   * State Was Changed.. So in App Component call useEffect() before Dependancy
   * was changed.. Second Alert Message "Hey I Will Run on Dependancy Changed : Main App"
   * 
   * In App Component useEffect() we serColor(count + 1),  So Color State was changed, This 
   * color passed as Props to <Navbar color={color}/> Component.. When Props Was Changed
   * <Navbar color={color}/> Component Will Re-Render.
   * 
   * When It Again Re-Render Third Alert Message "Hey I Will Run on Every Render : Navbar"
   * 
   * Next, in Navbar Component useEffect() color was changed From. So Dependancy was changed.
   * 
   * Fourth Alert Message "Hey I Will Run on Dependancy Changed : Navbar"
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
