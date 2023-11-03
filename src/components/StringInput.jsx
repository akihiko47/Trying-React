import React, { useState } from 'react'

export default function StringInput() {
    const [strValue, setStrValue] = useState("Initial Value")

    return (
        <>
        <h1>String value: {strValue}</h1>
        <input 
            type="text" 
            value={strValue} 
            onChange={event => setStrValue(event.target.value)}
        ></input>
        </>
    )
}
