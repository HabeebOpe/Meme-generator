import React from "react";

export default function Input(){
  return(
    <div className="inputSection">
      <div className="input">
        <input type="text" placeholder="Top text"/>
        <input type="text" placeholder="Bottom text"/>
      </div>
      <button>GENERATE MEME</button>
      <button>DOWNLLOAD MEME</button>
    </div>
  )
}
