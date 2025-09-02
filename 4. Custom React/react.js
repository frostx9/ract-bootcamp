
// Fucntion For Rendering New Element
function customRender(element, container) {
  const domElement = document.createElement(element.type)
  domElement.innerHTML = element.props.children

  container.appendChild(domElement)
}


// Grab The DIV From HTML
const mainContainer = document.getElementById('root')

// Sample Of React Component
const reactElement = {
  type: 'h1',
  props: {
    children: 'Hello World'
  }
}


customRender(reactElement, mainContainer)


