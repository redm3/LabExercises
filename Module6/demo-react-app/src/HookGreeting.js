import React, { useState } from 'react';

function HookGreeting() {
  const [name, setName] = useState('World');

  const handleClick = () => {
    const inputName = prompt('Please enter your name:');
    setName(inputName || 'World');
  }

  return (
    <div className='componentBox'>
        <h2>Hook Greeting</h2>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default HookGreeting;
