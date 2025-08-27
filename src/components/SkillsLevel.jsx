import React from 'react'

const SkillsLevel = ({skillName,percentage}) => {
  return (
    <div className='space-y-2'>
        <div className='flex justify-between text-2xl font-bold dark:text-white text-gray-500'>
            <p className='font-bold text-2xl'>{skillName}</p>
            <p>{percentage}</p>
        </div>

        <div className='w-full h-3 bg-gray-300 dark:bg-gray-600 rounded-full'>
            <div className='animate-pulse'>
                <div className={`h-3 dark:bg-gradient-to-r dark:from-purple-950 dark:via-blue-700 dark:to-sky-300 rounded-full bg-gradient-to-r from-gray-800 via-slate-600 to-slate-900`} style={{width:percentage}}></div>
            </div>
        </div>
    </div>
  )
}

export default SkillsLevel