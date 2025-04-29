import React from 'react';


const ValuationCards = () => {
  // Flexible card component that accepts any content via children
  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div
        className="bg-[#FAFAFA] p-6 rounded-lg max-w-auto mx-auto [box-shadow:_0px_8px_18px_0px_#0000001A,_0px_32px_32px_0px_#00000017,_0px_72px_43px_0px_#0000000D,_0px_128px_51px_0px_#00000003,_0px_200px_56px_0px_#00000000]"
      >
        {children}
      </div>
    );
  };

  return (
    <div className="container justify-center items-center flex w-full mx-auto py-12">
        <div className="flex w-full md:flex-row flex-col gap-4">
            <Card>
                <div className="flex w-auto h-[310px] gap-4">
                <div className="bg-[url('/assets/joel-filipe-RFDP7_80v5A-unsplash.svg')] flex justify-center items-center bg-cover bg-center h-[310px] w-[250px] rounded-2xl ">
                    
                </div>
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <h2 className="text-[29px] font-inter font-semibold">Protecting Capital & Producing Returns</h2>
                    <p className="text-[18px] font-inter font-normal">Private Real Estate Investments for Accredited Investors</p>
                    <button className='bg-gradient-to-t from-[#2C2C2D] to-[#787878] text-white rounded-xl  px-4 justify-center shadow-lg items-center font-inter text-[14px] font-semibold flex  h-[30px]'>Learn More</button>  
                </div>
                </div>
            </Card>
            <div className="flex flex-wrap gap-4 w-full h-[360px]">
            <Card>
                <div className="flex w-[275px] h-full gap-4">
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <h2 className="text-[32px] font-inter font-semibold">$1.02B</h2>
                    <p className="text-[22px] font-inter font-normal">In Assets</p>
                </div>
                </div>
            </Card>
            <Card>
                <div className="flex w-[275px] h-full gap-4">
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <h2 className="text-[32px] font-inter font-semibold">$435M+</h2>
                    <p className="text-[22px] font-inter font-normal">In Equity Raised</p>
                </div>
                </div>
            </Card>
            <Card>
                <div className="flex w-[275px] h-full gap-4">
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <h2 className="text-[32px] font-inter font-semibold">30</h2>
                    <p className="text-[22px] font-inter font-normal">Property Acquired</p>
                </div>
                </div>
            </Card>
            <Card>
                <div className="flex w-[275px] h-full gap-4">
                <div className="flex flex-col w-full gap-2 justify-start items-start">
                    <h2 className="text-[32px] font-inter font-semibold">6,295</h2>
                    <p className="text-[22px] font-inter font-normal">Units</p>
                </div>
                </div>
            </Card>
            
            </div>
            
        </div>
    </div>
  );
};

export default ValuationCards;