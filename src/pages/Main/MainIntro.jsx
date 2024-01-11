import React from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style";
import one from "../../../public/img/one1.svg";
import one2 from "../../../public/img/one2.svg";
import imsi from "../../../public/img/imsi.svg";

const MainIntro = () => {
  return (
    <>
      <MainHeader />

      <s.MainTop>
        <s.CNSText>
          <s.CNS2>C</s.CNS2> are <br></br>
          <s.CNS2>N </s.CNS2>
          <br></br>
          <s.CNS2>S</s.CNS2> ervice
        </s.CNSText>
        <s.CNSText2>
          당신의 시작을 가치있게, <br />
          입학 원서 접수 사이트를 개발하는 <s.CNS>CNS</s.CNS> 입니다.
        </s.CNSText2>
      </s.MainTop>

      <s.One1 src={one} alt="" />
      <s.One2 src={one2} alt="" />
      <s.imsi src={imsi} alt="" />
    </>
  );
};

export default MainIntro;
