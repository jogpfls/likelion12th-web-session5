import React from "react";
import styled from "styled-components";
import WatchaImg from "../assets/image/icon_logo.png";
import Login from "./Login";

function Header() {
    return (
        <HeaderPart>
            <HeaderWrapper>
                <HeaderStart>
                    <LogoImage src={WatchaImg} alt="왓챠 이미지"></LogoImage>
                    <Text >영화</Text>
                    <Text>시리즈</Text>
                    <Text>책</Text>
                    <Text>웹툰</Text>
                </HeaderStart>
                <HeaderEnd>
                <LoginButton><Login /></LoginButton>
                    <Join>회원가입</Join>
                </HeaderEnd>
            </HeaderWrapper>
        </HeaderPart>
    );
}

const HeaderPart = styled.div`
    top: 0;
    position: fixed;
    width: 100%;
    box-shadow: 0 0 1px #000;
    z-index: 20;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 3%;
`;

const HeaderStart = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    `;

const LogoImage = styled.img`
    width: 150px;
    height: fit-content;
`;

const Text = styled.p`
    cursor: pointer;
    font-size: 13px;
    color: #8c8c8c;
`;


const HeaderEnd = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
`;

const Join = styled.button`
    cursor: pointer;
    font-size: 12px;
    background-color: #ffffff;
    border: 1px solid #8c8c8c;
    border-radius: 5px;
    font-weight: bold;
    padding: 6px 12px;
`;

const LoginButton = styled.p`
    cursor: pointer;
    margin: 0;
    font-size: 13px;
    color: #8c8c8c;

`;

export default Header;