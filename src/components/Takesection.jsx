import React from 'react'
import Commonbtn from '../commonbtn/Commonbtn';
const fightData = [
    {
        para: "How do I let go of my EX so I can finally leave him behind?",
    },
    {
        para: "How does the divorce process work?",
    },
    {
        para: "Do I need a lawyer?",
    },
    {
        para: "How much will the divorce cost?",
    },
    {
        para: "What will happen to my children?",
    },
    {
        para: "What does my future as a single person look like now?",
    },
    {
        para: "How do I rebuild my self-esteem?",
    },
];
const Takesection = () => {
    return (
        <div>
            <div className="bg-[#f2f8ff]">
                <div className="container  mx-auto max-w-[1140px] px-3 overflow-hidden">
                    <div className="flex relative flex-row flex-wrap py-8 md:py-[70px] justify-between items-center -mx-3 ">
                        <div className="992:w-7/12 z-30 ps-3 w-full">
                            <h1 data-aos="zoom-in" className="text-[35px] text-center 992:text-start 576:text-[40px] sm:text-[46px] md:text-[50px] 992:text-[52px] font-normal leading-[55px] md:leading-[67px] text-black font-Helvetica uppercase">
                                Request your
<span className=' block'> <span className="text-[#f77b0b] "> non-binding </span> strategy</span>
                                meeting now!
                            </h1>
                        </div>
                        <div className="992:w-5/12 z-30 w-full">
                            <div className="flex gap-3 items-center px-3 lg:justify-end justify-center" data-aos="zoom-in">
                                <span>
                                <hr className="min-h-[120px] h-100 w-1 bg-[#9800b0]" /></span>
                                <p className="text-[16px] max-w-[398px] font-poppins leading-[26px] text-black mb-0 font-normal">
                                    Click on the button below, choose an appointment and answer the
                                    questions truthfully. One of our strategy consultants will then
                                    contact you and conduct your free consultation. We can advise
                                    you on the following topics:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[url(./assets/images/requestbg.webp)] bg-no-repeat bg-cover 576:bg-100 bg-center p-[40px_0] 576:p-[75px_0] 992:p-[111px_0_186px_0] ">
                <div className="max-w-[1000px] flex flex-col flex-grow mx-auto">
                    <div className="flex flex-row flex-wrap -mx-3 justify-center">
                        {fightData.slice(0, 3).map((data, index) => (
                            <div key={index} className="max-w-[250px] w-full p-[0_10px_10px_0]  md:p-[0_10px_0_0] 992:p-0 " data-aos="zoom-in">
                                <div className=" bg-[#FFFFFF26]  hover:bg-[#003E92] duration-300 p-[20px] 576:p-[61px_38.5px] h-full 576:min-h-[200px]">
                                    <p className=" capitalize font-poppins 576:text-base text-[14px] font-normal leading-[25.6px] text-white">
                                        {data.para}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row 992:flex-nowrap flex-wrap  576:mt-[29px] justify-center 992:justify-start">
                        {fightData.slice(3).map((data, index) => (
                            <div key={index} className="w-full max-w-[250px] p-[0_10px_10px_0] 992:p-0 " data-aos="zoom-in">
                                <div className=" bg-[#FFFFFF26] hover:bg-[#003E92] duration-300 p-[20px] 576:p-[61px_38.5px] h-full 576:min-h-[200px]">
                                    <p className=" capitalize font-poppins 576:text-base text-[14px] font-normal leading-[25.6px] text-white">
                                        {data.para}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 pt-8 pb-10 lg:pb-0 md:pt-[58px]" data-aos="zoom-in">
                        <Commonbtn text="Book a non-binding initial consultation now" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Takesection