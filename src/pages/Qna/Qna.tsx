import React, {useState} from "react";
import Header from "../../components/Header2/Header2";
import * as S from "../Qna/Qna.style";
const Qna = () => {
    const [isClick, setIsClick] = useState<number | null>(null);

    const toggleHandler = (pClicked: any) => {
        setIsClick((prevClick) => pClicked === prevClick ? null : pClicked)
    }

    return (
        <>
            <Header />
            <S.Container>
                <S.MainText>
                    문의
                </S.MainText>
                <S.MainTextLine></S.MainTextLine>
                <S.QuestionAndAnswer>
                    <S.Question onClick={() => toggleHandler(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#2248AC"/>
                        </svg>
                        Q. CNS는 어떤 동아리인가요?
                    </S.Question>
                    {
                        isClick === 1 && (
                            <S.Answer>A. CNS는 대소고의 창체 동아리로, 학교를 위한 다양한 서비스를 개발하고 있습니다.
                                대표적인 예시로 입학 원서 접수 사이트, ‘IDA’가 있습니다.</S.Answer>
                        )
                    }
                    <S.Question onClick={() => toggleHandler(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#2248AC"/>
                        </svg>
                        Q. CNS는 언제 창설되었나요?
                    </S.Question>
                    {
                        isClick === 2 && (
                            <S.Answer>A. 2019년에 창설되었습니다. ^모^</S.Answer>
                        )
                    }

                    <S.Question onClick={() => toggleHandler(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#2248AC"/>
                        </svg>
                        Q. CNS에서는 무엇을 하나요?
                    </S.Question>
                    {
                        isClick === 3 && (
                            <S.Answer>A. 인턴 생활 동안에는 선배들의 수업을 통해 전공 실력을 기르게 됩니다.
                                인턴 생활을 거친 후에 정식 CNS 팀원이 된다면 팀원들과 프로젝트 개발을 하고,
                                2학년에는 직접 원서 접수 사이트를 개발하게 됩니다.</S.Answer>
                        )
                    }

                    <S.Question onClick={() => toggleHandler(4)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#2248AC"/>
                        </svg>
                        Q. CNS의 부원모집은 어떠한 방식으로 이루어지나요?
                    </S.Question>
                    {
                        isClick === 4 && (
                            <S.Answer>A. 올해 ( 2024년 ) 의 계획으로는 3월에 부원 모집을 진행하여 한 학기 동안의 인턴 생활을 거친 뒤,
                                2학기에 최종 면접을 통해 CNS 팀과 함께 할 분들을 구할 예정입니다.</S.Answer>
                        )
                    }

                    <S.Question onClick={() => toggleHandler(5)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#2248AC"/>
                        </svg>
                        Q. CNS의 인재상이 무엇인가요?
                    </S.Question>
                    {
                        isClick === 5 && (
                            <S.Answer>A. 기본적인 예의를 잘 지키는 학생이라고 생각합니다. 실력은 조금 부족하더라도, 바른 마음가짐으로 활동에 임한다면  개개인과 동아리 전체의 성취도는 우상향이 될 것이라고 생각되기 때문입니다.</S.Answer>
                        )
                    }
                </S.QuestionAndAnswer>
            </S.Container>
        </>
    );
};

export default Qna;
