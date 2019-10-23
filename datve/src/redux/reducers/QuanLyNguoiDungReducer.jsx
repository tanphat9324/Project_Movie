import {actionType} from '../constants/QuanLyNguoiDungConstant';

const initialState = {
    danhSachNguoiDung:[],
    NguoiDungSua:{
            "taiKhoan": "testReducer",
            "matKhau": "321321",
            "email": "TestReducer@gmail.com",
            "soDt": "321321231",
            "maNhom": "GP11",
            "maLoaiNguoiDung": "KhachHang",
            "hoTen": "Test Reducer",
      }
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.NHAN_DANH_SACH_NGUOI_DUNG:{
            state.danhSachNguoiDung = action.danhSach;
            return {...state}
        }
        case actionType.CHINH_SUA_NGUOI_DUNG:{
            state.NguoiDungSua = action.NguoiDungSua;
            console.log('Nguoi dung sua ne',state.NguoiDungSua);
            
            return {...state}
        }
    default:
        return state;
    }
}
