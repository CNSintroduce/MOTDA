import React from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style";

const MainIntro = () => {
  return (
    <>
      <MainHeader />
      <s.MainTop>
        <s.CNSText>C are</s.CNSText>
        <s.CNSText>N</s.CNSText>
        <s.CNSText>S ervice</s.CNSText>
        <s.CNSText2>
          당신의 시작을 가치있게, <br />
          입학 원서 접수 사이트를 개발하는 <s.CNS>CNS</s.CNS> 입니다.
        </s.CNSText2>
      </s.MainTop>
    </>
  );
};

export default MainIntro;
