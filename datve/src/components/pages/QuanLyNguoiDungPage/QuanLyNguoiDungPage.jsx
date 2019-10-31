import React, { Component,Fragment } from 'react'
import HeaderAdmin from '../../HeaderAdmin/HeaderAdmin';
import QuanLyNguoiDungAdmin from '../../QuanLyNguoiDungAdmin/QuanLyNguoiDungAdmin';

// let QuanLyNguoiDung = HeaderAdmin(QuanLyNguoiDungAdmin);
export default class QuanLyNguoiDungPage extends Component {
    render() {
        return (
            <Fragment>
                <HeaderAdmin/>
            </Fragment>
        )
    }
}
