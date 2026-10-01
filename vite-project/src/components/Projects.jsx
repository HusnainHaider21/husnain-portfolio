import React from 'react'

const projects = [
  {
    title: "E-Commerce Store",
    desc: " Modern E-commerce shop built with React and Tailwind CSS with cart functionality.",
    tech: "React, Tailwind",
    link: "https://mini-daraz-store.vercel.app"
  },
  {
    title: "Weather App",
    desc: "API se live weather data dikhata hai, city search ke sath.",
    tech: "React, API",
    link: "#"
  },
  { 
    title: "Todo App",
    desc: "Daily tasks manage karne ke liye simple aur fast todo app.",
    tech: "React, LocalStorage",
    link: "#"
  }
]

const Projects = () => {
  return (
    <div id='projects' className="max-w-6xl mx-auto p-6 mt-32">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>
            <p className="text-sm text-blue-400 mb-4">{project.tech}</p>
            <a href={project.link} className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">View Project</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects