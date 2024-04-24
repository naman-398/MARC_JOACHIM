import { useSwiper } from "swiper/react";
import { Nxtarrow, Prevarrow } from "../commonsvg/Icon";


const Swiperonebtn = () => {
    const swiper = useSwiper();
  return (
    <>
    <div className=" relative flex  gap-[42px] items-center ">
      <button className="hidden md:block" onClick={() => swiper.slidePrev()}>
<Prevarrow/>
      </button>
      <button
        className="me-10 absolute top-[0%] translate-x-[270%] hidden md:block"
        onClick={() => swiper.slideNext()}
      >
<Nxtarrow/>
      </button>
    </div>
  </>
  )
}

export default Swiperonebtn