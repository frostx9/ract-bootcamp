// Behind The Scene How React See any Elements After Comple the Element
// Try To Create Tree After Complie The Element

function customRender(reactElement, container) {  // Custom Render Function

  // Destructuring the React Element
  const { type, props, children } = reactElement;

  // Create New Element
  const domElement = document.createElement(type);

  domElement.innerHTML = children;
  domElement.setAttribute('href', props.href);
  domElement.setAttribute('target', props.target);

  container.appendChild(domElement); // Append the Element to Container

}

const ReactElelmt = {
  type: 'div',   // Type of Element
  props: {      // Properties of Element
    href: 'http://google.com',
    target: '_blank',
  },
  children: "Click Me"  // Children of Element
}


const mainContent = document.querySelector('#root');

customRender(ReactElelmt, mainContent)