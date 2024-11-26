import React from 'react'

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section
      >
        {/* Overlay */}
        <div className="relative bg-cover bg-center h-full">
          <img src="../../src/img/Tmpl1.jpg" alt="finalFE\src\img\Tmpl1.jpg"/>
          {/* Content */}
        <div className="absolute container mx-auto flex flex-col justify-center items-center text-center text-white top-[35%] ">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover Your Dream Furniture
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find the perfect furniture for your home with our high-quality designs and collections.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-[#]-500 text-white rounded-full shadow-lg hover:bg-grey-600 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
        </div>
      </section>
    </div>
  )
}
