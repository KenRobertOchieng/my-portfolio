import React from 'react'


const Hero = () => {
  return (
    <main className='bg-gradient-to-r from-stone-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-950 dark:to-blue-950 transition-colors duration-700 h-full'>
    <div className='container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 items-center'>
           <div className='space-y-5'>

             <p className='text-2xl uppercase dark:text-white'>hello</p>
             <p className='text-black/80 font-bold md:text-4xl dark:text-gray-600 text-3xl uppercase'>I'm Ken Ochieng</p>
             <p className='md:text-3xl text-3xl text-gray-700 dark:text-white'>Full Stack Developer from Moringa School</p>
             <p className='text-black/60 md:text-3xl dark:text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam laborum quis ut minima iure quo est! Commodi quisquam ducimus iste obcaecati, ipsum laboriosam. Molestias tempora cumque aliquid natus excepturi nulla.</p>
             <a href="mailto:kenrobertochi@gmail.com" className='text-3xl text-center  px-6 py-3 rounded-[12px] dark:text-white text-black/80 transition-colors duration-300 inline-block border border-blue-800'>Hire me</a>

             </div>
                     
                     <div className='rounded-full border-4 border-gray-800 dark:border-blue-950 overflow-hidden animate-pulse shadow-inner'>
                  <div className='flex justify-center'>

                      <img src="portfolio_photo.png" alt="portfolio_image" className='w-full h-full object-cover rounded-full md:h-[450px] lg:h-full' />

                    </div>

                    </div>

                   </div>
           </div>

    </main>

  )
}

export default Hero