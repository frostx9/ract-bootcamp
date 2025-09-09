import {useEffect} from 'react'

function Navbar({color}) {
   // Case 1: Run On Every Render
  useEffect(() => {
    alert("Hey I Will Run on Every Render : Navbar")
  })

  // Case 2: Run On First Render
  useEffect(() => {
    alert("Hey I Will Run on First Render : Navbar")
  }, [])


  // Case 3 : Run On Dependancy Changed
   useEffect(() => {
    alert("Hey I Will Run on Dependancy Changed : Navbar")
  }, [color])

  // Case 4 : Clean Up / Unmounted A Component
  useEffect(() => {
    return () => {
      alert("Navbar Component Will Unmount : Navbar")
    }
  }, [])

  return (
    <div>Navbar : {color}</div>
  )
}

export default Navbar