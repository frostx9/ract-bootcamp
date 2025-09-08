import { useState } from 'react'
import './App.css'

function App() {

  const red = (data)=>{
    setColor(data)
  }

  const [color, setColor] = useState('white')
  return (
    <>

      <div className="w-full h-screen" style={{backgroundColor:color}}>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        <button onClick={()=> red('red') } className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=> setColor("pink") }className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=> setColor("orange") }className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"orange"}}>Orange</button>

      </div>
      </div>
    </>
  )
}

export default App
