/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import {NavLink} from 'react-router-dom';
import "./Header.css";
import {isLogin} from '../../utils/index';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropDownLogin from "./DropDownLogin/DropDownLogin";

export default class Header extends Component {
// kiemTraDangNhap=() => {
//   if(isLogin){
//     return(
    
//     )
//   }
// }
  render() {
    return (
      <Fragment>
          <section className="header d-flex">
            <div className="header_brand">
              <img src="./assets/images/web-logo.png" alt="logo" />
            </div>
            <div className="header_info">
              <ul className="header_title">
                <li>
                  <a href="#CUM_RAP">Lịch Chiếu</a>
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
              <DropDownLogin/>

                {/* <li style={{padding:'20px'}}>
                  <DropDownLogin/>
                </li> */}
                {/* <li>
                  <img src="./assets/images/location-header.png" />
                  <a href="#">Hồ Chí Minh</a>
                </li> */}
              </ul>
              {/* <div id="navbar-main">
                <div id="sidebar-main-trigger" className="icon float-right">
                  <img
                    src="./assets/images/icon-menu-24px-x2.png"
                    width="25px"
                    alt="Menu Icon"
                  />
                </div>
              </div> */}
            </div>
          </section>
         
      </Fragment>
    );
  }
}
