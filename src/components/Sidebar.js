import React from 'react';
import styled,{css} from 'styled-components';
import SideBarClick from './SideBarClick';


const Sidebarblock = styled.div`

    min-width: 310px;
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
      margin: 70px 110px 0px;
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
    
    
`



const SideBar = ({ user_name}) => {
 
  return (
    <Sidebarblock>
      <div className = "top">
      <div className = "logo">
        <img src='/img/GatewayLogo.svg'/>
        </div>

        <div className = "profileMain-box">
        <img src='/img/ProfileMain.svg'/>
        관리자
        </div>
        <SideBarClick/>
      </div>
      
      <div className = "bottom">
      <img src='/img/Logout.svg'/>
        로그아웃
      </div>
    </Sidebarblock>
        
  
  );
}

export default SideBar;