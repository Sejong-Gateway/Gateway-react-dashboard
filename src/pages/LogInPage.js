import React from 'react';
import styled from 'styled-components';


const LogInPageStyle = styled.div `
    background: linear-gradient(131deg, #6c63ff 3%, #6c63ff 3%, #9792f7 79%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WhiteBlock = styled.div `
        width: 409px;
        padding: 60px 71px;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        //align-items: center;
        justify-content: center;

        input{
            outline: none;
            border: none;
            border-bottom: 2px solid #6c63ff;
            width: 267px;
            font-size: 15px;
            margin-bottom: 30px;

            ::placeholder{
                font-size: 12px;
                color: #dedede
            }
        }
        h1{
        margin-top: 59px;
        margin-bottom: 41px;
        
        }
        h2{
            margin-bottom: 20px;
        }
        
`
const LogInBlock = styled.div `
    width: 267px;
    height: 39px;
    border-radius: 4px;
    background-color: #6c63ff;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: bold;
    color:white;
    margin-top: 20px;
   
`

const LogInPage = () =>{
    return (
        <>
        <LogInPageStyle>
        <WhiteBlock>
        <img src='/img/GatewayLogo.svg' 
        style={{marginBottom: '10px'}}
        />
        <img src='/img/GatewayLogoText.svg'/>
        <h1>로그인</h1>
        <h2>아이디</h2>
        <input placeholder='아이디를 입력해주세요'/>
        <h2>비밀번호</h2>
        <input placeholder='비밀번호를 입력해주세요'/>

        <LogInBlock>로그인</LogInBlock>
        </WhiteBlock>
        </LogInPageStyle>
        
        </>
    );
}

export default LogInPage;