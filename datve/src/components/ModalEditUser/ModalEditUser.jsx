import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import styles from './ModalEditUser.module.css';
import { CapNhatNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import { Modal } from 'antd';

class ModalEditUser extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.NguoiDungSua,
        errors: {
            taiKhoan:'',
            matKhau:'',
            hoTen:'',
            email:'',
            soDt:''
          },
          valid:false
        }
    }

    handleErrors = e => {
        let {name, value} = e.target;
        let loi = value === '' ? name + ' không được để trống!' :'';
        if(name === 'taiKhoan'){
            let regex = /^[a-z0-9_-]{3,16}$/;
            if(!regex.test(value)){
                loi = "3-6 kí tự gồm chữ cái, số và dấu gạch ngang";
            }
        }
        if(name === 'matKhau'){
            let regex = /^[a-z0-9_-]{3,16}$/;
            if(!regex.test(value)){
                loi = "3-6 kí tự"
            }
        }
        if(name === 'hoTen'){
            let regex = /^[a-z_-]{3,16}$/;
            if(!regex.test(value)){
                loi = "3 kí tự trở lên";
            }
        }
        if(name === "email"){
            // let regex = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@
            // + [A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
            // if(!regex.test(value)){
            //     loi+= "Sai định dạng email"
            // }
        }

        // this.state.valid = loi === '' ? true : false;
        this.setState({
            errors: {...this.state.errors,[name]:loi}
        })
    }

    handleChange=(e) =>{
        let name = e.target.name;
        let value = e.target.value;
                this.setState({
            user: {...this.state.user,[name]:value}
          }, () => {
            console.log(this.state);
          })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.capNhatNguoiDung(this.state.user);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            user:nextProps.NguoiDungSua
        })
      }

    render() {                
        return (
            <Fragment>
                 <Form className={styles.left} onSubmit={this.handleSubmit}>

                 <FormGroup>
                    <Label for="exampleEmail">Tài khoản:</Label>
                    <Input disabled name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Tài Khoản" />
                    {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Mật khẩu:</Label>
                    <Input type="password" name="matKhau" value={this.state.user.matKhau} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Password" />
                    {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Họ tên:</Label>
                    <Input type="text" name="hoTen" value={this.state.user.hoTen} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Họ Tên" />
                    {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''}
                </FormGroup>

                <FormGroup>
                    <Label for="exampleSelect">Mã loại người dùng:</Label>
                    <Input type="select" value={this.state.user.maLoaiNguoiDung} onChange={this.handleChange} name="maLoaiNguoiDung" id="exampleSelect">
                    <option value="QuanTri">Quản trị</option>
                    <option value="KhachHang">Khách hàng</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email:</Label>
                    <Input type="email" name="email" value={this.state.user.email} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="E-mail" />
                    {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                </FormGroup>
                
                <FormGroup>
                    <Label for="exampleEmail">Số điện thoại:</Label>
                    <Input type="tel" name="soDt" value={this.state.user.soDt} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Telephone" />
                    {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                </FormGroup>
                   <div className={styles.button}>
                   <Button className="btn btn-success" type="submit">Cập nhật</Button>
                   </div>
                    </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    NguoiDungSua: state.QuanLyNguoiDungReducer.NguoiDungSua
})
const mapDispatchToProp = dispatch =>{
    return{
        capNhatNguoiDung:(thongTinNguoiDung)=>{
            dispatch(CapNhatNguoiDungAction(thongTinNguoiDung))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(ModalEditUser);