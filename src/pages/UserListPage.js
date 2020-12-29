import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';

const UserListPageStyle = styled.div `
    background: #f8f8f8;
    .Button{

    }

    .list-group{

    }
`

const UserListPage = (props) =>{
    return (
        <UserListPageStyle>
            <UserList/>
            
            {/*
            <UserList/>
            <Sidebar user_name = "고윤정"></Sidebar>
            <div>
                <Button
                classname="Button"
                name = "삭제" primary></Button>
            </div>
            <SearchBar hint_text = "학번을 입력해주세요"></SearchBar>
            */}
            
        </UserListPageStyle>
    )
}

export default UserListPage;