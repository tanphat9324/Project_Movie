/* eslint-disable jsx-a11y/alt-text */
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
  <div><img src="./assets/images/caro1.jpg"  />
    <div className="backgroundLinear" /></div>
  <div><img src="./assets/images/caro2.png"  />
    <div className="backgroundLinear" /></div>
  <div><img src="./assets/images/caro3.jpg"  />
    <div className="backgroundLinear" /></div>

    </Swiper>
    </div>
  )
};
export default LoopModeInfinityLoop;