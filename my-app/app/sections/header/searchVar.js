import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useState } from 'react';

export default function Search({ games }){
  const [matchedResults, setMatchedResults] = useState([])

  let userSearch = ""
  
  function getUserInput() {
    userSearch = document.getElementById('search-box').value
    console.log(userSearch)
    setMatchedResults(compareStringToArray(userSearch, games))
    console.log(matchedResults); 
    return [userSearch, matchedResults]
  }

  function compareStringToArray(userSearch, games) {
    const lowerUserSearch = userSearch.toLowerCase()
    let matchedResults = [];
  
    for (let i = 0; i < games.length; i++) {
      const currentString = games[i].toLowerCase();
      // Use the `includes()` method to check if the inputString is present in the array
      if (currentString.includes(lowerUserSearch)) {
        matchedResults.push(currentString);
      }
    }
  
    return matchedResults;
  }

  return (
    <div>
      <div class="search-header">
        <div class="search-text">Search:</div>
        <input id="search-box" onKeyUp={ getUserInput }/>
      </div>

      <div>
        <ol id="item-list">
          { matchedResults }
        </ol>
      </div>
    </div>

  )
}