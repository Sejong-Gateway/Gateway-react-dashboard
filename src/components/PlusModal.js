import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const OverlayStyle= styled.div`
    position : fixed;
    z-index : 1000;
    top : 0;
    left : 0;
    right: 0;
    bottom: 0;
    width : 100%;
    height : 100%;
    background : rgba(0, 0, 0, 0.2);
    display : flex;
    justify-content : center;
    align-items : center;
`;

const PlusModalStyle = styled.div `
    
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:540px;
    padding: 33px 86px 57px;
    border-radius: 0.625rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &> button{
        outline: none;
        border: none;
        background: none; 
    }
    h1{
        margin-bottom:2.5625rem;
    }
    input{
            outline: none;
            border: none;
            border-bottom: 0.125rem solid #6c63ff;
            width: 368px;
            font-size: 0.9375rem;
            margin-bottom: 2.0625rem;
            padding-bottom: 0.5rem;

            ::placeholder{
                font-size: 0.75rem;
                color: #dedede
            }
        }
`
const PlusBlock = styled.div `
    width: 368px;
    height: 2.4375rem;
    border-radius: 0.25rem;
    background-color: #6c63ff;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: bold;
    color:white;
    margin-top: 3.125rem;
`
const PlusModal  = ({open, onClose}) =>{
    if(!open) return null
    return(
        <>
            <OverlayStyle onClick={onClose}/>
            
            <PlusModalStyle>
            
            <button 
            style={{marginLeft:'345px', marginBottom:'0.5625rem',cursor: 'pointer'}}
            onClick={onClose}>
            <img src='/img/ModalExit.svg'/>
            </button>
            
            <h1>과목 추가</h1>
            <h2 style={{marginBottom:'0.4375rem'}}>과목 이름</h2>
            <input placeholder='과목 이름을 입력해주세요'/>
            <h2 style={{marginBottom:'0.4375rem'}}>학점</h2>
            <input placeholder='학점을 입력해주세요'/>
            <DropDownList/>
            <PlusBlock>추가하기</PlusBlock>
            
            </PlusModalStyle>
       </>
        
    );
}
const DropDownListStyle = styled.div `
    .dropContainer{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        .drop{
            display: flex;
            flex-direction: column;
            h2{
                margin-bottom:1.0625rem;
            }
        }
    }
`
const DropDownList = () =>{
    return(
        <DropDownListStyle>
        <div className="dropContainer">
        <div className="drop">
        <h2>학년</h2>
        <DropSemester/>
        </div>
        
        <div className="drop">
        <h2>학과</h2>
        <DropMajor/>
        </div>
        </div>

        <div className="dropContainer"
        style={{marginTop:'33px'}}>
        <div className="drop">
        <h2>이수 구분</h2>
        <DropType/>
        </div>
        <div className="drop">
        <h2>학년도</h2>
        <DropEnteranceYear/>
        </div>
        
        </div>
        
        </DropDownListStyle>
    );
}
const DropdownBoxStyle = styled.div `
    .ui.selection.dropdown{
        border: solid 0.0625rem #6d69fb;
        min-width: 11em;
    }
`  

const DropSemester = (props) =>{
    const stateOptions = [
        {
            key: 1,
            text: "전체",
            value: "전체"
        },
        {
            key: 2,
            text: "1-1",
            value: "1-1"
        },
        {
            key: 3,
            text:"1-2",
            value: "1-2"
        },
        {
            key: 4,
            text: "2-1",
            value: "2-1"
        },
        {
            key: 5,
            text: "2-2",
            value: "2-2"
        },
        {
            key: 6,
            text: "3-1",
            value: "3-1"
        },
        {
            key: 7,
            text: "3-2",
            value: "3-2"
        },
        {
            key: 8,
            text: "4-1",
            value: "4-1"
        },
        {
            key: 9,
            text: "4-2",
            value: "4-2"
        }
    ]
    return(
        <DropdownBoxStyle>
        <Dropdown placeholder='전체' search selection options={stateOptions} />
        </DropdownBoxStyle>
        
    );
}
const DropMajor = (props) =>{
    const stateOptions = [
        {
            key: 1,
            text: "전체",
            value: "전체"
        },
        {
            key: 2,
            text: "디자인이노베이션",
            value: "디자인이노베이션"
        },
        {
            key: 3,
            text:"소프트웨어",
            value: "소프트웨어"
        },
        {
            key: 4,
            text:"컴퓨터공학",
            value: "컴퓨터공학"
        }
    ]
    return(
        <DropdownBoxStyle>
        <Dropdown placeholder='전체' search selection options={stateOptions} />
        </DropdownBoxStyle>
        
    );
}
const DropType = (props) =>{
    const stateOptions = [
        {
            key: 1,
            text: "전체",
            value: "전체"
        },
        {
            key: 2,
            text: "전필",
            value: "전필"
        },
        {
            key: 3,
            text:"전선",
            value: "전선"
        },
        {
            key: 4,
            text:"교필",
            value: "교필"
        },
        {
            key: 5,
            text:"교선1",
            value: "교선1"
        },
        {
            key: 6,
            text:"교선2",
            value: "교선2"
        },
        {
            key: 7,
            text:"공학",
            value: "공학"
        }
    ]
    return(
        <DropdownBoxStyle>
        <Dropdown placeholder='전체' search selection options={stateOptions} />
        </DropdownBoxStyle>
        
    );
}
const DropEnteranceYear = (props) =>{
    const stateOptions = [
        {
            key: 1,
            text: "전체",
            value: "전체"
        },
        {
            key: 2,
            text: "2019",
            value: "2019"
        },
        {
            key: 3,
            text:"2018",
            value: "2018"
        },
        {
            key: 4,
            text:"2016",
            value: "2016"
        }
    ]
    return(
        <DropdownBoxStyle>
        <Dropdown placeholder='전체' search selection options={stateOptions} />
        </DropdownBoxStyle>
        
    );
}
export default PlusModal;