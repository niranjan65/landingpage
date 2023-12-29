import React from 'react'
import Card from '../images/Logo (1).png'
import Card1 from '../images/Logo (2).png'
import Card2 from '../images/Logo (3).png'
import Card3 from '../images/Logo (4).png'
import Card4 from '../images/Logo (5).png'
import Card5 from '../images/Logo (6).png'
import Navbar from './Navbar'

const Home = () => {
  return (
    <section className=" relative md:left-16">
      
      <Navbar/>
      <div className="container w-[347px] md:w-[896px] lg:w-[1312px] m-auto  flex flex-col gap-[72px] md:gap-[215px] items-center justify-center   mt-[109px] md:mt-[268px] ">
        <div className="heading  flex flex-col items-center gap-8">
          <div className='sub-heading font-santoshi flex flex-col gap-5'>
            <h1 className=" font-black text-[42px] md:text-[72px] leading-[45px] md:leading-[85px] text-center text-[#1F2937] ">
              Elevate Your Presence with Seamless Design and Innovation.
            </h1>
            <p className="text-center font-medium md:text-[20px] md:leading-[27px] text-[#4B5563]">
              From strategic planning to digital presence, we're your dedicated
              partner in achieving solo success.
            </p>
          </div>
          <div>
            <button className="px-[34px] py-4 bg-[#1F2937] text-white border rounded-lg">
              View Pricing
            </button>
          </div>
        </div>
        <div className="brands w-full flex flex-col items-center gap-3">
          <p className="text-[#9CA3AF]">Trusted By 250+ Companies</p>
          <div className=" w-full flex flex-col gap-[14px] md:flex-row md:flex-wrap justify-center items-center">
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card} alt="logo" />
            </div>
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card1} alt="logo" />
            </div>
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card2} alt="logo" />
            </div>
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card3} alt="logo" />
            </div>
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card4} alt="logo" />
            </div>
            <div className="logo py-[14.44px] px-[28.89px] w-[172px] flex items-center justify-center">
              <img src={Card5} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home