import React, { useState } from "react";
import Counter from "./components/Counter";
import StringInput from "./components/StringInput";
import "./styles/App.css";
import JokeItem from "./components/JokeItem";

function App() {

  return (
    <div className="App">
      {/* <Counter/>
      <StringInput/> */}
      <JokeItem joke={{id: 1, body: "Some random joke"}} />
      <JokeItem joke={{id: 1, body: "Some random joke"}} />
      <JokeItem joke={{id: 1, body: "Some random joke"}} />
      <JokeItem joke={{id: 1, body: "Some random joke"}} />
    </div>
  )
}

export default App
