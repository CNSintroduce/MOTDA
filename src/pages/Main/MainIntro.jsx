import React, { useState, useEffect } from "react";
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
import Last from "../../assets/img/Last.svg";

const MainIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [Challenge, Navigate, Succeed];
  const selectedImageUrl = imageUrls[currentIndex];

  const updateCurrentIndex = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(imageUrls.length - 1); // 배열의 마지막 인덱스로 설정
    } else if (newIndex >= imageUrls.length) {
      setCurrentIndex(0); // 배열의 첫 인덱스로 설정
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      updateCurrentIndex(currentIndex - 1);
    } else if (direction === "right") {
      updateCurrentIndex(currentIndex + 1);
    }
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
        <s.MainMiddleImg src={selectedImageUrl} alt="" />
        <s.ArrowLine>
          <s.Arrow onClick={() => handleArrowClick("left")}>
            <s.ArrowImg src={leftarrow} alt="" />
          </s.Arrow>
          <s.Arrow onClick={() => handleArrowClick("right")}>
            <s.ArrowImg src={rightarrow} alt="" />
          </s.Arrow>
        </s.ArrowLine>
      </s.MainMiddle>
      <s.CNSBottom>
        <s.CNSP>당신의 시작을 그려주는 동아리, CNS입니다.</s.CNSP>
        <img src={Last} alt="" />
      </s.CNSBottom>
    </>
  );
};

export default MainIntro;
