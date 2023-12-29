import React from 'react'
import gradient from '../images/Gradient.png'
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaAngellist, FaDribbble } from "react-icons/fa";
import "../App.css"


const Footer = () => {
  return (
    <section
      className="footer-section w-[380px] md:w-[1024px] h-[748px] lg:w-[1440px] relative m-auto font-santoshi mt-[466px] md:mt-[501px]"
    >
     <div className='relative md:mt-[165px]'>
     <div className="Frame w-[348px] md:w-[1024px] lg:w-[1440px]  py-[30px] flex flex-col gap-[105px] m-auto mt-[56px] md:mt-[165px]">
        <div className="Text w-full md:w-[896px] lg:w-[1440px] flex flex-col justify-center gap-4 pt-6 md:m-auto">
          <h1 className="Heading w-[273px] md:w-[896px]  m-auto text-[42px] md:text-[72px] md:leading-[97.2px] leading-[56.7px] font-black text-center text-[#101828]">
            No long-term contracts. No catches. Simple.
          </h1>
          <p className="SupportingText text-center text-[20px] leading-[27px] font-medium text-[#667085]">
            Start your 30-day free trial. Cancel anytime.
          </p>
        </div>
        <div className="Footer w-[348px] md:w-[1024px] lg:w-[1440px] px-4 md:px-[63px] flex flex-col gap-8">
          <div className="Divider w-[316px] md:w-[898px] lg:w-[1314px] h-[1px] bg-[#D1D5DB]"></div>
          <div className="Frame w-[316px] md:w-[898px] lg:w-[1314px] flex flex-col gap-3">
            <h1 className="text-[27px] md:text-[24px] leading-[32.4px] font-bold text-[#374151]">
              UniCraft
            </h1>
            <p className='text-[18px] leading-[24.3px] font-medium text-[#9CA3AF]'>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="Content w-[316px] md:w-[898px] lg:w-[1314px] flex justify-between gap-8">
            <div className="Frame w-[142px] md:w-[433px] ">
                <h1 className="FooterText text-[16px] w-[136px] md:w-full leading-6 font-normal text-[#98A2B3]">© 2077 Untitled UI. All rights reserved.</h1>
            </div>
            <div className="SocialIcon w-[142px] md:w-[433px] justify-end flex flex-wrap gap-[24px] ">
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaTwitter style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaLinkedin style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaFacebook style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaGithub style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaAngellist style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
                <div className="Frame w-6 h-6 flex ">
                    <div className="Social ">
                        <FaDribbble style={{color: "#98A2B3", width: "24px", height: "19.5px", top: "2.2px"}} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}

export default Footer