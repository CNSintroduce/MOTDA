import styled from "styled-components";

export const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background-color: #1a276d;
  overflow-x: hidden;
`;

export const CNSText = styled.p`
  font-size: 4vw;
  font-family: Pretendard;
  font-weight: 300;
  margin-left: 10vw;
  margin-top: 10vh;
  color: #fff;
`;

export const CNSText2 = styled.p`
  color: #fff;
  margin-top: 5vh;
  margin-left: 10vw;
  font-size: 1.5vw;
  font-weight: 400;
`;

export const CNS = styled.span`
  color: #fff;
  font-size: 1.5vw;
  font-weight: 600;
`;

export const CNS2 = styled.span`
  font-size: 5vw;
  font-weight: 500;
`;

export const Imsi = styled.img`
  border-radius: 2% 0 0 2%;
  position: absolute;
  overflow: hidden;
  object-position: top;
  right: 0;
  top: 15vh;
  object-fit: cover;
  width: calc(100vw - 45vw);
  height: calc(100vh - 20vh);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CNSP = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 120px;
  margin-left: 20px;
`;
export const CNSBottom = styled.div`
  margin-left: 15vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20vh;
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
