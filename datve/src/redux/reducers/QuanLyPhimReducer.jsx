import {actionType} from '../constants/QuanLyPhimConstant';

const initialState = {
dsPhim:[],
PhimSua:{
    maPhim:'',
    tenPhim:'',
    biDanh:'',
    trailer:'',
    hinhAnh:'',
    moTa:'',
    ngayKhoiChieu:'',
    danhGia:'3'
}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.NHAN_DANH_SACH_PHIM:{
            state.dsPhim = action.dsPhim;
            return {...state}
        }
        case actionType.NHAN_THONG_TIN_PHIM:{
            state.PhimSua = action.thongTinPhim;
            return {...state}
        }
        default: return state;
    }
}
