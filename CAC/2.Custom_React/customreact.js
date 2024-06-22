
// Custom React Render Function
function customRender(reactElement, container) {  // Custom Render Function

  // Destructuring the React Element
  const { type, props, children } = reactElement;

  // Create New Element
  const domElement = document.createElement(type); // Create Ancahr Type Element

  domElement.innerHTML = children;

  // domElement.setAttribute('href', props.href);
  // domElement.setAttribute('target', props.target);

  // container.appendChild(domElement); // Append / Add Custome Element to Div


  // Loop Based On React Element (Modular). Dynamic Properties Pass
  for (const prop in props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, props[prop]);
  }

  container.appendChild(domElement); // Append / Add Custome Element to Div
}



// When Pass A element through function to React it will look like this after compile
// Try To Create Tree After Complie The Element
// This is A Element came from funfction (Example)

// Convert This Element to React Element As A Tree Structure
<a href="http://google.com" target="_blank">Click Me</a>

const ReactElelmt = {
  type: 'a',    // Type of Element. Anchaor Tag
  props: {      // Properties of Element
    href: 'http://google.com',
    target: '_blank',
  },
  children: "Click Me"  // Children of Element
}


// Select The Div By ID
const mainContent = document.querySelector('#root');

// Custom Render Function Call
customRender(ReactElelmt, mainContent)