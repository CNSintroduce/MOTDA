import React from "react";
import Header from "../../components/Header2/Header2";
import * as S from "../Offer/Offer.style";

import serviceMain from "../../assets/img/serviceMain.png";
import service2nd from "../../assets/img/service2page.svg";

const Offer = () => {
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
          </S.Page2Img>
        </>
      </>
    </>
  );
};

export default Offer;