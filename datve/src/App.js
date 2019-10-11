import React from 'react';
import logo from './logo.svg';
import './App.css';

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';


function App() {

  return (
    <div className="App">
  <Header/>
  <Carousel/>
    </div>
  );
}

export default App;





