import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/index';
// import Header from '../components/Header/Header';
export const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            // isLogin() ?
            isLogin() && restricted ?
            <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};
