import React, { createContext, useContext, useState } from 'react';

export const EmojiContext = createContext({
  currentEmoji: '😊',
  setEmoji: () => {},
});

export function useEmoji() {
  return useContext(EmojiContext);
}

export function EmojiProvider(props) {
  const [currentEmoji, setEmoji] = useState('😊');

  return (
    <EmojiContext.Provider value={{ currentEmoji, setEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
}
