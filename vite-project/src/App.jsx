function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Husnain.dev</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
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

export default App