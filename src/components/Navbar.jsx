import React from 'react'
import { IoMoon } from "react-icons/io5";
import { LiaSun } from "react-icons/lia";

const Navbar = () => {

  const [theme, setTheme]= React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  React.useEffect(()=>{
        const element = document.documentElement;
        console.log(element)
        localStorage.setItem('theme', theme);

    if(theme === 'dark'){
      element.classList.add('dark');
      element.classList.remove('light');
    }else{
      element.classList.remove('dark');
      element.classList.add('light');
    }
  },[theme]);

  return (
    // toggle for dark and light mode
  <nav className='bg-white dark:bg-gray-900 shadow-xl transition-colors duration-500'>

    <div className='container justify-between flex  py-6 items-center '>
 
        <h1 className='text-zinc-600 dark:text-orange-400 font-bold text-3xl'>Portfolio</h1>

      <div className='items-center flex gap-8'>
        <ul className='flex gap-12 text-3xl cursor-pointer'>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'>Home</li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'>About</li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'>Services</li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'>Contact</li>
        </ul>

          <div className='text-3xl cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <LiaSun className='text-yellow-500'/> : <IoMoon className='text-gray-900'/>}
          </div>

      </div>

      </div>

  </nav>

  )
}

export default Navbar