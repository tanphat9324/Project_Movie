import {actionType} from '../constants/QuanLyPhimConstant';

const initialState = {
dsPhim:[]
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.NHAN_DANH_SACH_PHIM:{
            state.dsPhim = action.dsPhim;
            return {...state}
        }
        default: return state;
    }
}
