import React, { useState, useEffect } from "react";

const UseEffectHook = function() {
    const [type, setType] = useState("First");
    const [pos, setPos] = useState({x: 0, y:0});

    // Function works when element renders
    // useEffect(() => {
    //     console.log('useEffect render')
    // })

    // Functions works when value "type" changes
    useEffect(() => {
        console.log('useEffect only when type changes: ' + type)
    }, [type])

    // Function works when component is loaded first time
    useEffect(() => {
        console.log("Component loaded for the first time")

        // This behavior can be used to add listeners
        window.addEventListener("mousemove", event => {
            setPos({
                x: event.clientX,
                y: event.clientY
            })
            
            // I cant use that because setPos is async
            // console.log(pos)
            // If i want to log some state, I can use example from above
        })
    }, [])

    return (
        <div className="hook-example">
            <h2 style={{marginBottom: "10px"}}>UseEffect hook</h2>
            <hr></hr>
            <p>Type: {type}</p>
            <button type="button" onClick={() => setType("First")}>First</button>
            <button type="button" onClick={() => setType("Second")}>Second</button>
            <button type="button" onClick={() => setType("Third")}>Third</button>

            <p>Mouse X: {pos.x}</p>
            <p>Mouse Y: {pos.y}</p>
        </div>
    );
};

export default UseEffectHook;