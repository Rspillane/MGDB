import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useState } from 'react';

import gameList from '../../page';

export default function Search(){


function getUserInput() {
  let userSearch = document.getElementById('search-box').value
  console.log(userSearch)

  return userSearch
}


function searchDatabase (userSearch) {
  //compare userSearch with each item in an array 

  //searchableItems = gameList.map(game = [game.name])

}


return (
  <div>
    <div class="search-header">
      <div class="search-text">Search:</div>
      <input id="search-box" onKeyUp={getUserInput}/>
    </div>
    <div>
      <ol id="item-list"></ol>
    </div>
  </div>

)

}
// export default function SearchVar({games}) {

//   // i think i need to put a function in to give the 
//   // the result of the autocomplete a variable 
//   // it needs to have all the data not just the title though
//   // function can be on key up/ on change
//   // also needs to have a contains() functionality
//   //i need to understand my api response data



//   return (
//     <Autocomplete
//       freeSolo
//       id="free-solo-2-demo"
//       disableClearable
//       options={games.map((option) => option.name)}
//       sx={{width : 300}}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           id='search-box'
//           label="Search input"
//           InputProps={{
//             ...params.InputProps,
//             type: 'search',
//           }}
//         />
//       )}
//     />
// );
// }
