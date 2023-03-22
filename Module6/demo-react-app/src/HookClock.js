import { useState, useEffect, useRef } from "react"
import FormattedDate from './FormattedDate';
import FancyBorder from './FancyBorder';

function HookClock() {

    const [date, setDate] = useState(new Date())
    const [tickCount, setTickCount] = useState(0)
    let timerId = useRef() 

    useEffect(() => {
        console.log('hookclock did mount')
        timerId.current = setInterval(
            () => tick(),
            1000
        );   
        
        return () => {
            console.log('hookclock will unmount')
            clearInterval(timerId.current);            
        }
    },[])

    const tick = () => {
        console.log('hookclock tick')
        setDate(new Date());
        setTickCount(tickCount => tickCount+1)
    }

    console.log('hookclock render')
    return (
        <div className="HookClock">
            <h3>Hello, world! {tickCount} seconds have elapsed</h3>
            <FormattedDate date={date} />
        </div>
    );    
}

function HookClockDisplay() {

    const [showClock, setShowClock] = useState(true);

    const toggleClock = () => {
        setShowClock(prevShowClock => !prevShowClock);
    }
//make a generic toggleClock function that will hide or show based on the current state
    return (
        <div className="HookClockDisplay componentBox">
            <FancyBorder color="blue">
      
            <h2>Hook Clock</h2>
            {showClock ? <HookClock /> : null}
            <button onClick={toggleClock}>{showClock ? 'Hide' : 'Show'} HookClock</button>
            </FancyBorder>
        </div>
        
    );
}

export default HookClockDisplay