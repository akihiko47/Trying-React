import React from "react";
import JokeItem from "./JokeItem";

function JokesList({ jokes, title }) {
  return (
    <div className="jokes__list">
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {jokes.map((joke) => (
        <JokeItem joke={joke} key={joke.id} />
      ))}
    </div>
  );
}

export default JokesList;
