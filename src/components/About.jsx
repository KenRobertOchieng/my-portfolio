import React from 'react'

const About = () => {
  return (
    <main className='bg-white dark:bg-gray-900 transition-colors duration-500'>

    <div className='container py-20'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='relative'>
                <h1 className='text-8xl font-bold dark:text-gray-800 text-gray-300 uppercase text-center'>About</h1>

                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'> 
                <h1 className='text-3xl font bold dark:text-white '>About me</h1>
                </div>

            </div>

            <div className='space-y-6 text-gray-500 dark:text-white'>

                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex quos dicta itaque eligendi totam obcaecati. Molestiae suscipit eos nulla maxime? Ea, reiciendis. Earum expedita delectus autem consectetur distinctio reprehenderit.</p>
                <p className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde magnam, fuga, quas in, ipsam quisquam eligendi tempora incidunt suscipit aliquid consequuntur assumenda fugiat. Voluptates ea facere sequi quas iure!</p>
                <div className='flex gap-6'>
                    <a href="" className='text-2xl text-center bg-orange-400 px-6 py-3 rounded-[12px] text-white hover:bg-orange-600 transition-colors duration-300 inline-block'>Download resume</a>
                    <a href="" className='text-2xl text-center px-6 py-3 rounded-[12px] text-gray-500 inline-block border border-amber-600 transition-colors hover:bg-orange-400 hover:text-white'>Contact</a>
                </div>
            </div>
            

        </div>
    </div>

    </main>
  )
}

export default About