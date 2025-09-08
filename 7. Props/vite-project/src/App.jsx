import './App.css'
import Card from './components/Card'

function App() {

  const obj = {
    desc: "Vite makes web development simple again"
  }

 return (

    <>
     <h1 className="bg-red-500 p-4 text-white rounded-xl mb-10" >Tailwind With Props</h1> 
     <Card title="Hello World" desc={obj} />
    </>
    
 
  
  )
}

export default App
