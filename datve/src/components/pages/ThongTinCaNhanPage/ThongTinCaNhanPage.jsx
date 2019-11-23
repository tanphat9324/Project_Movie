import React, { Component,Fragment } from 'react'
import { Tabs } from 'antd';
import 'hover.css';
import styles from './ThongTinCaNhanPage.module.css';
import {connect} from 'react-redux';
import { Modal } from 'antd';
import ModalTTCaNhan from './ModalTTCaNhan/ModalTTCaNhan';
import { nguoiDangNhap } from '../../../redux/actions/QuanLyNguoiDungAction';
import HeaderAdmin from '../../HeaderAdmin/HeaderAdmin';
import NotiAdmin from '../../NotiAdmin/NotiAdmin';
 class ThongTinCaNhanPage extends Component {
     callback=(key)=> {
        console.log(key);
      }
      constructor(props){
          super(props);
          this.state = {
            modal1Visible: false,
          };
      }
      setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }

      componentDidMount(){
        this.props.nguoiDungDangNhap();
      }
    render() {
        const { TabPane } = Tabs;

        return (
            <Fragment>
                <HeaderAdmin/>
                <div style={{zIndex:'10',width:'100%',margin:'auto 0 auto auto',position:'fixed'}}>
                <NotiAdmin/>
                </div>
                
                <div className={styles.content}>

                <div className={styles.backGround_Cover}>
                    <img src="./assets/images/coverf.jpg" alt=""/>
                    <div className={styles.backgroundLinear}/>
                    <div className={styles.name}>
                    {this.props.TTNguoiDung.hoTen}
                    <div className={styles.typeUser}>{this.props.TTNguoiDung.maLoaiNguoiDung}</div>
                    </div>
                    <div className={styles.avatar}>
                        <img src="./assets/images/zed.jpg" alt=""/>
                    </div>
                <div className={styles.level}>Cấp độ</div>
                <div className={styles.levelUp}>
                    <img src="./assets/images/award1.svg" alt=""/>
                    <span>Lv 96</span>
                </div>
              <div className={styles.progressBar}> 
                <div className={`${styles.progress} ${styles.progress_striped}`}>
                    <div className={styles.progress_bar}>
                    </div>                       
                </div> 
                </div>
                </div>
                
                <div className={styles.background_Info}>
                <div className={`${styles.user_profile} row`}>
                    <div className={`${styles.bgAround} col-md-3`}>
                    <div className={`${styles.profile}`}>
                        <div className={styles.profile_name}>
                       Thông tin cá nhân
                        </div>
                    <div className={styles.profile_item}>
                        <img src="./assets/images/boy.svg" alt=""/>
                        <span> {this.props.TTNguoiDung.taiKhoan}</span>
                    </div>
                    <div className={styles.profile_item}>
                        <img src="./assets/images/level.png" alt=""/>
                        <span> Cấp độ: 95</span>
                    </div>
                    <div className={styles.profile_item}>
                        <img src="./assets/images/password.svg" alt=""/>
                        <span> ******986</span>
                    </div>
                    <div className={styles.profile_item}>
                        <img src="./assets/images/email.svg" alt=""/>
                        <span> {this.props.TTNguoiDung.email}</span>
                    </div>
                    <div className={styles.profile_item}>
                        <img src="./assets/images/smartphone.svg" alt=""/>
                        <span> {this.props.TTNguoiDung.soDT}</span>
                    </div>
                    <div className={styles.profile_item}>
                    <img src="./assets/images/point.svg" alt=""/>
                    <span> Hồ Chí Minh</span>
                    </div>
                    <div className={styles.capNhat}>
                    <button onClick={()=>this.setModal1Visible(true)} className="btn btn-success">Cập nhật</button>
                    </div>
                </div>
                    </div>
                    <Modal
          title="Cập nhật thông tin cá nhân"
          centered
          visible={this.state.modal1Visible}
          footer={null}
        onCancel={() => this.setModal1Visible(false)}
        >
         <ModalTTCaNhan/>
        </Modal>
                <div className="col-md-1"></div>
                <div className={`${styles.bgAround} col-md-8`}>
                <div className={`${styles.table} `}>
                <Tabs className={styles.tableAnt} defaultActiveKey="1" onChange={this.callback}>
                    <TabPane className={styles.tableAnt} tab="Huy hiệu" key="1">
                        <div className={`${styles.huyHieu} row`}>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal0.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal1.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img  className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal2.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal3.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal4.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/medal5.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/cup1.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/cup2.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/cup3.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} hvr-icon-grow  col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/cup4.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="10 bình luận" src="./assets/images/trophy/cup5.svg" alt=""/>
                            </div>
                            <div className={`${styles.medal_item} ${styles.active} hvr-icon-grow col-md-2`}>
                            <img className='hvr-icon' title="Đã mua 100+ phim" src="./assets/images/trophy/winner.svg" alt=""/>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Bình luận" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Lịch sử đặt vé" key="3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="" alt=""/>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    </TabPane>
                </Tabs>
                </div>
                </div>
                
                </div>
                </div>
                </div>
             
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    TTNguoiDung: state.QuanLyNguoiDungReducer.nguoiDangNhap    
})
const mapDispatchToProps = dispatch => {
    return {
      nguoiDungDangNhap: () => dispatch(nguoiDangNhap()),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ThongTinCaNhanPage);