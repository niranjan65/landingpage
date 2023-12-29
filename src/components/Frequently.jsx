import React, { useState } from 'react'
import {questions} from '../data/api'
import FaqItems from './FaqItems';


const Frequently = () => {
    
  return (
    <section className="font-santoshi">
      <div className="Frame w-[345px] md:w-[896px] lg:w-[1312px] flex flex-col gap-16 m-auto mt-[101px] md:mt-[523px]">
        <div className="heading flex flex-col justify-center gap-2 ">
          <h1 className="text-center text-[42px] md:text-[58px] text-[#101828] leading-[56.7px] md:leading-[78.3px] font-bold">
            Frequently asked questions
          </h1>
          <div className="w-[282px] md:w-[896px] flex justify-center  m-auto">
            <p className="text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] font-medium text-[#667085] text-center">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>
        <div className="content w-[345px] md:w-[896px] lg:w-[1312px]  flex flex-col gap-8">
            
                {
                    questions.map((elem) => {
                        const {id, question, answer, divider} = elem;
                        
                        return (
                            <div key={id} className='FAQ_ITEM md:w-[768px] flex flex-col gap-6 m-auto'>
                            
                             {divider && <div className='divider w-[349px] md:w-[768px] h-[1px] bg-[#EAECF0]'></div>}
                             <FaqItems  {...elem} />
                            </div>
                        )
                    })
                }
            
        </div>
      </div>
    </section>
  );
}

export default Frequently