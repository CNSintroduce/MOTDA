import React from "react";
import styled, { keyframes } from "styled-components";

export const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 95vh;
  background-color: #1a276d;
  overflow-x: hidden;
`;

export const CNSText = styled.p`
  font-size: 60px;
  font-family: Pretendard;
  font-weight: 300;
  margin-left: 10vw;
  margin-top: 10vw;
  color: #fff;
`;

export const CNSText2 = styled.p`
  color: #fff;
  margin-top: 5vw;
  margin-left: 10vw;
  font-size: 20px;
  font-weight: 400;
`;

export const CNS = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const CNS2 = styled.span`
  font-size: 70px;
  font-weight: 500;
`;

export const One1 = styled.img`
  position: absolute;
  left: 80vw;
  top: 85vh;
`;

export const One2 = styled.img`
  position: absolute;
  top: 175vh;
`;

export const Imsi = styled.img`
  position: absolute;
  overflow: hidden;
  object-fit: none;
  object-position: left top;
  left: 43vw;
  top: 10vw;
  transform: scaleX(1.3);
`;

export const CNSP = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 100px;
  margin-left: 20px;
`;
export const CNSBottom = styled.div`
  margin-left: 15vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
export const MainMiddle = styled.div`
  margin-top: 30vh;
  margin-left: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainMiddleImg = styled.img`
  margin-bottom: 20vh;
`;
