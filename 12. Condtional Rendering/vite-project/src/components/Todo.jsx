import React from 'react'

function Todo({ todo }) {
  return (
    <>
      {/* This Is called Optional Chaining */}
      
      <div>{todo?.title || "No Title"}</div>
      <div>{todo?.desc || "No Description"}</div>
    </>
  )
}

export default Todo
