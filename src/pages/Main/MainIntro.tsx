import React, { useRef, useState, useEffect } from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style.js";
import imsi from "../../assets/img/imsi.svg";
import Success from "../../assets/img/Success.svg";
import Challenge from "../../assets/img/Challenge.svg";
import Navigate from "../../assets/img/Navigate.svg";
import Last from "../../assets/img/Last.svg";

const MainIntro = (): JSX.Element => {
  const element1 = useRef<HTMLElement>(null);
  const element2 = useRef<HTMLElement>(null);
  const element3 = useRef<HTMLElement>(null);
  const [challengeVisible, setChallengeVisible] = useState<boolean>(false);
  const [navigateVisible, setNavigateVisible] = useState<boolean>(false);
  const [successVisible, setSuccessVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top: top1 } = element1.current!.getBoundingClientRect();
      const { top: top2 } = element2.current!.getBoundingClientRect();
      const { top: top3 } = element3.current!.getBoundingClientRect();
      const isInViewPort1 = top1 >= 0 && top1 <= window.innerHeight;
      const isInViewPort2 = top2 >= 0 && top2 <= window.innerHeight;
      const isInViewPort3 = top3 >= 0 && top3 <= window.innerHeight;
      setChallengeVisible(isInViewPort1);
      setNavigateVisible(isInViewPort2);
      setSuccessVisible(isInViewPort3);
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
        <s.Imsi src={imsi} alt="" />
      </s.MainTop>

      <s.MainMiddle>
        <s.MainMiddleImg
          ref={element1}
          src={Challenge}
          alt=""
          style={{
            opacity: challengeVisible ? 1 : 0,
            transform: challengeVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />

        <s.MainMiddleImg
          ref={element2}
          src={Navigate}
          alt=""
          style={{
            opacity: navigateVisible ? 1 : 0,
            transform: navigateVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />

        <s.MainMiddleImg
          ref={element3}
          src={Success}
          alt=""
          style={{
            opacity: successVisible ? 1 : 0,
            transform: successVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />
      </s.MainMiddle>
      <s.CNSBottom>
        <s.CNSP>당신의 시작을 그려주는 동아리, CNS입니다.</s.CNSP>
        <img src={Last} alt="" />
      </s.CNSBottom>
    </>
  );
};

export default MainIntro;
