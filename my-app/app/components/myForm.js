import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({save}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [number, setNumber] = useState(0);


  const handleText1Change = (e) => {
    setText1(e.target.value);
  };

  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary form submission logic here
    console.log('Text 1:', text1);
    console.log('Text 2:', text2);
    console.log('Number:', number);

    console.log('form has been submitted')

    save({
        title: text1,
        console: text2,
        rating: number
    })

    // Reset the form after submission
    setText1('');
    setText2('');
    setNumber(0);

    handleClose();
  };

  return (
    <div>
      <Button id="new-game-button" variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a game to your Vault!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Game Title"
            // type="email"
            fullWidth
            variant="standard"
            value={text1}
            onChange={handleText1Change}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Console"
            // type="email"
            fullWidth
            variant="standard"
            value={text2}
            onChange={handleText2Change}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Rating"
            type="number"
            fullWidth
            variant="standard"
            value={number}
            onChange={handleNumberChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}