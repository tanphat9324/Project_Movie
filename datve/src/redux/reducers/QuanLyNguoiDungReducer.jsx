import {actionType} from '../constants/QuanLyNguoiDungConstant';

const initialState = {
    danhSachNguoiDung:[]
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.NHAN_DANH_SACH_NGUOI_DUNG:{
            state.danhSachNguoiDung = action.danhSach;
            console.log(state.danhSachNguoiDung);
            return {...state}
        }
    default:
        return state;
    }
}
