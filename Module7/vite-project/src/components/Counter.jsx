import React, {useState, useEffect} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`
    // }, [count])

    return (
        <div className="Counter componentBox">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
            {/* how could we make a reset button to reset the count back to zero? */}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter