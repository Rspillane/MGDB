'use client'
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

import styles from './page.module.css';
import './searchbox.css';
import './vault.css';

import GameCard from './components/gameCard';


export default function Home() {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [order, setOrder] = useState('Order')

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

// might not need this
  let searchCriteria = {
    textInput: '',
    genre: [],
    platform: []
  }

  const defaultList = searchResults.map(prop => 
    <GameCard 
      title={prop.name} 
      releaseDate={prop.first_release_date}
      image_id={prop.cover?.image_id} 
      summary={prop.summary} 
      genres={prop.genres?.map((genre) => genre.name + " ")}
      platforms={prop.platforms?.map((platform) => platform.name + " ")}
    />
  );

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
      result.length > 0 ?
      setResult(sortByProperty(result, "name", true)):
      setSearchResults(sortByProperty(searchResults, "name", true))
    } else if (order === "Desc"){
      result.length > 0 ?
      setResult(sortByProperty(result, "name", false)):
      setSearchResults(sortByProperty(searchResults, "name", false))
    }
  }
  function dateSort() {
    if (order === "Asc"){
      // result.length > 0 ? listItems : defaultList
      result.length > 0 ?
      setResult(sortByProperty(result, "first_release_date", true)) :
      setSearchResults(sortByProperty(searchResults, "first_release_date", true))
    } else if (order === "Desc"){
      result.length > 0 ?
      setResult(sortByProperty(result, "first_release_date", false)) :
      setSearchResults(sortByProperty(searchResults, "first_release_date", false))
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
      result.length > 0 ?
      setResult(sortByProperty(result, sortProp, true)) :
      setSearchResults(sortByProperty(searchResults, sortProp, true));
      setOrder("Asc")
    } else {
      result.length > 0 ?
      setResult(sortByProperty(result, sortProp, false)) :
      setSearchResults(sortByProperty(searchResults, sortProp, false));
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
        <h1> MGDb </h1>
        <br></br>
        <div className='search'>
          <TextField id="search-box" label="Search" variant="standard" onKeyUp={ getCompare }/>
        </div>

        <div className='sort'>
          <div className='sort-options'>
            <input type="radio" id="radio-alpha" value="alphabetical" name="sort" onClick={ alphaSort }/>
            <label for='radio-alpha'>  Abc...</label>
            <input type="radio" id="radio-date" value="date" name="sort" onClick={ dateSort }/>
            <label for='radio-date'>  Date</label>
          </div>
          <div className='sort-order'>
            <div className='sort-order-text'>
              <p>{ order }</p>
            </div>
            <input type='checkbox' id='sort-switch'/><label for='sort-switch' onClick={ toggleOrder }></label>
          </div>
        </div>
      </section>
      <div className='cards-container'>
        { result.length > 0 ? listItems : defaultList }
      </div>
    </main>
  );
}
