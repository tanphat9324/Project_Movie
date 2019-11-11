/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table, Divider,Tag  } from 'antd';
import { layDanhSachNguoiDungAction, chinhSuaNguoiDungAction, xoaNguoiDungAction, timKiemNguoiDungAction, nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import { Modal,Menu,Dropdown } from 'antd';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import styles from './QuanLyNguoiDungAdmin.module.css';
import {logout} from '../../utils/index';
import NotiAdmin from '../NotiAdmin/NotiAdmin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import AddUserAdmin from '../AddUserAdmin/AddUserAdmin';
import AOS from 'aos';
import 'aos/dist/aos.css';

class QuanLyNguoiDungAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
      modal1Visible: false,
      modal2Visible: false,
      tenDangNhap:this.props.nguoiDangNhap
      // nguoiDungDangNhap:this.props.nguoiDangNhap
    }
  }
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  componentDidMount(){
    this.props.layDanhSachNguoiDung();
    this.props.nguoiDungDangNhap();
    AOS.init({
      duration : 2000
    })
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
      if(this.state.inputSearch !== ''){
        this.props.timKiemNguoiDung(this.state.inputSearch);
      }else {
        this.props.layDanhSachNguoiDung();
      }

    })
}
componentWillReceiveProps(nextProps){  
  this.setState({
    tenDangNhap:nextProps.nguoiDangNhap
  })
}
    render() {
      console.log('nguoi dang nhap',this.props.nguoiDangNhap);
      
      // const menu = (
      //   <Menu>
      //     <Menu.Item>
      //       <a target="_blank" rel="noopener noreferrer" href="#">
      //         Cập nhật thông tin
      //       </a>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <a onClick={()=>logout()} target="_blank" rel="noopener noreferrer" href="#">
      //       Đăng xuất
      //       </a>
      //     </Menu.Item>
      //   </Menu>
      // );
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
              render: (text,record) =>{
                let loai = record.maLoaiNguoiDung === 'QuanTri' ? 'Admin' : 'User';
                let color = loai === 'Admin'? '#f50':'#2db7f5';
                return (
                  <span>
                <Tag color={color} key={loai}>
              {loai.toUpperCase()}
            </Tag>
            {text}
                </span>
                )
              }                        
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
                  <a onClick={() => {this.setModal2Visible(true);this.props.chinhSuaNguoiDung(record)}}>
                    <img style={{width:'25px'}} src="../assets/images/edit.svg" alt=""/>
                     {record.name}</a>
                  <Divider type="vertical" />
                  <a onClick={() => {this.props.xoaNguoiDung(record.taiKhoan)}}>
                    <img style={{width:'30px'}} src="../assets/images/garbage.svg" alt=""/>
                  </a>
                </span>
              ),
            },
          ]; 
          const data = this.props.danhSachNguoiDung;
          console.log(data);
          
        return (
            <Fragment>
        <div id="page-top">
  <div id="wrapper">
    <div id="content-wrapper" className="d-flex flex-column">
          <NotiAdmin/>
      <div style={{width:'86%',margin:'auto 0 0 auto',height:'90vh'}} id="content">
        <div className="container-fluid">
        <div className={styles.quanLyPhimTable} data-aos='fade-up'>
 <h5 className={styles.title}>QUẢN LÝ NGƯỜI DÙNG</h5>
 <div className={styles.searchBox}>
      <button onClick={() => {this.setModal1Visible(true)}} className={`${styles.themNguoiDung} btn btn-success`}>
        + Thêm người dùng
      </button>
        <form className="form-inline" onSubmit={this.handleSubmit}>
         <a onClick={()=>this.props.layDanhSachNguoiDung()}><img style={{width:'50px'}} src="./assets/images/spinner.svg" alt=""/></a> 
      <input style={{width:'250px'}} className="form-control mr-sm-2 abc font-italic" onChange={this.handleChange} name="inputSearch" type="search" placeholder="Nhập tài khoản hoặc họ tên" aria-label="Search" />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>

   </div>
  <Table className={styles.table} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
  {/* total:30 trong pagination */}
</div>
        </div>
      </div>
      <div style={{marginTop:'30px',position:'absolute',bottom:'0',width:'100%'}}>
              <FooterAdmin/>
      </div> 
    </div>
  </div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>
<Modal
          title="Thêm người dùng"
          width='350px'
          centered
          visible={this.state.modal1Visible}
          // okText="Cap Nhat"
          // onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          footer={null}
        >
         <AddUserAdmin/>
        </Modal>
<Modal
          title="Cập nhật thông tin người dùng"
          width='350px'
          centered
          visible={this.state.modal2Visible}
          // okText="Cap Nhat"
          // onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={null}
        >
          <ModalEditUser/>
        </Modal>
               
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
  danhSachNguoiDung : state.QuanLyNguoiDungReducer.danhSachNguoiDung,
  nguoiDangNhap: state.QuanLyNguoiDungReducer.nguoiDangNhap
})

const mapDispatchToProps = dispatch => {
  return {
    nguoiDungDangNhap: () => dispatch(nguoiDangNhap()),
    layDanhSachNguoiDung: () => dispatch(layDanhSachNguoiDungAction()),
    chinhSuaNguoiDung: (thongTinNguoiDung) => dispatch(chinhSuaNguoiDungAction(thongTinNguoiDung)),
    xoaNguoiDung:(taiKhoan) => dispatch(xoaNguoiDungAction(taiKhoan)),
    timKiemNguoiDung:(thongTinNguoiDung) => dispatch(timKiemNguoiDungAction(thongTinNguoiDung))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuanLyNguoiDungAdmin);