# Start New Project (With Vite)
npx create-vite@latest


# SPA (Single Page Application)
React has only one index html page in whole project. That is called Single Page Application.It Just Rendering Every Time (One Html Page)
when we change the website page. It Possiable Via DOM



# Flow Of React
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

This 'root' id will find in index.html. It is a 'div' id. So in here we first call the div via 
getElementById and then render the <App/ > in that div


In The App.jsx file we write simple javascript code. React gave us operunity return html file via funcion.



# Injecting Script/ js file Into HTML File

# First Method.
In *Create React App* we use *react-script* library to inject js file into html

# Second MEthod. 
In *Vite React App* we use old method. Using Script Tag in Html File




# Rule of React 
1.Component Name(Function) Always Start with Uppercase Letter
2. JSX Can Export Only One Parent Element in closing tag at a time. To Handle the issue / Send Multiple 
Element in JSX we use Fragment. <Fragment> </Fragment>. React concider this is one and only
parent element

Multipale Component Return JSX with Fragment
<>
<h1> </h1>
<h1> </h1>
<h1> </h1>
</>
