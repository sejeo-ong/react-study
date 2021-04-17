import React from 'react';
import MainLayout from '../Layout/MainLayout';
import Home from '../Presetners/Home';

const HomeComponent = () => {

    const hobby = [
        {
            title: '칼바람',
            content: '칼바람 하실 분을 찾습니다. 👉머지가머ZI👈 로 친추하고 같이 게임해요~',
            src:'hobby1.jpg',
        },
        {
            title: 'YOUTUBE 시청',
            content: '혹시 여러분들이 좋아하고 재미있는 YOUTUBE 채널이 있다면 알려주세요! 저는 요즘 오분순삭 보는 중🤭',
            src:'hobby2.jpg'
        },
        {
            title: 'NETFLIX 보기',
            content: '추천해주실 영화가 있나요? 외국영화면 더 좋아요!',
            src:'hobby3.jpg',
        },
        {
            title: '떡볶이 먹기',
            content: '엽떡 로제떡볶이가 맛있는데.. 배떡 로제떡볶이는 아직 못먹어봤어요..',
            src:'hobby4.jpg'
        },
        {
            title: '날씨 좋은 날 걸어다니기',
            content: '해가 맑을 때 걸어다니는게 얼마나 기분이 좋게요~',
            src:'hobby5.jpg',
        },
        {
            title: '1인 피자 먹기',
            content: '건대 근처에 1인 피자 파는거 아셨나요? 존맛탱이더라구요',
            src:'hobby6.jpg'
        },
    ];

    const componentDidMount = () => {
        // 스크롤 이벤트 적용
        console.log('scroll');
      }

    return(
        <MainLayout>
            <Home hobby={hobby}></Home>
        </MainLayout>
    );
};

export default HomeComponent;