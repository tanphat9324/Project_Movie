/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import 'swiper/css/swiper.css';
import './Carousel.css';
import {NavLink} from 'react-router-dom';

const LoopModeInfinityLoop = () => {
  const params = {
    slidesPerView: 1,
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
    <div className='carousel'>

    <Swiper {...params}>
  <NavLink to='/chitietphim/1814'><img src="./assets/images/bg_terminator.jpg" width='100%' />
    <div className='backgroundLinear'/></NavLink>
  <NavLink to='/chitietphim/1818'><img src="./assets/images/bg_frozen2.jpg" width='100%' />
  <div className='backgroundLinear'/></NavLink>
  <NavLink to='/chitietphim/1819'><img src="./assets/images/bg_playFire.jpg" width='100%' />
  <div className='backgroundLinear'/></NavLink>
    </Swiper>
    </div>
  )
};
export default LoopModeInfinityLoop;