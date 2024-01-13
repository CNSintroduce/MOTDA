import React, { useState } from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style";
import one from "../../assets/img/one1.svg";
import one2 from "../../assets/img/one2.svg";
import imsi from "../../assets/img/imsi.svg";
import leftarrow from "../../assets/img/leftarrow.svg";
import rightarrow from "../../assets/img/rightarrow.svg";
import Challenge from "../../assets/img/Challenge.svg";
import Navigate from "../../assets/img/Navigate.svg";
import Succeed from "../../assets/img/Succeed.svg";

const MainIntro = () => {
  const [currentImage1, setCurrentImage1] = useState();
  const [currentImage2, setCurrentImage2] = useState(Challenge);
  const [currentImage3, setCurrentImage3] = useState(Navigate);

  const handlePreviousImage = () => {
    if (currentImage2 === Challenge) {
      setCurrentImage1();
      setCurrentImage2(Challenge);
      setCurrentImage3(Navigate);
    } else if (currentImage2 === Navigate) {
      setCurrentImage1();
      setCurrentImage2(Challenge);
      setCurrentImage3(Navigate);
    } else if (currentImage2 === Succeed) {
      setCurrentImage1(Challenge);
      setCurrentImage2(Navigate);
      setCurrentImage3(Succeed);
    }
    document
      .getElementById("mainMiddleImg")
      .classList.add("animate-slide-right");
    setTimeout(() => {
      document
        .getElementById("mainMiddleImg")
        .classList.remove("animate-slide-right");
    }, 500);
  };

  const handleNextImage = () => {
    if (currentImage2 === Challenge) {
      setCurrentImage1(Challenge);
      setCurrentImage2(Navigate);
      setCurrentImage3(Succeed);
    } else if (currentImage2 === Navigate) {
      setCurrentImage1(Navigate);
      setCurrentImage2(Succeed);
      setCurrentImage3();
    } else if (currentImage2 === Succeed) {
      setCurrentImage1(Navigate);
      setCurrentImage2(Succeed);
      setCurrentImage3();
    }
    document
      .getElementById("mainMiddleImg")
      .classList.add("animate-slide-left");
    setTimeout(() => {
      document
        .getElementById("mainMiddleImg")
        .classList.remove("animate-slide-left");
    }, 500);
  };

  return (
    <>
      <MainHeader />

      <s.MainTop>
        <s.CNSText>
          <s.CNS2>C</s.CNS2> are <br />
          <s.CNS2>N </s.CNS2>
          <br />
          <s.CNS2>S</s.CNS2> ervice
        </s.CNSText>
        <s.CNSText2>
          당신의 시작을 가치있게, <br />
          입학 원서 접수 사이트를 개발하는 <s.CNS>CNS</s.CNS> 입니다.
        </s.CNSText2>
      </s.MainTop>

      <s.One1 src={one} alt="" />
      <s.One2 src={one2} alt="" />
      <s.Imsi src={imsi} alt="" />
      <s.MainMiddle>
        <s.MainMiddleImgLeft src={currentImage1} alt="" />
        <img src={leftarrow} alt="" onClick={handlePreviousImage} />
        <s.MainMiddleImg src={currentImage2} alt="" />
        <img src={rightarrow} alt="" onClick={handleNextImage} />
        <s.MainMiddleImgRight src={currentImage3} alt="" />
      </s.MainMiddle>
    </>
  );
};

export default MainIntro;
