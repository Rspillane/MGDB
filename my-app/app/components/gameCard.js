'use client'
import { useState } from "react";
import "./gameCard.css";

export default function GameCard({title, console, rating}) {

    const [isShown, setIsShown] = useState(false);

    return (
      <div className="card-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
        <h1 className="game-title"> {title}</h1>
        {isShown && (
        <div className="card-content">
            <p> Platform:     {console}</p>
            <p> Your Rating:    {rating} / 10</p>
        </div>
        )}
      </div>
    )
  }