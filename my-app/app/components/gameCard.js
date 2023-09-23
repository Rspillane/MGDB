'use client'
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import "./gameCard.css";

export default function GameCard({title, releaseDate, image_id, summary, genres, platforms}) {
  const [open, setOpen] = React.useState(false);

  function unixTimeToDateTime(unixTimestamp) {
    const dateObj = new Date(unixTimestamp * 1000); // convert to milliseconds
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // add 1, since the first month is 0
    const day = dateObj.getDate();
  
    // return in a formatted string
    return `${month}/${day}/${year}`;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card">
      <div className='card-image'>
        <Button className='card_container' onClick={ handleClickOpen } style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
        </Button>
      </div>
      <h3 className="game-title">{ title }</h3>
      <Dialog open={ open } onClose={ handleClose }>
        <article className='dialog-popup-window'>
          <div className='dialog-top'>
            <div>
              <div className='card_container dialog-image' style={{ backgroundImage: `url("//images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg")`}}>
              </div>
            </div>
            <div className='dialog-info-section'>
              <h1>{ title }</h1>
              <h3> Release Date: { unixTimeToDateTime(releaseDate) } </h3>
              {platforms && (
                <p>Platforms: { platforms }</p>
              )}
              {genres && (
                <p>Genres: { genres }</p>
              )}

            </div>
          </div>
          <div className='dialog-bottom'>

            <p className='dialog-summary'>
              { summary }
            </p>
          </div>
        </article>

        {/* <DialogActions className='dialog-actions'>
          <Rating className="rating" name="half-rating" defaultValue={0} precision={0.5}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
        }}/>
          { !value ? <button className="wishlist" onClick={() => {handleClose; setWish(true)}}>Wishlist</button>: null }
        </DialogActions> */}
      </Dialog>
    </div>
  )
}