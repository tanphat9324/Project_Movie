import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './AddUserAdmin.module.css';
import { addUserAdminAction } from '../../redux/actions/QuanLyNguoiDungAction';

class AddUserAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
    user:{
        taiKhoan:'',
        matKhau:'',
        hoTen:'',
        email:'',
        soDt:'',
        maLoaiNguoiDung:'',
    },
    errors: {
        taiKhoan:'',
        matKhau:'',
        matKhau2:'',
        hoTen:'',
        email:'',
        soDt:'',
        maLoaiNguoiDung:''
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

    this.state.valid = loi === '' ? true : false;
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
        // console.log(this.state);
      })
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.user);
    
    this.props.dangKy(this.state.user);
}
render() {
    return (
        <Fragment>
                <section className={`${styles.register} d-flex`}>
            <div className={styles.login_box}>
                <form className={styles.left}  onSubmit={this.handleSubmit}>
                <h1>Đăng ký</h1>
                <input className={styles.input_TaiKhoan} type="text" name="taiKhoan" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Tài Khoản" />
                {/* {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''} */}

                <input className={styles.input_MatKhau} type="password" name="matKhau" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Password" />
                {/* {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''} */}

                {/* <input type="password" name="matKhau2" onChange={this.handleChange} placeholder="ReType Password" /> */}
                <input type="text" className={styles.input_TaiKhoan} name="hoTen" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Họ Tên" />
                {/* {this.state.errors.hoTen !== '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''} */}

                <input type="email" className={styles.input_email} name="email" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="E-mail" />
                {/* {this.state.errors.email !== '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''} */}
                
                <select name="maLoaiNguoiDung" onChange={this.handleChange} className="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="KhachHang">Khach hang</option>
  <option value="QuanTri">Quan tri</option>
 
</select>

                <input type="tel" className={styles.input_Tel} name="soDt" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Telephone" />
                <button className={`${styles.register_button}  btn`} type="submit" name="signup_submit" value="Sign me up">Đăng ký</button>
                </form>
                <div className={styles.right}>
                <span className={styles.loginwith}>Sign in with<br />social network</span>
                <button className={`${styles.social_signin} ${styles.facebook}`}>Log in with facebook</button>
                <button className={`${styles.social_signin} ${styles.twitter}`}>Log in with Twitter</button>
                <button className={`${styles.social_signin} ${styles.google}`}>Log in with Google+</button>
                </div>
                <div className={styles.or}>OR</div>
                <div className={styles.signin_close}>
                <a href><img src="./assets/images/error.png" alt /></a> 
                </div>
            </div>
            </section>

        </Fragment>
    )
}
}
const mapDispatchToProp = dispatch =>{
return{
    dangKy:(thongTinNguoiDung)=>{
        dispatch(addUserAdminAction(thongTinNguoiDung))
    }
}
}
export default connect(null,mapDispatchToProp)(AddUserAdmin);