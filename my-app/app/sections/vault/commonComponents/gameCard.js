'use client'
import { useState } from "react";
import "./gameCard.css";
import GameDialog from "../../../components/gameDialog";

export default function GameCard({title, img}) {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="card">
      <GameDialog></GameDialog>
      <h3 className="game-title">{title}</h3>
    </div>
  )
}