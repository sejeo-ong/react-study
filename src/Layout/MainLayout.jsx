import React from 'react';
import MainHeader from './Items/MainHeader';

const MainLayout = ({children}) => {
    return (
        <div id="app">
            <MainHeader></MainHeader>
            {children}
        </div>
    );
};

export default MainLayout;