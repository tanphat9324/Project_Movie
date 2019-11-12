/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Slider from "react-slick";
import './Footer.css';
export default class Footer extends Component {
  
    render() {
      const settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        return (
         <section className="footer">
  <div className="footer_img">
    <div className="footer_info">
      <div className="row">
        <div className="col-md-6 footer_dt_info">
          <div className="textLeft footer_title">Ứng dụng tiện lợi dành cho</div>
          <div className="textLeft footer_title">người yêu điện ảnh</div>
          <br />
          <div className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp
            dẫn.</div>
          <br />
          <button className="footer_button">App miễn phí - Tải về ngay!</button>
          <p className="textAppUnder">123Phim có hai phiên bản <a href="#">iOS</a>  <a href = "#" >Android</a></p>
        </div>
        <div className="col-md-6 footer_dt">
          <img src="./assets/images/f2.png"  />
          <div className="footer_mobile">
          <Slider {...settings}>
          <div>
              <img width='100%' src="./assets/images/fs1.png"  />
            </div>
            <div>
              <img width='100%' src="./assets/images/fs2.png"  />
            </div>
            <div>
              <img width='100%' src="./assets/images/fs3.png"  />
            </div>
            <div>
              <img width='100%' src="./assets/images/fs4.png"  />
            </div>
      </Slider>

          
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_end">
    <div className='custom_footer'>

  
    <div className="row ">
      <div className="col-md-4">
        <div className="footer_title">123PHIM</div>
        <div className="row">
          <div className="col-6">
            <ul style={{paddingInlineStart:'unset'}}>
              <li className='footer_li'> <a className="footerItem_phim" href="#">FAQ</a>
              </li>
              <li className='footer_li'> <a className="footerItem_phim" href="#">Brand Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul style={{paddingInlineStart:'unset'}}>
              <li className='footer_li'> <a className="footerItem_phim" href="#">Thoả thuận sử dụng</a>
              </li>
              <li className='footer_li'> <a className="footerItem_phim" href="#">Quy chế hoạt động</a>
              </li>
              <li className='footer_li'> <a className="footerItem_phim" href="#">Chính sách bảo mật</a>
              </li>
              <li className='footer_li'> <a className="footerItem_phim" href="#">Quyền lợi thành viên</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer_title">ĐỐI TÁC</div>
        <div className="footer_icon">
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
          <a href="#"><img src="./assets/images/fi1.png"  /></a> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-6 footer_app">
            <div className="footer_title">MOBILE APP</div>
            <a href="#"><img src="./assets/images//fi2.png"  /></a>
            <a href="#"><img src="./assets/images/android-logo.png"  /></a>
          </div>
          <div className="col-md-6 footer_social">
            <div className="footer_title">SOCIAL</div>
            <a href="#"><img src="./assets/images/facebook-logo.png"  /></a>
            <a href="#"><img src="./assets/images/zalo-logo.png"  /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <hr className="hrFooter" />
    <div className="footer_company">
      <div className="footer_content">
        <div><img className="footer_ion" src="./assets/images/fi3.jpg" /></div> 
        <div className="footer_content_item">
          <div className="footer_comp_title">123PHIM – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</div>
          <div className="footer_add">Địa chỉ: 52 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố Hồ Chí Minh</div>
          <div className="footer_add">Mã số thuế: 0101659783</div>
        </div> 
      </div>
      <div>
        <img className="footer_check" src="./assets/images//fi4.png" />
      </div>
    </div>
  </div>
</section>

        )
    }
}
