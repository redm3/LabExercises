import useToggle from "../hooks/useToggle";
import useWindowResize from "../hooks/useWindowResize";
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'

function WindowResizer() {
    const themeProps = useContext(ThemeContext)

    const [isToggled, setIsToggled] = useToggle();
    const windowSize = useWindowResize();
   /*  const ThemeContext = useContext(ThemeContext) */

    return (
        
        <div className={"WindowResizer componentBox componentBox" + themeProps.theme}>
            <button onClick={setIsToggled}>{isToggled ? 'Toggled' : 'Click to Toggle'}</button>
            <div>{windowSize.width <= 768 ? 'Small Screen Detected' : 'Large Screen Detected'}</div>
        </div>
    );
}

export default WindowResizer

//follow the guide at https://react.dev/learn/reusing-logic-with-custom-hooks and implement the useOnlineStatus custom hook
//then make use of it here and display the online status in this component