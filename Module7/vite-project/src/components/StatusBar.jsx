import React from 'react';
import useStatusBar from '../hooks/useStatusBar';

export default function StatusBar() {
  const isOnline = useStatusBar();

  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <h2>{isOnline ? '✅ Online' : '❌ Disconnected'}</h2>
      </div>
    </div>
  );
}
