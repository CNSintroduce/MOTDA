import React, {useState} from "react";
import * as S from "../Introduction/Introduction.style"
import Header from "../../components/Header2/Header2";
const Introduction = () => {
    const [isClick, setIsClick] = useState<number | null>(null);

    const toggleHandler = (pClicked: any) => {
        setIsClick((prevClick) => pClicked === prevClick ? null : pClicked)
    }
    return (
        <>
            <Header />
            <S.Container>
                <S.MainText>
                    CNS 소개
                </S.MainText>
                <S.MainTextLine></S.MainTextLine>
                <S.ContentWrap>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <S.SubTitle>CNS</S.SubTitle>
                        <S.SubText>CNS팀은 도전하는 개발자를 사랑하고, 길잡이가 되어주는 개발자를 응원하고, 여러분이 성공을 즐기는 개발자가 되기를 바랍니다. 꿈을 이루기 위한 도전의
                            첫걸음을 함께합니다.</S.SubText>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <S.MemberSubTitle>CNS MEMBER</S.MemberSubTitle>
                        <div style={{marginBottom: "10vh", width: "60vw", marginLeft: "2vw"}}>
                            <S.MemberYear>5기
                                <svg onClick={()=>toggleHandler(5)}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="13"
                                     height="8"
                                     viewBox="0 0 13 8"
                                     fill="none"
                                     style={{
                                         transform: isClick === 5 ? "none" : "rotate(180deg)",
                                    marginLeft:"40.2vw",
                                    marginTop:"1vh"
                                }}>
                                    <path d="M13 0.57704L0 0.57704L6.5 7.81543L13 0.57704Z" fill="#2248AC"/>
                                </svg>
                            </S.MemberYear>
                            {
                                isClick === 5 &&(
                                    <S.Member>배채희
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 5 &&(
                                    <S.Member>윤세욱
                                        <S.MemberPosition>Front-end Developer & Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 5 &&(
                                    <S.Member>전우진
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 5 &&(
                                    <S.Member>이윤선
                                        <S.MemberPosition>Design</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 5 &&(
                                    <S.Member>최미래
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            <S.MemberYear>4기
                                <svg onClick={()=>toggleHandler(4)}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="13"
                                     height="8"
                                     viewBox="0 0 13 8"
                                     fill="none"
                                     style={{
                                         transform: isClick === 4 ? "none" : "rotate(180deg)",
                                         marginLeft:"40vw",
                                         marginTop:"1vh"
                                     }}>
                                    <path d="M13 0.57704L0 0.57704L6.5 7.81543L13 0.57704Z" fill="#2248AC"/>
                                </svg>
                            </S.MemberYear>
                            {
                                isClick === 4 &&(
                                    <S.Member>조수현
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 4 &&(
                                    <S.Member>조완규
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 4 &&(
                                    <S.Member>배경민
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 4 &&(
                                    <S.Member>강지석
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 4 &&(
                                    <S.Member>최아영
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            <S.MemberYear>3기
                            <svg onClick={()=>toggleHandler(3)}
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="13"
                                 height="8"
                                 viewBox="0 0 13 8"
                                 fill="none"
                                 style={{
                                     transform: isClick === 3 ? "none" : "rotate(180deg)",
                                     marginLeft:"40.1vw",
                                     marginTop:"1vh"
                                 }}>
                                <path d="M13 0.57704L0 0.57704L6.5 7.81543L13 0.57704Z" fill="#2248AC"/>
                            </svg>
                        </S.MemberYear>
                            {
                                isClick === 3 &&(
                                    <S.Member>정우재
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>강성훈
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>박병관
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>배진영
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>이승민
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>임재청
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 3 &&(
                                    <S.Member>김영성
                                        <S.MemberPosition>Design</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            <S.MemberYear>2기
                            <svg onClick={()=>toggleHandler(2)}
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="13"
                                 height="8"
                                 viewBox="0 0 13 8"
                                 fill="none"
                                 style={{
                                     transform: isClick === 2 ? "none" : "rotate(180deg)",
                                     marginLeft:"40.1vw",
                                     marginTop:"1vh"
                                 }}>
                                <path d="M13 0.57704L0 0.57704L6.5 7.81543L13 0.57704Z" fill="#2248AC"/>
                            </svg>
                        </S.MemberYear>
                            {
                                isClick === 2 &&(
                                    <S.Member>류수아
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 2 &&(
                                    <S.Member>이민욱
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 2 &&(
                                    <S.Member>조민수
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 2 &&(
                                    <S.Member>남주영
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 2 &&(
                                    <S.Member>허새찬
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            <S.MemberYear>1기
                            <svg onClick={()=>toggleHandler(1)}
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="13"
                                 height="8"
                                 viewBox="0 0 13 8"
                                 fill="none"
                                 style={{
                                     transform: isClick === 1 ? "none" : "rotate(180deg)",
                                     marginLeft:"40.3vw",
                                     marginTop:"1vh"
                                 }}>
                                <path d="M13 0.57704L0 0.57704L6.5 7.81543L13 0.57704Z" fill="#2248AC"/>
                            </svg>
                        </S.MemberYear>
                            {
                                isClick === 1 &&(
                                    <S.Member>차승호
                                        <S.MemberPosition>Front-end Developer & Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 1 &&(
                                    <S.Member>조민희
                                        <S.MemberPosition>Front-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 1 &&(
                                    <S.Member>정성훈
                                        <S.MemberPosition>Back-end Developer</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                            {
                                isClick === 1 &&(
                                    <S.Member>안채원
                                        <S.MemberPosition>Design</S.MemberPosition>
                                    </S.Member>
                                )
                            }
                        </div>
                    </div>
                </S.ContentWrap>
            </S.Container>
        </>
    );
};

export default Introduction;
