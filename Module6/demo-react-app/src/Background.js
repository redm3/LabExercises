import React from 'react';

function Background(props) {
  return (
    <div className="Background" style={{ backgroundImage: `url(${props.imageUrl})` }}>
      {props.children}
    </div>
  );
}

export default Background;