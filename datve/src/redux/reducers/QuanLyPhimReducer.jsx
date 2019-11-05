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
            console.log('store',action.phimSua);
            state.phimSua = action.phimSua;
            console.log('luu store',state.phimSua);
            return {...state}
        }
        default: return state;
    }
}
