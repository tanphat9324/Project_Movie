/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import styles from './NotiAdmin.module.css';
import './sb-admin-2.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import ModalLogout from './ModalLogout/ModalLogout';

class NotiAdmin extends Component {

  componentDidMount() {
    this.props.hoTenAdmin()
  }

  kiemTraDangNhap(){
    if(this.props.userLogin !== null){
      return(
        <nav className={`${styles.bgNav} navbar navbar-expand navbar-light topbar static-top shadow`}>
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
          <img style={{cursor:'pointer'}} onClick={()=>this.props.history.push('/')} src="../assets/images/web-logo.png" width='50px' height='50px' alt=""/>
        <ul className="navbar-nav ml-auto">
         
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/images/bell2.svg" style={{ width: '22px', height: '25px' }} />
              <span style={{ padding: '6px 8px', fontSize: '17px',borderRadius:'50%' }} className="badge badge-primary badge-counter">3</span>
            </a>
            <div style={{left:'auto'}} className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Alerts Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/images/email2.svg" style={{ width: '22px', height: '25px' }} />
              <span style={{ padding: '6px 8px', fontSize: '17px',borderRadius:'50%' }} className="badge badge-primary badge-counter">7</span>
            </a>
            <div style={{left:'auto'}} className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in" aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">
                Message Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" />

                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" />
                  <div className="status-indicator" />
                </div>
                <div>
                  <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" />
                  <div className="status-indicator bg-warning" />
                </div>
                <div>
                  <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" />
                  <div className="status-indicator bg-success" />
                </div>
                <div>
                  <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a  className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span style={{ color: 'white',fontWeight:'500',fontSize:'16px' }} className="mr-2 d-none d-lg-inline small">Chào!, {this.props.userLogin.taiKhoan}</span>
              <div className={`${styles.az_img_user} online`}><img src="../assets/images/admin.png" /></div>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <NavLink to='/thongtinnguoidung' className="dropdown-item">
                Profile
              </NavLink>
              <div className="dropdown-divider" />
              <ModalLogout/>
            </div>
          </li>
        </ul>
      </nav>
      )
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotiAdmin));
