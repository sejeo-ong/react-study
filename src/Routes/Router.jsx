import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeComponent from '../Components/HomeComponent';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={HomeComponent}></Route>
        </BrowserRouter>
    );
};

export default Router;