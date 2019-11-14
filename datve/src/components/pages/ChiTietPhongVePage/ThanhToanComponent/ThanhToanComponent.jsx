import React, { Component,Fragment } from 'react'
import styles from './ThanhToanComponent.module.css'

export default class ThanhToanComponent extends Component {
    render() {
        return (
            <Fragment>
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
