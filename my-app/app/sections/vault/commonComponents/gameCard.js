'use client'
import { useState } from "react";
import "./gameCard.css";
import GameDialog from "../../../components/gameDialog";

export default function GameCard({title, game}) {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="card">
      <GameDialog 
        title={game.name} 
        image_id={game.cover.image_id} 
        summary={game.summary} 
        genres={game.genres} 
        platforms={game.platforms}
      />
      <h3 className="game-title">{title}</h3>
    </div>
  )
}