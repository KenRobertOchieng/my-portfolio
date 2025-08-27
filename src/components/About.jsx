import React from 'react'

const About = () => {
  return (
    <main className='bg-gradient-to-r from-stone-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-950 dark:to-blue-950 transition-colors duration-700'>

    <div className='container py-20'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='relative'>
                <h1 className='md:text-7xl text-6xl font-bold dark:text-gray-800 text-gray-300 uppercase text-center'>About</h1>

                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'> 
                <h1 className='text-3xl font bold dark:text-gray-600 '>About me</h1>
                </div>

            </div>

            <div className='space-y-6 text-gray-500 dark:text-white'>

                <p className='md:text-3xl text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex quos dicta itaque eligendi totam obcaecati. Molestiae suscipit eos nulla maxime? Ea, reiciendis. Earum expedita delectus autem consectetur distinctio reprehenderit.</p>
                <p className='md:text-3xl text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde magnam, fuga, quas in, ipsam quisquam eligendi tempora incidunt suscipit aliquid consequuntur assumenda fugiat. Voluptates ea facere sequi quas iure!</p>
                <div className='flex gap-6'>
                    <a href="" className='md:text-2xl text-xl text-center border border-blue-800 shadow-xl px-6 py-3 rounded-[12px] dark:text-gray-600  hover:text-green transition-colors duration-300 inline-block'>Download resume</a>
                    <a href="" className='md:text-2xl text-xl text-center md:px-6 md:py-3 px-3 py-3 rounded-[12px] dark:text-gray-600 inline-block border border-blue-800 shadow-xl transition-colors'>Contact</a>
                </div>
            </div>
            

        </div>
    </div>

    </main>
  )
}

export default About