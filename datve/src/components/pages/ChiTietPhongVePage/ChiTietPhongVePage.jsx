import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import styles from './ChiTietPhongVePage.module.css'
import Header from '../../Header/Header';

export default class ChiTietPhongVePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.Rap}>
                        <div className={styles.tenRap}>
                            <img src="./assets/images/i1.png" width='50px' height='50px' alt=""/>
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
                        <img src="./assets/images/screen.png" alt=""/>
                        <div className={`${styles.content_ghe} row`}>
                            <div className="col-md-2 text-center">
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>


                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6 text-center">
                            <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>  <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-2 text-center">
                            <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                                <button style={{marginRight:'5px', marginBottom:'5px'}} className='btn btn-success'>12</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
