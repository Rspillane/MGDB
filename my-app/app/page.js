'use client'
import React, { useState } from 'react';

import styles from './page.module.css'
import './page.css'

import GameCard from './components/gameCard'
import savedGames from './objects'
{/*import games from './gamme.json'*/}
import FormDialog from './components/myForm';


export default function Home() {
  const [games, setGames] = useState(savedGames);

  const listItems = games.map(game => 
    <GameCard title={game.title} console={game.console} rating={game.rating}/>
  );

  const save = (newGame) => {

    const newGames = [
        ...games,
        newGame
    ]
    setGames(newGames);
    console.log(games, newGames);
  };

  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={styles.main}>
      <FormDialog save={save}></FormDialog>
      <h1>My Game Vault</h1>
      <div className='cards-container'>
        <FormDialog save={save}></FormDialog>
        {listItems}
      </div>

    </main>
  );
}
