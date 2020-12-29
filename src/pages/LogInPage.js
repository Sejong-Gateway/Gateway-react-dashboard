import React from 'react';
import styled from 'styled-components';

const LogInPageStyle = styled.div `
    background: linear-gradient(131deg, #6c63ff 3%, #6c63ff 3%, #9792f7 79%);
    //padding: 233px 756px;
    width: 100vw;
    height: 100vh;
    
`
const LogInBlock = styled.div `
        width: 409px;
        height: 615px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;

        
        display: flex;
        flex-direction: column;
`

const LogInPage = () =>{
    return (
        <>
        <LogInPageStyle>
        <LogInBlock/>
        </LogInPageStyle>
        
        </>
    );
}

export default LogInPage;