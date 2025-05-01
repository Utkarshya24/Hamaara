import Articles from "@/components/home/Articles";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import ValuationCards from "@/components/home/valuationCards";
import { TbHomeSearch } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BsHouseLock } from "react-icons/bs";


export default function Home() {
  return (
    <div >
      <Hero/>
      <ValuationCards/>
      <div className="flex justify-between font-inter font-semibold px-10 items-center w-full h-[100px] ">
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
       
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>

      </div> 
      <div className="bg-black flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-white text-[40px] font-geist font-semibold">The Planet Project Overview</h1>
        <p className="text-white text-[14px] font-dm-sans font-normal py-2">Hamaara&apos;s team is thrilled to present The Planet of Hayward, a groundbreaking real estate <br/>development featuring 14 modern condos crafted to elevate urban living.</p>
        <div className="flex flex-col justify-center items-center gap-2 w-full py-4">
          <div className="flex w-full justify-center items-center flex-wrap gap-4">
            <div className="w-[45%] h-[300px] bg-[url('/assets/img1.svg')] bg-cover bg-center rounded-2xl"></div>
            <div className="w-[45%] h-[300px] bg-[url('/assets/img1.svg')] bg-cover bg-center rounded-2xl"></div>
          </div>
          <div className="flex w-full justify-center items-center flex-wrap gap-4 py-2">
            <div className="w-[29%] h-[300px] bg-[url('/assets/img1.svg')] bg-cover bg-center rounded-2xl"></div>
            <div className="w-[29%] h-[300px] bg-[url('/assets/img1.svg')] bg-cover bg-center rounded-2xl"></div>
            <div className="w-[29%] h-[300px] bg-[url('/assets/img1.svg')] bg-cover bg-center rounded-2xl"></div>
          </div>
        </div>
         <h1 className="text-white text-[40px] font-geist font-semibold">The Planet Project Overview</h1>
         <div className="flex flex-wrap justify-center text-white max-w-[700px] items-center gap-8 w-full py-4">
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[180px]">
             <div className="w-[85px] h-[85px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
             <p className="font-inter font-semibold text-[34px]">Cash Flow</p>
             <p className="font-inter font-normal text-[16px]">Every detail is meticulously designed and executed to ensur</p>
          </div>
          </div>
      </div> 
      <div className="bg-white flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-black text-[40px] font-geist font-semibold">The Planet Project Overview</h1>
        <p className="text-black text-[20px] font-dm-sans font-normal py-2">Investing in apartment buildings has proven to be a consistently reliable choice.</p>
        <p className="text-black text-[20px] w-[550px] font-dm-sans font-normal py-2">Over the last forty years, multifamily investments have consistently outperformed other types of real estate.</p>
        <p className="text-black text-[20px] w-[550px] font-dm-sans font-normal py-2">With the U.S. population projected to surpass 380 million in the next 25 years, the demand for multifamily housing is set to rise, solidifying the appeal of investing in such complexes.</p>
        <button className='bg-gradient-to-t from-[#5CC8D7] to-[#9EF3FF] text-black rounded-xl px-4 mt-4 justify-center items-center font-inter text-[14px] font-semibold shadow-lg  flex h-[30px]'>Invest With Us</button>
        <div className="relative w-full h-[450px] bg-[url('/assets/luxuryHome.svg')] bg-cover bg-center rounded-2xl mt-20">
        <div className="absolute bg-gradient-to-b from-white to-transparent"></div>
        
        </div>
        </div>
        <div>
        <div className="relative w-full h-[450px] bg-[url('/assets/luxuryHome2.png')] bg-cover bg-center rounded-2xl  ">
        <div className="absolute w-full h-full bg-black/50 flex justify-center items-center flex-col rounded-2xl ">
        <h1 className="text-white text-shadow-lg text-center  text-[58px] font-manrope font-semibold leading-[1.1]">We will Help You Every <br/>
        Steps Of The Way</h1>
        <p className="text-white text-shadow-lg text-center text-[24px] font-dm-sans font-normal pt-20">We will Help You Every Steps Of The Way</p>
        </div>
        
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-center text-[40px] font-roboto font-normal pt-20">How It works? Find a Investment home</p>
          <p className="text-black text-center text-[17px] font-roboto font-normal">Lorem ipsum dolor sit amet</p>
          <div className="flex md:flex-row flex-col w-full h-[750px] justify-center items-center gap-4 w-full py-4">
            <div className="w-full h-full justify-start items-start flex flex-col gap-2">
              <div className="w-full h-full flex flex-col gap-2">
              <TbHomeSearch className="w-10 h-10"/>
                <p className="text-black text-start text-[21px] font-roboto font-semibold ">Step 1</p>
                <p className="text-black text-start text-[15px] font-roboto font-normal">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
              <RiTeamFill className="w-10 h-10"/>               
               <p className="text-black text-start text-[21px] font-roboto font-semibold ">Step 2</p>
                <p className="text-black text-start text-[15px] font-roboto font-normal">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
              <BsHouseLock className="w-10 h-10"/>                
              <p className="text-black text-start text-[21px] font-roboto font-semibold ">Step 3</p>
                <p className="text-black text-start text-[15px] font-roboto font-normal">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
              <RiTeamFill className="w-10 h-10"/>                  
              <p className="text-black text-start text-[21px] font-roboto font-semibold ">Step 4</p>
                <p className="text-black text-start text-[15px] font-roboto font-normal">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
            </div>
            <div className="w-full shadow-xl h-full bg-[url('/assets/pexels-scottwebb-136413.svg')] bg-cover bg-center rounded-2xl"></div>
          </div>
        </div>
        <div className="relative w-full h-[650px] bg-[url('/assets/luxuryHome.svg')] bg-cover bg-center rounded-2xl mt-20">
        <div className="absolute w-full h-full bg-black/80 justify-between items-center flex  gap-2 px-10 2xl">
        <div className="flex flex-col text-start justify-start items-start gap-2 w-[550px] ">
          <p className="text-white text-start text-[22px] font-Montserrat font-normal pt-20">Distributions Sent Since 2015:</p>
          <h1
            style={{
              backgroundImage: "linear-gradient(to bottom, black 10%, white 30%, white 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-shadow-lg text-start text-[88px] font-Montserrat font-bold"
          >
            $30 Million
          </h1>
          <p className="text-white text-start text-[22px] font-Montserrat font-normal ">Want to know more? Schedule a call with our dedicated Investor Relations team and to be the first to be notified when we have new accredited offerings open for investment.</p>
          <button className='bg-gradient-to-t from-[#5CC8D7] to-[#9EF3FF] text-black rounded-xl px-4 justify-center items-center font-inter text-[14px] font-semibold shadow-lg  flex h-[30px]'>Invest With Us</button>

        </div>
        
        <div className="w-[550px] h-[500px] bg-[url('/assets/img1.svg')] bg-cover border-4 border-gray-400 bg-center rounded-xl"></div>
        </div>
        </div>
        <Articles/>
        <ContactUs />
        <div className="flex justify-between font-inter font-semibold px-10 items-center w-full h-[100px] ">
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
       
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>
        <div className="flex justify-center items-center gap-2 w-auto h-[100px]">
          <div className="bg-black rounded-sm w-[25px] h-[25px]"></div>
          Logo

        </div>

      </div> 
    </div>
  );
}
