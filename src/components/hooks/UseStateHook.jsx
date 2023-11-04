import React, { useState } from "react";

const UseStateHook = function() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className="hook-example">
            <h2 style={{marginBottom: "10px"}}>UseState hook</h2>
            <hr></hr>
            <p>Counter: {count}</p>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </div>
    );
};

export default UseStateHook;