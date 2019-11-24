import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import circle from './circle.module.css'
import styles from './DetailMovie.module.css';
import './Bs.css'
import LichChieuChiTiet from '../LichChieuChiTiet/LichChieuChiTiet';
import Footer from '../Footer/Footer';
import { layThongTinLichChieuPhimAction } from '../../redux/actions/QuanLyRapAction';
import FooterChiTiet from './FooterChiTiet';

class DetailMovie extends Component {
  componentDidMount(){
    this.props.layTTLichChieuPhim(this.props.match.params.id);
  }
  rating(diem){
    let rate = (Number(diem)*100)/5;
    // console.log(rate);
    
    return(
      `${rate},100`
    )
  }
  countStar(array){
    const items = [];
    for (let index = 0; index < array; index++) {
      items.push(<img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>)
    }
    return items;
  }
  countStar1(array){
    const items = [];
    for (let index = 0; index < 5-array; index++) {
      items.push(<img src="../assets/images/star1.svg" width='20px' height='20px' alt=""/>)
    }
    return items;
  }

    render() {
        return (
            <Fragment>
                <Header />
                <div className={styles.detailFilm}>
                    <div className={styles.dark}>
                        
                        <div className={styles.bgMain}>

                            <div className={styles.styleBlur}>
                                <img src={"../assets/images/bg_terminator.jpg"} width='100%' height="100%" alt="" />
                            </div>
                         
                            <div className={styles.styleGradient} style={{ background: 'linear-gradient(to top, rgb(10, 32, 41), transparent 100%)' }} />
                    
                            <div className={styles.contentMain}>
                                <div className="row">
                                    <div className="col-md-3">
                                       <img style={{borderRadius:'5px'}} src={this.props.LichChieuPhim.hinhAnh} width='100%' alt=""/>
                                    </div>
                                    <div className="col-md-7" style={{display:'flex',alignItems:'center'}}>
                                        <div>

                                    <div className={styles.info}>01.11.2019</div>
                                    <div style={{minWidth:'545px',minHeight:'78px'}} className={styles.title}>{this.props.LichChieuPhim.tenPhim}</div>
                                    <div style={{paddingBottom:'25px'}} className={styles.info}>128 phút - 6.6 IMDb - 2D/Digital/3D/IMAX/4DX</div>
                                    <a href='#lichChieuChiTiet' style={{padding:'7px 25px'}} className='btn btn-danger'>
                                        Mua vé
                                    </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.danhGia} col-md-2`}>
                                        <div>

                                <div className={circle.flex_wrapper}>
                                            <div className={circle.single_chart}>
                                                <svg viewBox="0 0 36 36" className={`${circle.circular_chart} ${circle.green}`}>
                                                <path className={circle.circle_bg} d="M18 2.0845
                                                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                <path className={circle.circle} strokeDasharray={this.rating(this.props.LichChieuPhim.danhGia)} d="M18 2.0845
                                                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
    <text x={18} y="22.35" className={circle.percentage}>{this.props.LichChieuPhim.danhGia}/5</text>
                                                </svg>
                                            </div>
                                            </div>
                                    <div className={styles.star}>
                                       {this.countStar(this.props.LichChieuPhim.danhGia)}
                                       {this.countStar1(this.props.LichChieuPhim.danhGia)}

                                    </div>
                                    <div className={styles.review}>20 người đánh giá</div>
                                        </div>
                                       
                                    </div>

                                </div>
                      
                            </div>
                          
                        </div>
                        <div className={styles.lichChieu}>
                        <ul className={`${styles.content} nav nav-pills mb-3`} id="pills-tab" role="tablist">
    <li className="nav-item lichChieuItem">
      <a className=" nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch Chiếu</a>
    </li>
    <li className="nav-item lichChieuItem">
      <a className=" nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông Tin</a>
    </li>
    <li className="nav-item lichChieuItem">
      <a className=" nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Đánh Giá</a>
    </li>
  </ul>
  <div className={`${styles.tabContent} tab-content`} id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><LichChieuChiTiet/></div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <div class="row detailMainStyle">
              <div class="col-sm-6 col-xs-12 film left">
                <div class="row rowLeftInfo">
                  <p class="contentTitle">Ngày phát hành</p>
                  <p class="contentInfo ng-binding">01.11.2019</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentTitle">Đạo diễn</p>
                  <p class="contentInfo ng-binding"> Kim Do-Young </p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentTitle">Diễn viên</p>
                  <p class="contentInfo ng-binding">Lee Seung Gi, Suzy</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentTitle">Thể Loại</p>
                  <p class="contentInfo ng-binding">tâm lý, tình cảm</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentTitle">Định dạng</p>
                  <p class="contentInfo ng-binding">2D/Digital</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentTitle">Quốc Gia SX</p>
                  <p class="contentInfo ng-binding">Hàn Quốc</p>
                </div>
              </div>
              <div class="col-sm-6 col-xs-12 film right">
                <div class="row rowLeftInfo">
                  <p class="contentTitle">Nội dung</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentInfoFull description ng-binding">{this.props.LichChieuPhim.moTa}</p>
                </div>

                <div class="row rowLeftInfo">
                  <p class="contentInfoFull"></p>
                </div>

              </div>
            </div>  
    </div>
    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div  className='detailMainStyle'>
        <div className='pt-3'>
        <div className={styles.MyReview}>
        <div className={styles.danhGiaPhim}>
          <img src="../assets/images/avatar.png" width='36px' height='36px' alt=""/>
          <span className={styles.danhGiaPhim_text} style={{paddingLeft:'10px'}}>Bạn nghĩ gì về phim này?</span>
        </div>
        <div className={styles.reviewPhim}>
        <img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>
        <img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>
        <img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>
        <img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>
        <img src="../assets/images/star.svg" width='20px' height='20px' alt=""/>
        </div>
        </div>
        </div>
       
<div className='pt-3'>
<div className={styles.Comment}>
  <div className={styles.CommentItem}>
  <div className={styles.avatar}>
          <img src="../assets/images/avatar.png" width='32px' height='32px' alt=""/>
          <div style={{paddingLeft:'10px'}}>
            <div className={styles.nameComment}>Messi</div>
            <div className={styles.timeComment}>9h trước</div>
          </div>
     </div>
     <div className={styles.point}>
       <div style={{textAlign:'center',fontSize:'16px',color:'green'}}>10</div>
          <div>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
        </div>
          </div>
  </div>
 <div className={styles.reViewItem}>Phim hay. Quả không hổ danh là một trong những phim bom tấn của đợt này. Dàn diễn viên thần thái, diễn xuất đỉnh cùng với các pha hành động, kỹ xảo cực kỳ mãn nhãn. Thật đáng đồng tiền bát gạo mà. 🤩🤩🤩</div>

    <div className={styles.likeIcon}>
     <span><img src="../assets/images/like.svg" width="16px" height='16px' alt=""/></span> 
    <span style={{fontWeight:'500'}} className={styles.Icon}>1.365</span>
     <span className={styles.Icon}>Thích</span>
    </div>
     </div>
        </div>

        <div className='pt-3'>
<div className={styles.Comment}>
  <div className={styles.CommentItem}>
  <div className={styles.avatar}>
          <img src="../assets/images/avatar.png" width='32px' height='32px' alt=""/>
          <div style={{paddingLeft:'10px'}}>
            <div className={styles.nameComment}>Messi</div>
            <div className={styles.timeComment}>9h trước</div>
          </div>
     </div>
     <div className={styles.point}>
       <div style={{textAlign:'center',fontSize:'16px',color:'green'}}>10</div>
          <div>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
          <img src="../assets/images/star.svg" width='10px' height='10px' alt=""/>
        </div>
          </div>
  </div>
 <div className={styles.reViewItem}>Phim hay. Quả không hổ danh là một trong những phim bom tấn của đợt này. Dàn diễn viên thần thái, diễn xuất đỉnh cùng với các pha hành động, kỹ xảo cực kỳ mãn nhãn. Thật đáng đồng tiền bát gạo mà. 🤩🤩🤩</div>

    <div className={styles.likeIcon}>
     <span><img src=".../assets/images/like.svg" width="16px" height='16px' alt=""/></span> 
    <span style={{fontWeight:'500'}} className={styles.Icon}>1.365</span>
     <span className={styles.Icon}>Thích</span>
    </div>
     </div>
        </div>

</div>
     
      </div>
    </div>
  </div>
                        </div>
                    </div>
                    
            
          <FooterChiTiet/>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
  LichChieuPhim:state.QuanLyRapReducer.LichChieuPhim
})

const mapDispatchToProps = dispatch =>{
  return{
    layTTLichChieuPhim:(maPhim)=>dispatch(layThongTinLichChieuPhimAction(maPhim))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);