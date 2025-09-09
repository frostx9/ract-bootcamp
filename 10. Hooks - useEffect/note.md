*Small Vs Code Shortcuts - code -r <folder_name>  ... It Will Open Directly the Fodler workspace In VS Code*

## useEffect
useEffect is a type of React Hook To used to perform side effects in function components. It's used to perform actions like updating the DOM, fetching data, subscribing to events, etc when component Renders / Mount 

## How To Write
useEffect(() => {
    
}, [])


Ex :   
useEffect(() => {
  alert("React UseEffect")
}, [])



[] => This is The Dependency Array. Means It Will Run Only again when dependency Array Will Change

Ex :
useEffect(() => {
  alert("Count Was Changed")
}, [count])

It Will Run Only again when count Will Change / Dependency Array Will Change. But It Will First Time When Component Will Mount.

## More Precously

  // Case 1: Run On Every Render
  useEffect(() => {
    alert("Hey I Will Run on Every Render")
  })

  // Case 2: Run On First Render
  useEffect(() => {
    alert("Hey I Will Run on First Render")
  }, [])


  // Case 3 : Run On Dependancy Changed
   useEffect(() => {
    alert("Hey I Will Run on Dependancy Changed")
    setColor(count + 1)
  }, [count])