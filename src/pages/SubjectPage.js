import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const SubjectStyle = styled.div `
    .button-group{
        display: flex;
        & > div + div{
        margin-left: 1rem;
        }
    }
    
`

const SubjectPage = (props) =>{
    return (
        <SubjectStyle>
            <div className = "button-group">
            <Button name = "추가"></Button>
            <Button name = "삭제" primary></Button>
            </div>
        </SubjectStyle>
    )
}

export default SubjectPage;