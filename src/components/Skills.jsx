import React from 'react'
import SkillsLevel from './SkillsLevel'

const Skills = () => {
  return (
    <main className='bg-gradient-to-r from-stone-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-950  dark:to-blue-950 transition-colors duration-700'>

    <div className='container py-20>'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>

            <div className='relative'>

                <h1 className='text-6xl md:text-7xl  font-bold dark:text-gray-800 text-gray-300 uppercase text-center'>Skills</h1>
                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'> 
                <h1 className='text-3xl font bold dark:text-gray-600'>Skills</h1>
                </div>

            </div>

            <div className='space-y-6'>

                <SkillsLevel skillName="HTML" percentage="85%" />
                <SkillsLevel skillName="CSS" percentage="80%" />
                <SkillsLevel skillName="JavaScript" percentage="70%" />
                <SkillsLevel skillName="React" percentage="80%" />
                <SkillsLevel skillName="Flask" percentage="90%" />
                <SkillsLevel skillName="Python" percentage="75%" />

            </div>
            

        </div>
    </div>

    </main>
  )
}

export default Skills