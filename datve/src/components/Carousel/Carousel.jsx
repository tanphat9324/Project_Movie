import React, { Component, Fragment } from "react";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
return (
<Fragment>
  <section className="carousel">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="./assets/images/caro1.jpg" alt />
          <div className="backgroundLinear" />
        </div>
        <div className="swiper-slide">
          <img src="./assets/images/caro1.jpg" alt />
          <div className="backgroundLinear" />
        </div>
        <div className="swiper-slide">
          <img src="./assets/images/caro1.jpg" alt />
          <div className="backgroundLinear" />
        </div>
        <div className="swiper-slide">
          <img src="./assets/images/caro1.jpg" alt />
          <div className="backgroundLinear" />
        </div>
        <div className="swiper-slide">
          <img src="./assets/images/caro1.jpg" alt />
          <div className="backgroundLinear" />
        </div>
      </div>
      {/* Add Pagination */}
      <div className="swiper-pagination swiper_custom" />
      {/* Add Arrows */}
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
    <div className="carousel_selectMenu">
      <div className="carousel_selectPositon">
        <select className="custom-select custom-select-sm carousel_selectMovie">
          <option selected>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <select className="custom-select custom-select-sm carousel_selectCinema">
          <option selected>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <select className="custom-select custom-select-sm carousel_selectDate">
          <option selected>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <select className="custom-select custom-select-sm carousel_selectSession">
          <option selected>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <button ng-click="buyTicket()" type="button" className="btn btn-primary" ng-class="{'active':canBuyNowTool}"
          id="btnBuy">
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  </section>
</Fragment>
);
}
}