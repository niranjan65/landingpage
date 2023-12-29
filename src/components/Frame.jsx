import React from 'react'
import frame1 from '../images/Frame 9.png'
import frame2 from '../images/Frame 10.png'
import frame3 from '../images/Frame 11.png'

const Frame = () => {
  return (
    <section className='w-full md:w-full lg:w-[1440px] lg:h-[682px] py-20 flex flex-col gap-14 md:gap-20 m-auto'>
        <div className="frame flex flex-col md:flex-row gap-4 md:gap-6 md:overflow-hidden m-auto">
            <img src={frame1} className=' rounded-[6px]' alt="" />
            <img src={frame3} className=' rounded-[6px]' alt="" />
            <img src={frame2} className=' rounded-[6px]' alt="" />
            <img src={frame1} className=' rounded-[6px]' alt="" />
            <img src={frame3} className=' rounded-[6px]' alt="" />
            
        </div>
        <div className='w-[273px] h-[62px] py-4 px-[34px] rounded-[8px] border-[1px] border-solid border-[#4B5563] flex m-auto'>
            <button className='text-[20px] leading-[27px] font-bold text-[#4B5563] text-center m-auto'>View recent work</button>
        </div>
    </section>
  )
}

export default Frame