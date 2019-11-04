import {actionType} from '../constants/QuanLyPhimConstant';

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
            return {...state}
        }
        default: return state;
    }
}
