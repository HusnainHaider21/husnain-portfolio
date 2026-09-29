import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-blue-500">Husnain</span>
        </h1>
        <p className="text-xl text-gray-400 mt-6 max-w-2xl">
          Frontend Developer | React Developer | Building modern and fast websites.
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200">
          View My Work
        </button>
      </div>
    </div>
  )
}

export default Hero
