'use client'
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import Rating from '@mui/material/Rating';

import "./gameCard.css";

export default function GameCard({title, image_id, summary, genres, platforms}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card">
      <Button className='card_container' onClick={handleClickOpen} style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
      </Button>
      <h3 className="game-title">{title}</h3>
      <Dialog open={open} onClose={handleClose}>
        <article className='dialog-popup-window'>
          <div className='dialog-top'>
            <div className='dialog-image' style={{backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
            </div>
            <div className='dialog-info-section'>
              <h1>{title}</h1>
              <h4>Genres - {genres}</h4>
              <h4>Platforms - {platforms}</h4>
              <h4>Developer and Publisher</h4>
            </div>
          </div>
          <p className='dialog-bottom'>
            {summary}
          </p>
        </article>

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
  )
}