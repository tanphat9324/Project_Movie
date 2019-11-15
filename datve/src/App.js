import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Home } from './templates/HomeTemplate.jsx/Home';
import HomePage from './components/pages/HomePage/HomePage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { Admin } from './templates/AdminTemplate/Admin';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import AddUserAdmin from './components/AddUserAdmin/AddUserAdmin';
import { PrivateRoute } from './templates/PrivateRoute';
import { PublicRoute } from './templates/PublicRoute';
import QuanLyNguoiDungPage from './components/pages/QuanLyNguoiDungPage/QuanLyNguoiDungPage';
import QuanLyNguoiDungAdmin from './components/QuanLyNguoiDungAdmin/QuanLyNguoiDungAdmin';
// import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import QuanLyPhimAdmin from './components/QuanLyPhimAdmin/QuanLyPhimAdmin';
import ThongTinCaNhanPage from './components/pages/ThongTinCaNhanPage/ThongTinCaNhanPage';
import ModalLogout from './components/NotiAdmin/ModalLogout/ModalLogout';
import DetailMovie from './components/DetailMovie/DetailMovie';
import LichChieuChiTiet from './components/LichChieuChiTiet/LichChieuChiTiet';
import ChiTietPhongVePage from './components/pages/ChiTietPhongVePage/ChiTietPhongVePage';
import ThanhToanComponent from './components/pages/ChiTietPhongVePage/ThanhToanComponent/ThanhToanComponent';
import NotFound404Page from './components/pages/NotFound404Page/NotFound404Page';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact component={DetailMovie} path="/chitietphim/:id"  />
          <Route component={ChiTietPhongVePage} path="/chitietdatve/:id" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={RegisterPage} path="/register" exact />
          <Route component={HomePage} path="/" exact />
          <PublicRoute restricted={true} component={ThongTinCaNhanPage} path="/thongtinnguoidung" exact />
          <PrivateRoute exact component={AddUserAdmin} path="/admin/register" />
          <PrivateRoute exact path="/admin" Component={DashboardAdmin} />
          <PrivateRoute exact path="/admin/quanlynguoidung" Component={QuanLyNguoiDungAdmin} />
          <PrivateRoute exact path="/admin/quanlyphim" Component={QuanLyPhimAdmin} />
          <Route path="*" component={NotFound404Page} />

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;





