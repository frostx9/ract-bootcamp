## Props - Properties
Props is a way to pass data from one component to another component. Every Component Has Access To Props


## Passing Value Through Props
<component-name prop-name="value">

Ex: <Card title="Hello World" />  ... It Will Pass as an Object To Card Component. {title: 'Hello World'}
To Capture in Card Component, We have To Destructure It in Function Call 

function component-name ({title}) {
  return (
    <div>{title}</div>
  )
}


## Passing Multiple Props

const obj = {}
const arr = []

<component-name prop-name_1="value" prop-name_2={obj} prop-name_3={arr}>



## Why Use Props
To Make Component Reusable


## Tailwind Css
Tailwind is a utility-first CSS framework.

*Intall* - npm install tailwindcss @tailwindcss/vite



# Image Tag in React
Image Tag in React should be in <img> tag and it need to be closed with 

Ex: <img src="https://picsum.photos/400/300?random=90" alt="Featured content" />



# Make Component Everythings
Component is a method for using reusable code.
Create *components* folder in src folder. Write All Components Code in *components* folder