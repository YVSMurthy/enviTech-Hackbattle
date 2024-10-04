import React from 'react'
import bg1 from "../assets/bg1.png"

const Hero = () => {
  return (
    <div className="font-bagel font-400 mb-[4vw] ">
      {/* Navbar */}
      <header className="bg-white p-4 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-green-600">
              envi<span className="text-black">Tech</span>
            </div>

            <div className="text-4xl pb-2">|</div>

            {/* Navigation links */}
            <ul className="text-[16px] hidden md:flex space-x-8 text-gray-600">
              <li className="hover:text-black">
                <a href="#">About</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Product</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-black">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Button */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            Try now
          </button>
        </nav>
      </header>
      <section className="relative">
        <div className="relative flex items-center justify-center w-[90vw] h-[80vh] overflow-hidden mt-10 ml-20">
          <img
            src={bg1} // Replace with your actual image URL
            alt="Eco bulb"
            className=" w-full h-full object-cover"
            style={{ borderRadius: 20 }}
          />
        </div>

        {/* Overlay text */}
        <div className="absolute bottom-1 flex flex-col items-start justify-center px-6 ml-20 mb-10 sm:px-12 text-white bg-opacity-50">
          <h1 className="sm:text-5xl md:text-[5vw] font-bold">
            Empowering <br></br>a Brighter Future
          </h1>
          <p className="mt-4 text-xl">Save Energy, Save Tomorrow!</p>
        </div>
      </section>
    </div>
  );
}

export default Hero