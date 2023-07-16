'use client'
import React, { useState, useEffect } from 'react';

import styles from './page.module.css';
import './vault.css';

import GameCard from './components/gameCard';
import savedGames from './objects';


export default function Home() {
  const [games, setGames] = useState(savedGames);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false)

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

  const listItems = searchResults.map(game => 
    <GameCard title={game.name} image_id={game.image_id} summary={game.summary}/>
  );

  // const save = (newGame) => {

  //   const newGames = [
  //       ...games,
  //       newGame
  //   ]
  //   setGames(newGames);
  //   console.log(games, newGames);
  // };

  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={styles.main}>
      <h1>Game Vault</h1>
      <div className='cards-container'>
        {listItems}
        <div>
        {searchResults.map(searchResult => `${searchResult.cover}, `)}
        </div>
        <div>
        {searchResults.map(searchResult => `${searchResult.image_id}, `)}
        </div>
      </div>

    </main>
  );
}
