import React, { useRef, useState, useEffect } from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style.js";
import Top from "../../assets/img/imsi.svg";
import Success from "../../assets/img/Success.svg";
import Challenge from "../../assets/img/Challenge.svg";
import Navigate from "../../assets/img/Navigate.svg";
import Last from "../../assets/img/Last.svg";

const MainIntro = (): JSX.Element => {
  const element1 = useRef<HTMLElement>(null);
  const element2 = useRef<HTMLElement>(null);
  const element3 = useRef<HTMLElement>(null);
  const [visibleElements, setVisibleElements] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const { top: top1 } = element1.current!.getBoundingClientRect();
      const { top: top2 } = element2.current!.getBoundingClientRect();
      const { top: top3 } = element3.current!.getBoundingClientRect();
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;

      let visibleCount = 0;
      if (isInViewPort1) visibleCount = 1;
      if (isInViewPort2) visibleCount = 2;
      if (isInViewPort3) visibleCount = 3;

      setVisibleElements(visibleCount);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      
      <s.Imsi src={Top} alt="error" />
      
      
      
      

      <s.MainMiddle>
        <s.MainMiddleImg
          ref={element1}
          src={Challenge}
          alt="error"
          style={{
            opacity: visibleElements >= 1 ? 1 : 0,
            transform: `translateY(${visibleElements >= 1 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />

        <s.MainMiddleImg
          ref={element2}
          src={Navigate}
          alt="error"
          style={{
            opacity: visibleElements >= 2 ? 1 : 0,
            transform: `translateY(${visibleElements >= 2 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />

        <s.MainMiddleImg
          ref={element3}
          src={Success}
          alt="error"
          style={{
            opacity: visibleElements >= 3 ? 1 : 0,
            transform: `translateY(${visibleElements >= 3 ? "0" : "50px"})`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />
      </s.MainMiddle>
      <s.CNSBottom>
        <s.CNSP>당신의 시작을 그려주는 동아리, CNS입니다.</s.CNSP>
        <img src={Last} alt="error" />
      </s.CNSBottom>
    </>
  );
};

export default MainIntro;
