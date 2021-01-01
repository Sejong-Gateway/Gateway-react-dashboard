import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SideBar from '../components/SideBar';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';

const UserListPageStyle = styled.div `
    background: #f8f8f8;
    width: 100vw;
    height: 100vh;
    display: flex;
    

    .container{
        display: flex;
        flex-direction: column;
        margin: 74px 64px 0px;
        .header{
        border: 1px solid red;
        width:1506px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-bottom:52px;
        &>div{
            display: flex;
            h1{
            margin-right: 50px;
            }
        }
    }
}
    
`

const UserListPage = (props) =>{
    
    return (
        <UserListPageStyle>
            <SideBar user_name = "고윤정"/>
            <div className = "container">
            <div className="header">
                <div>
                <h1>사용자 관리</h1>
                <SearchBar text = "학번"/>
                </div>
                <Button
                name = "삭제" primary></Button>
            </div>
            <UserList/>
            </div>
            
            {/*
            <UserList/>
            <Sidebar user_name = "고윤정"></Sidebar>
            <div>
                <Button
                classname="Button"
                name = "삭제" primary></Button>
            </div>
            <SearchBar text = "학번"></SearchBar>
            */}
            
        </UserListPageStyle>
    )
}

export default UserListPage;