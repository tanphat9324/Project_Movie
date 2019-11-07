import React, { Component,Fragment } from 'react'
import styles from './ThongTinCaNhanPage.module.css';
import { Tabs } from 'antd';
import 'hover.css';
import Header from '../../Header/Header';

export default class ThongTinCaNhanPage extends Component {
     callback=(key)=> {
        console.log(key);
      }
    render() {
        const { TabPane } = Tabs;

        return (
            <Fragment>
                <Header/>
                <div className={styles.content}>

                <div className={styles.backGround_Cover}>
                    <img src="./assets/images/coverf.jpg" alt=""/>
                    <div className={styles.backgroundLinear}/>
                    <div className={styles.name}>
                    Lee Sang Hyeok
                    </div>
                    <div className={styles.avatar}>
                        <img src="./assets/images/faker.jpg" alt=""/>
                    </div>
                </div>
                <div className={styles.background_Info}>

                <div className={`${styles.user_profile} row`}>
                    <div className={styles.bgAround}>
                        
                    </div>
                <div className={`${styles.profile} col-md-3`}>
                    <h5>Thông tin cá nhân</h5>
                    <div className={styles.taiKhoan}>
                        <img src="./assets/images/boy.svg" alt=""/>
                        <span> phat9324</span>
                    </div>
                    <div className={styles.capDo}>
                        <img src="./assets/images/level.png" alt=""/>
                        <span> Lv: 95</span>
                    </div>
                    <div className={styles.matKhau}>
                        <img src="./assets/images/password.svg" alt=""/>
                        <span> ******986</span>
                    </div>
                    <div className={styles.email}>
                        <img src="./assets/images/email.svg" alt=""/>
                        <span> tanphat@gmail.com</span>
                    </div>
                    <div className={styles.sdt}>
                        <img src="./assets/images/smartphone.svg" alt=""/>
                        <span> 0983001418</span>
                    </div>
                    <div className={styles.location}>
                    <img src="./assets/images/point.svg" alt=""/>
                    <span> Hồ Chí Minh</span>
                    </div>
                    <button className="btn btn-success">Cập nhật</button>
                </div>
                <div className="col-md-1"></div>
                {/* <div className="col-md-1"></div> */}

                <div className={`${styles.table} col-md-8`}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Huy hiệu" key="1">
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
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                </div>
                </div>
                </div>
                </div>
             
            </Fragment>
        )
    }
}
