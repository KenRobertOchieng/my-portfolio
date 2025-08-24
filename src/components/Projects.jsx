import React from 'react'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "This is a brief description of Project One.",
            ImageUrl: "src/images/Screenshot from 2025-08-24 01-20-23.png",
            liveDemo: "https://recipe-app--five.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/RECIPE-APP-.git"
        },
        {
            id: 2,
            title: "Project Two",
            description: "This is a brief description of Project Two.",
            ImageUrl: "src/images/Screenshot from 2025-08-24 00-35-30.png",
            liveDemo: "https://the-poverty-line-project-8s5o-pb8m01s8d-ken-roberts-projects.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/The-Poverty-Line-Project.git"
        },
        {
            id: 3,
            title: "Project Three",
            description: "This is a brief description of Project Three.",
            ImageUrl: "src/images/Screenshot from 2025-08-24 01-27-58.png",
            liveDemo: "https://expense-tracker-phi.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/Expense-Tracker.git"
        },
        {
            id: 4,
            title: "Project Four",
            description: "This is a brief description of Project Four.",
            ImageUrl: "https://via.placeholder.com/400x200",
            liveDemo: "https://task-manager-react-phi.vercel.app/",
            githubLink: "https://github.com/KenRobertOchieng/task-manager-react.git"
        }
    ];
  return (
        <div className='bg-white dark:bg-gray-900 transition-colors duration-500'>
      <div>
        <h1 className='text-8xl font-bold dark:text-gray-800 text-gray-300 uppercase text-center py-5'>Projects</h1>
        <div className='container py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>

          {projects.map((project) => (
            <div key={project.id} className='bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden'>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">

                <img src={project.ImageUrl} alt={project.title} className='w-full h-48 object-cover' />

                </a>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-2 dark:text-white text-gray-800'>{project.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-4 text-2xl'>{project.description}</p>
                <a href={project.githubLink} className='text-orange-400 hover:text-orange-600 transition-colors duration-300 text-2xl' target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects