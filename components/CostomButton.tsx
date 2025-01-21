"use client"
import  {CostomButtonProps} from "@/app/types/index"

const CostomButton = ({title, castomStyle, handleClick , btnType}: CostomButtonProps) => {
  return (
    <button 
    disabled = {false}
    type={btnType || "button"}
    className={`custom-btn ${castomStyle}`}
    onClick={handleClick}
    >
      <samp className='flex-1'>
        {title}
      </samp>
    </button>
  )
}

export default CostomButton
