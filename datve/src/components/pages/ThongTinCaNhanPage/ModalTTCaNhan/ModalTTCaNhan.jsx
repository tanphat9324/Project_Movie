/* eslint-disable no-useless-escape */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component,Fragment } from 'react'
import {Form,Button,Input } from "antd";
import {connect} from 'react-redux';
import {CapNhatNguoiDungAction } from '../../../../redux/actions/QuanLyNguoiDungAction';
import styles from './ModalTTCaNhan.module.css';

class ModalTTCaNhan extends Component {
    constructor(props){
        super(props);
        this.state={
        user:this.props.nguoiDungSua,
        errors: {
            taiKhoan:'',
            matKhau:'',
            email:'',
            soDT:'',
            hoTen:'',
            taiKhoan1:'',
            matKhau1:'',
            email1:'',
            soDt1:'',
            hoTen1:''
          },
          valid:false,
          loading: false,
        }
    } 

    handleChange=(e) =>{
        let { value, name } = e.target;
            this.setState({
              user: {...this.state.user,[name]:value}
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
          this.state.user.soDt = this.state.user.soDT;
          delete this.state.user.soDT;      
          this.state.user.maLoaiNguoiDung = 'KhachHang';
          this.props.capNhatTTCaNhan(this.state.user);    
      };

    handleErrors = e => {
        let {name, value} = e.target;
        let status = '';
        let help="";
    
        if(name === 'taiKhoan'){
            let regex = /^[a-z0-9_-]{3,16}$/;
            if(!regex.test(value)){
                help = "3-6 kí tự gồm chữ cái, số";
               status="error";
            }else{
              status="success";
            }
        }
    
        if(name === 'email'){
          let regex = /^[a-z][a-z0-9_\.]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
          if(!regex.test(value)){
              help = "Sai định dạng email";
             status="error";
          }else{
            status="success";
          }
      }
    
      if(name === 'matKhau'){
        let regex = /^[a-zA-Z0-9 ]{3,16}$/;
        if(!regex.test(value)){
            help = "Sai định dạng mật khẩu";
           status="error";
        }else{
          status="success";
        }
    }
    if(name === 'hoTen'){
        let regex = /[^0-9]{3,50}$/;
        if(!regex.test(value)){
            help = "Sai định dạng họ tên";
           status="error";
        }else{
          status="success";
        }
    }
    if(name === 'soDT'){
      let regex = /^[0-9_-]{8,16}$/;
      if(!regex.test(value)){
          help = "Sai định dạng số điện thoại";
         status="error";
      }else{
        status="success";
      }
    }
    this.state.valid = status === 'success' ? true : false;
        this.setState({
            errors: {...this.state.errors,[name]:status,[name+"1"]:help}
    
        })
    }
    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 5,offset:2 }
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12,offset:1}
            }
          };
          console.log(this.props.nguoiDungSua);
          
        return (
            <Fragment>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        
        <Form.Item label="Tài khoản:" hasFeedback>
        <Input  type="text" value={this.state.user.taiKhoan} name="taiKhoan" disabled placeholder="Nhập tài khoản" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
      </Form.Item>

      <Form.Item help={this.state.errors.hoTen1} label="Họ tên:" hasFeedback validateStatus={this.state.errors.hoTen}>
        <Input type="text" value={this.state.user.hoTen} name="hoTen" placeholder="Nhập họ tên" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
      </Form.Item>

      <Form.Item help={this.state.errors.matKhau1} label="Mật khẩu:" hasFeedback validateStatus={this.state.errors.matKhau}>
        <Input type="password" value={this.state.user.matKhau} name="matKhau" placeholder="Nhập mật khẩu" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
      </Form.Item>

      <Form.Item help={this.state.errors.email1} label="Email:" hasFeedback validateStatus={this.state.errors.email}>
        <Input type="text" value={this.state.user.email} name="email" placeholder="Nhập email" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
      </Form.Item>

      <Form.Item help={this.state.errors.soDT1} label="Số điện thoại:" hasFeedback validateStatus={this.state.errors.soDT}>
        <Input type="text" value={this.state.user.soDT} name="soDT" placeholder="Nhập số điện thoại" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
      </Form.Item>

      <Form.Item
      wrapperCol={{
        xs: { span: 24, offset: 10 },
        sm: { span: 16, offset: 10 },
      }}
    >
      <Button disabled={!this.state.valid} className={styles.submit} type="primary" htmlType="submit">
        Cập nhật
      </Button>
    </Form.Item>
    </Form>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    nguoiDungSua: state.QuanLyNguoiDungReducer.nguoiDangNhap    
})

const mapDispatchToProps = dispatch => {
  return {
    capNhatTTCaNhan: (thongTinNguoiDung) => {
      dispatch(CapNhatNguoiDungAction(thongTinNguoiDung))
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalTTCaNhan);
