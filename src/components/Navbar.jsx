import React from 'react'

const Navbar = () => {
  return (
    <div className='invisible  md:visible'>
        <nav className='font-santoshi py-10 px-[90px] flex justify-between'>
            <div className="logo w-[91px] h-8">
                <h1 className='text-[24px] leading-[32.4px] font-bold text-center text-[#374151]'>UniCraft</h1>
            </div>
            <div className="nav-links lg:w-[286px] flex gap-12">
                <div className="Frame ">
                    <p className='text-[18px] lg:w-[105px] leading-[24.3px] font-medium text-[#374151]'>How it works</p>
                </div>
                <div className="Frame ">
                    <p className='text-[18px] leading-[24.3px] font-medium text-[#374151]'>Pricing</p>
                </div>
                <div className="Frame ">
                    <p className='text-[18px] leading-[24.3px] font-medium text-[#374151]'>FAQ</p>
                </div>
            </div>
            <div className="button lg:w-[161px] h-[50px] flex items-center rounded-[8px] border-[1px] border-solid border-[#4B5563] py-4 px-[34px] ">
                <button className='text-[18px] leading-[24.3px] text-[#4B5563] font-bold w-[97px]  text-center'>Contact us</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar