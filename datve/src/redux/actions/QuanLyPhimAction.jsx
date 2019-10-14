import { actionType } from '../constants/QuanLyPhimConstant';
import axios from 'axios';
import {settings} from '../../common/Config/settings';

export const nhanDanhSachPhim = dsPhim => {
    return {
        type: actionType.NHAN_DANH_SACH_PHIM,
        dsPhim
    }
}

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            method: 'GET',
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhim?maNhom=${settings.groupID}`
        }).then(res => {
            console.log(res.data);
            dispatch(nhanDanhSachPhim(res.data));
        }).catch(err => {
            console.log(err.response);
        })
    }
}