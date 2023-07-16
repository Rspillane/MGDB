import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Rating from '@mui/material/Rating';

import "./gameCard.css";

export default function GameDialog({title, image_id, summary}) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <Button className='card_container' onClick={handleClickOpen} style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_small/${image_id}.jpg")`}}>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {summary}
          </DialogContentText>
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>

        <DialogActions className='dialog-actions'>
          <Rating className="rating" name="half-rating" defaultValue={0} precision={0.5}/>
          <button className="wishlist" onClick={handleClose}>Wishlist</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}