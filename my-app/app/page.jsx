'use client'
import React, { useState, useEffect } from 'react';

import styles from './page.module.css';

import GameCard from './components/gameCard';
import savedGames from './objects';
import FormDialog from './components/myForm';


export default function Home() {
  const [games, setGames] = useState(savedGames);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false)

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

  useEffect(() => {
    // Update the document title using the browser API
    setLoading(true)
    fetch('/api/game', {method: 'POST'})
      .then((res) => res.json())
      .then((searchResponse) => {
        setSearchResults(searchResponse.games)
        setLoading(false)
      })
  },[]);

  if (isLoading) return <p>Loading...</p>
  if (!searchResults) return <p>No profile data</p>

  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={styles.main}>
      <h1>Game Vault</h1>
      <div className='cards-container'>
        <FormDialog save={save}></FormDialog>
        {listItems}
        {searchResults.map(searchResult => `, ${searchResult.name}`)}
      </div>

    </main>
  );
}
