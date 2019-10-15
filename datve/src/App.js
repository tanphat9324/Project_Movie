import React, { Fragment } from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Home } from './templates/HomeTemplate.jsx/Home';
import HomePage from './components/pages/HomePage/HomePage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Switch>
    <Home exact path='/' Component={HomePage}/>
    <Route exact path='/register' component={RegisterPage} />
      </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;





