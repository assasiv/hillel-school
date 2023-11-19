import React from 'react';
import { useState } from "react";
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter (counter + 1);
    // const decrement = () => setCounter (counter - 1);
    const decrement = () => {
        setCounter(Math.max(0, counter - 1));
    }

    return (
        <div className="counter">
            <h2>Hello, your total clicks are <span className="focus">{counter}</span></h2>
            <div className="btns">
                <button className="btn-inc" onClick={increment}>Click on me to increase clicks</button>
                <button className="btn-dec" onClick={decrement}>Click on me to decrease clicks</button>
            </div>
        </div>
    );
}

export default Counter;