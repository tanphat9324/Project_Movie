import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { NavLink, withRouter } from "react-router-dom";
import { isLogin,isLoginAdmin } from '../../utils/index';
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
              <img src="../assets/images/avatar1.png" alt="" />
              <span>      Chào!, {this.props.userLogin.taiKhoan}</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem onClick={() => this.props.history.push('/thongtinnguoidung')}>Profile</MDBDropdownItem>
              { isLoginAdmin() ? <MDBDropdownItem onClick={() => this.props.history.push('/admin')}>Admin</MDBDropdownItem> :<Fragment></Fragment> }
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

  renderNav = ()=>{
    if(this.props.location.pathname !== '/'){
      return(
        <Fragment></Fragment>
      )
    }else return(
      <Fragment>
  <MDBNavItem active>
      <a className={styles.title} href="#lichChieu">Lịch chiếu</a>
    </MDBNavItem>
    <MDBNavItem>
    <a className={styles.title} href="#cumRap">Cụm Rạp</a>
    </MDBNavItem>
    <MDBNavItem>
    <a className={styles.title} href="#lichChieu">Tin tức</a>
    </MDBNavItem>
    <MDBNavItem>
    <a className={styles.title} href="#footer">Ứng dụng</a>
    </MDBNavItem>
      </Fragment>
    
    )
  }
  render() {
    const bgPink = { backgroundColor: '#e91e63' }
    // console.log(this.props.location);
    
    return (
      <div>
     
          <header>
            <MDBNavbar className={styles.header} style={bgPink} dark expand="md" scrolling fixed="top">
              <NavLink to='/'>
                <img className={styles.brand} src="../assets/images/web-logo.png" alt="logo" />
              </NavLink>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center></MDBNavbarNav>
                <MDBNavbarNav center></MDBNavbarNav>
                <MDBNavbarNav center>
                 {this.renderNav()}
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