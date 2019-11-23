import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HomePage from './components/pages/HomePage/HomePage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import AddUserAdmin from './components/AddUserAdmin/AddUserAdmin';
import { PrivateRoute } from './templates/PrivateRoute';
import { PublicRoute } from './templates/PublicRoute';
import QuanLyNguoiDungAdmin from './components/QuanLyNguoiDungAdmin/QuanLyNguoiDungAdmin';
import QuanLyPhimAdmin from './components/QuanLyPhimAdmin/QuanLyPhimAdmin';
import ThongTinCaNhanPage from './components/pages/ThongTinCaNhanPage/ThongTinCaNhanPage';
import DetailMovie from './components/DetailMovie/DetailMovie';
import ChiTietPhongVePage from './components/pages/ChiTietPhongVePage/ChiTietPhongVePage';
import NotFound404Page from './components/pages/NotFound404Page/NotFound404Page';
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()
const ScrollTop = () => {
  const {pathname} = useLocation()

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null
}

function App() {
  return (
    <Fragment>
      <BrowserRouter history={history}>
        <ScrollTop></ScrollTop>
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
