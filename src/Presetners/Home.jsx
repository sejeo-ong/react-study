import { Box } from '@material-ui/core';
import React from 'react';
import style from '../resource/css/home.module.css';

const Home = (props) => {
    return(
        <div className={style.main}>
            <div className={style.banner} style={{ background: `url(${process.env.PUBLIC_URL}/images/background-image.jpg) no-repeat`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center center'}}>
                <div className={style.info}>
                    <div className={style.subTitle}>REACT STUDY</div>
                    <div className={style.title}>칼바람 하실 분</div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.content}>안녕하세요 스터디를 진행하고 있는 전세정입니다😜</div>
                <div className={style.containerTitle}>👀 저의 <span>취미</span>는요</div>
                <Box display="flex" flexDirection="row" flexWrap="wrap" className={style.hobbyListContainer}>
                    {
                        props.hobby.map((item)=> {
                            return (
                            <Box className={style.hobbyItem} display="flex" flexDirection="column">
                                <div style={{ background: `url(${process.env.PUBLIC_URL}/images/${item.src}) no-repeat`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center center'}} className={style.imageWrapper} >
                                    <div className={style.imageSizer}>

                                    </div>
                                </div>
                                <Box display="flex" flexDirection="column">
                                    <span className={style.title}>{item.title}</span>
                                    <p className={style.content}>{item.content}</p>
                                </Box>
                               
                            </Box>
                            )
                        })
                    }
                </Box>
            </div>
        </div>
    );
};

export default Home;