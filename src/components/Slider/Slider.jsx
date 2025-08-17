import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="slider-main px-[40%] sm:px-[25%]">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          autoplay={{
            // ← این بخش ضروری است
            delay: 2000, // زمان توقف بین اسلایدها (ms)
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation={true}
          pagination={{
            clickable: true,
          }}
          
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img
              className="block w-full"
              src="images/banner-dastresi-1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full"
              src="images/banner-dastresi-2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full"
              src="images/banner-dastresi-3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full"
              src="images/banner-dastresi-4.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
