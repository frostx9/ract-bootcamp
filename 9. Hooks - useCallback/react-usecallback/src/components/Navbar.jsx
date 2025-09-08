import React from "react";
import { memo } from "react";

function Navbar({navStatus, getNavStatus}) {
  console.log("Navbar Rendered", getNavStatus());  
  
  return (
    <div>
      <h1>Navbar Count : {navStatus}</h1>
      <button onClick={()=> {getNavStatus()}}>{getNavStatus()}</button>
    </div>
  )
}

export default memo(Navbar)