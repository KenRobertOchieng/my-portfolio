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
                <div className={`h-3 bg-orange-400 rounded-full`} style={{width:percentage}}></div>
            </div>
        </div>
    </div>
  )
}

export default SkillsLevel