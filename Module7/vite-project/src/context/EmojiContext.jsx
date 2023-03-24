import React, { createContext, useContext, useState } from 'react';

export const EmojiContext = createContext();

export function useEmoji() {
  return useContext(EmojiContext);
}

export default function EmojiProvider(props) {
  const [currentEmoji, setEmoji] = useState('😊');

  const changeMood = () => {
    const newEmoji = currentEmoji === '😊' ? '😢' : '😊';
    setEmoji(newEmoji);
  }

  return (
    <EmojiContext.Provider value={{ currentEmoji, changeMood }}>
      {props.children}
    </EmojiContext.Provider>
  );
}

