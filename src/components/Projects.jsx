import React from 'react'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "This is a brief description of Project One.",
            ImageUrl: "Screenshot from 2025-08-24 01-20-23.png",
            liveDemo: "https://recipe-app--five.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/RECIPE-APP-.git"
        },
        {
            id: 2,
            title: "Project Two",
            description: "This is a brief description of Project Two.",
            ImageUrl: "Screenshot from 2025-08-24 00-35-30.png",
            liveDemo: "https://the-poverty-line-project-8s5o-pb8m01s8d-ken-roberts-projects.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/The-Poverty-Line-Project.git"
        },
        {
            id: 3,
            title: "Project Three",
            description: "This is a brief description of Project Three.",
            ImageUrl: "Screenshot from 2025-08-24 01-27-58.png",
            liveDemo: "https://expense-tracker-phi.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/Expense-Tracker.git"
        },
        {
            id: 4,
            title: "Project Four",
            description: "This is a brief description of Project Four.",
            ImageUrl: "Screenshot from 2025-04-25 16-18-22.png",
            liveDemo: "https://task-manager-react-phi.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/task-manager-react.git"
        }
    ];
  return (
        <div className='bg-gradient-to-r from-stone-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-950 dark:to-blue-950 transition-colors duration-700'>
      <div>
        <h1 className='text-6xl md:text-7xl font-bold dark:text-gray-800 text-gray-300 uppercase text-center py-10'>Projects</h1>
        <div className='container py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>

          {projects.map((project) => (
            <div key={project.id} className='bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden hover:scale-105 transform transition-transform duration-500 w-full'>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">

                <img src={project.ImageUrl} alt={project.title} className='w-full h-48 object-cover' />

                </a>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-2 dark:text-white text-gray-800'>{project.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-4 text-2xl'>{project.description}</p>
                <a href={project.githubLink} className='text-blue-800 hover:text-blue-900 transition-colors duration-300 text-3xl' target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects