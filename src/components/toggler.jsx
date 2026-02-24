import { useState } from "react";

export default function Toggler() {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(prev => !prev);
    }

    return (
        <div>
            <p>{isOn ? "" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
}