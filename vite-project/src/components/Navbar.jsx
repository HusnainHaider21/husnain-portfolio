import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Husnain.dev</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
