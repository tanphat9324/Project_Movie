import React from 'react';
import Swiper from 'react-id-swiper';
import './Carousel.css';
const LoopModeInfinityLoop = () => {
  const params = {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div className="carousel">

    <Swiper {...params}>
      <div><img src="./assets/images/caro1.jpg" alt="" />
          <div class="backgroundLinear"></div></div>
          <div><img src="./assets/images/caro1.jpg" alt="" />
          <div class="backgroundLinear"></div></div>
          <div><img src="./assets/images/caro1.jpg" alt="" />
          <div class="backgroundLinear"></div></div>
    </Swiper>
    </div>
  )
};
export default LoopModeInfinityLoop;