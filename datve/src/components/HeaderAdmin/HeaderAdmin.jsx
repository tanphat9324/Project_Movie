/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './HeaderAdmin.module.css';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import {isLoginAdmin} from '../../utils/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

 class HeaderAdmin extends Component {

kiemTraDangNhap=()=>{  
 if(isLoginAdmin){
  return(
    <Fragment>
<div className={styles.sidebar_heading}>
    Quản lý
  </div>
  <ul className={styles.quanLy}>
    <li className="nav-item">
      <NavLink to="/admin/quanlyphim" className="nav-link">
        <i className="fas fa-fw fa-chart-area" />
        <span>Quản lý phim</span></NavLink>
    </li>
    <li className="nav-item active">
      <NavLink to="/admin/quanlynguoidung" className="nav-link">
        <i className="fas fa-fw fa-table" />
        <span>Quản lý người dùng</span></NavLink>
    </li>
  </ul>
    </Fragment>
  )
 }else{
   return(
     <Fragment></Fragment>
   )
 }
}  
  componentDidMount(){
    this.props.hoTenAdmin()
    AOS.init({
      duration : 2000
    })
  }
    render() {
        return (
            <Fragment>
   <div data-aos="fade-right" className={`${styles.content_left} ${styles.bg_gradient_primary}`}>
    <div className={styles.az_sidebar_header}>
      <NavLink to="/" title="Load all" className={styles.az_logo}>
        <img src="../assets/images/web-logo.png" alt />
        <span>123Phim</span>
      </NavLink>
    </div>
    <div className={styles.az_sidebar_loggedin}>
      <div className={`${styles.az_img_user} online`}><img src="../assets/images/admin.png" alt /></div>
      <div className={styles.media_body}>
        <h5>{this.props.userLogin.hoTen}</h5>
        <span style={{fontStyle:'italic'}}>Admin Member</span>
      </div>
    </div>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={`${styles.sidebar_divider} my-0`} />
    <NavLink to='/admin' className={`${styles.sidebar_brand} d-flex align-items-center justify-content-center`} >
      <div className={`${styles.sidebar_brand_text} mx-3`}>Dashboard</div>
    </NavLink>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={styles.sidebar_divider} />
   
    {this.kiemTraDangNhap()}

    {/* <div className={styles.sidebar_heading}>
      Quản lý
    </div>
    <ul className={styles.quanLy}>
      <li className="nav-item">
        <NavLink to="/admin/quanlyphim" className="nav-link">
          <i className="fas fa-fw fa-chart-area" />
          <span>Quản lý phim</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink to="/admin/quanlynguoidung" className="nav-link">
          <i className="fas fa-fw fa-table" />
          <span>Quản lý người dùng</span></NavLink>
      </li>
    </ul> */}

  </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
  userLogin:state.QuanLyNguoiDungReducer.nguoiDangNhap
})
const mapDispatchToProps = dispatch => {
  return {
    hoTenAdmin:() => {
      dispatch(nguoiDangNhap())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderAdmin);