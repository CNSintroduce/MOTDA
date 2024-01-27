<<<<<<< HEAD
import React from 'react'
import * as S from "../Footer/Footer.style.js";
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
          <S.content><img src={sendIcon} alt='' /></S.content>
        </S.p>
      </S.sendMent>
    </S.footerContainer>
    </>
=======
import React from 'react';
import * as S from"./Footer.style.js";

const Footer = () => {
  return (
    <S.FooterContainer>
        <div>footer</div>
    </S.FooterContainer>
>>>>>>> 5a5966b630930fac1d110934f66868ec921854f3
  )
}

export default Footer;