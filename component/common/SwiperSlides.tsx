"use client"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const slideTitles = ['slide 1', 'slide 2', 'slide 3']

const SwiperSlides = () => {
    const renderCustomBullet = (index: number, className: string): string => {
        return `<span class="${className}">
                    <em>${slideTitles[index]}</em>
                    <i></i>
                    <b></b>
                </span>`;
      };
  return (
    <Swiper
        loop
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        effect='fade'
        fadeEffect={{ crossFade: true}}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            renderBullet: renderCustomBullet
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }}
    >
        <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide con2'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide con3'>Slide 3</SwiperSlide>

        <div className='swiper-pagination'></div>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
        <div className='swiper-scrollbar'></div>
    </Swiper>
  )
}

export default SwiperSlides
