import styled from "styled-components";
import React from "react";

function Footer() {
    return(
        <Wrapper>
            <Left>
                <FirstWrapper>
                    <Use>서비스 이용약관 |</Use>
                    <Personal> 개인정보 처리방침 |</Personal>
                    <Guide>회사 안내</Guide>
                </FirstWrapper>
                <SecondWrapper>
                    <Center>고객센터 | cs@watchapedia.co.kr, 02-512-9985</Center>
                    <Cooperation>제휴 및 대외 협력 | https://watcha.team/contact</Cooperation>
                </SecondWrapper>
                <ThirdWrapper>
                    <Company>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</Company>
                    <Number>사업자 등록 번호 211-88-66013</Number>
                    <Watcha>© 2024 by WATCHA, Inc. All rights reserved.</Watcha>
                </ThirdWrapper>
            </Left>
            <Right>
                <Language name="language">
                    <LanguageSelect value="korean">한국어</LanguageSelect>
                    <LanguageSelect value="Japanese">日本語</LanguageSelect>
                    <LanguageSelect value="english">English</LanguageSelect>
                </Language>
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Left = styled.div`
`;

const FirstWrapper = styled.div`
    display: flex;
    justify-content: start;
    margin: 0;
    background-color: black;
`;

const Use = styled.p`
    cursor: pointer;
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Personal = styled.p`
    cursor: pointer;
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Guide = styled.p`
    cursor: pointer;
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const SecondWrapper = styled.div`
    margin: 0;
    padding: 5px;
    background-color: black;
`;

const Center = styled.p`
    cursor: pointer;
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Cooperation = styled.p`
    cursor: pointer;
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const ThirdWrapper = styled.div`
`;

const Company = styled.p`
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Number = styled.p`
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Watcha = styled.p`
    font-size: 12px;
    color: #8c8c8c;
    background-color: black;
`;

const Right = styled.div`
    background-color: black;
`;

const Language = styled.select`
    background-color: black;
    color: #8c8c8c;
    font-weight: bold;
`;

const LanguageSelect = styled.option`
`;

export default Footer;