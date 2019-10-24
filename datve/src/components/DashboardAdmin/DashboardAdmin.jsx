import React, { Component,Fragment, } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table, Divider } from 'antd';
import styles from './DashboardAdmin.module.css';
import { layDanhSachNguoiDungAction, chinhSuaNguoiDungAction, xoaNguoiDungAction, timKiemNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { Modal, Button } from 'antd';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
class DashboardAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
      modal2Visible: false,
    }
  }

  // state = {
  //   modal2Visible: false,
  //   inputSearch:''
  // };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  componentDidMount(){
    this.props.layDanhSachNguoiDung();
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    // console.log('handle submit DashboardAdmin',this.state.inputSearch);
    this.props.timKiemNguoiDung(this.state.inputSearch);
}
handleChange=(e) =>{
  let name = e.target.name;
  let value = e.target.value;
          this.setState({
            [name]:value
    }, () => {
      // console.log(this.state.inputSearch);
    })
}

    render() {
      const columns =[
        {
          title: 'STT',
          dataIndex: 'stt',
          key: 'stt',
        },
        {
          title: 'Tài Khoản',
          dataIndex: 'taiKhoan',
          key: 'taikhoan',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Mật Khẩu',
          dataIndex: 'matKhau',
          key: 'matkhau',
        },
        {
          title: 'Họ Tên',
          dataIndex: 'hoTen',
          key: 'hoten',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Số Điện Thoại',
          dataIndex: 'soDt',
          key: 'sdt',
        },
        {
          title: 'Thao Tác',
          key: 'action',
          render: (text, record) => (            
            <span>
              <a onClick={() => {this.setModal2Visible(true);this.props.chinhSuaNguoiDung(record)}}>Sửa {record.name}</a>
              <Divider type="vertical" />
              <a onClick={() => {this.props.xoaNguoiDung(record.taiKhoan)}}>Xóa</a>
            </span>
          ),
        },
      ]; 
      const data = this.props.danhSachNguoiDung;
      // console.log('data dash',data);
      
      // for(let i=0;i<data.length;i++){
      //   data[i]["stt"]=i+1;
      // }
        return (
            <Fragment>
 <section className={`${styles.content} d-flex`}>
  <div className={`${styles.content_left} ${styles.bg_gradient_primary}`}>
    <div className={styles.az_sidebar_header}>
      <a title="Load all" href="index.html" className={styles.az_logo}>
        <img src="../assets/images/web-logo.png" alt />
        <span>123Phim</span>
      </a>
    </div>
    <div className={styles.az_sidebar_loggedin}>
      <div className={`${styles.az_img_user} online`}><img src="../assets/images/admin.png" alt /></div>
      <div className={styles.media_body}>
        <h5>Tấn Phát</h5>
        <span>Admin Member</span>
      </div>{/* media-body */}  
    </div>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={`${styles.sidebar_divider} my-0`} />
    {/* <hr class="sidebar-divider"> */}
    <a className={`${styles.sidebar_brand} d-flex align-items-center justify-content-center`} href="index.html">
      {/* <div class="sidebar-brand-icon rotate-n-15"> */}
      {/* <i class="fas fa-laugh-wink"></i> */}
      {/* </div> */}
      <div className="sidebar-brand-text mx-3">Dashboard</div>
    </a>
    <hr className={`${styles.sidebar_divider} my-0`} />
    <hr className={styles.sidebar_divider} />
    <div className={styles.sidebar_heading}>
      Quản lý
    </div>
    <ul className={styles.quanLy}>
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Quản lý phim</span></a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item active">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Quản lý người dùng</span></a>
      </li>
    </ul>
  </div>
  <div className={styles.content_right}>

<div className={styles.quanLyPhimTable}>
 <h5 className={styles.title}>QUẢN LÝ PHIM</h5>
 <div className={styles.searchBox}>
      <NavLink to="/admin/register" className={`${styles.themNguoiDung} btn btn-success`}>
        + Thêm người dùng
      </NavLink>
        <form className="form-inline" onSubmit={this.handleSubmit}>
         <a onClick={()=>this.props.layDanhSachNguoiDung()}><img style={{width:'50px'}} src="./assets/images/spinner.svg" alt=""/></a> 
      <input className="form-control mr-sm-2 abc" onChange={this.handleChange} name="inputSearch" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

   </div>
  <Table className={styles.table} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
  {/* total:30 trong pagination */}
</div>
  </div>
</section>
 {/* <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          Vertically centered modal dialog
        </Button> */}
        <Modal
          title="Cap nhat thong tin nguoi dung"
          centered
          visible={this.state.modal2Visible}
          // okText="Cap Nhat"
          // onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={null}
        >
          {/* <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p> */}
          <ModalEditUser/>
        </Modal>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
  danhSachNguoiDung : state.QuanLyNguoiDungReducer.danhSachNguoiDung
})

const mapDispatchToProps = dispatch => {
  return {
    layDanhSachNguoiDung: () => dispatch(layDanhSachNguoiDungAction()),
    chinhSuaNguoiDung: (thongTinNguoiDung) => dispatch(chinhSuaNguoiDungAction(thongTinNguoiDung)),
    xoaNguoiDung:(taiKhoan) => dispatch(xoaNguoiDungAction(taiKhoan)),
    timKiemNguoiDung:(thongTinNguoiDung) => dispatch(timKiemNguoiDungAction(thongTinNguoiDung))
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(DashboardAdmin);