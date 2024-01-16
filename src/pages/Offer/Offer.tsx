import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive';
import Header from "../../components/Header2/Header2"
import * as S from "../Offer/Offer.style";


import serviceMain from "../../assets/img/serviceMain.png"
import service2nd from "../../assets/img/service2page.svg"


const Offer = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })
        
  return (
    <>
      <Header/>
      <>
        <S.ServiceMain src={serviceMain} alt="error"/>
        <S.Service2 src={service2nd} alt="error"/>
      </>
    </>
  );
};

export default Offer;
