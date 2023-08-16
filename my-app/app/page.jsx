'use client'
import React, { useState, useEffect } from 'react';

import styles from './page.module.css';
import './sections/vault/vault.css';

import GameCard from './components/gameCard';


// import SearchVar from './sections/header/searchVar';


export default function Home() {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState([])

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

  // if userInput is == '' the display gameList
    const gameList = searchResults.map((prop) => prop.name)

  let textInput = '';
  
  // const gameList = searchResults.map(prop => 
  //   <GameCard 
  //     title={prop.name} 
  //     image_id={prop.cover.image_id} 
  //     summary={prop.summary} 
  //     genres={prop.genres.map((genre) => genre.name + " ")}
  //     platforms={prop.platforms.map((platform) => platform.name + " ")}
  //   />
  // );

  function getCompare(e) {
    textInput = (e.target.value).toLowerCase()
    
    setResult(() => searchResults.filter((searchResults) => searchResults.name.toLowerCase().includes(textInput)))
  }


  const listItems = result.map(prop => 
    <GameCard 
      title={prop.name} 
      image_id={prop.cover.image_id} 
      summary={prop.summary} 
      genres={prop.genres.map((genre) => genre.name + " ")}
      platforms={prop.platforms.map((platform) => platform.name + " ")}
    />
  );
  


  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={ styles.main }>
      <section id='search-section'>
        <h1> Search Section </h1>
        <div className='search'>
          <div class="search-text">Search:</div>
          <input id="search-box" onKeyUp={ getCompare }/>
        </div>
      </section>
      <h1>Game Vault</h1>
      <div className='cards-container'>
        { listItems }
      </div>
    </main>
  );
}
