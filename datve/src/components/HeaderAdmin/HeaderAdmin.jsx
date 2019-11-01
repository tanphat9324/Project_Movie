/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './HeaderAdmin.module.css';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';

 class HeaderAdmin extends Component {
  componentDidMount(){
    this.props.hoTenAdmin()
  }

    render() {
        return (
            <Fragment>
  <div className={`${styles.content_left} ${styles.bg_gradient_primary}`}>
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
        <span>Admin Member</span>
      </div>{/* media-body */}  
    </div>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={`${styles.sidebar_divider} my-0`} />
    {/* <hr class="sidebar-divider"> */}
    <NavLink to='/' className={`${styles.sidebar_brand} d-flex align-items-center justify-content-center`} >
      {/* <div class="sidebar-brand-icon rotate-n-15"> */}
      {/* <i class="fas fa-laugh-wink"></i> */}
      {/* </div> */}
      <div className={`${styles.sidebar_brand_text} mx-3`}>Dashboard</div>
    </NavLink>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={styles.sidebar_divider} />
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