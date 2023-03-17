import React from 'react';

const Emoji = ({ symbol }) => {
  return (
    <span role="img" aria-label="emoji">
      {symbol}
    </span>
  );
}

export default Emoji;