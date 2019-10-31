/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import { dangNhapAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import styles from './LoginPage.module.css';

 class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                taiKhoan:'',
                matKhau:'',
            },
            errors:{
                taiKhoan:'',
                matKhau:'',
            },
            valid:false
        }
    }

    handleErrors = e => {
        let {name, value} = e.target;
        let loi = value === '' ? name + ' không được để trống!': '';
        if(name === 'taiKhoan'){
            let regex = /^[a-z0-9_-]{3,16}$/;
            if(!regex.test(value)){
                loi = "3-6 kí tự gồm chữ cái, số và dấu gạch ngang";
            }
        }
        if(name === 'matKhau'){
            // let regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
            //1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long

            ///(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
            //1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
            // if(!regex.test(value)){
            //     loi = "8 kí tự, thường, hoa & kí tự đặc biệt"
            // }
        }
        this.state.valid = loi === '' ? true : false;
        this.setState({
            errors: {...this.state.errors,[name]:loi}
        })
    }

    handleChange=(e) =>{
        let{value,name} = e.target;
        this.setState({
            user: {...this.state.user,[name]:value}
          }, () => {
            // console.log(this.state);
          })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dangNhap(this.state, this.callback);
    }

    callback = ()=>{
        this.props.history.push('/admin');
    }
    
    render() {        
        return (
            <Fragment>
                <section className={`${styles.register} d-flex`}>
                <div className={styles.login_box}>
                    <form className={styles.left} onSubmit={this.handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <input className={styles.input_TaiKhoan} type="text" name="taiKhoan" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Tài Khoản" />
                    {this.state.errors.taiKhoan !== '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}

                    <input className={styles.input_MatKhau} type="password" name="matKhau" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} placeholder="Password" />
                    {this.state.errors.matKhau !== '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
                    <button className={`${styles.register_button}  btn`} type="submit" name="signup_submit" value="Sign me up">Đăng nhập</button>                    </form>
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
        dangNhap:(thongTinNguoiDung,callback)=>{
            dispatch(dangNhapAction(thongTinNguoiDung,callback))
        }
    }
}
export default connect(null,mapDispatchToProp)(LoginPage);