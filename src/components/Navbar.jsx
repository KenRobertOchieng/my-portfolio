import React from 'react'
import { IoMoon } from "react-icons/io5";
import { LiaSun } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [theme, setTheme]= React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const [nav,setNav]= React.useState(false);

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
  <nav className='bg-gradient-to-r from-stone-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-950 dark:to-blue-950 shadow-xl transition-colors duration-700'>

    <div className='container justify-between flex py-6 w-full'>

        <h1 className='text-zinc-600 dark:text-gray-600 font-bold md:text-4xl text-2xl'>Portfolio</h1>

      <div className='items-center flex md:gap-8 sm:gap-2 gap-1'>

        <ul className='sm:flex md:gap-5 lg:gap-12 md:text-3xl cursor-pointer hidden gap-6 text-xl'>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'><a href="#home">Home</a></li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'><a href="#about">About</a></li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'><a href="#projects">Projects</a></li>
          <li className='text-slate-700 dark:text-slate-300 hover:text-orange-500'><a href="#skills">Skills</a></li>
        </ul>

        <div className='flex gap-4 items-center'>

          <div onClick={()=> setNav(!nav)} className='sm:hidden text-3xl cursor-pointer text-slate-700 dark:text-slate-300 flex'>
            {nav ? <IoClose/> : <IoIosMenu/>
            }
          </div>

          <div className={nav ? 'sm:hidden fixed top-0 left-0 z-10 w-[250px] h-full bg-white transition-all duration-700' : 'sm:hidden dark:bg-white w-[250px] left-[-100%] z-10 top-0 h-full fixed transition-all duration-700 ease-in'}>
            <ul className='flex flex-col mt-20 ml-6 gap-6'>
              <li className='text-blue-950 dark:text-blue-950 text-2xl py-3'><a href="#home" onClick={()=> setNav(false)}>Home</a></li>
              <li className='text-blue-950 dark:text-blue-950 text-2xl py-3'><a href="#about" onClick={()=> setNav(false)}>About</a></li>
              <li className='text-blue-950 dark:text-blue-950 text-2xl py-3'><a href="#projects" onClick={()=> setNav(false)}>Projects</a></li>
              <li className='text-blue-950 dark:text-blue-950 text-2xl py-3'><a href="#skills" onClick={()=> setNav(false)}>Skills</a></li>
            </ul>
        </div>

          <div className='text-3xl cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <LiaSun className='text-yellow-500'/> : <IoMoon className='text-gray-900'/>}
          </div>

      </div>

      </div>
    </div>

  </nav>

  )
}

export default Navbar