import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
    <div className="brands">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        centeredSlides={false}
        loopedslides={7}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // breakpoints={{
        //     0: {
        //       slidesPerView: 1.5,
        //     },
        //     768: {
        //       slidesPerView: 2.5,
        //     },
        //     1024: {
        //       slidesPerView: 4.5,
        //     },
        //   }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/brands/acefast.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brands/anker.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brands/camelion.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brands/inoben.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brands/mcdodo.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/brands/powerology.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brands/ravpower.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
