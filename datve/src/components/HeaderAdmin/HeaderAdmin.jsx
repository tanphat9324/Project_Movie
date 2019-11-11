/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import { isLoginAdmin } from '../../utils/index';
import { connect } from 'react-redux';
import styles from './HeaderAdmin.module.css';


class HeaderAdmin extends Component {

  kiemTraDangNhap = () => {
    if(this.props.userLogin!==null){
      if (isLoginAdmin()) {
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
                  <span style={{ fontStyle: 'italic' }}>Admin Member</span>
                </div>
              </div>
              <hr className={`${styles.sidebar_divider} my-0`} />
              <hr className={`${styles.sidebar_divider} my-0`} />
              <NavLink to='/admin' className={`${styles.sidebar_brand} d-flex align-items-center justify-content-center`} >
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
                    <img src="../assets/images/movie.svg" width='30px' height='30px' alt="" />
                    <span style={{ paddingLeft: '10px' }}>Quản lý phim</span></NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink to="/admin/quanlynguoidung" className="nav-link">
                    <img src="../assets/images/team.svg" width='30px' height='30px' alt="" />
                    <span style={{ paddingLeft: '10px' }}>Quản lý người dùng</span></NavLink>
                </li>
              </ul>
            </div>
          </Fragment>
        )
      } else {
        return (
          <Fragment></Fragment>
        )
      }
    }
  }

  componentDidMount() {
    this.props.hoTenAdmin();
  }

  render() {
    return (
      <Fragment>
        {this.kiemTraDangNhap()}
      </Fragment>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin);
























// import React from 'react';
// import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

// import styles from './HeaderAdmin.module.css';

// class HeaderAdmin extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           collapse: false,
//       };
//       this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//         collapse: !this.state.collapse,
//       });
//   }

//   render() {
//     const bgPink = {backgroundColor: '#e91e63'}
//     const container = {height: 1300}
//     return(
//       <div>
//         <Router>
//           <header>
//             <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
//               <MDBNavbarBrand href="/">
//               <img className={styles.brand} src="./assets/images/web-logo.png" alt="logo" />
//               </MDBNavbarBrand>
//               <MDBNavbarToggler onClick={ this.onClick } />
//               <MDBCollapse isOpen = { this.state.collapse } navbar>
//               <MDBNavbarNav center></MDBNavbarNav>
//               <MDBNavbarNav center></MDBNavbarNav>

//                 <MDBNavbarNav center>
//                   <MDBNavItem active>
//                       <MDBNavLink to="#">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="#">Features</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="#">Pricing</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#">Options</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>

//                 <MDBNavbarNav center></MDBNavbarNav>
//                 <MDBNavbarNav center></MDBNavbarNav>

//                 <MDBNavbarNav right>
//                   <MDBNavItem>
//                   <MDBDropdown>
//       <MDBDropdownToggle color="primary">
//         {/* <img src="./assets/images/avatar.png" alt=""/> */}
//       </MDBDropdownToggle>
//       <MDBDropdownMenu basic>
//         <MDBDropdownItem>Profile</MDBDropdownItem>
//         <MDBDropdownItem divider />
//         <MDBDropdownItem>Logout</MDBDropdownItem>
//       </MDBDropdownMenu>
//     </MDBDropdown>
//                   </MDBNavItem>
//                   {/* <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
//                   </MDBNavItem> */}
//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBNavbar>
//           </header>
//         </Router>
//         <MDBContainer style={container} className="text-center mt-5 pt-5">
//           <h2>This Navbar is fixed</h2>
//           <h5>It will always stay visible on the top, even when you scroll down</h5>
//           <br/>
//           <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
//         </MDBContainer>
//       </div>
//     );
//   }
// }

// export default HeaderAdmin;