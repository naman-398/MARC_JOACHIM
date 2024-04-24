import React from 'react'

const Yourex = () => {
    return (
        <div>
            <div className="bg-[url('./assets/images/yourex.webp')] z-[1]  relative 576:py-[50px] md:py-[106px] bg-no-repeat bg-100 object-cover flex justify-center items-center ">
                <div className=' container '>
                <div className="border-[1px] bg-[#FFFFFF26] border-[#FFFFFF26] p-[50px_35px] md:p-[50px_75px_42px_75px] max-w-[779px] w-full m-auto">
                    <h1 data-aos="zoom-in" className="font-normal leading-[45px] 576:leading-[62px] font-Helvetica uppercase text-center text-white mb-[10px] text-[35px] 576:text-[40px] sm:text-[46px] md:text-[50px] 992:text-[52px]">
                        Are you over your EX?
                    </h1>
                    <p  data-aos="zoom-in" className="text-[16px] font-normal font-poppins leading-[25px] text-center mx-auto mb-[30px] max-w-[585px] text-white">
                        Most women don't even realize how their past experiences affect
                        their lives today. Assisting you to overcome this situation is what
                        we do.
                    </p>
                    <div data-aos="zoom-in">
                    <button className="text-[16px] font-inter font-medium leading-[24px] hover:shadow-[-4px_0_12px_-2px_#1a54d0] duration-300 text-white flex justify-center mx-auto p-[16px_36px] rounded-[68px] bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] border-transparent">
                        Let’s find it out
                    </button></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Yourex