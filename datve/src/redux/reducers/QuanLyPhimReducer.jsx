import {actionType} from '../constants/QuanLyPhimConstant';
import dayjs from 'dayjs';

const initialState = {
dsPhim:[],
phimSua:{}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.NHAN_DANH_SACH_PHIM:{
            state.dsPhim = action.dsPhim;
            return {...state}
        }
        case actionType.CHINH_SUA_PHIM: {            
            state.phimSua = action.phimSua;
            let formatDay = {...state.phimSua};
            let suaDinhDangNgayChieu = dayjs(formatDay.ngayKhoiChieu).format('DD/MM/YYYY');
            formatDay.ngayKhoiChieu = suaDinhDangNgayChieu;
            state.phimSua = formatDay;
            console.log('state phimSua',state.phimSua);
            
            return {...state}
        }
        default: return state;
    }
}
