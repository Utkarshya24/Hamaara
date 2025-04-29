import Hero from "@/components/home/Hero";
import ValuationCards from "@/components/home/valuationCards";


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
      </div> 
    </div>
  );
}
