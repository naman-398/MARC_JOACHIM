import React from 'react'
import s2elipse from "../assets/images/s2elipse.webp";
const fightData = [
  {
    para: "Your self-esteem is in the basement.",
  },
  {
    para: "You keep asking yourself what you did wrong.",
  },
  {
    para: "The feeling of helplessness is your constant companion.",
  },
  {
    para: "You spend the nights alone and lonely.",
  },
  {
    para: "You have stopped going out and spend the time crying in your room.",
  },
  {
    para: "An emotional chaos is raging inside you.",
  },
];
const Itisnotyourfault = () => {
  return (
    <div className="md:pt-[50px] pt-4 relative ">
      <img src={s2elipse} alt="s2elipse" className=' absolute right-0 top-[10%] max-w-[409px] max-h-[297px] z-[-1]' />
      <div className="container  mx-auto max-w-[1140px] px-3 md:pt-[50px]">
        <div className="flex relative flex-row flex-wrap  justify-center items-center -mx-3 pt-3 sm:pt-[51px]">
          <div className="md:w-7/12 z-30 w-full">
            <div className="flex flex-col items-center lg:items-end lg:justify-end" data-aos="zoom-in">
              <h1 className="text-[48px] md:text-[60px] font-Helvetica font-normal leading-[55px] 576:leading-[77px] text-black">
                IT'S NOT
                <br />
                <span className="text-[#f77b0b] ms-[20px] lg:ms-[73px]"> YOUR </span>
                FAULT!
              </h1>
            </div>
          </div>
          <div className="md:w-5/12 z-30  w-full">
            <div className="flex gap-3 items-center px-3 justify-center">
              <hr className="h-[70px] w-1 bg-[#9800b0]" />
              <p className=" text-[14px] 576:text-[16px] max-w-[288px] font-poppins leading-[normal] 576:leading-[26px] text-black mb-0 font-normal" data-aos="zoom-in">
                It's not your fault for not knowing how to let go of the partner
                who no longer made you feel special.
              </p>
            </div>
          </div>
        </div>
        <h2 className="font-Helvetica font-black text-[18px] 576:text-xl leading-[24px] 576:leading-[28px] capitalize text-black text-center mt-[20px] 576:mt-[58px] mb-[15px] 576:mb-[35px]" data-aos="zoom-in">
          How would you know when you are busy with completely different things
          at the moment:
        </h2>
      </div>
      <div className=' bg-[url(../src/assets/images/s2bg.webp)] bg-no-repeat bg-cover bg-right lg:bg-100 py-[25px] sm:py-0 relative z-0'>
        <div className="max-w-[1000px] mx-auto px-3">
          <div className="flex flex-row flex-wrap -mx-3  md:justify-end justify-center">
            {fightData.slice(0, 3).map((data, index) => (
              <div key={index} className="max-w-[250px] md:mb-0 mb-4 me-4 md:me-0" data-aos="zoom-in">
                <div className=" bg-[#003e924d] hover:bg-[#003E92] duration-300 p-[15px] sm:p-[42px_26px]  h-full sm:min-h-[162px]">
                  <p className=" font-poppins 576:text-base text-[14px] font-normal leading-[25.6px] text-white">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap -mx-3 sm:mt-[29px] justify-center md:justify-start">
            {fightData.slice(3).map((data, index) => (
              <div key={index} className="max-w-[250px]  md:mt-0 mt-4 me-4 md:me-0" data-aos="zoom-in">
                <div className=" bg-[#003e924d] hover:bg-[#003E92] duration-300 p-[15px] sm:p-[42px_26px] h-full sm:min-h-[169px]">
                  <p className=" font-poppins 576:text-base text-[14px] font-normal leading-[25.6px] text-white">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Itisnotyourfault