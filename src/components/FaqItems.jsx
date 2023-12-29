import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";

const FaqItems = ({question, answer}) => {
    const [expanded, setExpanded] = useState(false);
    const iconStyle = { color: '#1F2937', height: '20px', width: '20px', border: '2px' }
  return (
    <div className='Content flex  gap-6 w-[349px] md:w-[768px] font-santoshi m-auto'>
        <div className="Text w-[301px] md:w-[720px] flex flex-col gap-[14px]">
            <h3 className='text-[20px] leading-[27px] font-medium text-[#1F2937]'>{question}</h3>
            {expanded && <p className='text-[16px] leading-[21.6px] font-medium text-[#6B7280]'>{answer}</p>}
        </div>
        <div className="Icon pt-[2px] w-[24px] h-[26px]"  onClick={() => setExpanded(!expanded)}>
            <div className="minu_plus h-6 w-6">
            {expanded ? (<FiMinusCircle style={iconStyle} />) : (<MdAddCircleOutline style={iconStyle} />)}
            </div>
        </div>
    </div>
  )
}

export default FaqItems