import React, { useState } from 'react'
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import useTheme from '../../context/ThemeContext';

const Theme = () => {
    const {themeMode, darkTheme, lightTheme} = useTheme()
    const [toggle, setToggle] = useState(true)

    const handleTheme = () => {
        if(themeMode === "dark"){
            lightTheme()
        }else{
            darkTheme()
        }
        setToggle(!toggle)
    }

  return (
    <div className='cursor-pointer hover:text-orange-500'>
        <button onClick={handleTheme}>
            {toggle ? <FaMoon /> : <IoMdSunny />}
        </button>
      
    </div>
  )
}

export default Theme
