/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import { dangNhapAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import './LoginPage.css'

 class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            taiKhoan:'',
            matKhau:'',
        }
    }

    handleChange=(e) =>{
        let{value,name} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dangNhap(this.state, this.callback);
    }

    callback = ()=>{
        this.props.history.push('/admin');
    }
    

//  componentDidUpdate(){
//     if(this.props.isLogin === "khai"){
//     }
//  }
    render() {
        // console.log('render',this.state.isLogin);
        
        return (
            <Fragment>
                <section className="register d-flex">
                <div id="login-box">
                    <form className="left" onSubmit={this.handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <input type="text" name="taiKhoan" onChange={this.handleChange} placeholder="Tài Khoản" />
                    <input type="password" name="matKhau" onChange={this.handleChange} placeholder="Mật Khẩu" />
                    <button className="register_button btn" type="submit" name="signup_submit" value="Sign me up">Đăng nhập</button>
                    </form>
                    <div className="right">
                    <span className="loginwith">Sign in with<br />social network</span>
                    <button className="social-signin facebook">Log in with facebook</button>
                    <button className="social-signin twitter">Log in with Twitter</button>
                    <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                    <div className="signin_close">
                    <a href="#"><img src="./assets/images/error.png" /></a> 
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