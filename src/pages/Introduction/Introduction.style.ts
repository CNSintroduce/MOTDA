import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const MainText = styled.div`
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    margin-left: 18vw;
    margin-top: 10vh;
    height: 5vh;
    width: 11vw;
`

export const MainTextLine = styled.div`    
    position: absolute;
    top: 27vh;
    border-bottom: 1.5px solid #2248AC;
    width: 30vw;
`

export  const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-top: 20vh;
    margin-right: 2vw;
    font-weight: bold;
    font-family: Inter;
    line-height: normal;
    font-style: normal;
    font-size: 1.4rem;
    justify-content: space-around;
    flex-wrap: wrap;
    &  svg {
        margin-left: 10vw;
    }
`

export const MemberSubTitle = styled.div`
    display:flex;
    flex-direction: row;
    align-content: center;
    margin-top: 10vh;
    margin-right: 2vw;
    font-weight: bold;
    font-family: Inter;
    line-height: normal;
    font-style: normal;
    font-size: 1.4rem;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 5vw;
    flex-wrap: wrap;
    &  svg {
        margin-left: 10vw;
    }
`

export const SubText = styled.div`
    color: #ffffff;
    font-family: Inter;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    
    margin-left: 10vw;
    margin-top: 27vh;
    display: flex;
    flex-wrap: wrap;
    width: 36.5vw;
`
export const MemberYear = styled.div`
    width: 45vw;
    height: 5vh;
    border-top: 0.7px solid #B0B0B0;
    border-bottom: 0.7px solid #B0B0B0;
    padding-top: 1vh;
    font-size: 1.3rem;
    font-family: Inter;
    margin-left: 12vw;
    display:flex;
    font-weight: bold;
    &:first-child {
        margin-top: -8vh;
    }
    
`

export const Member = styled.div`
    width: 45vw;
    height: 5vh;
    //border-top: 0.7px solid #B0B0B0;
    //border-bottom: 0.7px solid #B0B0B0;
    
    padding-top: 1vh;
    font-size: 1.3rem;
    font-family: Inter;
    margin-left: 12vw;
    display:flex;
    border-bottom: 0.7px solid #B0B0B0;
    font-weight: bold;
    &:first-child {
        margin-top: -8vh;
    }
`

export const MemberPosition = styled.div`
    color: #fff;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    margin-left: 8vw;
    padding-top: 1vh;
    line-height: normal;
`