import React, { Component, Fragment } from "react";
import 'react-id-swiper/lib/styles/css/swiper.css';
import "./Header.css";
import { connect } from "react-redux";
import { layDanhSachPhim } from "../../redux/actions/phimActions";

class Header extends Component {
  componentDidMount() {
    this.props.layDanhSachPhim();
  }
  render() {
    return (
      <Fragment>
        {/* HEADER */}
          <section className="header d-flex">
            <div className="header_brand">
              <img src="./assets/images/web-logo.png" alt />
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
                  <img src="./assets/images/user.png" alt />
                  <a href="#">Đăng Nhập</a>
                </li>
                <li>
                  <img src="./assets/images/location-header.png" alt />
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
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./right.html">Right</a>
                  </li>
                  <li>
                    <a href="./right-top.html">Right Top</a>
                  </li>
                  <li>
                    <a href="./left.html">Left</a>
                  </li>
                  <li>
                    <a href="./left-top.html">Left Top</a>
                  </li>
                  <li>
                    <a href="./right-left.html">Right and Left</a>
                  </li>
                  <li>
                    <a href="./init-opened.html">Init Opened</a>
                  </li>
                  <li>
                    <a href="./no-mask.html">No Mask</a>
                  </li>
                  <li>
                    <a href="./allow-scrolling.html">Allow Scrolling</a>
                  </li>
                  <li>
                    <a href="./custom-functions.html">Custom Functions</a>
                  </li>
                  <li>
                    <a href="./ajax.html">Ajax</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
        {/* {this.props.mangPhim.map((phim, index) => {
                    return(
                        <div key={index}>
                            <div>{phim.maPhim}</div>
                            <div>{phim.tenPhim}</div>
                        </div>
                    )
                })} */}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  mangPhim: state.QuanLyDatVeReducer.dsPhim
});
const mapDispatchToProps = dispatch => ({
  layDanhSachPhim: () => {
    dispatch(layDanhSachPhim());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
