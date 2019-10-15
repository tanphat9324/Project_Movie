import React, { Component, Fragment } from "react";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
          <section className="header d-flex">
            <div className="header_brand">
              <img src="./assets/images/web-logo.png" />
            </div>
            <div className="header_info">
              <ul className="header_title">
                <li>
                  <a href="#">Lịch Chiếu</a>
                </li>
                <li>
                  <a href="#">Cụm rạp</a>
                </li>
                <li>
                  <a href="#">Tin Tức</a>
                </li>
                <li>
                  <a href="#">Ứng dụng</a>
                </li>
              </ul>
            </div>
            <div className="header_login">
              <ul className="login_info">
                <li>
                  <img src="./assets/images/user.png" />
                  <a href="#">Đăng Nhập</a>
                </li>
                <li>
                  <img src="./assets/images/location-header.png" />
                  <a href="#">Hồ Chí Minh</a>
                </li>
              </ul>
              <div id="navbar-main">
                <div id="sidebar-main-trigger" className="icon float-right">
                  <img
                    src="./assets/images/icon-menu-24px-x2.png"
                    width="25px"
                    alt="Menu Icon"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="sidebar main right" id="sidebar-main">
            <div className="wrapper">
              <nav>
                <ul>
                  <li className="title">Playground</li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Right</a>
                  </li>
                  <li>
                    <a href="#">Right Top</a>
                  </li>
                  <li>
                    <a href="#">Left</a>
                  </li>
                  <li>
                    <a href="#">Left Top</a>
                  </li>
                  <li>
                    <a href="#">Right and Left</a>
                  </li>
                  <li>
                    <a href="#">Init Opened</a>
                  </li>
                  <li>
                    <a href="#">No Mask</a>
                  </li>
                  <li>
                    <a href="#">Allow Scrolling</a>
                  </li>
                  <li>
                    <a href="#">Custom Functions</a>
                  </li>
                  <li>
                    <a href="#">Ajax</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </Fragment>
    );
  }
}
