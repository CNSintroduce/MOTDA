// import React from "react";
// import MainHeader from "../../components/Header1/Header1";
// import * as s from "../Main/MainIntro.style";
// import one from "../../../public/img/one1.svg";
// import one2 from "../../../public/img/one2.svg";
// import imsi from "../../../public/img/imsi.svg";
// import leftarrow from "../../../public/img/leftarrow.svg";
// import rightarrow from "../../../public/img/rightarrow.svg";
// import Challenge from "../../../public/img/Challenge.svg";

// const MainIntro = () => {
//   return (
//     <>
//       <MainHeader />

//       <s.MainTop>
//         <s.CNSText>
//           <s.CNS2>C</s.CNS2> are <br></br>
//           <s.CNS2>N </s.CNS2>
//           <br></br>
//           <s.CNS2>S</s.CNS2> ervice
//         </s.CNSText>
//         <s.CNSText2>
//           당신의 시작을 가치있게, <br />
//           입학 원서 접수 사이트를 개발하는 <s.CNS>CNS</s.CNS> 입니다.
//         </s.CNSText2>
//       </s.MainTop>

//       <s.One1 src={one} alt="" />
//       <s.One2 src={one2} alt="" />
//       <s.imsi src={imsi} alt="" />
//       <s.MainMiddle>
//         <img src={leftarrow} alt="" />
//         <s.MainMiddleImg src={Challenge} alt="" />
//         <img src={rightarrow} alt="" />
//       </s.MainMiddle>
//     </>
//   );
// };

// export default MainIntro;
import React, { useState } from "react";
import MainHeader from "../../components/Header1/Header1";
import * as s from "../Main/MainIntro.style";
import one from "../../../public/img/one1.svg";
import one2 from "../../../public/img/one2.svg";
import imsi from "../../../public/img/imsi.svg";
import leftarrow from "../../../public/img/leftarrow.svg";
import rightarrow from "../../../public/img/rightarrow.svg";
import Challenge from "../../../public/img/Challenge.svg";
import Navigate from "../../../public/img/Navigate.svg";
import Succeed from "../../../public/img/Succeed.svg";

const MainIntro = () => {
  const [currentImage, setCurrentImage] = useState(Challenge); // 현재 이미지 상태를 관리하는 상태 변수

  const handlePreviousImage = () => {
    if (currentImage === Navigate) {
      setCurrentImage(Challenge);
    } else if (currentImage === Succeed) {
      setCurrentImage(Navigate);
    }
  };

  const handleNextImage = () => {
    if (currentImage === Challenge) {
      setCurrentImage(Navigate);
    } else if (currentImage === Navigate) {
      setCurrentImage(Succeed);
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
      <s.imsi src={imsi} alt="" />
      <s.MainMiddle>
        <img src={leftarrow} alt="" onClick={handlePreviousImage} />
        <s.MainMiddleImg src={currentImage} alt="" />
        <img src={rightarrow} alt="" onClick={handleNextImage} />
      </s.MainMiddle>
    </>
  );
};

export default MainIntro;
