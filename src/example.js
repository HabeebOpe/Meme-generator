import React from "react";
import { useState } from "react";

export default function Example() {
     //const [message, setMessage] = useState("")
     const [updated, setUpdated] = useState("habeeb")
     /*const handleChange = (event) => {
          setMessage(event.target.value);
     }*/
     const handleClick = () => {
     setUpdated(updated);
     }
     return(
          <div>
            <input 
               type="text"
               id="message" 
               name="message"
               onChange={(event) => setUpdated(event.target.value)}
                value={updated}
            />
            <h1>Updated: {updated}</h1>
            <button onClick={handleClick}>update</button>
          </div>
     )
}
