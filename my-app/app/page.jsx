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
  // const gameList = result.map((prop) => prop.release_dates[0].y + " ")

  let searchCriteria = {
    textInput: '',
    genre: [],
    platform: []
  }
  
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
    searchCriteria.textInput = (e.target.value).toLowerCase()
    
    setResult(() => searchResults.filter((searchResults) => 
      searchResults.name.toLowerCase().includes(searchCriteria.textInput))
    )
  }


  function sortByProperty(array, propertyName, ascending = true) {
    const newArray = [...array];
    newArray.sort(function(a, b) {
      const propA = a[propertyName];
      const propB = b[propertyName];
      
      if (ascending) {
        if (propA < propB) return -1;
        if (propA > propB) return 1;
        return 0;
      } else {
        if (propA > propB) return -1;
        if (propA < propB) return 1;
        return 0;
      }
    });
    return newArray;
  }

  function alphaSort () {
    setResult(sortByProperty(result, "name"))
    console.log(result)
  }
  function dateSort() {
    setResult(sortByProperty(result, "first_release_date"))
    console.log(result)
  }

  const listItems = result.map(prop => 
    typeof prop != 'undefined' &&
    <GameCard 
      title={prop.name} 
      releaseDate={prop.first_release_date}
      image_id={prop.cover.image_id} 
      summary={prop.summary} 
      genres={prop.genres.map((genre) => genre.name + " ")}
      platforms={prop.platforms.map((platform) => platform.name + " ")}
    />
  );
  


//  const getPlatform = (e) => {
//   if (searchCriteria.platform.includes(e.target.value)){
//     for (let i = 0; i < searchCriteria.platform.length; i++){
//       if (searchCriteria.platform[i] === e.target.value){
//         searchCriteria.platform.splice(i, 1)
//       }
//     } 
//   } else {
//       searchCriteria.platform.push(e.target.value)
//       console.log(searchCriteria.platform)
//   }
//   console.log(searchCriteria)
//   console.log(searchResults.platform)
//  }

  {/* Have state for games in this file and pass in save method*/}
  return (
    <main className={ styles.main }>
      <section id='search-section'>
        <h1> Search Section </h1>
        <div className='search'>
          <div class="search-text">Search:</div>
          <input id="search-box" onKeyUp={ getCompare }/>
        </div>
        {/* <div className='filter'>
          Platforms:
        <input type="checkbox" name="filter-platforms" value="nintendo" onChange={ getPlatform }/>
        <label for="filter-platforms"> Nintendo </label>
        <input type="checkbox" name="filter-platforms" value="ps" onChange={ getPlatform }/>
        <label for="filter-platforms"> PS </label>
        <input type="checkbox" name="filter-platforms" value="xbox" onChange={ getPlatform }/>
        <label for="filter-platforms"> Xbox </label>
        </div> */}
        <div className='sort'>
          <input type="radio" value="alphabetical" name="sort" onClick={ alphaSort }/> Alphabetical
          <br></br>
          <input type="radio" value="date" name="sort" onClick={ dateSort }/> Release Date
        </div>
      </section>
      <h1>Game Vault</h1>
      {/* <div>{ gameList }</div> */}
      <div className='cards-container'>
        { listItems }
      </div>
    </main>
  );
}
