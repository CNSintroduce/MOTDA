import React from 'react'
import * as S from "./Footer.style.js";
import footerLogo from "../../assets/img/footerLogo.svg";
import sendIcon from "../../assets/img/sendIcon.svg";

const Footer = () => {
  return (
    <>
    <S.footerContainer>
      <S.infoContainer>
        <img src={footerLogo} alt='' />
        <S.cns><b>C</b>are <b>N</b> <b>S</b>ervice</S.cns>
        <S.cnsInfo>
          <p>
            CNS .Daegu Software Meister High School since 2019
            <S.mail>이메일 | cnsofficial2019@gmail.com</S.mail>
          </p>
        </S.cnsInfo>
      </S.infoContainer>
      <hr />
      <S.sendMent>
        <S.p>
          <S.content>Contact us</S.content>
          <S.content><a href="mailto:cnsofficial2019@gmail.com"><img src={sendIcon} alt=''/></a></S.content>
        </S.p>
      </S.sendMent>
    </S.footerContainer>
    </>
  )
}

export default Footer;