import React from 'react'

const textShadowCustom = {
  textShadow: '0px 1px 3px #4780FC3B, 0px 5px 5px #4780FC33, 0px 11px 7px #4780FC1F, 0px 20px 8px #4780FC08, 0px 31px 9px #4780FC00',
};

const Hero = () => {
  return (
    <div className="relative bg-[url('/assets/pexels-scottwebb-1029606.svg')] flex justify-center items-center bg-cover bg-center h-[775px] w-full rounded-4xl ">
         {/* Overlay div */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center">
          <h1 className="text-[64px] font-instrument-serif font-weight-400 text-primary text-center leading-[1.1]" style={textShadowCustom}>
          Invest In a <span className='font-geist font-bold text-black'>Brighter <br/>Future with</span><span className="font-instrument-serif italic font-normal text-primary"> Hamaara</span></h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-[18px] font-dm-sans font-weight-400 text-black text-center w-3/5">  
          Join us in transforming urban living at The Planet of Hayward, where modern design meets community spirit.</p>
        </div>
        <div className="flex justify-center gap-4 items-center mt-4">
          <button className='bg-gradient-to-t from-[#2C2C2D] to-[#787878] text-white rounded-xl  px-4 justify-center shadow-lg items-center font-inter text-[14px] font-semibold flex  h-[30px]'>Get In Touch</button>
          <button className='bg-gradient-to-t from-[#5CC8D7] to-[#9EF3FF] text-black rounded-xl px-4 justify-center shadow-lg items-center font-inter text-[14px] font-semibold  flex h-[30px]'>Invest</button>
        </div>
        </div>
    </div>
  )
}

export default Hero