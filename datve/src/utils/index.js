import {settings} from '../common/Config/settings';

export const logout = () => {
    localStorage.removeItem(settings.token);
    localStorage.removeItem(settings.userLogin);
    // this.props.history.push('/');
}
export const isLogin = () => {
    const userLogin=JSON.parse(localStorage.getItem(settings.userLogin));
    if(userLogin === null){
        return false;
    }else if(userLogin.maLoaiNguoiDung === "QuanTri" || userLogin.maLoaiNguoiDung === "KhachHang"){
        return true
    }
    return false;
}

export const isLoginAdmin = () => {
    const userLogin=JSON.parse(localStorage.getItem(settings.userLogin));
    if(userLogin === null){
        return false;
    }else if(userLogin.maLoaiNguoiDung === "QuanTri"){
        return true
    }
    return false;
}
export const isLoginUser = () => {
    const userLogin=JSON.parse(localStorage.getItem(settings.userLogin));
    if(userLogin === null){
        return false;
    }else if(userLogin.maLoaiNguoiDung === "KhachHang"){
        return true
    }
    return false;
}