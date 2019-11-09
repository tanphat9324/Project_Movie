/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table, Divider } from 'antd';
import { nguoiDangNhap } from '../../redux/actions/QuanLyNguoiDungAction';
import { Modal,Menu } from 'antd';
import {logout} from '../../utils/index';
import ThemPhimAdmin from './ThemPhimAdmin/ThemPhimAdmin';
import { layDanhSachPhim, xoaPhimAction, layThongTinPhimAction, timKiemPhimAction } from '../../redux/actions/QuanLyPhimAction';
import CapNhatPhimAdmin from './CapNhatPhimAdmin/CapNhatPhimAdmin';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import ThongTinLichChieuAdmin from './ThongTinLichChieuAdmin/ThongTinLichChieuAdmin';
import NotiAdmin from '../NotiAdmin/NotiAdmin';
import './sb-admin-2.min.css'
import styles from './QuanLyPhimAdmin.module.css';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

class QuanLyPhimAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            inputSearch:'',
            modal1Visible: false,
            modal2Visible: false,
            modal3Visible: false,
            tenDangNhap:this.props.nguoiDangNhap
        }
      }
      setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }
      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
      setModal3Visible(modal3Visible) {
        this.setState({ modal3Visible });
      }

      componentDidMount(){
        this.props.layDanhSachPhim();
        this.props.nguoiDungDangNhap();
      }

      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.layThongTinPhim(this.state.inputSearch);
      }
    handleChange=(e) =>{
      let name = e.target.name;
      let value = e.target.value;
              this.setState({
                [name]:value
        }, () => {
          if(this.state.inputSearch !== ''){
            this.props.timKiemPhim(this.state.inputSearch);
          }else {
            this.props.layDanhSachPhim();
          }
        })
    }
    componentWillReceiveProps(nextProps){  
      this.setState({
        tenDangNhap:nextProps.nguoiDangNhap
      })
    }
    logOut=()=>{
      logout();
    //  this.props.history.push('/login') 
    //   logout().then(()=>{
    //     return  <Redirect to='/login'/>
    // })
    }
        render() {
            const columns =[
                {
                  title: 'Mã phim',
                  dataIndex: 'maPhim',
                  key: 'maphim',
                },
                {
                  title: 'Tên phim',
                  dataIndex: 'tenPhim',
                  key: 'tenphim',
                  render: text => <a>{text}</a>,
                },
                {
                  title: 'Hình ảnh',
                  dataIndex: 'hinhAnh',
                  key: 'hinhanh',
                  render: (text, record) => (
                      <img title={record.tenPhim} src={record.hinhAnh} width="50px" height="70px"/>
                    ),
                },
                {
                  title: 'Mô tả',
                  dataIndex: 'moTa',
                  key: 'mota',
                  render: (text, record) => (
                    <div title={record.moTa} style={{whiteSpace:"nowrap",overflow:'hidden',textOverflow:'ellipsis',width:'450px'}}>{record.moTa}</div>
                  ),
                },
                {
                  title: 'Mã Nhóm',
                  dataIndex: 'maNhom',
                  key: 'manhom',
                },
                {
                  title: 'Ngày khởi chiếu',
                  dataIndex: 'ngayKhoiChieu',
                  key: 'ngaykhoichieu',
                  render:(text, record) => (
                    <div>{dayjs(record.ngayKhoiChieu).format('DD/MM/YYYY')}</div>
                  )
                },
                {
                  title: 'Thao Tác',
                  key: 'action',
                  render: (text, record) => (            
                    <span>
                      <a  style={{}} onClick={() => {this.setModal3Visible(true);}}>
                        <img title="Tạo lịch chiếu" style={{width:'30px'}} src="../assets/images/taoLichChieu.svg" alt=""/>
                      </a>
                      <Divider type="vertical" />
                      <a onClick={() => {this.setModal2Visible(true);this.props.layThongTinPhim(record.maPhim)}}>
                        <img title="Sửa phim" style={{width:'25px'}} src="../assets/images/edit.svg" alt=""/>
                         {record.name}</a>
                      <Divider type="vertical" />
                      <a onClick={() => {this.props.xoaPhim(record.maPhim)}}>
                        <img title="Xóa phim" style={{width:'30px'}} src="../assets/images/garbage.svg" alt=""/>
                      </a>
                    </span>
                  ),
                },
              ]; 
              const data = this.props.danhSachPhim;
            return (
                <Fragment>
        <div id="page-top">
  <div id="wrapper">
    <div style={{width:'86%',margin:'auto 0 0 auto'}} id="content-wrapper" className="d-flex flex-column">
      <div style={{height:'100vh'}} id="content">
          <NotiAdmin/>
        <div className="container-fluid">
        <div className={styles.quanLyPhimTable}>
     <h5 className={styles.title}>QUẢN LÝ PHIM</h5>
     <div className={styles.searchBox}>
          <button onClick={() => {this.setModal1Visible(true)}} className={`${styles.themNguoiDung} btn btn-success`}>
            + Thêm phim
          </button>
            <form className="form-inline" onSubmit={this.handleSubmit}>
             <a onClick={()=>this.props.layDanhSachNguoiDung()}><img style={{width:'50px'}} src="./assets/images/spinner.svg" alt=""/></a> 
          <input className="form-control mr-sm-2 abc" onChange={this.handleChange} name="inputSearch" type="search" placeholder="Nhập tên phim cần tìm" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
    
       </div>
      <Table className={styles.table} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
    </div>

        </div>
      </div>
      <div style={{position:'absolute',bottom:'0',width:'86%'}}>
              <FooterAdmin/>
      </div> 
    </div>
  </div>
</div>

    <Modal
              title="Thông tin lịch chiếu"
              centered
              width='1050px'
              visible={this.state.modal3Visible}
              // okText="Cap Nhat"
              // onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal3Visible(false)}
              footer={null}
            >
              <ThongTinLichChieuAdmin/>
            </Modal>
    <Modal
              title="Cập nhật phim"
              centered
              width='550px'
              className={styles.modalCapNhat}	              
              visible={this.state.modal2Visible}
              // okText="Cap Nhat"
              // onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal2Visible(false)}
              footer={null}
            >
                <div style={{paddingLeft:'20px'}}>
                <CapNhatPhimAdmin/>

                </div>

            </Modal>

            <Modal
              title="Thêm phim"
              centered
              visible={this.state.modal1Visible}
style={{color:'red'}}              // okText="Cap Nhat"
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
      // danhSachNguoiDung : state.QuanLyNguoiDungReducer.danhSachNguoiDung,
      danhSachPhim: state.QuanLyPhimReducer.dsPhim,
      nguoiDangNhap: state.QuanLyNguoiDungReducer.nguoiDangNhap
    })
    
    const mapDispatchToProps = dispatch => {
      return {
        nguoiDungDangNhap: () => dispatch(nguoiDangNhap()),
        // layDanhSachNguoiDung: () => dispatch(layDanhSachNguoiDungAction()),
        layDanhSachPhim: () => dispatch(layDanhSachPhim()),
        // chinhSuaNguoiDung: (thongTinNguoiDung) => dispatch(chinhSuaNguoiDungAction(thongTinNguoiDung)),
        layThongTinPhim:(maPhim) => dispatch(layThongTinPhimAction(maPhim)),
        // xoaNguoiDung:(taiKhoan) => dispatch(xoaNguoiDungAction(taiKhoan)),
        xoaPhim: (maPhim) => dispatch(xoaPhimAction(maPhim)),
        // timKiemNguoiDung:(thongTinNguoiDung) => dispatch(timKiemNguoiDungAction(thongTinNguoiDung))
        timKiemPhim:(thongTinPhim) => dispatch(timKiemPhimAction(thongTinPhim))
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(QuanLyPhimAdmin);