import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GatewayLogo} from '../img/GatewayLogo.svg';
import {ReactComponent as Logout} from '../img/Logout.svg';
import {ReactComponent as Menu} from '../img/Menu.svg';
import {ReactComponent as ProfileMain} from '../img/ProfileMain.svg';
import {ReactComponent as ProfileUser} from '../img/ProfileUser.svg';

const Sidebarblock = styled.div`

    width: 17.75rem;
    min-height: 100vh;
    //padding: 100px 79px 52px 0;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    .top{
      
      .logo{
      margin: 70px 96px 0px;
    }
    .profileMain-box{
      min-height: 123px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      margin: 83px 102px 0px;
    }
    .userList-box{
      min-width: 137px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      color: #dedede;
      //color: #6c63ff;
      justify-content: space-between;
      margin: 96px 79px 0px;
    }
    .subjectList-box{
      min-width: 137px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      //color: #dedede;
      color: #6c63ff;
      justify-content: space-between;
      margin: 46px 79px 0px;
    }
    }
    .bottom{
      min-width: 137px;
      display:flex;
      align-items:center;
      font-size: 20px;
      font-weight: bold;
      color: #6c63ff;
      justify-content: space-between;
      margin: 0px 81px 52px;
  
    }
    
    
`;



const Sidebar = ({ user_name }) => {
  return (
    <Sidebarblock user_name={user_name}>
      <div className = "top">
      <div className = "logo">
        <GatewayLogo/>
        </div>

        <div className = "profileMain-box">
        <ProfileMain/>
        {user_name}
        </div>

        <div className = "userList-box">
        <ProfileUser/>
        유저 관리
        </div>

        <div className = "subjectList-box">
        <Menu/>
        과목 관리
        </div>
      </div>

      <div className = "bottom">
      
        <Logout/>
        로그아웃
      </div>
      
      
      
    </Sidebarblock>
        
  
  );
}

export default Sidebar;