import React from 'react';
import { useHistory } from 'react-router-dom';
import styled,{css} from 'styled-components';
import SideBarClick from './SideBarClick';


const Sidebarblock = styled.div`

    min-width: 19.375rem;
    height: 100vh;
    //padding: 6.25rem 4.9375rem 3.25rem 0;
    //box-shadow: 0 0.1875rem 0 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    .top{
      .logo{
      margin: 4.375rem 6.875rem 0rem;
    }
    .profileMain-box{
      min-height: 7.6875rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.25rem;
      font-weight: bold;
      justify-content: space-between;
      margin: 5.1875rem 6.375rem 0rem;
    }
  }
    
    
    .bottom{
      min-width: 8.5625rem;
      display:flex;
      align-items:center;
      font-size: 1.25rem;
      font-weight: bold;
      color: #6c63ff;
      justify-content: space-between;
      margin: 0rem 5.0625rem 3.25rem;
    }
    
    
`



const SideBar = ({ user_name}) => {
  const history = useHistory();
  const onClickLogout = () => {
    sessionStorage.clear();
    history.push('/');
  }
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
      <img src='/img/Logout.svg' onClick={onClickLogout}/>
        로그아웃
      </div>
    </Sidebarblock>
        
  
  );
}

export default SideBar;