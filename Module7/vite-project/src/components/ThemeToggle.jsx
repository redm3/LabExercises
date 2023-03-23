import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={'componentBox' + theme} style={{ position: 'absolute', top: '0', right: '0' }}>
      <button onClick={toggleTheme}> Change Theme </button>
    </div>
  )
}

