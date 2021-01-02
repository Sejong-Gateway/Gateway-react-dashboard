import React,{useState} from 'react';
import styled from 'styled-components';

const DropDownContainer  = () =>{
    return(

    );
}

const PlusModalStyle = styled.div `
    width:379px;
    padding: 33px 56px 57px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
            outline: none;
            border: none;
            border-bottom: 2px solid #6c63ff;
            width: 267px;
            font-size: 15px;
            margin-bottom: 33px;
            padding-bottom: 8px;

            ::placeholder{
                font-size: 12px;
                color: #dedede
            }
        }
    .container{

    }
`
const PlusBlock = styled.div `
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
const PlusModal  = () =>{
    return(
        <PlusModalStyle>
            <h1>과목 추가</h1>
            <h2>과목 이름</h2>
            <input placeholder='과목이름을 입력해주세요'/>
            <h2>학과</h2>
            <div className="container">
            <h2>학년</h2>
            <h2>이수구분</h2>
            </div>
            <PlusBlock>추가하기</PlusBlock>
        </PlusModalStyle>
    );
}