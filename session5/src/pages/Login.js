import React, {useState} from "react";
import styled from "styled-components";
import WatchaImg from "../assets/image/icon_logo.png"
import kakaoImg from "../assets/image/icon_kakao.png";
import googleImg from "../assets/image/icon_google.png";
import lineImg from "../assets/image/icon_line.png";
import twitterImg from "../assets/image/icon_twitter.png";
import Modal from '../components/Modal';


const Login = () =>{
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const openModal = () => {
        setLoginModalOpen(true);
    };

    const closeModal = () => {
        setLoginModalOpen(false);
    };
    
    return (
        <>
        <FirstLoginButton onClick={openModal}>로그인</FirstLoginButton>
        <Modal open = {loginModalOpen} close = {closeModal}>
                <LogoImage alt="왓챠" src={WatchaImg}></LogoImage>
                <Title>로그인</Title>
                <LoginId type="text" placeholder="이메일"></LoginId>
                <LoginPw type="password" placeholder="비밀번호"></LoginPw>
                <LoginButton type="submit">로그인</LoginButton>
                <Content>비밀번호를 잊어버리셨나요?</Content>
                <Block>
                    <NotQuestion>계정이 없으신가요?</NotQuestion>
                    <Join>회원가입</Join>
                </Block>
                <Block>
                    <GrayLine />
                    <OR>OR</OR>
                    <GrayLine />
                </Block>
                <WrapIcon>
                    <img alt="카카오 아이콘" src={kakaoImg}/>
                    <img alt="구글 아이콘" src={googleImg}/>
                    <img alt="트위터 아이콘" src={twitterImg}/>
                    <img alt="라인 아이콘" src={lineImg}/>
                </WrapIcon>
                <LoginTip>
                    Tip.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는
                    같은 계정을 사용해요.
                </LoginTip>
        </Modal>
        </>
    );
}

const FirstLoginButton = styled.div`
    cursor: pointer;
    margin-right: 20px;
    border: none;
    background: none;
    text-align: right;
`;

const LogoImage = styled.img`
    width: 200px;
`;

const Title = styled.h2`
    font-size: medium;
    `;

const LoginId = styled.input`
    width: 300px;
    height: 40px;
    margin: 5px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 5px;
    ::placeholder{
        font-size: 15px;
    }
    `;

const LoginPw = styled.input`
    width: 300px;
    height: 40px;
    background-color: #f5f5f5;
    margin: 5px;
    border: none;
    border-radius: 5px;
    ::placeholder{
        font-size: 15px;
    }
    `;

const LoginButton = styled.button`
    cursor: pointer;
    margin-top: 20px;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ff2f6e;
    color: #ffffff;
    font-size: 15px;
    font-weight: bolder;
    `;

const Block = styled.div`
    display: flex;
    justify-content: center;
`;

const Content = styled.p`
    color: #ff2f6e;
    cursor: pointer;
`;

const NotQuestion = styled.p`
    color: #8c8c8c;
    `;

const Join = styled.p`
    color: #ff2f6e;
    cursor: pointer;
    `;

const OR = styled.p`
    color: #8c8c8c;
    font-size: 15px;
    margin: 0 20px;
`;

const GrayLine = styled.div`
    width: 130px;
    height: 1px;
    background-color: #00000020;
    margin-top: 10px;
`;

const WrapIcon = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 40px;
`;

const LoginTip = styled.div`
    color: #8d8e8f;
    background-color: #f7f7f7;
    height: 50px;
    padding-top: 10px;
    border-radius: 5px;
    margin: 10px;
`;

export default Login;