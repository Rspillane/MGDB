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
  const [searchTerm, setSearchTerm] = useState('');

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

  if (isLoading) return  <div>Loading...</div>
  if (!searchResults) return <p>No profile data</p>

  const defaultList = searchResults.map((prop) => 
    <GameCard 
      key={`default-${prop.id}`}
      title={prop.name} 
      releaseDate={prop.first_release_date}
      image_id={prop.cover?.image_id} 
      summary={prop.summary} 
      genres={prop.genres?.map((genre) => genre.name + " ")}
      platforms={prop.platforms?.map((platform) => platform.name + " ")}
    />
  );

  const listItems = result.map((prop) => 
    <GameCard
      key={`gamecard-${prop.id}`}
      title={prop.name} 
      releaseDate={prop.first_release_date}
      image_id={prop.cover?.image_id} 
      summary={prop.summary} 
      genres={prop.genres?.map((genre) => genre.name + " ")}
      platforms={prop.platforms?.map((platform) => platform.name + " ")}
    />
  );

  function getCompare(e) {
    const currentSearchTerm = (e.target.value).toLowerCase();
    setSearchTerm(currentSearchTerm)

    setResult(() => searchResults.filter((searchResults) => 
      searchResults.name?.toLowerCase().includes(currentSearchTerm))
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
    if (order === "Asc" || order === 'Order'){
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
    if (order === "Asc" || order === 'Order'){
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

  
  return (
    <main className={ styles.main }>
      <section id='search-section'>
        <h1> MGDb </h1>
        <br></br>
        <div className='search'>
          <TextField id="search-box" htmlFor="Search" variant="standard" onKeyUp={ getCompare }/>
        </div>

        <div className='sort'>
          <div className='sort-options'>
            <input type="radio" id="radio-alpha" value="alphabetical" name="sort" onClick={ alphaSort }/>
            <label htmlFor='radio-alpha'>  Abc...</label>
            <input type="radio" id="radio-date" value="date" name="sort" onClick={ dateSort }/>
            <label htmlFor='radio-date'>  Date</label>
          </div>
          <div className='sort-order'>
            <div className='sort-order-text'>
              <p>{ order }</p>
            </div>
            <input type='checkbox' id='sort-switch'/><label htmlFor='sort-switch' onClick={ toggleOrder }></label>
          </div>
        </div>
      </section>
      <div className='cards-container'>
        {/* { result.length > 0 ? listItems : defaultList } */}
        { searchTerm.length > 0 ? listItems : null }
        { searchTerm.length === 0 && defaultList }
        {/* BUG -> if no matching results results.length == 0 and therefore it switches back to default list */}
      </div>
    </main>
  );
}
