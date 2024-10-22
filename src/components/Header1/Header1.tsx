import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from "./Header1.style.js";

const MainHeader = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isMain = location.pathname === "/";
  const isIntroduce = location.pathname === "/introduction";
  const isService = location.pathname === "/offer";
  const isQna = location.pathname === "/qna";
  

  return (
      <S.Container>
        <S.Context>
          <p onClick={() => navigate("/")}>메인</p>
          <p onClick={() => navigate("/introduction")}>소개</p>
          <p onClick={() => navigate("/offer")}>서비스</p>
          <p onClick={() => navigate("/qna")}>문의</p>
        </S.Context>
      </S.Container>
  );
};

export default MainHeader;
