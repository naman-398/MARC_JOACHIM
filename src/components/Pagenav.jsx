import React, { useState } from 'react'
import { Navcross, Navline, Pagelogo } from '../commonsvg/Icon'

const Pagenav = () => {
    const [first, setfirst] = useState(false)
function show() {
    setfirst(!first)  
    if (first === false) {
      document.body.classList.add('overflow_hidden')
    }
    else {
      document.body.classList.remove('overflow_hidden')
    }
}
    return (
        <div className=' container px-3 mx-auto pt-[26px]'>
            <div className=' flex items-center justify-between'>
                <span className=' cursor-pointer'><Pagelogo/></span>
                <ul className={`${first=== false ? " left-[-100%]" : " left-0"}  flex items-center  mb-0  ps-0 gap-10  mobile-view w-100 `}>
    <li><a  href="#home" onClick={show} className=' fw-normal text-base leading-[20.61px] opacity-70 text-white font-Helvetica relative after:absolute after:w-0 after:h-[1.7px] after:left-[50%] after:bottom-[-1px] after:bg-[black] hover:after:w-full hover:after:left-0 after:duration-300 hover:text-black duration-300 '>Home</a></li>
    <li><a href="#us" onClick={show} className=' fw-normal text-base leading-[20.61px] opacity-70 text-white font-Helvetica relative after:absolute after:w-0 after:h-[1.7px] after:left-[50%] after:bottom-[-1px] after:bg-[black] hover:after:w-full hover:after:left-0 after:duration-300 hover:text-black duration-300  '>About Us</a></li>
    <button className=' block 500:hidden 992:block btn-bg-gradient hover:shadow-[-4px_0_12px_-2px_#1a54d0] duration-300  p-[16px_28px] font-inter leading-6 text-base text-white fw-medium '>Book consultation now</button>
</ul>
<div className=' flex items-center gap-10 992:hidden'>
<button className=' hidden 500:block 992:hidden btn-bg-gradient hover:shadow-[-4px_0_12px_-2px_#1a54d0] duration-300  p-[16px_28px] font-inter leading-6 text-base text-white fw-medium '>Book consultation now</button>
<span onClick={show} className=' block 992:hidden position-relative z-[11]'>{first === false ? <Navline/>: <Navcross/>}</span>
</div>
            </div>
        </div>
    )
}

export default Pagenav