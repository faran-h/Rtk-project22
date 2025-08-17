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

export default function Slider({ articles }) {
  //   const { availableNow } = useContext(MyContext);
//   console.log(articles);
  return (
    <div className="articles w-full mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {articles?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide-box shadow-md pb-3 bg-white rounded-[15px] overflow-hidden">
                <img src={item.image} alt="" />
                <div className="px-3 truncate">{item.title}</div>

              </div> 
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
