import React from 'react'
import vector from '../images/Vector (1).png'

const HowItWork = () => {
  return (
    <section className='w-[380px] lg:w-[1260px] lg:h-[535px] rounded-[25.64px] border-[0.92px] border-solid border-[#E5E7EB] shadow-boxcustom m-auto font-santoshi p-[52px]'>
        <div className="heading">
            <h1 className='text-[48px] leading-[60px] text-[#1F2937] font-bold text-center '>How it works</h1>
            <p className='text-[20px] leading-[27px] text-[#4B5563] font-medium text-center mt-3'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
        </div>
        <div className="numbers mt-[214px] flex flex-col md:flex-row justify-center m-auto">
            <div className="1 w-[339px] h-[106px] overflow-visible relative">
                <h1 className='text-[240.21px] leading-[122.14px] font-bold text-center overflow-visible  bg-gradient-to-b from-[#D8B4FE] to-white  text-transparent bg-clip-text p-[26px] absolute -top-[5.5rem] left-[29%] -z-10'>1</h1>
                <div className=''>
                <h1 className='text-[40px] leading-[54px] text-[#1F2937] font-black text-center '>Subscribe</h1>
                <p className='text-center text-[18px] leading-[24.3px] text-[#6B7280] '>Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
                </div>
            </div>
            <div>
                <img src={vector} alt="" />
            </div>
            <div className="1 w-[339px] h-[106px]  overflow-visible -mt-[25px] relative">
                <h1 className='text-[240.21px] leading-[122.14px] font-bold text-center overflow-visible  bg-gradient-to-b from-[#D8B4FE] to-white  text-transparent bg-clip-text p-[26px] absolute -top-[5.5rem] left-[23%] -z-10'>2</h1>
                <div className=''>
                <h1 className='text-[40px] leading-[54px] text-[#1F2937] font-black text-center '>Request</h1>
                <p className='text-center text-[18px] leading-[24.3px] text-[#6B7280] '>Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
                </div>
            </div>
            <div>
                <img src={vector} alt="" />
            </div>
            <div className="1 w-[339px] h-[106px] overflow-visible relative">
                <h1 className='text-[240.21px] leading-[122.14px] font-bold text-center overflow-visible  bg-gradient-to-b from-[#D8B4FE] to-white  text-transparent bg-clip-text p-[26px] absolute -top-[5.5rem] left-[23%] -z-10'>3</h1>
                <div className=''>
                <h1 className='text-[40px] leading-[54px] text-[#1F2937] font-black text-center '>Revise</h1>
                <p className='text-center text-[18px] leading-[24.3px] text-[#6B7280] '>Need changes? We guarantee unlimited revisions until you're 200% satisfied.</p>
                </div>
            </div>
            <div className="Frame"></div>
        </div>
    </section>
  )
}

export default HowItWork