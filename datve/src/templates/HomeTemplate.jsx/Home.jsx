import './Home.css';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
const HomeLayout = (props) =>{
    return <Fragment>
        <Header>
            {props.children}
        </Header>
        <Carousel/>
        <Footer/>
    </Fragment>
}

export const Home = ({ Component, ...props}) =>(
    <Route {...props} render = {(propComponent)=>(
    <HomeLayout>
        <Component {...propComponent}/>
    </HomeLayout>
    )}/>
)