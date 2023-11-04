import React, { useState, useMemo, useEffect } from "react";

function complexFunction(num) {
    let i = 0
    while (i < 1000000000) i++
    return num
}

const UseMemoHook = function() {
    const [count, setCount] = useState(0);
    const [colored, setColored] = useState(false)

    function increment() {
        setCount(count + 1);
    }

    const styles = {
        color: colored ? "#646cff" : "#dfdfd6",
        marginBottom: "10px"
    }

    // This method works really slow and when
    // we need to fastly change color, this also works very slow
    // const computed = complexFunction(count)

    // Now with useMemo computations are dependant from value count
    // If count doesn't change -> coplex function doesnt start
    const computed = useMemo(() => {
        return complexFunction(count)
    }, [count])

    return (
        <div className="hook-example">
            <h2 style={styles}>UseMemo hook</h2>
            <hr></hr>
            <p>Complex number long process: {computed}</p>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={() => {setColored(!colored)}}>Change Color</button>
        </div>
    );
};

export default UseMemoHook;