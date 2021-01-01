import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

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
        <Dropdown placeholder='전체' search selection options={stateOptions} />
    );
}
const DropDownBoxStyle = styled.div `
.dropdown{
    width: 98px;
    border-radius: 19px;
}
`

const DropDownBox = (props) =>{

    return (
        <DropDownBoxStyle>
            <DropSemester/>
            
        </DropDownBoxStyle>
    );
}

export default DropDownBox;