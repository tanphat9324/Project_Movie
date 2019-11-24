import React, { Component,Fragment } from 'react'
import styles from './ThanhToanComponent.module.css'
import {settings} from '../../../../common/Config/settings';
import {connect} from 'react-redux';
import { datVeAction } from '../../../../redux/actions/QuanLyDatVeAction';

class ThanhToanComponent extends Component {
     formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }
    tinhTien = () => {
        let  {datVeThanhToan} = this.props;    
        let danhSachVe = datVeThanhToan.danhSachVe;
let tongTien = danhSachVe.reduce((tt,ghe,index) =>{
   return tt += ghe.giaVe;
},0)
        return this.formatNumber(tongTien);
}
  renderGhe = () => {
    let  {datVeThanhToan} = this.props;    
    let danhSachVe = datVeThanhToan.danhSachVe;
      return danhSachVe.map((ghe,index) => {
          return(
            <span style={{marginRight:'20px', marginBottom:'5px',minWidth:'52px'}}>{ghe.stt}</span>
          )
      })
  }
    render() {
        console.log('thanh Toan Com',this.props.datVeThanhToan);
        let {ttPhim} =this.props;
       const {email} = JSON.parse(localStorage.getItem(settings.userLogin));
       console.log('localstorage',typeof JSON.parse(localStorage.getItem(settings.userLogin)))
        return (
            <Fragment>
                 <div className={styles.thanhToan}>
        <div className={styles.thanhTien}>{this.tinhTien()}đ</div>
                <div className={styles.tieuDePhim}>
                    <span className={styles.rap}>{ttPhim.tenRap}</span>
                    <span className={styles.tieuDePhim_title}>{ttPhim.tenPhim}</span>
                    <div style={{paddingTop:'5px'}} className={styles.tenRap}>{ttPhim.tenCumRap}</div>
                    <div className={styles.tenRap}>Ngày {ttPhim.ngayChieu} - {ttPhim.gioChieu} - {ttPhim.tenRap}</div>
                </div>
                <div className={styles.datGhe}>
                    <div className={styles.datGhe_title}>Ghế đã đặt</div>
                    <div className={`${styles.ticket} row`}>
                       {this.renderGhe()}               
                    </div>
                </div>
                <div className={styles.lienLac}>
                    <span className={styles.email}>taiKhoan: </span>
                    <span className={styles.email_item}>{localStorage.getItem(settings.taiKhoan)}</span>
                </div>
                <div className={styles.lienLac}>
                    <span className={styles.email}>Email: </span>
                    <span className={styles.email_item}>{email}</span>
                </div>
                <div className={styles.hinhThuc}>
                    <div style={{}} className={styles.hinhThuc_item}>Hình thức thanh toán</div>
             
  <div style={{alignItems:'center',display:'flex',padding:'10px 1.25rem'}} className="form-check">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
    <label className="form-check-label" htmlFor="exampleRadios1">
        <img src="../assets/images/zalopay.png" width='40px' height='40px' alt=""/>
Thanh toán qua ZaloPay    </label>
  </div>
  <div style={{alignItems:'center',display:'flex',padding:'10px 1.25rem'}} className="form-check">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
    <label className="form-check-label" htmlFor="exampleRadios1">
        <img src="../assets/images/zalopay.png" width='40px' height='40px' alt=""/>
Thanh toán qua ZaloPay    </label>
  </div>
  <div style={{alignItems:'center',display:'flex',padding:'10px 1.25rem'}} className="form-check">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
    <label className="form-check-label" htmlFor="exampleRadios1">
        <img src="../assets/images/zalopay.png" width='40px' height='40px' alt=""/>
Thanh toán qua ZaloPay    </label>
  </div>
            <div className={styles.noiQuy}>
                <span style={{paddingRight:'5px'}}><img src="../assets/images/warning.png" width='20px' height='20px' alt=""/></span>
                Vé đã mua không thể đổi hoặc hoàn tiền
Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</div>
           <div style={{textAlign:'center'}}>
           <button onClick={()=>this.props.datVe(this.props.datVeThanhToan)} className={`${styles.datVeButton} btn btn-success`}>Đặt Vé</button>
           </div>
           
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        datVe: (thongTinDatVe) => dispatch(datVeAction(thongTinDatVe))
    }
}

export default connect(null, mapDispatchToProps)(ThanhToanComponent);
