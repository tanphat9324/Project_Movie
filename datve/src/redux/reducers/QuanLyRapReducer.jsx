import {actionType} from '../constants/QuanLyRapConstant';
const initialState = {
dMucRap:[]
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
    
    case actionType.NHAN_DANH_MUC_HE_THONG_RAP:{
        state.dMucRap=action.dmuc;
        return {...state}
    }
    default:
        return state
    }
}
