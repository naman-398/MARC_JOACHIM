import React from 'react'
import Pagenav from './Pagenav'
import big_btn_icon from "../assets/images/big_btn_icon.webp";
import { Phone } from '../commonsvg/Icon';
import Commonbtn from '../commonbtn/Commonbtn';

const Header = () => {
    return (
        <div className=' bg-[url(../src/assets/images/herobg.webp)] min-h-screen bg-no-repeat bg-left bg-cover  lg:bg-100 '>
            <Pagenav />
            <div className=' container px-3 mx-auto mt-[160px] w-full relative z-2 ' id="home">
                <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start  mx-auto lg:mx-0  flex-grow gap-[30px] md:gap-[50px]">
                    <div className="flex flex-col justify-center">
                        <h3
                            className="font-normal text-[18.8px] capitalize font-Helvetica leading-[24px] text-[#F77B0B] ;
"
                        >
                            Marc joachim hubrich
                        </h3>
                        <p className="text-[45px] md:text-[60px] uppercase font-Helvetica leading-[55px] 576:leading-[77px] font-normal max-w-[450px] text-black mb-2">
                            Now I let you go!
                        </p>
                        <p className= " text-[14px] 576:text-[16px] font-normal leading-[normal] 576:leading-[26px] font-poppins mb-[10px] 576:mb-[32px] max-w-[500px]">
                            For women who do not want to be completely dragged down by a
                            SEPARATION. <br /> How to let go of your EX so you can leave him
                            behind without having to run to a therapist right away.
                        </p>
                        <div className="flex items-center gap-2 576:gap-4">
                            <Commonbtn text="Book a non-binding initial consultation now" />
                            <Phone />
                        </div>
                    </div>
                    <div className=" flex  lg:mx-auto mt-auto lg:translate-y-[175px] gap-[50px] items-center">
                        <div className="flex items-center   gap-3">
                            <hr className="h-[70px] w-[2px] bg-[#9800b0]" />

                            <p className="text-[14px] sm:text-base font-Helvetica uppercase font-normal leading-[27px] mb-0 text-black lg:text-white">
                                Die wichtigsten <br /> Aspekte einer <br /> Trennung:
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li className="list-disc  text-[14px] sm:text-base font-normal font-poppins text-black lg:text-white mb-[2px] leading-[26px]">
                                    physische Trennung
                                </li>
                                <li className="list-disc  text-[14px] sm:text-base font-normal font-poppins text-black lg:text-white leading-[26px]">
                                    mentale Trennung
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" absolute z-[1] bottom-[-22%] sm:bottom-[-45%] md:bottom-[-31%] 992:bottom-[-40%] lg:bottom-[-100%] xl:left-[-0%]">
          <span className=" font-poppins inline-block max-w-max sm:-rotate-90 font-light text-xl leading-[34px]">
            MJH
          </span>
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[200px]  sm:w-[26px] h-[26px] sm:h-[100px] md:h-20 992:h-40 lg:h-[269px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
             
            </div>
            <div className=" flex items-end sm:translate-y-4 -translate-y-3">
              <p className=" font-Helvetica sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                01
              </p>
              <p className=" font-Helvetica  font-normal text-2xl leading-[30px]">
                fault
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default Header