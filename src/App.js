import React from "react";
import Nav from "./Nav"
import Input from "./input"
import MemeDisplay from "./meme"

export default function App(){
  return(
    <div className="app-section">
    <Nav />
      <div className="flex-div">
      <Input />
      <MemeDisplay />
      </div>
    </div>
  )
}
