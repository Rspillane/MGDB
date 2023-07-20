import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Rating from '@mui/material/Rating';

import "./gameCard.css";

export default function GameDialog({title, image_id, summary}) {
  const [open, setOpen] = React.useState(false);
  const [wish, setWish] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   useEffect(() => {
//     localStorage.setItem('dataKey', JSON.stringify(data));
//   }, [data]);

  return (
    <div>
      <Button className='card_container' onClick={handleClickOpen} style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContent className='dialog-top'>
            <div className='dialog image card_container' style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
            </div>
            <div className='dialog-info-section'>
              <DialogTitle>{title}</DialogTitle>
              <h3>Genre</h3>
              <h4>Console</h4>
              <h4>Developer and Publisher</h4>
            </div>
          </DialogContent>

          <DialogContentText>
            {summary}
          </DialogContentText>
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>

        <DialogActions className='dialog-actions'>
          <Rating className="rating" name="half-rating" defaultValue={0} precision={0.5}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
        }}/>
          { !value ? <button className="wishlist" onClick={() => {handleClose; setWish(true)}}>Wishlist</button>: null }
        </DialogActions>
      </Dialog>
    </div>
  );
}