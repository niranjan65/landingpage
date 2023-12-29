import React from 'react'
import companyLogo from '../images/Company logo.png';
import avatar from '../images/Avatar (1).png'

const QuoteSection = () => {
  return (
    <section className="bg-[#F9FAFB] w-full lg:w-[1440px] py-[96px] px-[90px] lg:gap-16 gap-10 font-santoshi mt-[90px]">
      <div className="Content lg:w-[1260px] lg:gap-10 gap-5 w-full flex flex-col justify-between">
        <div className="Logo flex justify-center">
          <img src={companyLogo} alt="" />
        </div>
        <div className="Quote w-full lg:w-[1260px]">
          <h1 className=" text-[30px] lg:text-[48px] lg:leading-[64.8px] text-center font-bold text-[#1F2937]">
          We’ve been with unicraft to kick start every new project and can’t imagine working without it.
          </h1>
        </div>
        <div className="Avatar w-full lg:w-[1260px]">
            <div className="Avatar w-full flex justify-center">
                <img src={avatar} alt="" />
            </div>
            <div className="Text w-full gap-1">
                <h1 className='text-[18px] leading-[24.3px] font-medium text-[#101828] text-center'>Candice Wu</h1>
                <p className='text-[16px] leading-[21.6px] text-center text-[#667085]'>Product Manager, Sisyphus</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection