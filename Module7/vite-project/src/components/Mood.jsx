import React, { useState, useEffect } from 'react';
/* import { useEmoji } from '../context/EmojiContext'; */

function Mood() {
  const [emoji, setEmoji] = useState('😊');

  const changeMood = () => {
    const newEmoji = emoji === '😊' ? '😢' : '😊';
    setEmoji(newEmoji);
  }

  return (
    <div className="componentBox">
      <h2>Mood</h2>
      <p>Current Mood: {emoji}</p>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Mood;
