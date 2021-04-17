import React from 'react';
import Box from '@material-ui/core/Box';
import {Link, useLocation} from 'react-router-dom';

import style from '../../resource/css/header.module.css';


const MainHeader = () => {
    const pathName = useLocation().pathname;
  
    return(
        <Box display='flex' flexDirection='row' className={style.header}>
            <Link to='/' className={pathName == '/' ? style.active : ''}>
                HOME
            </Link>
            <Link to='/movie' className={pathName == '/movie' ? style.active : ''}>
                MOVIE
            </Link>
            <Link to='/todo' className={pathName == '/todo' ? style.active : ''}>
                TODO
            </Link>
        </Box>
    );
};

export default MainHeader;