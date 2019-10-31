/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table, Divider } from 'antd';
import { layDanhSachNguoiDungAction, chinhSuaNguoiDungAction, xoaNguoiDungAction, timKiemNguoiDungAction, nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import { Modal,Menu,Dropdown } from 'antd';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import {logout} from '../../utils/index';
import styles from './QuanLyPhimAdmin.module.css';
import ThemPhimAdmin from './ThemPhimAdmin/ThemPhimAdmin';

class QuanLyPhimAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            modal1Visible: false,
            modal2Visible: false,
            tenDangNhap:this.props.nguoiDangNhap
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
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.timKiemNguoiDung(this.state.inputSearch);
    }
    handleChange=(e) =>{
      let name = e.target.name;
      let value = e.target.value;
              this.setState({
                [name]:value
        }, () => {
        })
    }
    componentWillReceiveProps(nextProps){  
      this.setState({
        tenDangNhap:nextProps.nguoiDangNhap
      })
    }
        render() {
          const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Cập nhật thông tin
                </a>
              </Menu.Item>
              <Menu.Item>
                <a onClick={()=>logout()} target="_blank" rel="noopener noreferrer" href="#">
                Đăng xuất
                </a>
              </Menu.Item>
            </Menu>
          );
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
            return (
                <Fragment>
      <div className={styles.content_right}>
    <div className={styles.header}>
    <div className="pr-3">
    <Dropdown overlay={menu} trigger={['click']}>
        <a className={`${styles.header_dropdown} ant-dropdown-link`} href="#">
          Chào !, {this.state.tenDangNhap.taiKhoan}  <img className={styles.header_avatar} src="../assets/images/admin.png" alt=""/> <img className={styles.header_icon} src="../assets/images/caret-down (2).svg" alt=""/>
        </a>
      </Dropdown>
    </div>
    </div>
    <div className={styles.quanLyPhimTable}>
     <h5 className={styles.title}>QUẢN LÝ PHIM</h5>
     <div className={styles.searchBox}>
          <button onClick={() => {this.setModal1Visible(true)}} className={`${styles.themNguoiDung} btn btn-success`}>
            + Thêm phim
          </button>
            <form className="form-inline" onSubmit={this.handleSubmit}>
             <a onClick={()=>this.props.layDanhSachNguoiDung()}><img style={{width:'50px'}} src="./assets/images/spinner.svg" alt=""/></a> 
          <input className="form-control mr-sm-2 abc" onChange={this.handleChange} name="inputSearch" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
    
       </div>
      <Table className={styles.table} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
      {/* total:30 trong pagination */}
    </div>
    <div className={styles.footer}>Footer</div>
    </div>
    <Modal
              title="Cập nhật thông tin người dùng"
              centered
              visible={this.state.modal2Visible}
              // okText="Cap Nhat"
              // onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal2Visible(false)}
              footer={null}
            >
              <ModalEditUser/>
            </Modal>

            <Modal
              title="Thêm phim"
              centered
              visible={this.state.modal1Visible}
              // okText="Cap Nhat"
              // onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
              footer={null}
            >
                <ThemPhimAdmin/>
              {/* <ModalEditUser/> */}
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
    export default connect(mapStateToProps,mapDispatchToProps)(QuanLyPhimAdmin);