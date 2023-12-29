import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <section className='font-santoshi'>
        <div className='container w-[345px] md:w-[896px] lg:w-[1312px] flex flex-col gap-12 m-auto mt-[149px] md:mt-[523px]'>
            <div className="text flex flex-col md:justify-center  gap-3 font-santoshi text-center  ">
                <h1 className='text-[42px] md:text-[58px] font-bold text-[#262E35] text-center leading-[56.7px] md:leading-[78.3px]'>Pricing made for collaborative support.</h1>
                <p className='text-[#6B7280] lg:w-[896px] text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-center md:font-medium md:px-[135px] m-auto'>Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
                
            </div>
            <div className="plans flex flex-col md:flex-row md:flex-wrap justify-center gap-6  font-santoshi">
                <div className="free w-[345px] h-[629px] md:w-[378.67px] rounded-[16px] border-[1px] border-solid border-[#E5E7EB] py-10 px-6 flex flex-col gap-10 ">
                    <div className="container w-[297px] md:w-[330.67px] flex flex-col gap-5">
                        <div className="header ">
                            <h1 className='text-[#191D23] text-[22px] font-bold leading-[29.7px] mb-[11px]'>Freebie</h1>
                            <p className='text-[16px] leading-[21.6px] font-medium text-[#6B7280]'>Ideal for individuals who need quick access to basic features.</p>
                        </div>
                        <div className="priceandbottom">
                            <div className="price flex items-center gap-1 mb-6">
                                <p className='text-[56px] leading-[75.6px] font-medium text-[#1F2937]'>$0</p>
                                <p className='text-[22px] leading-[30.05px] text-[#191D23]'></p>
                                <p className='text-[16px] leading-[21.6px] text-[#4B5563]'>/ Month</p>
                            </div>
                            <div className="CTA rounded-[8px] border-[1px] border-solid border-[#4B5563] py-[6px] px-3">
                                <p className='text-[16px] leading-[21.6px] text-center text-[#4B5563] font-medium'>Get Started Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom w-[297px] md:w-[330.67px] flex flex-col gap-3">
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>20,000+ of PNG & SVG graphics</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Access to 100 million stock images</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload custom icons and fonts</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Sharing</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload graphics & video in up to 4k</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Projects</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Instant Access to our design system</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Create teams to collaborate on designs</p>
                        </div>
                    </div>
                </div>


                <div className="free w-[345px] h-[629px] md:w-[378.67px] rounded-[12px] bg-[#1F2937] py-10 px-6 flex flex-col gap-10 shadow-custom">
                    <div className="container w-[297px] md:w-[330.67px] flex flex-col gap-5">
                        <div className="header ">
                            <h1 className='text-[#FFFFFF] text-[22px] font-bold leading-[29.7px] mb-[11px]'>Professional</h1>
                            <p className='text-[16px] leading-[21.6px] font-medium text-[#F3F4F6]'>Ideal for individuals who who need advanced features and tools for client work.</p>
                        </div>
                        <div className="priceandbottom">
                            <div className="price flex items-center gap-1 mb-6">
                                <p className='text-[56px] leading-[75.6px] font-medium text-[#F9FAFB]'>$25</p>
                                <p className='text-[22px] leading-[30.05px] text-[#191D23]'></p>
                                <p className='text-[16px] leading-[21.6px] text-[#F9FAFB]'>/ Month</p>
                            </div>
                            <div className="CTA rounded-[8px] border-[1px] border-solid bg-[#F9FAFB] py-[6px] px-3">
                                <p className='text-[16px] leading-[21.6px] text-center text-[#1F2937] font-bold'>Get Started Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom w-[297px] md:w-[330.67px] flex flex-col gap-3">
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#F9FAFB', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#F9FAFB] font-medium text-[16px] leading-[21.6px] flex items-center'>20,000+ of PNG & SVG graphics</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#F9FAFB', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#F9FAFB] font-medium text-[16px] leading-[21.6px] flex items-center'>Access to 100 million stock images</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#F9FAFB', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#F9FAFB] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload custom icons and fonts</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#F9FAFB', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#F9FAFB] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Sharing</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#F9FAFB', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#F9FAFB] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload graphics & video in up to 4k</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Projects</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Instant Access to our design system</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#9CA3AF', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#9CA3AF] font-medium text-[16px] leading-[21.6px] flex items-center'>Create teams to collaborate on designs</p>
                        </div>
                    </div>
                </div>
                <div className="free w-[345px] h-[629px] md:w-[378.67px]  rounded-[16px] border-[1px] border-solid border-[#E5E7EB] py-10 px-6 flex flex-col gap-10 ">
                    <div className="container w-[297px] md:w-[330.67px] flex flex-col gap-5">
                        <div className="header ">
                            <h1 className='text-[#191D23] text-[22px] font-bold leading-[29.7px] mb-[11px]'>Enterprise</h1>
                            <p className='text-[16px] leading-[21.6px] font-medium text-[#6B7280]'>Ideal for businesses who need personalized services and security for large teams. </p>
                        </div>
                        <div className="priceandbottom">
                            <div className="price flex items-center gap-1 mb-6">
                                <p className='text-[56px] leading-[75.6px] font-medium text-[#1F2937]'>$100</p>
                                <p className='text-[22px] leading-[30.05px] text-[#191D23]'></p>
                                <p className='text-[16px] leading-[21.6px] text-[#4B5563]'>/ Month</p>
                            </div>
                            <div className="CTA rounded-[8px] border-[1px] border-solid border-[#4B5563] py-[6px] px-3">
                                <p className='text-[16px] leading-[21.6px] text-center text-[#4B5563] font-medium'>Get Started Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom w-[297px] md:w-[330.67px] flex flex-col gap-3">
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>20,000+ of PNG & SVG graphics</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Access to 100 million stock images</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload custom icons and fonts</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Sharing</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Upload graphics & video in up to 4k</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Unlimited Projects</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Instant Access to our design system</p>
                        </div>
                        <div className="feature w-[297px] flex items-center gap-2">
                            <div className="check-points h-5 w-5 flex items-center">
                                <IoMdCheckmarkCircleOutline style={{ color: '#1F2937', fontSize: '20px' }} />
                            </div>
                            <p className='text-[#1F2937] font-medium text-[16px] leading-[21.6px] flex items-center'>Create teams to collaborate on designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing