## useCallback
Normally, every time a component re-renders, all functions inside it are re-created in memory. 
*When State is Changed The Hole Component Will Re-Render. IF There are Others Components in the component, They Will Also Re-Render*

function App() {

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <button onClick={handleClick}>Click</button>
  );
}

When We Render App Component, handleClick Function Will Re-Render. Eveytime



The *useCallback* Hook is used to *memorize* a function.
Memoizing a function means caching of a function so that it does not need to be recalculated.The useCallback function only re-executes when one of its dependencies changes value.

This allows us to save resource intensive functions so that they will not automatically run on every render.

useCallback does not prevent re-renders. useCallback only ensures that the reference of your function stays the same between renders (if dependencies don’t change).



# Simple Analogy
Think of useCallback as saying:
“Hey React, don’t keep baking me a new cake (function) every time —just reuse the old cake unless I change the recipe (dependencies).”








## memo
The *memo* Hook is used when props will changed, the whole component will re-render. Otherwise, the component will not re-render.

import { memo } from 'react';

function App({data}) {

  return (
    <div>
      <h1>App {data}</h1>
    </div>
  );
}

export default memo(App);