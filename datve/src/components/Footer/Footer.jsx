import React, { Component } from 'react'
import './Footer.css';
export default class Footer extends Component {
    render() {
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
          <p className="textAppUnder">123Phim có hai phiên bản <a href="#">iOS</a> &amp; <a href="#">Android</a></p>
        </div>
        <div className="col-md-6 footer_dt">
          <img className src="./f2.png" alt />
          <div className="footer_mobile">
            <div>
              <img src="./img/fs1.png" alt />
            </div>
            <div>
              <img src="./img/fs2.png" alt />
            </div>
            <div>
              <img src="./img/fs3.png" alt />
            </div>
            <div>
              <img src="./img/fs4.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_end">
    <div className="row custom_footer">
      <div className="col-md-4">
        <div className="footer_title">123PHIM</div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li> <a href>FAQ</a>
              </li>
              <li> <a href>Brand Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li> <a href>Thoả thuận sử dụng</a>
              </li>
              <li> <a href>Quy chế hoạt động</a>
              </li>
              <li> <a href>Chính sách bảo mật</a>
              </li>
              <li> <a href>Quyền lợi thành viên</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer_title">ĐỐI TÁC</div>
        <div className="footer_icon">
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
          <a href="#"><img src="./img/fi1.png" alt /></a> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-6 footer_app">
            <div className="footer_title_1">MOBILE APP</div>
            <a href="#"><img src="./img//fi2.png" alt /></a>
            <a href="#"><img src="./img//fi2.png" alt /></a>
          </div>
          <div className="col-md-6 footer_social">
            <div className="footer_title_1">MOBILE APP</div>
            <a href="#"><img src="./img//fi2.png" alt /></a>
            <a href="#"><img src="./img//fi2.png" alt /></a>
          </div>
        </div>
      </div>
    </div>
    <hr className="hrFooter" />
    <div className="footer_company">
      <div className="footer_content">
        <div><img className="footer_ion" src="./img/fi3.jpg" alt /></div> 
        <div className="footer_content_item">
          <div className="footer_comp_title">123PHIM – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</div>
          <div className="footer_add">Địa chỉ: 52 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố Hồ Chí Minh</div>
          <div className="footer_add">Mã số thuế: 0101659783</div>
        </div> 
      </div>
      <div>
        <img className="footer_check" src="./img//fi4.png" alt />
      </div>
    </div>
  </div>
</section>

        )
    }
}
