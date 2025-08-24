import React from 'react'
import SkillsLevel from './SkillsLevel'

const Skills = () => {
  return (
    <main className='bg-white dark:bg-gray-900 transition-colors duration-500'>

    <div className='container py-20'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

            <div className='space-y-6 text-gray-500 dark:text-white'>

                <SkillsLevel skillName="HTML" percentage="85%" />
                <SkillsLevel skillName="CSS" percentage="80%" />
                <SkillsLevel skillName="JavaScript" percentage="70%" />
                <SkillsLevel skillName="React" percentage="80%" />
                <SkillsLevel skillName="Flask" percentage="90%" />
                <SkillsLevel skillName="Python" percentage="75%" />

            </div>
            
            <div className='relative'>
                <h1 className='text-8xl font-bold dark:text-gray-800 text-gray-300 uppercase text-center'>Skills</h1>

                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'> 
                <h1 className='text-3xl font bold dark:text-white '>Skills</h1>
                </div>

            </div>

        </div>
    </div>

    </main>
  )
}

export default Skills