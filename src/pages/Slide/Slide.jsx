import Image from "../../images/Rectangle 65.png";
import Saa from "../../images/Rectangle 64.png";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';// import { EffectCreative } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slide() {
  return (
         <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
        //  effect="creative"
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src={Image} alt="" style={{width: "100%", height: "100vh"}}/></SwiperSlide>
      <SwiperSlide><img src={Saa} alt="" style={{width: "100%", height: "100vh"}}/></SwiperSlide>
      <SwiperSlide><img src={Image} alt="" style={{width: "100%", height: "100vh"}}/></SwiperSlide>
      <SwiperSlide><img src={Saa} alt="" style={{width: "100%", height: "100vh"}}/></SwiperSlide>
    </Swiper>
  )
}

export default Slide
