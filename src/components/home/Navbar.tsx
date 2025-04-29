import React from 'react'

const navShadow = {
    boxShadow: `
      0px 5px 11px 0px #00000026,
      0px 19px 19px 0px #00000021,
      0px 43px 26px 0px #00000014,
      0px 77px 31px 0px #00000005,
      0px 120px 34px 0px #00000000
    `
}

const logo = {
    boxShadow: `
      0px 1px 4px 0px #19213D14,
      0px 1px 3px 0px #4780FC3B,
      0px 5px 5px 0px #4780FC33,
      0px 11px 7px 0px #4780FC1F,
      0px 20px 8px 0px #4780FC08,
      0px 31px 9px 0px #4780FC00
    `
  }

const Navbar = () => {
  return (
    <div className="px-20">
        <nav style={navShadow} className='sticky z-20 w-full bg-black rounded-2xl flex justify-between items-center  px-2'>
            <div className='flex items-center gap-2'>
                <div className='rounded-[6px] w-[27px] h-[26px] bg-gradient-to-r from-primary to-secondary' style={logo}></div>
                <p className='font-instrument-serif text-white text-[30px] font-normal'>Hamaar</p>
            </div>
            <div className='flex items-center gap-[18px] font-inter text-[16px] font-semibold'>
                <p className='text-primary '>Home</p>
                <p className='text-white'>About</p>
                <p className='text-white'>Our Project</p>
                <p className='text-white'>Invest Now</p>
            </div> 
            <div className='flex items-center  gap-[10px]'>
                <button className='bg-gradient-to-t from-[#2C2C2D] to-[#787878] text-white rounded-xl  px-4 justify-center items-center font-inter text-[14px] font-semibold shadow-lg flex  h-[30px]'>Get In Touch</button>
                <button className='bg-gradient-to-t from-[#5CC8D7] to-[#9EF3FF] text-black rounded-xl px-4 justify-center items-center font-inter text-[14px] font-semibold shadow-lg  flex h-[30px]'>Invest</button>
            </div>

        </nav>    

    </div>
  )
}

export default Navbar