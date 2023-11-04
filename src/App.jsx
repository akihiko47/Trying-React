import React, { useState } from "react";
import "./styles/App.css";
import JokesList from "./components/JokesList";
import HooksPlayground from "./components/hooks/HooksPlayground";

function App() {
  const [jokes, setJokes] = useState([
    { id: 1, body: "First joke" },
    { id: 2, body: "Second joke" },
    { id: 3, body: "Third joke" },
  ]);

  return (
    <div className="App">
      <JokesList jokes={jokes} title={"First Joke List"} />
      <HooksPlayground/>
    </div>
  );
}

export default App;
