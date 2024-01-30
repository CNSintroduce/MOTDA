import React, { useEffect, useRef, useState  } from 'react';
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

const Offer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/';

  const animatedElementRef1 = useRef<HTMLDivElement>(null);
  const animatedElementRef2 = useRef<HTMLDivElement>(null);
  const animatedElementRef3 = useRef<HTMLDivElement>(null);
  const animatedElementRef4 = useRef<HTMLDivElement>(null);
  const animatedElementRef5 = useRef<HTMLDivElement>(null);
  const animatedElementRef6 = useRef<HTMLDivElement>(null);
  const animatedElementRef7 = useRef<HTMLDivElement>(null);
  const animatedElementRef8 = useRef<HTMLDivElement>(null); 
  const animatedElementRef9 = useRef<HTMLDivElement>(null);  
  const animatedElementRef10 = useRef<HTMLDivElement>(null); 
  const animatedElementRef11 = useRef<HTMLDivElement>(null); 
  const animatedElementRef12 = useRef<HTMLDivElement>(null); 
  const animatedElementRef13 = useRef<HTMLDivElement>(null); 
  const animatedElementRef14 = useRef<HTMLDivElement>(null); 
  const animatedElementRef15 = useRef<HTMLDivElement>(null); 
  const animatedElementRef16 = useRef<HTMLDivElement>(null); 
  const animatedElementRef17 = useRef<HTMLDivElement>(null); 
  const animatedElementRef18 = useRef<HTMLDivElement>(null); 
  const animatedElementRef19 = useRef<HTMLDivElement>(null); 
  const animatedElementRef20 = useRef<HTMLDivElement>(null); 
  const animatedElementRef21 = useRef<HTMLDivElement>(null); 

  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const OfferScroll = () => {
      const { top: top1 } = animatedElementRef1.current!.getBoundingClientRect();
      const { top: top2 } = animatedElementRef2.current!.getBoundingClientRect();
      const { top: top3 } = animatedElementRef3.current!.getBoundingClientRect();
      const { top: top4 } = animatedElementRef4.current!.getBoundingClientRect(); 
      const { top: top5 } = animatedElementRef5.current!.getBoundingClientRect(); 
      const { top: top6 } = animatedElementRef6.current!.getBoundingClientRect(); 
      const { top: top7 } = animatedElementRef7.current!.getBoundingClientRect(); 
      const { top: top8 } = animatedElementRef8.current!.getBoundingClientRect(); 
      const { top: top9 } = animatedElementRef9.current!.getBoundingClientRect(); 
      const { top: top10 } = animatedElementRef10.current!.getBoundingClientRect(); 
      const { top: top11 } = animatedElementRef11.current!.getBoundingClientRect(); 
      const { top: top12 } = animatedElementRef12.current!.getBoundingClientRect();
      const { top: top13 } = animatedElementRef13.current!.getBoundingClientRect();
      const { top: top14 } = animatedElementRef14.current!.getBoundingClientRect();
      const { top: top15 } = animatedElementRef15.current!.getBoundingClientRect();
      const { top: top16 } = animatedElementRef16.current!.getBoundingClientRect();
      const { top: top17 } = animatedElementRef17.current!.getBoundingClientRect();
      const { top: top18 } = animatedElementRef18.current!.getBoundingClientRect();
      const { top: top19 } = animatedElementRef19.current!.getBoundingClientRect();
      const { top: top20 } = animatedElementRef20.current!.getBoundingClientRect();
      const { top: top21 } = animatedElementRef21.current!.getBoundingClientRect();

  
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      const isInViewPort4 = top4 >= 0 && top4 <= window.innerHeight; 
      const isInViewPort5 = top5 >= 0 && top5 <= window.innerHeight; 
      const isInViewPort6 = top6 >= 0 && top6 <= window.innerHeight; 
      const isInViewPort7 = top7 >= 0 && top7 <= window.innerHeight;
      const isInViewPort8 = top8 >= 0 && top8 <= window.innerHeight;
      const isInViewPort9 = top9 >= 0 && top9 <= window.innerHeight;
      const isInViewPort10 = top10 >= 0 && top10 <= window.innerHeight;
      const isInViewPort11 = top11 >= 0 && top11 <= window.innerHeight;
      const isInViewPort12 = top12 >= 0 && top12 <= window.innerHeight;
      const isInViewPort13 = top13 >= 0 && top13 <= window.innerHeight;
      const isInViewPort14 = top14 >= 0 && top14 <= window.innerHeight;
      const isInViewPort15 = top15 >= 0 && top15 <= window.innerHeight;
      const isInViewPort16 = top16 >= 0 && top16 <= window.innerHeight;
      const isInViewPort17 = top17 >= 0 && top17 <= window.innerHeight;
      const isInViewPort18 = top18 >= 0 && top18 <= window.innerHeight;
      const isInViewPort19 = top19 >= 0 && top19 <= window.innerHeight;
      const isInViewPort20 = top20 >= 0 && top20 <= window.innerHeight;
      const isInViewPort21 = top21 >= 0 && top21 <= window.innerHeight;
  
      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;
      if (isInViewPort4) visibleCount = 4;  
      if (isInViewPort5) visibleCount = 5;
      if (isInViewPort6) visibleCount = 6; 
      if (isInViewPort7) visibleCount = 7;
      if (isInViewPort8) visibleCount = 8;
      if (isInViewPort9) visibleCount = 9;
      if (isInViewPort10) visibleCount = 10;
      if (isInViewPort11) visibleCount = 11;
      if (isInViewPort12) visibleCount = 12;
      if (isInViewPort13) visibleCount = 13;
      if (isInViewPort14) visibleCount = 14;
      if (isInViewPort15) visibleCount = 15;
      if (isInViewPort16) visibleCount = 16;
      if (isInViewPort17) visibleCount = 17;
      if (isInViewPort18) visibleCount = 18;
      if (isInViewPort19) visibleCount = 19;
      if (isInViewPort20) visibleCount = 20;
      if (isInViewPort21) visibleCount = 21;
  
      setVisibleElements(visibleCount);
    };

    window.addEventListener("scroll", OfferScroll);

    return () => {
      window.removeEventListener("scroll", OfferScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <>
        <S.ServiceMain src={serviceMain} alt="error" />
        <>
          <S.Page2Img>
            <S.Service2 src={service2nd} alt="error" />
            <S.Page2div>
              <S.Page2Text 
              ref={animatedElementRef1}
              style={{
                opacity: visibleElements >= 1 ? 1 : 0,
                transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
                transition: "opacity 0.5s, transform 2.3s",
              }}>
                꿈을 이루기 위한 도전의 첫걸음을 함께합니다.
              </S.Page2Text>
            </S.Page2div>
            <S.Page2ddiv>
                <S.Page2text 
                   ref={animatedElementRef2}
                   style={{
                     opacity: visibleElements >= 2 ? 1 : 0,
                     transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
                    transition: "opacity 0.5s, transform 2.3s", 
                   }}>
                “<S.Challenge>Challenge</S.Challenge>, 
                <br/> <S.Navigate>Navigate</S.Navigate> 
                <br/> and <S.Success>Success</S.Success>"
                </S.Page2text>
            </S.Page2ddiv>
            <S.Page2dddiv>
                <S.Page2TexT 
                ref={animatedElementRef3}
                style={{
                  opacity: visibleElements >= 3 ? 1 : 0,
                  transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
                  transition: "opacity 0.5s, transform 2.3s",
                }}>
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
            <S.Page3Text
            ref={animatedElementRef4}
            style={{
              opacity: visibleElements >= 4 ? 1 : 0,
              transform: `translateY(${visibleElements >= 4 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}>
                <S.Present> 신입생을 위한 선물, </S.Present>
            </S.Page3Text>
            <S.IdatTitleWrap
            ref={animatedElementRef5}
            style={{
              opacity: visibleElements >= 5 ? 1 : 0,
              transform: `translateY(${visibleElements >= 5 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}>
                <S.IdaTitle> IDA </S.IdaTitle>
            </S.IdatTitleWrap>
            <S.IdaMainImgWrap>
              <S.IdaMainImg src={idamain}/>
            </S.IdaMainImgWrap>
          </>
          <>
            <S.blueLine src={bluelineBackground}/>
            <S.IdaFirstWrap>
              <S.IdaFirst
              ref={animatedElementRef6}
              style={{
                opacity: visibleElements >= 6 ? 1 : 0,
                transform: `translateY(${visibleElements >= 6 ? "0" : "50px"})`,
                transition: "opacity 0.5s, transform 2.3s",
              }}>
                <S.IdaFirstIda> IDA</S.IdaFirstIda> 는
              </S.IdaFirst>
            </S.IdaFirstWrap>
            <S.IdaFirstWrap2
            ref={animatedElementRef7}
            style={{
              opacity: visibleElements >= 7 ? 1 : 0,
              transform: `translateY(${visibleElements >= 7 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}>
              <S.IdaFirst1>
                신입생의 입학 절차를 도와줄 
              </S.IdaFirst1>
            </S.IdaFirstWrap2>
            <S.IdaFirstWrap3
            ref={animatedElementRef7}
            style={{
              opacity: visibleElements >= 7 ? 1 : 0,
              transform: `translateY(${visibleElements >= 7 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}>
              <S.IdaFirst>
                <S.IdaFirstIdaStu> "학생"</S.IdaFirstIdaStu>들이 개발한 
              </S.IdaFirst>
            </S.IdaFirstWrap3>
            <S.IdaFirstWrap4>
              <S.IdaFirst
              ref={animatedElementRef8}
              style={{
                opacity: visibleElements >= 8 ? 1 : 0,
                transform: `translateY(${visibleElements >= 8 ? "0" : "50px"})`,
                transition: "opacity 0.5s, transform 2.3s",
              }}>
                <S.IdaFirstIdaSite> 입학원서 접수 사이트</S.IdaFirstIdaSite>입니다.
              </S.IdaFirst>
            </S.IdaFirstWrap4>
          </>
          <>
            <S.IdaSecondWrap
            ref={animatedElementRef9}
            style={{
              opacity: visibleElements >= 9 ? 1 : 0,
              transform: `translateY(${visibleElements >= 9 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}> 
              <S.IdaSecond1> 당신의 새로운 출발을 위한 </S.IdaSecond1>
            </S.IdaSecondWrap>
            <S.IdaSecondWrap1
            > 
              <S.IdaSecond1
              ref={animatedElementRef10}
              style={{
                opacity: visibleElements >= 10 ? 1 : 0,
                transform: `translateY(${visibleElements >= 10 ? "0" : "50px"})`,
                transition: "opacity 0.5s, transform 2.3s",
              }}> 가장 따뜻한 서비스, </S.IdaSecond1>
            </S.IdaSecondWrap1>
            <S.IdaSecondWrap2
            ref={animatedElementRef11}
            style={{
              opacity: visibleElements >= 11 ? 1 : 0,
              transform: `translateY(${visibleElements >= 11 ? "0" : "50px"})`,
              transition: "opacity 0.5s, transform 2.3s",
            }}> 
              <S.IdaSecond2> IDA </S.IdaSecond2>
            </S.IdaSecondWrap2>
            <S.IdaSecondImgWrap>
              <S.IdaSecondImg src={idasecond}/>
            </S.IdaSecondImgWrap>
          </>
      </>
      <> 
        <S.WhiteLine src={whitelineBackground}/>
        <S.LessflowTitleWrap
        ref={animatedElementRef12}
        style={{
          opacity: visibleElements >= 12 ? 1 : 0,
          transform: `translateY(${visibleElements >= 12 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
          <S.LessflowTitle> lessf!ow </S.LessflowTitle>
        </S.LessflowTitleWrap>
        <S.Lessflow2Wrap
        ref={animatedElementRef13}
        style={{
          opacity: visibleElements >= 13 ? 1 : 0,
          transform: `translateY(${visibleElements >= 13 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
          <S.Lessflow2> 뉴스를 더 쉽게 </S.Lessflow2>
        </S.Lessflow2Wrap>
        <S.Lessflow3Wrap
        ref={animatedElementRef14}
        style={{
          opacity: visibleElements >= 14 ? 1 : 0,
          transform: `translateY(${visibleElements >= 14 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
          <S.Lessflow3> 불필요한 것은 적게, </S.Lessflow3>
        </S.Lessflow3Wrap>
        <S.Lessflow4Wrap
        ref={animatedElementRef15}
        style={{
          opacity: visibleElements >= 15 ? 1 : 0,
          transform: `translateY(${visibleElements >= 15 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
          <S.Lessflow3> 정보는 흐르게 </S.Lessflow3>
        </S.Lessflow4Wrap>
        <S.LessflowMainImgWrap>
          <S.LessflowMainImg src={lessflowmain}/>
        </S.LessflowMainImgWrap>
      </>
      <>
        <S.LessflowSecondWrap
         ref={animatedElementRef16}
         style={{
           opacity: visibleElements >= 16 ? 1 : 0,
           transform: `translateY(${visibleElements >= 16 ? "0" : "50px"})`,
           transition: "opacity 0.5s, transform 2.3s",
         }}>
          <S.LessflowSecond> lessf!ow </S.LessflowSecond>
        </S.LessflowSecondWrap>
        <S.LessflowSecondWrap1
         ref={animatedElementRef17}
         style={{
           opacity: visibleElements >= 17 ? 1 : 0,
           transform: `translateY(${visibleElements >= 17 ? "0" : "50px"})`,
           transition: "opacity 0.5s, transform 2.3s",
         }}>
          <S.LessflowSecond1> 일분 일초가 바쁜 시대를 살고있는 </S.LessflowSecond1>
        </S.LessflowSecondWrap1>
        <S.LessflowSecondWrap2
         ref={animatedElementRef17}
         style={{
           opacity: visibleElements >= 17 ? 1 : 0,
           transform: `translateY(${visibleElements >= 17 ? "0" : "50px"})`,
           transition: "opacity 0.5s, transform 2.3s",
         }}>
          <S.LessflowSecond1> 여러분들을 위해  </S.LessflowSecond1>
        </S.LessflowSecondWrap2>
        <S.LessflowSecondWrap3
         ref={animatedElementRef18}
         style={{
           opacity: visibleElements >= 18 ? 1 : 0,
           transform: `translateY(${visibleElements >= 18 ? "0" : "50px"})`,
           transition: "opacity 0.5s, transform 2.3s",
         }}>
          <S.LessflowSecond3> 뉴스의 핵심정보를 </S.LessflowSecond3>
        </S.LessflowSecondWrap3>
        <S.LessflowSecondWrap4
         ref={animatedElementRef19}
         style={{
           opacity: visibleElements >= 19 ? 1 : 0,
           transform: `translateY(${visibleElements >= 19 ? "0" : "50px"})`,
           transition: "opacity 0.5s, transform 2.3s",
         }}>
          <S.LessflowSecond1> 빠르고 간략하게 전달 합니다. </S.LessflowSecond1>
        </S.LessflowSecondWrap4>
        <S.LessflowsecondImgWrap>
          <S.LessflowsecondImg src={lessflowsecond}/>
        </S.LessflowsecondImgWrap>
      </>
      <>
        <S.LessflowThWrap
        ref={animatedElementRef20}
        style={{
          opacity: visibleElements >= 20 ? 1 : 0,
          transform: `translateY(${visibleElements >= 20 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
          <S.LessflowThTitle> 당신의 하루에 </S.LessflowThTitle>
        </S.LessflowThWrap>
        <S.LessflowThWrap1
        ref={animatedElementRef21}
        style={{
          opacity: visibleElements >= 21 ? 1 : 0,
          transform: `translateY(${visibleElements >= 21 ? "0" : "50px"})`,
          transition: "opacity 0.5s, transform 2.3s",
        }}>
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