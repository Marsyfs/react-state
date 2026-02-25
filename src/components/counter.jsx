import {useState} from 'react';

export default function Counter() {
    const [count, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(prev => prev + 1);
    }

    //prev => prev is to ensure a full render, otherwise the count will not update until the next click.

    function handleDecrement() {
        if (count > 0) {
        setCounter(prev => prev - 1);
        }
    }

    //prevent the count from going below 0

    function handleReset() {
        setCounter(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Plus 1</button>
            <button onClick={handleDecrement}>Minus 1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}