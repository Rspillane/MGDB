'use client'
import React, { useState, useEffect } from 'react';

import styles from './page.module.css';
import './vault.css';

import GameCard from './components/gameCard';
import savedGames from './objects';


import SearchVar from './sections/header/searchVar';
import Sort from './sections/header/sort';


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
    <GameCard title={game.name} image_id={game.cover.image_id} summary={game.summary}/>
  );


  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={styles.main}>
      <section id='search-section'>
        <h1> Search Section </h1>
        <div className='search'>
          <SearchVar></SearchVar>
          {/* i want to use search as a generic component for both titles and genres with the cached responses as the list input */}
          <Sort></Sort>
        </div>
        <div className='filter'>

        </div>
        <div className='sort'>

        </div>
      </section>
      <h1>Game Vault</h1>
      <div className='cards-container'>
        {listItems}
      </div>

    </main>
  );
}
