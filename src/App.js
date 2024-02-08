
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
          <Header />
          <Outlet />
          <Footer />
    </ThemeProvider>
  );
}

export default App;
