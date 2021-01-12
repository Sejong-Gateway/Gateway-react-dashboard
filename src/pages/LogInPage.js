import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../api/api';


const LogInPageStyle = styled.div `
    background: linear-gradient(131deg, #6c63ff 3%, #6c63ff 3%, #9792f7 79%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WhiteBlock = styled.div `
        width: 25.5625rem;
        padding: 3.75rem 4.4375rem;
        border-radius: 0.625rem;
        box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;

        input{
            outline: none;
            border: none;
            border-bottom: 0.125rem solid #6c63ff;
            width: 16.6875rem;
            font-size: 0.9375rem;
            margin-bottom: 1.875rem;
            padding-bottom: 0.5rem;

            ::placeholder{
                font-size: 0.75rem;
                color: #dedede
            }
        }
        h1{
        margin-top: 3.6875rem;
        margin-bottom: 2.5625rem;
        
        }
        h2{
            margin-bottom: 1.25rem;
        }
        
`
const LogInBlock = styled.div `
    width: 16.6875rem;
    height: 2.4375rem;
    border-radius: 0.25rem;
    background-color: #6c63ff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    font-size: 1rem;
    font-weight: bold;
    color:white;
    margin-top: 1.25rem;
`

const LogInPage = () =>{
    const history = useHistory();
    const [input, setInput] = useState({
        studentId : "",
        user_pw : "",
    })

    const onClickLogin = async() => {
        const res = await login(input);
        sessionStorage.setItem('token',res.data.data.token);
        if (res.data.status === 200){
            history.push('/user');
        }
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name] : value,
        });
        
    }
    return (
        <>
        <LogInPageStyle>
        <WhiteBlock>
        <img src='/img/GatewayLogo.svg' 
        style={{marginBottom: '0.625rem'}}
        />
        <img src='/img/GatewayLogoText.svg'/>
        <h1>로그인</h1>
        <h2>아이디</h2>
        <input placeholder='아이디를 입력해주세요' onChange={onChange} name="studentId"/>
        <h2>비밀번호</h2>
        <input placeholder='비밀번호를 입력해주세요' onChange={onChange} name="user_pw" type="password"/>

        <LogInBlock onClick={onClickLogin} >로그인</LogInBlock>
        </WhiteBlock>
        </LogInPageStyle>
        
        </>
    );
}

export default LogInPage;
