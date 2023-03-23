import { useState } from 'react'
import React from "react";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter'
import WindowResizer from './components/WindowResizer'
import Particles from './components/Particles'
import StatusBar from './components/StatusBar'
import Login from './components/Login'
import OnlineChat from './components/OnlineChat'
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HookClockDisplay from './components/HookClockDisplay';
import Mood from './components/Mood';


function App() {
  const [count, setCount] = useState(0)

  return (

      

      <div className="App">
        <div class="container">
          <div class="loading">
            <div class="loading__letter">M</div>
            <div class="loading__letter">o</div>
            <div class="loading__letter">d</div>
            <div class="loading__letter">u</div>
            <div class="loading__letter">l</div>
            <div class="loading__letter">e</div>
            <div class="loading__letter">7</div>
            <div class="loading__letter">.</div>
            <div class="loading__letter">.</div>
            <div class="loading__letter">.</div>
          </div>
        </div>

        <ThemeProvider>
        <ThemeToggle/>
        <Particles id="tsparticles" />
        <StatusBar />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="read-the-docs">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
        
        <Counter />
        <WindowResizer />
        <Login />
        <OnlineChat />
        <HookClockDisplay/>
        <Mood/>
        </ThemeProvider>
       
      </div>
      
  
  )
}

export default App
