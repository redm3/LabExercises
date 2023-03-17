import React, { useState } from 'react';
import Emoji from './Emoji';

const EmojiSwitcher = () => {
  const [emoji, setEmoji] = useState('🐶');
  
  const handleClick = () => {
    setEmoji(prevEmoji => prevEmoji === '🐶' ? '🐱' : '🐶');
  };

  return (
    <div>
      <h1><Emoji symbol={emoji} /></h1>
      <button onClick={handleClick}>Switch Emoji</button>
    </div>
  );
}

export default EmojiSwitcher;