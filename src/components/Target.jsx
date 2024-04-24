import React from 'react'

const Target = () => {
    return (
        <div className="bg-[#f2f8ff] mb-[50px] 576:mb-[100px] md:mb-[150px]">
            <div className="container  mx-auto px-3 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center p-[50px_0_20px_0] 576:py-[50px] justify-end md:gap-[120px]">
                    <h1 data-aos="zoom-in" className=" text-[35px] 576:text-[40px] sm:text-[46px] md:text-[50px] 992:text-[52px] font-normal font-Helvetica leading-[50px] 576:leading-[67px] text-[#f77b0b]">
                        TARGET <span className="text-black uppercase">group</span>{" "}
                    </h1>
                    <div className="flex gap-3 items-center px-3 lg:justify-end" data-aos="zoom-in">
                        <hr className="h-[70px] w-1 bg-[#9800b0]" />{" "}
                        <p className="text-[16px] max-w-[350px] font-poppins leading-[26px] text-black mb-0 font-normal">
                            The coaching is aimed at married women who have already separated
                            or are thinking of separating.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[url('./assets/images/targetbg.webp')]  bg-no-repeat bg-100 sm:min-h-[623px] flex py-[20px] 576:py-[30px] sm:py-0  ">
                <div className="container  mx-auto max-w-[1140px] px-3 ">
                    <div className="flex relative flex-col sm:flex-row  justify-between items-end sm:pt-14 sm:mt-14 -mx-3 ">
                        <div className="  z-30 px-3 sm:ps-3 sm:pe-0 mx-auto sm:mx-0  " data-aos="zoom-in">
                            <div className="p-[20px] md:p-[40px_37px_43px_32px] max-w-[382px]  mt-5 mx-auto sm:mx-0 duration-300 transition-all hover:bg-[#003E92B2] bg-[#FFFFFF1F] border-[1px] border-[#FFFFFF26]">
                                <p className="576:text-base text-[14px]capitalize max-w-[310px] font-poppins font-normal text-white">
                                You have separated and have the feeling that you can never be happy again and that you will be alone forever.
                                </p>
                            </div>
                            <div className="p-[20px] md:p-[41px_39px] max-w-[382px]  mt-5 mx-auto sm:mx-0 bg-[#FFFFFF1F] duration-300 transition-all hover:bg-[#003E92B2] border-[1px] border-[#FFFFFF26]">
                                <p className="576:text-base text-[14px]capitalize max-w-[310px] font-poppins font-normal text-white">
                                How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?
                                </p>
                            </div>
                        </div>
                        <div className=" px-3 z-30    992:me-[90px] 1400:me-[50px] mx-auto sm:mx-0" data-aos="zoom-in">
                            <div className=" p-[20px] sm:max-w-[338px] md:p-[65px_28px_77px_39px] max-w-[382px] mx-auto sm:mx-0  mt-5 duration-300 transition-all bg-[#003E92B2] backdrop:blur-[50%] border-[1px] border-[#FFFFFF26] sm:translate-y-[150px] z-[4]  ">
                                <p className="576:text-base text-[14px]capitalize max-w-[310px] font-poppins font-normal text-white">
                                To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target