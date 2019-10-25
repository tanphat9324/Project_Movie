import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import styles from './ModalEditUser.module.css';
import { CapNhatNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { Modal } from 'antd';

class ModalEditUser extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.NguoiDungSua,
            modal2Visible: false,

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
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
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
            let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$/;
            if(!regex.test(value)){
                loi = "8 kí tự, thường, hoa & kí tự đặc biệt"
            }
        }
        if(name === 'hoTen'){
            // let regex=/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]$/;
            // if(!regex.test(value)){
            //     loi+="Sai định dạng";
            // }
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
        console.log('receive');
        
        this.setState({
            user:nextProps.NguoiDungSua
        })
      }

//         static getDerivedStateFromProps(nextProps, nextState) {
//     // Hàm này không sử dụng được con trỏ this vì nó không thuộc đối tượng component này (Khái niệm static method)
//     let nextStateUpdate = {
//       user:{...nextProps.NguoiDungSua},
//       errors:{
//         taiKhoan:'',
//         matKhau:'',
//         hoTen:'',
//         email:'',
//         soDt:''
//       }
//     }
//     return nextStateUpdate;
//   }
    render() {    
        console.log("1");
            
        return (
            <Fragment>
                 <form className={styles.left} onSubmit={this.handleSubmit}>
                    <input type="text" disabled name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Tài Khoản" />
                    {/* {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''} */}

                    <input type="password" name="matKhau" value={this.state.user.matKhau} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Password" />
                    {/* {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''} */}

                    {/* <input type="password" name="matKhau2" onChange={this.handleChange} placeholder="ReType Password" /> */}
                    <input type="text" name="hoTen" value={this.state.user.hoTen} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Họ Tên" />
                    {/* {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''} */}

                    <input type="email" name="email" value={this.state.user.email} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="E-mail" />
                    {/* {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''} */}

                    <input type="tel" name="soDt" value={this.state.user.soDt} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Telephone" />
                    <button onCancel={() => this.setModal2Visible(false)} className="register_button btn" type="submit" name="signup_submit" value="Sign me up">Đăng ký</button>
                    </form>
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