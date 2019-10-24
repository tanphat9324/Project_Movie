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
            const data = action.danhSach;
            for(let i=0;i<data.length;i++){
                data[i]["stt"]=i+1;
              }
            state.danhSachNguoiDung = data;
            return {...state}
        }
        case actionType.CHINH_SUA_NGUOI_DUNG:{
            state.NguoiDungSua = action.NguoiDungSua;
            // console.log('Nguoi dung sua ne',state.NguoiDungSua);
            return {...state}
        }
        case actionType.XOA_NGUOI_DUNG:{
            let mangNguoiDung = {...state.danhSachNguoiDung};
            console.log(state.danhSachNguoiDung);
            
            // let index = mangNguoiDung.findIndex(nguoiDung => nguoiDung.taiKhoan === action.taiKhoan);
            // if(index !== -1){
            //     mangNguoiDung.splice(index,1);
            // }           
            // state.danhSachNguoiDung = mangNguoiDung;
            return {...state}
        }
    default:
        return state;
    }
}
