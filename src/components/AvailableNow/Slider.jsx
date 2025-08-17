import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider({ availableNow }) {
  //   const { availableNow } = useContext(MyContext);
  // console.log(availableNow);
  return (
    <div className="available-now w-full max-w-[1200px] mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {availableNow?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide-box shadow-md bg-white pt-3 rounded-[15px] overflow-hidden">
                <img className="px-3" src={item.image} alt="" />
                <div className="text-[13px] text-center text-[var(--gray-1)] my-3">{item.description}</div>
                <div className="w-full max-w-[200px] truncate mx-auto mb-3"><a href="">{item.title}</a></div>

                {item.available ?   (<><div className="text-left line-through text-[var(--gray-1)] min-h-[20px] px-3">{item.discount}</div>
                <div className="flex items-center px-3">
                  <span className="mr-1 text-[var(--gray-2)] text-[15px]">
                    تومان
                  </span>
                  <div className="text-[20px] font-bold text-[var(--blue)]">
                    {item.price}
                  </div>
                </div></>) : (<div className="bg-red-200 text-center text-red-500 py-[14px]">ناموجود</div>)    }

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
