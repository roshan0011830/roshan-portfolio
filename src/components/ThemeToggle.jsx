import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

import { cn } from '../lib/utils.js';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === "dark"){
      document.documentElement.classList.add("dark");
      setIsDarkMode(true)

    }else{
      localStorage.setItem("theme", "light");
      setIsDarkMode(false)
    }

  })

  function themeToggle(){
    if(isDarkMode){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)

    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button onClick={()=> themeToggle()} className={cn("relative max-sm:hidden  z-50 p-2 rounded-full transition-colors duration-300")}>
      {isDarkMode ? <Sun className='absolute h-6 w-6 text-yellow-300 top-8 md:top-7 right-2'/> : <Moon className=' text-blue-300 absolute h-6 w-6 top-8 md:top-7 right-2'/>}
    </button>
  )
}

export default ThemeToggle
