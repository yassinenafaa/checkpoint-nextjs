"use client";
import React, { useState } from "react";

const Counter = () => {
    const [count, setcount] = useState(0);
    return (
        <div className='counter'>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <h3>{count}</h3>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
