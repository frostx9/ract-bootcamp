*Javascript Run Stand Alone. To Inject Javascript in HTML use <script> tag in HTML*

## src Folder
All The Js Files Are Stored In *src* Folder

The Main Entry Point of src folder Is *main.jsx / index.jsx*


## Flow Of React
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

This 'root' id will find in index.html. It is a 'div' id. So in here we first call the div via 
getElementById and then render the <App/ > in that div


<App /> -> This Is a Basically a Custom Tag (Javascript With HTML) which is Rendered in Index.html. 
In The App.jsx file we write simple javascript code. React gave us operunity return html file via funcion. This is called *JSX*.


## JSX
function App() {
  return (
   <h1>Hello World</h1>
  )
}

This Method Give Us Programing Capability IN HTML



# Function Name Convention
*Fucntion Name / Component Name* Always Start with Uppercase Letter in *Vite Project*
*File Name* is also Start with Uowercase Letter (Best Practice)



# Return Element
In Jsx we return only one parent element. If we want to return multiple element we use Fragment.
React concider this is one and only parent element

<>
<h1> </h1>
<App/>
</>




# Injecting Script/ js file Into HTML File

# First Method.
In *Create React App* we use *react-script* library to inject js file into html

# Second MEthod. 
In *Vite React App* we use old method. Using Script Tag in Html File