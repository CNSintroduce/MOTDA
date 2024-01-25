import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/Header2/Header2";
import * as S from "../Offer/Offer.style";

import serviceMain from "../../assets/img/serviceMain.png";
import service2nd from "../../assets/img/service2page.svg";
import mokup2 from "../../assets/img/mokup2.png";
import serviceBackground from "../../assets/img/serivceBackground.svg";
import bluelineBackground from "../../assets/img/bluelineBackground.svg";
import whitelineBackground from "../../assets/img/servicewhiteline.svg";
import idamain from "../../assets/img/idamain.svg";
import idasecond from "../../assets/img/idasecond.svg";
import lessflowmain from "../../assets/img/lessf!owmain.svg";
import lessflowsecond from "../../assets/img/lessflowsecond.svg";

import cnsLogo from "../../assets/cns.svg";

const Offer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isMain = location.pathname === "/";

  return (
    <>
      <Header />
      <>
        <S.ServiceMain src={serviceMain} alt="error" />
        <>
          <S.Page2Img>
            <S.Service2 src={service2nd} alt="error" />
            <S.Page2div>
              <S.Page2Text>
                꿈을 이루기 위한 도전의 첫걸음을 함께합니다.
              </S.Page2Text>
            </S.Page2div>
            <S.Page2ddiv>
                <S.Page2text>
                “<S.Challenge>Challenge</S.Challenge>, 
                <br/> <S.Navigate>Navigate</S.Navigate> 
                <br/> and <S.Success>Success</S.Success>"
                </S.Page2text>
            </S.Page2ddiv>
            <S.Page2dddiv>
                <S.Page2TexT>
                    CNS팀은 도전하는 개발자를 사랑하고 <br/>
                    길잡이가 되어주는 개발자를 응원하고 <br/>
                    여러분이 성공을 즐기는 개발자가 되기를 바랍니다.
                </S.Page2TexT>
            </S.Page2dddiv>
            <S.Mokup2 src={mokup2} alt="error"/>
          </S.Page2Img>
        </>
        <>
            <S.Page3Img src={serviceBackground} alt="error"/>
            <S.Page3Text>
                <S.Present> 신입생을 위한 선물, </S.Present>
            </S.Page3Text>
            <S.IdatTitleWrap>
                <S.IdaTitle> IDA </S.IdaTitle>
            </S.IdatTitleWrap>
          </>
          <>
            <S.blueLine src={bluelineBackground}/>
            <S.IdaFirstWrap>
              <S.IdaFirst>
                <S.IdaFirstIda> IDA</S.IdaFirstIda> 는
              </S.IdaFirst>
            </S.IdaFirstWrap>
            <S.IdaFirstWrap2>
              <S.IdaFirst1>
                신입생의 입학 절차를 도와줄 
              </S.IdaFirst1>
            </S.IdaFirstWrap2>
            <S.IdaFirstWrap3>
              <S.IdaFirst>
                <S.IdaFirstIdaStu> "학생"</S.IdaFirstIdaStu>들이 개발한 
              </S.IdaFirst>
            </S.IdaFirstWrap3>
            <S.IdaFirstWrap4>
              <S.IdaFirst>
                <S.IdaFirstIdaSite> 입학원서 접수 사이트</S.IdaFirstIdaSite>입니다.
              </S.IdaFirst>
            </S.IdaFirstWrap4>
          </>
          <>
            <S.IdaSecondWrap> 
              <S.IdaSecond1> 당신의 새로운 출발을 위한 </S.IdaSecond1>
            </S.IdaSecondWrap>
            <S.IdaSecondWrap1> 
              <S.IdaSecond1> 가장 따뜻한 서비스, </S.IdaSecond1>
            </S.IdaSecondWrap1>
            <S.IdaSecondWrap2> 
              <S.IdaSecond2> IDA </S.IdaSecond2>
            </S.IdaSecondWrap2>
          </>
      </>
      <> 
        <S.WhiteLine src={whitelineBackground}/>
        <S.LessflowTitleWrap>
          <S.LessflowTitle> lessf!ow </S.LessflowTitle>
        </S.LessflowTitleWrap>
        <S.Lessflow2Wrap>
          <S.Lessflow2> 뉴스를 더 쉽게 </S.Lessflow2>
        </S.Lessflow2Wrap>
        <S.Lessflow3Wrap>
          <S.Lessflow3> 불필요한 것은 적게, </S.Lessflow3>
        </S.Lessflow3Wrap>
        <S.Lessflow4Wrap>
          <S.Lessflow3> 정보는 흐르게 </S.Lessflow3>
        </S.Lessflow4Wrap>
      </>
      <>
        <S.LessflowSecondWrap>
          <S.LessflowSecond> lessf!ow </S.LessflowSecond>
        </S.LessflowSecondWrap>
        <S.LessflowSecondWrap1>
          <S.LessflowSecond1> 일분 일초가 바쁜 시대를 살고있는 </S.LessflowSecond1>
        </S.LessflowSecondWrap1>
        <S.LessflowSecondWrap2>
          <S.LessflowSecond1> 여러분들을 위해  </S.LessflowSecond1>
        </S.LessflowSecondWrap2>
        <S.LessflowSecondWrap3>
          <S.LessflowSecond3> 뉴스의 핵심정보를 </S.LessflowSecond3>
        </S.LessflowSecondWrap3>
        <S.LessflowSecondWrap4>
          <S.LessflowSecond1> 빠르고 간략하게 전달 합니다. </S.LessflowSecond1>
        </S.LessflowSecondWrap4>
      </>
      <>
        <S.LessflowThWrap>
          <S.LessflowThTitle> 당신의 하루에 </S.LessflowThTitle>
        </S.LessflowThWrap>
        <S.LessflowThWrap1>
          <S.LessflowThTitle> <S.Lessflowless>lessf!ow</S.Lessflowless>를 더하세요 </S.LessflowThTitle>
        </S.LessflowThWrap1>
      </>
      <S.ButtonWrap>
        <S.CnsHomeButton onClick={() => navigate("/")}> 
          <S.CnsButtonLogo src={cnsLogo}/>
        </S.CnsHomeButton>
      </S.ButtonWrap>
    </>
  );
};

export default Offer;