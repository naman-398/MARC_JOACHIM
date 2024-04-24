import React from 'react'
import about from "../assets/images/unsplash_RukI4qZGlQs.webp";
import { Arrow } from '../commonsvg/Icon';
import  lawyerelipse from "../assets/images/lawyerelipse.webp";
const Lawyer = () => {
  return (
    <div className="relative" id="us">
    <div className="container  mx-auto px-3 overflow-hidden">
      <div className="pt-10 md:pt-0">
        <div className=" flex sm:items-end items-start gap-1" data-aos="zoom-in">
          <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[169px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
          </div>
          <div className=" flex items-end sm:translate-y-4 -translate-y-3">
            <p className=" font-Helvetica sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
              05
            </p>
            <p className=" font-Helvetica  font-normal uppercase text-2xl leading-[30px]">
              About
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-row flex-wrap mb-14 lg:mb-0  -mx-3  md:pt-[52px] mt-5">
        <div className="992:w-1/2 z-30 w-full px-3">
          <img className="w-full max-w-[450px]  576:max-w-[559px] max-h-[470px] 576:max-h-[574px] mx-auto" src={about} alt="" data-aos="zoom-in" />
        </div>
        <div className="992:w-1/2 z-30 w-full px-3 pt-4 992:pt-0 ">
          <h1 className="font-normal text-[35px] 576:text-[40px] text-center 992:text-start sm:text-[46px] md:text-[50px] 992:text-[52px] text-black  uppercase font-Helvetica md:leading-[67px]" data-aos="zoom-in">
            LAWYER <span className="text-[#f77b0b]"> &</span> DIVORCE <span className=' lg:block'>COACH</span>
          </h1>
          <p className="text-[27px] text-center 992:text-start md:text-[37px] font-normal md:leading-[48px] uppercase  font-Helvetica mb-2 md:mb-[31px] text-black" data-aos="zoom-in">
            <span className="text-[#f77b0b]"> M</span>arc
            <span className="text-[#f77b0b]"> J</span>oachim
            <span className="text-[#f77b0b]"> H</span>ubrich
          </p>
          <p className=" text-xl leading-[28px] text-center 992:text-start capitalize font-Helvetica font-normal text-black mb-3" data-aos="zoom-in">
            About the mindset agency coach
          </p>
          <p className="font-normal text-black opacity-[70%] text-center 992:text-start mx-auto 992:mx-0 576:text-base text-[14px] font-poppins mb-[35px] max-w-[484px]" data-aos="zoom-in">
            Marc J. Hubrich is the founder of the mindset agency specializing
            in consulting services.
          </p>
          <div data-aos="zoom-in">
          <div className="border_gradient rounded-full w-full max-w-[352px] p-[1.7px] mx-auto 992:mx-0 duration-300 cursor-pointer">
    <a className="p-[16px_32px] bg-white hover:bg-transparent duration-300 commonbtnparent rounded-[63px] flex items-center gap-[12px]">
      <span className="font-gradient capitalize font-inter fw-medium 576:text-base text-[14px] leading-[24px]">Learn more about the agency</span>
      <span><Arrow/></span>
    </a>
  </div>
  </div>
        </div>
      </div>
    </div>{" "}
    <img className=" absolute bottom-[-3%] right-[7%] max-w-[738px] max-h-[211px]" src={lawyerelipse} alt="ellp" />
  </div>
  )
}

export default Lawyer