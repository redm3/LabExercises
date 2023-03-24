import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

function Counter() {
    const themeProps = useContext(ThemeContext)
    const {username} = useContext(UserContext)


    const [count, setCount] = useState(0)
    

    useEffect(() => {
         document.title = `You clicked ${count} times`
     }, [count])

    return (
        <div className={"Counter componentBox" + themeProps.theme}>
            <h2>{username ? username : 'You'} clicked {count} times</h2>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
            {/* how could we make a reset button to reset the count back to zero? */}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter