import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const DropdownBoxStyle = styled.div `
    .dropdown{
        width: 98px;
        border-radius: 19px;
        margin-right: 30px;
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
const DropListStyle = styled.div `
display:flex;
.dropdown{
    width: 98px;
    border-radius: 19px;
    margin-right: 30px;
}

h4{
    padding: 9px;
    margin-right: 14px;
}
`

const DropDownBox = (props) =>{

    return (
        <DropListStyle>
            <h4>학년 :</h4>
            <DropSemester/>
            <h4>학과 :</h4>
            <DropMajor/>
            <h4>이수구분 :</h4>
            <DropType/>
            <h4>학년도 :</h4>
            <DropEnteranceYear/>
        </DropListStyle>
    );
}

export default DropDownBox;