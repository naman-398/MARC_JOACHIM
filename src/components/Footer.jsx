import React from 'react'
import { Facebook, Insta, Mail, Twitter } from '../commonsvg/Icon'
import footerlogo from "../assets/images/footerlogo.webp";
const Footer = () => {
  return (
    <div className=" bg-[url(./assets/images/footerbg.webp)] bg-no-repeat  bg-cover bg-center p-[45px_0] 576:p-[90px_0_95px_0]">
      <div className= " container mx-auto ">
        <div className=' w-full md:w-[60%] flex flex-col justify-end items-end ms-auto'>
        <div className=' flex justify-between w-full items-center md:flex-row flex-col'>
          <div>
        <img
          className="576:mb-4 mb-2 max-w-[240px] max-h-[90px]"
          src={footerlogo}
          alt="logo"
        />
        <p className="576:text-base text-[14px] font-normal font-poppins uppercase text-center mx-auto leading-[26px] text-white mb-0 max-w-[275px]">
          (c)2024 MARC JOACHIM HUBRICH <span className=' capitalize'>All Rights Reserved</span>
        </p>
        </div>
        <div className="flex flex-row md:flex-col mt-4 md:mt-0 gap-3 ">
        <a href='https://www.facebook.com/' target='_blank' class="group relative">
  <button>   <Facebook /></button>
  <span class="absolute top-[35px] md:top-0 left-[50%] -translate-x-[50%] md:-translate-x-[120%]  font-poppins
  z-20 origin-top md:origin-right scale-0 px-4 rounded-lg border 
  border-gray-300 bg-white py-1 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">Facebook<span>
</span></span></a>
        <a href='https://twitter.com/login?lang=en' target='_blank' class="group relative">
  <button>      <Twitter /></button>
  <span class="absolute top-[35px] md:top-0 left-[50%] -translate-x-[50%] md:-translate-x-[120%]  font-poppins
  z-20 origin-top md:origin-right scale-0 px-4 rounded-lg border 
  border-gray-300 bg-white py-1 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">Twitter<span>
</span></span></a>
        <a href='https://mail.google.com/mail/?tab=rm&ogbl' target='_blank' class="group relative">
  <button> <Mail /></button>
  <span class="absolute top-[35px] md:top-0 left-[50%] -translate-x-[50%] md:-translate-x-[130%]  font-poppins
  z-20 origin-top md:origin-right scale-0 px-4 rounded-lg border 
  border-gray-300 bg-white py-1 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">Mail<span>
</span></span></a>
        <a href='https://www.instagram.com/' target='_blank' class="group relative">
  <button>       <Insta /></button>
  <span class="absolute top-[35px] md:top-0 left-[50%] -translate-x-[50%] md:-translate-x-[120%]  font-poppins
  z-20 origin-top md:origin-right scale-0 px-4 rounded-lg border 
  border-gray-300 bg-white py-1 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">Instagram<span>
</span></span></a>
       
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer