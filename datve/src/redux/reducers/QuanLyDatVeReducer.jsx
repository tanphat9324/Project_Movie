import {NHAN_DANH_SACH_PHIM} from '../constants/phimConstants';

const initialState = {
dsPhim:[]
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    // switch(action.type){
    //     case NHAN_DANH_SACH_PHIM:{
    //         state.dsPhim = action.dsPhim;
    //         return {...state}
    //     }
    //     default: return state;
    // }
    return {...state}
}
