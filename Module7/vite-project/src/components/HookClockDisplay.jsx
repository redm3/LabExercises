import React from 'react';
import { useState, useEffect, useRef } from "react"
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'
import { useEmoji } from '../context/EmojiContext';

function HookClock() {
    const themeProps = useContext(ThemeContext)
    /* const { currentEmoji } = useEmoji(); */
    

    const [tickCount, setTickCount] = useState(0);
    const [wellingtonTime, setWellingtonTime] = useState("");
    let timerId = useRef();

    useEffect(() => {
        console.log('hookclock did mount');
        timerId.current = setInterval(
            () => tick(),
            1000
        );   
        
        return () => {
            console.log('hookclock will unmount');
            clearInterval(timerId.current);            
        }
    },[])

    const tick = () => {
        console.log('hookclock tick');
        setTickCount(tickCount => tickCount+1);
        const wellingtonTimeOptions = {timeZone: "Pacific/Auckland", hour12: false};
        const wellingtonTime = new Date().toLocaleTimeString("en-NZ", wellingtonTimeOptions);
        setWellingtonTime(wellingtonTime);
    }

    console.log('hookclock render');
    return (
        <div className="HookClock">
            <h3>Hello, world! {tickCount} seconds have elapsed</h3>
            <h2>Wellington Time: {wellingtonTime}</h2>
        </div>
    );    
}

function HookClockDisplay() {
    const themeProps = useContext(ThemeContext)
    const { currentEmoji } = useEmoji();

    const [showClock, setShowClock] = useState(true);

    const toggleClock = () => {
        setShowClock(prevShowClock => !prevShowClock);
    }

    return (
        <div className={"HookClockDisplay componentBox" + themeProps.theme}>
            <h2>Hook Clock</h2>
            {showClock ? <HookClock /> : null}
            <h2>Mood: {currentEmoji}</h2>

            <button onClick={toggleClock}>{showClock ? 'Hide' : 'Show'} HookClock</button>
        </div>
    );
}

export default HookClockDisplay;
