import { NHAN_DANH_SACH_PHIM } from '../constants/phimConstants';
import axios from 'axios';
import {settings} from '../../common/Config/settings';

export const nhanDanhSachPhim = dsPhim => {
    return {
        type: NHAN_DANH_SACH_PHIM,
        dsPhim
    }
}

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${settings.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`
        }).then(res => {
            console.log(res.data);
            dispatch(nhanDanhSachPhim(res.data));
        }).catch(err => {
            console.log(err.response);
        })
    }
}