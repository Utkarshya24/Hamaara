import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-[url('/assets/pexels-scottwebb-1029606.svg')] flex justify-center items-center bg-cover bg-center h-[775px] w-full mt-2">
         {/* Overlay div */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>

{/* Content */}
<div className="relative z-10 flex items-center justify-center h-full">
  <h1 className="text-4xl font-bold text-white">Hero Section</h1>
</div>
    </div>
  )
}

export default Hero