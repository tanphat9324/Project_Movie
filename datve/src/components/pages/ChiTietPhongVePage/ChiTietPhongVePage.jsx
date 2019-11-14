import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './ChiTietPhongVePage.module.css'
import Header from '../../Header/Header';
import { layDanhSachPhongVeAction, datVeAction } from '../../../redux/actions/QuanLyDatVeAction';
import {settings} from '../../../common/Config/settings'

 class ChiTietPhongVePage extends Component {
     constructor(props){
         super(props);
         this.state={
             datVe:{
                maLichChieu: this.props.match.params.id,
                danhSachVe: [],
                taiKhoanNguoiDung: localStorage.getItem(settings.taiKhoan)
             },
             mangGheDaChon:[]
         }
     }
     componentDidMount(){
         this.props.layDSPhongVe(this.props.match.params.id)
     }
     mangGheChon = [];

    //  mangGheDaChon =() =>{
    //   return this.props.dsGhe.map((ghe,index)=>{
    //       if(ghe.daDat){
    //           this.mangGheChon.push(ghe.stt);
    //         this.setState({
    //             mangGheDaChon: this.mangGheChon
    //         })
    //       }
    //   })
        
    //  }
     datGhe = (ghe) =>{         
        let indexGhe = this.state.datVe.danhSachVe.findIndex(x => {return x === ghe});
        console.log('indexGhe',indexGhe);
        console.log('mangGheDaChon',this.mangGheChon);
        if(indexGhe !== -1){
            this.mangGheChon.splice(indexGhe,1);
         return   this.setState({
                datVe: {...this.state.datVe,danhSachVe:this.mangGheChon}
            })
        }
        if(indexGhe === -1){
            this.mangGheChon.push(ghe);
         return   this.setState({
            datVe: {...this.state.datVe,danhSachVe:this.mangGheChon}
            })
        }
        // console.log('danh Sach Ve',this.state.datVe);
        
     }
    
     thanhToanVe = () =>{
        this.props.datVe(this.state.datVe)
    }

     trangThaiGhe = (ghe)=>{
        let gheIndex = this.state.datVe.danhSachVe.findIndex(x => {return x === ghe})
        // console.log(gheIndex);
       
        if(ghe.daDat){
            return 'btn btn-danger'
        }else if(gheIndex !== -1){
            return 'btn btn-success'
        }else if(ghe.loaiGhe === 'Thuong'){
            return 'btn btn-secondary'
        }else if(ghe.loaiGhe === 'Vip'){
            return 'btn btn-warning'
        }
     }

    render() {        
        // console.log('dat Ghe',this.state.mangGheDaChon);
        
        return (
            <Fragment>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.Rap}>
                        <div className={styles.tenRap}>
                            <img src="../assets/images/i1.png" width='50px' height='50px' alt=""/>
                            <div className={styles.tieuDeRap}>
                                <div>BHD Star - Vincom 3/2</div>
                                <div>Hôm nay - 15:30 - Rạp 1</div>
                            </div>
                        </div>
                        <div className={styles.thoiGianGiuGhe}>
                            <div>thời gian giữ ghế</div>

                        </div>
                    </div>
                    <div className={styles.content_DatVe}>
                        <img src="../assets/images/screen.png" alt=""/>
                        <div className={`${styles.content_ghe} row`}>
                            <div className="col-md-2 text-center">
                                {this.props.dsGhe.slice(0,16).map((ghe,index)=>{
                                    return(
                                        <button disabled={ghe.daDat ?'disabled': ''} onClick={()=>this.datGhe(ghe)} style={{marginRight:'5px', marginBottom:'5px',minWidth:'52px'}} className={this.trangThaiGhe(ghe)}>{ghe.stt}</button>
                                    )
                                })}
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6 text-center">
                            {this.props.dsGhe.slice(17,84).map((ghe,index)=>{
                                    return(
                                        <button disabled={ghe.daDat ?'disabled': ''} onClick={()=>this.datGhe(ghe)} style={{marginRight:'5px', marginBottom:'5px',minWidth:'52px'}} className={this.trangThaiGhe(ghe)}>{ghe.stt}</button>
                                    )
                                })}
                            {/* <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button> 
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button> */}
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-2 text-center">
                            {this.props.dsGhe.slice(84,100).map((ghe,index)=>{
                                    return(
                                        <button disabled={ghe.daDat ?'disabled': ''} onClick={()=>this.datGhe(ghe)} style={{marginRight:'5px', marginBottom:'5px',minWidth:'52px'}} className={this.trangThaiGhe(ghe)}>{ghe.stt}</button>
                                    )
                                })}
                            {/* <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            <div className={styles.thanhToan}>
                <div className={styles.thanhTien}>130.000d</div>
                <div className={styles.tieuDePhim}>
                    <div>Những Thiên Thần của Charlie</div>
                    <div>BHD Star - Vincom 3/2</div>
                    <div>Ngày mai 14/11/2019 - 13:30 - RẠP 5</div>
                </div>
                <div className={styles.datGhe}>
                    <div>Ghe</div>
                    <div>130.000d</div>
                </div>
                <div className={styles.lienLac}>
                    <div>Email</div>
                    <div>tanphat9324@gmail.com</div>
                </div>

            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    dsPhongVe: state.QuanLyDatVeReducer.dsPhongVe,
    dsGhe: state.QuanLyDatVeReducer.dsGhe,
    thongTinPhim: state.QuanLyDatVeReducer.thongTinPhim
  })
  
  const mapDispatchToProps = dispatch =>{
    return{
      layDSPhongVe: (maLichChieu) => dispatch(layDanhSachPhongVeAction(maLichChieu)),
      datVe: (thongTinDatVe) => dispatch(datVeAction(thongTinDatVe))
    }
  }

  
export default connect(mapStateToProps,mapDispatchToProps)(ChiTietPhongVePage);