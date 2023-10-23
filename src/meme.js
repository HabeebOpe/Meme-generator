import React from "react";
import { useState } from "react";
import memesData from "./data"

export default function Meme(){
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText : "",
    randomImage: "./images/26939_79.jpg"
  })
  const [updatedTopText, setUpdatedTopText] = useState(meme.topText)
  const [updatedBottomText, setUpdatedBottomText] = useState(meme.topText)
  const [allMemeImage, setAllMemeImage] = React.useState(memesData)
  function generateMeme() {
    const memesArray = allMemeImage.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const memeSrc = memesArray[randomNumber].src
    setMeme(prevMeme => ({
      ...prevMeme,
      topText: updatedTopText,
      bottomText: updatedBottomText,
      randomImage: memeSrc
    }))
  }
  return(
    <div className="flex-div">
    <div className="inputSection">
      <div className="input">
        <input 
          placeholder="Top text"
          type="text"
          id="top-text" 
          name="Top text"
          onChange={(event) => setUpdatedTopText(event.target.value)}
          value={updatedTopText}
        />
        <input 
          placeholder="Bottom text"
          type="text"
          id="top-text" 
          name="Top text"
          onChange={(event) => setUpdatedBottomText(event.target.value)}
          value={updatedBottomText}
        />
      </div>
      <button onClick={generateMeme}>GENERATE MEME</button>
      <button>DOWNLOAD MEME</button>
      <h1>{updatedTopText}</h1>
      <h1>{updatedBottomText}</h1>
    </div>
    <div className="meme-display">
      <img src={meme.randomImage} />
    </div>
    </div>
  )
}
