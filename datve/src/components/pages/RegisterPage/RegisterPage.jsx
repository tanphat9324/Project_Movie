import React, { Component,Fragment } from 'react'
import './RegisterPage.css';

export default class RegisterPage extends Component {
    render() {
        return (
            <Fragment>
                    <section className="register d-flex">
                {/* <img src="./assets/images/backapp.jpg" alt /> */}
                <div id="login-box">
                    <div className="left">
                    <h1>Đăng ký</h1>
                    <input type="text" name="username" placeholder="Tài Khoản" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="password2" placeholder="ReType Password" />
                    <input type="text" name="fullname" placeholder="Họ Tên" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <input type="tel" name="tel" placeholder="Telephone" />
                    <button className="register_button btn" type="submit" name="signup_submit" value="Sign me up">Đăng ký</button>
                    </div>
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
