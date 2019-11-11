/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';
import styles from './Carousel.module.css';

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
    <div className={styles.carousel}>

    <Swiper {...params}>
  <div><img src="./assets/images/caro1.jpg" width='100%' />
    <div className={styles.backgroundLinear} /></div>
  <div><img src="./assets/images/caro2.png" width='100%' />
  <div className={styles.backgroundLinear} /></div>
  <div><img src="./assets/images/caro3.jpg" width='100%' />
  <div className={styles.backgroundLinear} /></div>

    </Swiper>
    </div>
  )
};
export default LoopModeInfinityLoop;