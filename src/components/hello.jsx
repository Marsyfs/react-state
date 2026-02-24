import react from "react";
import { useState } from "react";

export default function Message() {
    const [message, setMessage] = useState("Hello");

    function handleClick() {
        setMessage("Hello James!");

    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}></button>
        </div>
    );
    
}
