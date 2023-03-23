import React from "react";

//theme options with specific colour values
const themes = {
    light: '',
    dark: ' dark'
};

//named export for this context (to be used via useContext elsewhere)
export const ThemeContext = React.createContext(themes.light);

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const ThemeProvider = ({children}) => {
  
    const [theme, setTheme] = React.useState(themes.light);

    const toggleTheme = () => setTheme(theme === themes.light ? themes.dark : themes.light)
    

    return (
      
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
