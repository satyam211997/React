import { createContext } from "react";

const themeContext = createContext(null);
const ThemeProvider = themeContext.Provider;

export { themeContext, ThemeProvider };