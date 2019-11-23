import { actionType } from "../constants/QuanLyDatVeConstant";
const initialState = {
dsPhongVe:[],
dsGhe:[],
thongTinPhim:[]
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
   case actionType.NHAN_DANH_SACH_PHONG_VE:{
    let dsPhongVe = {...action.thongTinPhongVe};
    let dsGhe = dsPhongVe.danhSachGhe;
    let thongTinPhim = dsPhongVe.thongTinPhim;
    state.dsGhe = dsGhe;
    state.thongTinPhim = thongTinPhim;    
    return {...state}
   }
    default:
      return state;
  }
};
