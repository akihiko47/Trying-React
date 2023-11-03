import React, { useState } from "react";
import Counter from "./components/Counter";
import StringInput from "./components/StringInput";

function App() {

  return (
    <>
      <Counter/>
      <StringInput/>
      <hr></hr>
      <Counter/>
      <StringInput/>
      
    </>
  )
}

export default App
