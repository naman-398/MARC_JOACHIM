import React from 'react'
import linkbtn from "../assets/images/big_btn_icon.webp";
import flower2 from "../assets/images/flower2.webp";
import flower3 from "../assets/images/flower3.webp";
import flower from "../assets/images/flower.webp";
import Commonbtn from '../commonbtn/Commonbtn';

const fightData = [
  {
    para: "Why does your EX have to disappear from your life forever? ",
  },
  {
    para: "What should your everyday life as a single person look like now and how can you cope with the new challenges?",
  },
  {
    para: "How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?   ",
  },
  {
    para: "Who are you without your EX? ",
  },
  {
    para: "What new dreams and hopes do you want to live? ",
  },
];
const What = () => {
  return (
    <div>
      <div className= " pt-[20px] 576:pt-[48px] relative">
        <div className="container z-[1] mx-auto px-3 ">
          <p className="576:text-base text-[14px] font-normal font-poppins leading-[26px] text-black mb-3 576:mb-5 text-center" data-aos="zoom-in">
            You are not alone! Numerous women before you stood exactly at this
            point, where you are now.
          </p>
          <div className="flex items-center justify-center gap-4 pb-[150px] md:pb-[122px]" data-aos="zoom-in">
            <Commonbtn text="Book a non-binding initial consultation now" />
          </div>
          <div className="flex relative flex-row px-3 flex-wrap 576:mb-[50px] justify-center items-center -mx-3 ">
            <div className="lg:w-5/12 z-30 w-full">
              <div className="flex flex-col md:flex-row items-center">
                <h1 className="text-[35px] 576:text-[40px] sm:text-[46px] md:text-[50px] 992:text-[52px]font-normal uppercase mx-auto 992:mx-0 font-Helvetica leading-[50px] md:leading-[67px] text-black" data-aos="zoom-in">
                  what you <br />
                  <span className="md:text-[60px] text-[48px] leading-[55px] md:leading-[78px]">
                    will <span className="text-[#f77b0b]"> get</span>
                  </span>
                </h1>
                <img
                  className="max-w-[200px] hidden xl:block max-h-[200px]"
                  src={flower}
                  alt="flower"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div className="lg:w-7/12 z-30 w-full">
              <div className="flex gap-3 items-center px-3 justify-center 992:justify-start" data-aos="zoom-in">
           <span> <hr className="h-[60px] w-[2px] bg-[#9800b0]" /></span>
                <p className="text-[16px] text-center mx-auto md:mx-0 md:text-start mt-4 sm:mt-0 max-w-[420px] font-poppins leading-[26px] text-black mb-0 font-normal">
                  I will show you which steps are necessary for you to finally
                  successfully let go of your EX. And I will support you to look
                  confidently into your new future.
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute z-[-1] me-4 sm:me-0 bottom-[52%] sm:bottom-[40%] md:bottom-[20%] xl:bottom-[25%] right-[25%] sm:right-[7%] md:right-[4%] xl:right-[12%]" data-aos="zoom-in">
            <span className=" font-poppins md:inline-block flex items-end text-end ms-auto md:ms-14 max-w-max sm:-rotate-90 font-light   text-xl leading-[34px]">
              MJH
            </span>
            <div className=" flex sm:items-end items-start gap-1">
              <div className=" flex items-end sm:translate-y-4 -translate-y-5">
                <p className=" font-Helvetica sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                  02
                </p>
              </div>
              <div className=" sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[269px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-14 pt-4 576:py-14">
        <img
          className="absolute max-w-[310px] max-h-[300px] left-[0%] top-[60%]"
          src={flower3}
          alt="ellp"
        />
        <img
          className="absolute max-w-[310px] max-h-[300px] right-[0%] top-[-12%]"
          src={flower2}
          alt="ellp"
        />
        <div className=" container relative mx-auto px-3 md:py-0 py-3 576:py-7">
          <h2 className="text-xl font-black mb-7 capitalize text-black leading-7 font-Helvetica text-center" data-aos="zoom-in">
            In a 1:1 live coaching session, we will clarify the following
            questions in particular:
          </h2>
          <div className=" max-w-[1140px] mx-auto flex flex-row flex-wrap  justify-center">
            {fightData.slice(0, 3).map((data, index) => (
              <div
                key={index}
                className="md:max-w-[380px] w-full sm:w-1/2 lg:w-1/3 md:px-0 px-3  md:my-0 my-2" data-aos="zoom-in"
              >
                <div className=" hover:bg-[#F5FAFF] card1 duration-300 lg:p-[63px_48px] p-[20px] sm:p-[35px_20px] h-full sm:min-h-[170px] lg:min-h-[230px]">
                  <p className=" font-poppins text-[14px] capitalize 992:text-base lg:max-w-[280px] card1-para font-normal leading-[25.6px] text-black duration-300">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" max-w-[1140px] mx-auto flex flex-row flex-wrap justify-center md:mb-14  pb-10 ">
            {fightData.slice(3).map((data, index) => (
              <div
                key={index}
                className="md:max-w-[380px] w-full sm:w-1/2 lg:w-1/3 md:px-0 px-3 md:my-0 my-2" data-aos="zoom-in"
              >
                <div className=" hover:bg-[#F5FAFF]  card1 hover:text-[#003E92] duration-300 lg:p-[88px_48px] p-[20px] sm:p-[45px_20px] sm:min-h-[170px] h-full lg:min-h-[230px]">
                  <p className=" font-poppins text-[14px] 992:text-base capitalize lg:max-w-[280px] card1-para font-normal leading-[25.6px] text-black duration-300">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
            <div className=" w-full sm:w-1/2 lg:w-1/3 px-3 h-full flex justify-center items-center " data-aos="zoom-in">
              <div className="border_gradient cursor-pointer w-full max-w-[292px] mt-4 576:mt-12 duration-300 rounded-[8px] p-[1.7px]">
                <a className="p-[18px_23px_18px_9px] cursor-pointer  bg-white hover:bg-transparent commonbtnparent duration-300   rounded-[8px] flex items-center gap-[6px]">
                  <span >
                    <img
                      src={linkbtn}
                      alt=""
                      className=" max-w-[50.84px] max-h-[47.33px] relative z-[1] w-full h-full sm:text-nowrap"
                    />
                  </span>
                  <span className="font-gradient clear-start 576:text-base text-[14px] font-medium font-inter leading-[24px] ">
                    Book a non-binding initial consultation now
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className=" lg:absolute z-[1] bottom-[-10%] lg:bottom-[-40%]  xl:bottom-[-5%] 1600:left-[10%]  1400:left-[-5%]" data-aos="zoom-in">
            <div className=" flex lg:items-end mx-auto items-center justify-center  gap-1">
              <div className=" ml-5 lg:mt-[11px] w-[200px] lg:w-[26px] h-3 lg:h-40 xl:h-[590px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
              <div className=" flex items-end gap-4 lg:translate-y-4 -translate-y-3">
                <p className=" font-Helvetica lg:-rotate-90 font-normal text-2xl lg:text-[40px]">
                  03
                </p>
                <p className=" font-Helvetica uppercase  font-normal text-2xl leading-[30px]">
                  goal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What