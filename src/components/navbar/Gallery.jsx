import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Gallery = () => {
  return (
    <>
    <section id='gallery'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },  
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" height={500} alt="eee" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" height={500} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1677529499103-1db3048ae119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" height={500} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1560821630-1a7c45c3286e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" height={500} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" height={500} alt="eee" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1560821630-1a7c45c3286e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" height={500} alt="" /></SwiperSlide>
        </Swiper>
    </section>
  </>
  )
}

export default Gallery