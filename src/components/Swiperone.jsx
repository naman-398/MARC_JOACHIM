import React, { useRef, useState } from "react";
import swiperoneelipse2 from "../assets/images/swiperoneelipse2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperoneelipse from "../assets/images/swiperoneelipse.webp";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";


import Commonbtn from "../commonbtn/Commonbtn";
import Swiperonebtn from "./Swiperonebtn";

const Swiperone = () => {
  return (
    <div className=" p-[0_0_50px_0] md:p-[0_0_100px_0] 992:p-[152px_0_182px_0] flex relative">
    <img
      className="absolute hidden lg:block max-w-[600px] max-h-[600px] left-[0%] top-[-63%] z-[-1]"
      src={swiperoneelipse2}
      alt="ellp"
    />

    <div className="container relative flex-grow flex flex-col mx-auto  px-3">
      <div data-aos="zoom-in" className="flex justify-center flex-col  992:absolute z-[11] 1600:top-[-62%] lg:top-[-62%] top-[-20%] mb-4 992:mb-0 992:top-[-60%] right-[25%] max-w-[350px] 992:max-w-[unset] mx-auto 992:mx-0 992:right-[5%] 1600:right-[7%]  992:ms-[-30px] lg:right-[1%]">
        <span className=" font-poppins text-end ms-auto max-w-max 992:rotate-90 font-light 992:ms-[195px] 1400:ms-[177px] 1600:ms-[60px] flex lg:items-end text-xl me-0 leading-[34px]">
          MJH
        </span>
        <div className=" flex 992:items-end justify-center  items-center gap-1">
          <div className=" flex flex-row gap-5 xl:gap-0 items-end 992:translate-y-4 -translate-y-5">
            <p className="md:text-[24px] text-lg font-normal block 1600:hidden font-Helvetica text-black leading-[30px] uppercase">
              analysis
            </p>
            <p className=" font-Helvetica xl:-rotate-90 font-normal text-2xl sm:text-[40px]">
              04
            </p>
          </div>
          <div className=" sm:mt-[11px] w-[200px] 992:w-[26px] h-3 992:h-40 1600:h-[200px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
        </div>
      </div>
      <div className="flex relative flex-row  flex-grow flex-wrap   justify-center items-center  -mx-3 ">
        <div className="992:w-6/12 z-30 px-3 w-full">
          <h2 className="text-[30px] font-normal text-center 992:text-start leading-[28px] 576:leading-[38px] text-black uppercase font-Helvetica " data-aos="zoom-in">
            THE FOUR PHASES OF
          </h2>
          <h1 className="text-[35px] 576:text-[40px] sm:text-[46px] md:text-[50px] 992:text-[52px] mb-[8px] 576:mb-[19px] text-center 992:text-start fonr-normal leading-[50px] 576:leading-[62px] font-Helvetica text-black uppercase" data-aos="zoom-in">
            SEPARATION{" "}
            <span className="text-[#F77B0B] ">
              MINDSET
            </span>
          </h1>
          <p className=" text-[14px] 576:text-base leading-[normal] 576:leading-[26px] text-center mx-auto 992:mx-0 992:text-start font-poppins text-black font-normal opacity-[70%]  mb-[15px] 576:mb-[37px] max-w-[484px]" data-aos="zoom-in">
            There are 4 typical separation phases. The 4 phases are not always
            clearly separated from each other and can overlap.
          </p>
          <div className="my-5 flex justify-center 992:justify-start border-gradient" data-aos="zoom-in">
            <Commonbtn text="Book a non-binding initial consultation now" />
          </div>
        </div>
        <div className="992:w-6/12 z-30 relative px-3 mb-5 md:mb-0 w-full">
          <div className="  bg-[#ffffff4d]">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={false}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper relative bg-[#003e92]   z-[1] max-w-[608px] min-h-[300px] 576:min-h-[448px] h-full !p-[60px_10px_0_10px] 576:!p-[133px_15px_0_15px]"
            >
              <img
                className="absolute bottom-0 right-0 max-w-[382px] max-h-[249px]"
                src={swiperoneelipse}
                alt="ellp"
              />
              <SwiperSlide>
                <div className=" swiper_one h-full ">
                  <p className=" text-[18px] 576:text-xl leading-[24px] 576:leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-poppins text-white ">
                    1st phase <br /> "The not-wanting-to-be-true"
                  </p>
                  <p className="text-[14px] 576:text-base leading-[normal] 576:leading-[26px] font-normal max-w-[360px] text-center mx-auto font-poppins text-white mb-0">
                    This phase is characterized by denial and ignoring the
                    final separation.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="  swiper_one h-full">
                <div className="  swiper_one h-full   bg-transparent my-auto flex flex-col  justify-center items-center">
                  <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-poppins text-white ">
                    2nd phase <br /> "The Emotional Chass"
                  </p>
                  <p className="text-[14px] 576:text-base leading-[normal] 576:leading-[26px] font-normal max-w-[360px] text-center mx-auto font-poppins text-white mb-0">
                    This phase is characterized by denial and ignoring the
                    final separation.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" swiper_one h-full ">
                  <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-poppins text-white ">
                    3rd phase <br /> "The Reconstruction"
                  </p>
                  <p className="text-[14px] 576:text-base leading-[normal] 576:leading-[26px] font-normal max-w-[360px] text-center mx-auto font-poppins text-white mb-0">
                    This phase is characterized by denial and ignoring the
                    final separation.
                  </p>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="  swiper_one h-full">
                  <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-poppins text-white ">
                    4th phase <br /> "The New concept of life"
                  </p>
                  <p className="text-[14px] 576:text-base leading-[normal] 576:leading-[26px] font-normal max-w-[360px] text-center mx-auto font-poppins text-white mb-0">
                    This phase is characterized by denial and ignoring the
                    final separation.
                  </p>
                </div>{" "}
              </SwiperSlide>
              <div className=" absolute bottom-2 left-[-7%] z-[1]">
<Swiperonebtn/>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Swiperone