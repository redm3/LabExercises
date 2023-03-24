import React from 'react';
import { useEmoji } from '../context/EmojiContext';

function Mood() {

  const {currentEmoji, changeMood} = useEmoji()

  return (
    <div className="componentBox">
      <h2>Mood</h2>
      <h2>Current Mood: {currentEmoji}</h2>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Mood;
