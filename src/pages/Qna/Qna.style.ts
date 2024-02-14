import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    display: flex;    
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const MainText = styled.div`
    color: #1a1a1a;
    text-align: center;
    font-family: Inter;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    margin-left: 18vw;
    margin-top: 10vh;
    height: 5vh;
`

export const MainTextLine = styled.div`    
    position: absolute;
    top: 27vh;
    border-bottom: 1.5px solid #2248AC;
    width: 25vw;
`

export const QuestionAndAnswer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 30vh;
    font-weight: bold;
    font-family: Inter;
    line-height: normal;
    font-style: normal;

    justify-content: space-between;
    &  svg {
        margin-right: 2vw;
    }
`
export const Question = styled.div`
    width: 60vw;
    color: #1a1a1a;
    height: 5vh;
    border-bottom: 0.5px solid #000;
    font-size: 1.3rem;
    margin-bottom: 6vh;
    font-family: Inter;
`

export const Answer = styled.div`
    margin-bottom: 5vh;
    padding-left: 2vw;
    border-left: 0.5px solid #2248AC;
    height: 7vh;
    color: #6A6A6A;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    animation: ${fadeIn} 0.3s ease-in;
    display: flex;
    flex-wrap: wrap;

    width: 30vw;

    margin-bottom: 8vh;
`
