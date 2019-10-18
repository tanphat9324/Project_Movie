import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import { dangKyAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import './RegisterPage.css';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state={
            taiKhoan:'',
            matKhau:''
        }
    }
    handleChange=(e) =>{
        let{value,name} = e.target;
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dangNhap(this.state);
    }
    render() {
        return (
            <Fragment>
                    <section className="register d-flex">
                <div id="login-box">
                    <form className="left" onSubmit={this.handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <input type="text" name="taiKhoan" onChange={this.handleChange} placeholder="Tài Khoản" />
                    <input type="password" name="matKhau" onChange={this.handleChange} placeholder="Password" />
                    <input type="password" name="matKhau2" onChange={this.handleChange} placeholder="ReType Password" />
                    <input type="text" name="hoTen" onChange={this.handleChange} placeholder="Họ Tên" />
                    <input type="email" name="email" onChange={this.handleChange} placeholder="E-mail" />
                    <input type="tel" name="soDt" onChange={this.handleChange} placeholder="Telephone" />
                    <button className="register_button btn" type="submit" name="signup_submit" value="Sign me up">Đăng ký</button>
                    </form>
                    <div className="right">
                    <span className="loginwith">Sign in with<br />social network</span>
                    <button className="social-signin facebook">Log in with facebook</button>
                    <button className="social-signin twitter">Log in with Twitter</button>
                    <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                    <div className="signin_close">
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
        dangNhap:(thongTinNguoiDung)=>{
            dispatch(dangKyAction(thongTinNguoiDung))
        }
    }
}
export default connect(null,mapDispatchToProp)(RegisterPage);