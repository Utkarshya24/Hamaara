import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[url('/assets/luxuryHome.svg')] bg-cover h-[500px] text-black  overflow-hidden ">

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10  to-transparent ">
        <div className=" w-full flex md:flex-row flex-col items-start h-full">
          <div className="flex flex-col w-full justify-between items-start px-10 ">
            <h1 className="text-[20px] font-geist font-bold text-black text-center ">
              Hamaara
            </h1>
            <p className="text-[20px] mt-5 font-geist font-normal text-gray-800 text-center ">
            © copyright Hamaara 2024. All rights reserved.
            </p>
            <h1 className="text-[20px] mt-20 font-geist font-bold text-black text-start ">
              Contact
            </h1>
            <div className="flex flex-col ">
            <p className="text-[20px] font-geist font-normal text-black text-start ">
            invest@hamaara.com
            </p>
            <p className="text-[20px] font-geist font-normal text-black text-start ">
            13 S Sd Rd RET 350 SF, CA 92182
            </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start px-10 ">
          <div className="flex font-geist justify-between gap-20 text-sm">
            <div className="space-y-2">
              <h3 className="font-semibold  text-black">Socials</h3>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-black w-30">Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent z-10" >
        <h1 className="absolute bottom-0 left-50  text-[200px] font-geist font-bold text-white text-shadow-lg leading-[1.1] text-center">
          Hamaara
        </h1>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
