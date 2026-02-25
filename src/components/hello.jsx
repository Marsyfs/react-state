import react from "react";
import { useState } from "react";

export default function Message() {
    const [message, setMessage] = useState("Hello");

    //create the state, message/first variable === "hello"
    //set the state, setMessage/second variable === function that updates the state

    function handleClick() {
        setMessage("Hello James!");
    }

    //update the message and render the component. message = "Hello James!" will not render

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}></button>
        </div>
    );
    
}
