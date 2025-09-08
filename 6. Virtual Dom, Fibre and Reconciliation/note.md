# Page Reload
When We Reload A Page browser remove the old Dom and re-structure new Dom. That is called *Page Reload*



## Reconciliation
Reconciliation is a React Diff Algorithm to compare the Virtual Tree(DOM) with Real Tree(DOM), to whic part need to be changed



## createRoot Method
createRoot(document.getElementById('root')).render(<App />)

This createRoot Method is to creatd *DOM* Like Structure in the React. The Main Goal is that it *compares the Virtual Dom with Real Dom* and *update only changes portion of the Virtual Dom into the Real Dom* via *Reconciliation* diff algorithm . To Stop Page Reload Method



## React Fiber Architecture
React Fibre is an *New implementation* of *React Core Algorithm* (Virtual Dom).

The Main Goal is to sustaiabilty for areas like animation, layout, and gestures. The Main Problem of the Past React is that, Rect immediately update the UI.
Ex. Suppose React Updating A UI, in the mean time a new update is coming, React Start to Updaing immediately. Again Come another. This cause a lot of problem.

So in React Fibre, React update only final update. Not again and again

Key Features of React Fibre : 1. Pause , 2. Suspend, 3. Resume 



## Hydration
When Web pages is Rendering , HTML Part Rendered First. After Web Layout Complete the JS Part injected into the HTML. That is called *Hydration*



## Why We use Keys in Reace When We Loop over Array
To Imporve Performance of React Fibre