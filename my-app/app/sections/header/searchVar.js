import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchVar({games}) {
  {console.log(games)}
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={games.map((option) => option.name)}
      sx={{width : 300}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
);
}
