'use client'
import React, { useState, useEffect } from 'react';

import styles from './page.module.css';
import './sections/vault/vault.css';

import GameCard from './components/gameCard';


export default function Home() {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [order, setOrder] = useState('Asc')

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


  let searchCriteria = {
    textInput: '',
    genre: [],
    platform: []
  }


  function getCompare(e) {
    searchCriteria.textInput = (e.target.value).toLowerCase()

    setResult(() => searchResults.filter((searchResults) => 
      searchResults.name?.toLowerCase().includes(searchCriteria.textInput))
    )
  }

  function sortByProperty(array, propertyName, ascending) {
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
    if (order === "Asc"){
      setResult(sortByProperty(result, "name", true))
    } else if (order === "Desc"){
      setResult(sortByProperty(result, "name", false))
    }
  }
  function dateSort() {
    if (order === "Asc"){
      setResult(sortByProperty(result, "first_release_date", true))
    } else if (order === "Desc"){
      setResult(sortByProperty(result, "first_release_date", false))
    }
    
  }

  function toggleOrder() {
    let sortProp = ''
    //put a function in to determine whether date or alpha is currently selected
    if(document.getElementById('radio-alpha').checked){
      sortProp = "name"
    } else if (document.getElementById('radio-date').checked){
      sortProp = "first_release_date"
    }

    if (order === "Desc"){
      setResult(sortByProperty(result, sortProp, true))
      setOrder("Asc")
    } else {
      setResult(sortByProperty(result, sortProp, false))
      setOrder("Desc")
    }
  }

  const listItems = result.map(prop => 
    <GameCard 
      title={prop.name} 
      releaseDate={prop.first_release_date}
      image_id={prop.cover?.image_id} 
      summary={prop.summary} 
      genres={prop.genres?.map((genre) => genre.name + " ")}
      platforms={prop.platforms?.map((platform) => platform.name + " ")}
    />
  );
  

  return (
    <main className={ styles.main }>
      <section id='search-section'>
        <h1> Search Section </h1>
        <div className='search'>
          <div class="search-text">Search:</div>
          <input id="search-box" onKeyUp={ getCompare }/>
        </div>

        <div className='sort'>
          <input type="radio" id="radio-alpha" value="alphabetical" name="sort" onClick={ alphaSort }/> Alphabetical
          <br></br>
          <input type="radio" id="radio-date" value="date" name="sort" onClick={ dateSort }/> Release Date
          <button onClick={ toggleOrder }> { order } </button>
        </div>
      </section>
      <h1>Game Vault</h1>
      <div className='cards-container'>
        { listItems }
      </div>
    </main>
  );
}
