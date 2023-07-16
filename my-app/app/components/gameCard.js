'use client'
import "./gameCard.css";
import GameDialog from "./gameDialog";

export default function GameCard({title, image_id, summary}) {

  return (
    <div className="card">
      <GameDialog title={title} image_id={image_id} summary={summary}/>
      <h4 className="game-title">{title}</h4>
    </div>
  )
}