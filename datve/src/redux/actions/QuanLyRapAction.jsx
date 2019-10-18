import {actionType} from '../constants/QuanLyRapConstant';
import axios from 'axios';
import {settings} from '../../common/Config/settings';

export const nhanDanhMucRap = dmuc => {
    return {
        type: actionType.NHAN_DANH_MUC_HE_THONG_RAP,
        dmuc
    }
}

export const layDanhMucRap = () =>{
    return dispatch => {
        axios({
            method:'GET',
            url: settings.domain + `/QuanLyRap/LayThongTinHeThongRap`,
        }).then(res => {
            dispatch(nhanDanhMucRap(res.data));
        }).catch(err => {
            console.log(err.response);
        })
    }
}