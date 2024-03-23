import React from 'react'

const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4 w-full z-10 bg-opacity-30">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="https://www.facebook.com/" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="hidden md:block">
          <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
          <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white px-3 py-2">Services</a>
          <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>

      </div>
      {/* Mobile menu */}
      
        <div className="md:hidden">
          <a href="https://www.facebook.com/" className="block text-gray-300 hover:text-white px-3 py-2">Home</a>
          <a href="https://www.facebook.com/" className="block text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="https://www.facebook.com/" className="block text-gray-300 hover:text-white px-3 py-2">Services</a>
          <a href="https://www.facebook.com/" className="block text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>

    </nav>
  )
}
export default Navbar