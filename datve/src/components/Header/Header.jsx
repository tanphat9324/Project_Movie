/* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { Component, Fragment } from "react";
// import {NavLink} from 'react-router-dom';
// import "./Header.css";
// import {isLogin} from '../../utils/index';

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import DropDownLogin from "./DropDownLogin/DropDownLogin";

// export default class Header extends Component {
//   render() {
//     return (
//       <Fragment>
//           <section className="header d-flex">
//             <div className="header_brand">
//               <img src="./assets/images/web-logo.png" alt="logo" />
//             </div>
//             <div className="header_info">
//               <ul className="header_title">
//                 <li>
//                   <a href="#CUM_RAP">Lịch Chiếu</a>
//                 </li>
//                 <li>
//                   <a href="#">Cụm rạp</a>
//                 </li>
//                 <li>
//                   <a href="#">Tin Tức</a>
//                 </li>
//                 <li>
//                   <a href="#">Ứng dụng</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="header_login">
//               <ul className="login_info">
//               <DropDownLogin/>
//               </ul>

//             </div>
//           </section>

//       </Fragment>
//     );
//   }
// }

import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { NavLink, withRouter } from "react-router-dom";
import { isLogin } from '../../utils/index';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import { Button } from 'reactstrap';
import styles from './Header.module.css';
import ModalLogout from '../NotiAdmin/ModalLogout/ModalLogout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.hoTenAdmin()
  }
  kiemTraDangNhap = () => {
    if (isLogin()) {
      return (
        <MDBNavbarNav>
          <MDBDropdown>
            <MDBDropdownToggle className={styles.buttonlogIn}>
              <img src="./assets/images/avatar1.png" alt="" />
              <span>      Chào!, {this.props.userLogin.taiKhoan}</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem onClick={() => this.props.history.push('/thongtinnguoidung')}>Profile</MDBDropdownItem>
              <MDBDropdownItem divider />
              <ModalLogout />
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarNav>
      )
    } else {
      return (
        <MDBNavbarNav>
          <div>
            <Button onClick={() => this.props.history.push('/login')} className={styles.login}>Đăng nhập</Button>
            <Button onClick={() => this.props.history.push('/register')} className={styles.register}>Đăng ký</Button>
          </div>
        </MDBNavbarNav>
      )
    }
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = { backgroundColor: '#e91e63' }
    return (
      <div>
     
          <header>
            <MDBNavbar className={styles.header} style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <img className={styles.brand} src="./assets/images/web-logo.png" alt="logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center></MDBNavbarNav>
                <MDBNavbarNav center></MDBNavbarNav>
                <MDBNavbarNav center>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Lịch Chiếu</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Cụm rạp</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Tin Tức</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Ứng dụng</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav center></MDBNavbarNav>
                {this.kiemTraDangNhap()}
              </MDBCollapse>
            </MDBNavbar>
          </header>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.QuanLyNguoiDungReducer.nguoiDangNhap
})

const mapDispatchToProps = dispatch => {
  return {
    hoTenAdmin: () => {
      dispatch(nguoiDangNhap())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));