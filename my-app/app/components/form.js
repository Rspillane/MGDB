'use client'
import React, { useState } from 'react';

const MyForm = ({save}) => {
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

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Game Title:
          <input type="text" value={text1} onChange={handleText1Change} />
        </label>
      </div>
      <div>
        <label>
          Console:
          <input type="text" value={text2} onChange={handleText2Change} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input type="number" value={number} onChange={handleNumberChange} />
        </label>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default MyForm;
