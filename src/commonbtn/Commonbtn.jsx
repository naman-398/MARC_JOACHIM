import React from 'react'
import big_btn_icon from "../assets/images/big_btn_icon.webp";
const Commonbtn = (props) => {
  return (
    <div className="border_gradient rounded-full w-full max-w-[452px] duration-300 cursor-pointer">
    <a className="p-[5.83px_9px] hover:bg-transparent commonbtnparent duration-300 bg-white m-[2px] rounded-[63px] flex items-center gap-1">
      <span className="">
        <img
          src={big_btn_icon}
          alt=""
          className=" max-w-[50.84px] max-h-[47.33px] relative z-10 w-full h-full sm:text-nowrap"
        />
      </span>
      <span className="font-gradient capitalize font-inter commonbtnchild  fw-medium text-[14px] 576:text-base leading-[24px]">{props.text}</span>
    </a>
  </div>
  )
}

export default Commonbtn