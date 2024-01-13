import React from "react";
import * as S from "../Header2/Header2.style";
import imgLogo from "../../assets/cns.svg";

const Header = () => {
    return (
        <S.MainHeader>
            <S.Logo src={imgLogo} alt="error" className="Logo" />
            <S.Context>
                <p>메인</p>
                <p>소개</p>
                <p>서비스</p>
                <p>문의</p>
            </S.Context>
        </S.MainHeader>
    );
};

export default Header;