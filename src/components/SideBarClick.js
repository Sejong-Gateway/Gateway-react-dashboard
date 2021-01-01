import React from 'react';
import styled,{css} from 'styled-components';


const SideBarClickStyle = styled.div `
    .userList-box{
        min-width: 137px;
        display:flex;
        align-items:center;
        font-size: 20px;
        font-weight: bold;
        
        justify-content: space-between;
        margin: 96px 79px 0px;
        ${props =>
        props.UserImportant?
        css `
        color: #6c63ff;
        ` : css `
            color: #dedede;
        `
        }
    }

    .subjectList-box{
      min-width: 137px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      margin: 46px 79px 0px;
      ${props =>
      props.UserImportant?
      css `
      color: #dedede;
      ` : css `
        color: #6c63ff;
      `
      }
    }

`

const ClickUserList = () =>{
    return(
        <SideBarClickStyle>
        <div className = "userList-box">
        <img src='/img/ProfileUserOn.svg'/>
        유저 관리
        </div>

        <div className = "subjectList-box">
        <img src='/img/MenuOff.svg'/>
        과목 관리
        </div>
        </SideBarClickStyle>
    );
}

const ClickSubjectList = () =>{
    return(
        <SideBarClickStyle>
        <div className = "userList-box">
        <img src='/img/ProfileUserOff.svg'/>
        유저 관리
        </div>

        <div className = "subjectList-box">
        <img src='/img/MenuOn.svg'/>
        과목 관리
        </div>
        </SideBarClickStyle>
        
    );
}

const SideBarClick = () =>{
    
}
export default SideBarClick;