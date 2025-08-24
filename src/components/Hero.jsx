import React from 'react'

const Hero = () => {
  return (
    <main className='bg-white dark:bg-gray-900 transition-colors duration-500 h-full'>
    <div className='container py-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
           <div className='space-y-3'>

             <p className='text-2xl uppercase dark:text-white'>hello</p>
             <p className='text-black/80 font-bold text-4xl dark:text-white'>I'm Ken Ochieng</p>
             <p className='text-3xl text-gray-700 dark:text-white'>Full Stack Developer from Moringa School</p>
             <p className='text-black/60 text-3xl dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam laborum quis ut minima iure quo est! Commodi quisquam ducimus iste obcaecati, ipsum laboriosam. Molestias tempora cumque aliquid natus excepturi nulla.</p>
             <a href="mailto:kenrobertochi@gmail.com" className='text-3xl text-center bg-orange-400 px-6 py-3 rounded-[12px] text-white hover:bg-orange-600 transition-colors duration-300 inline-block'>Hire me</a>

             </div>

              <div className='flex justify-center'>
                <img src="src/images/portfolio_photo.png" alt="portfolio_image" className='w-full object-cover' />
              </div>

        </div>
    </div>
    </main>

  )
}

export default Hero