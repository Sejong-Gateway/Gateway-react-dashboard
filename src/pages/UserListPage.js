import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SideBar from '../components/SideBar';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import {Redirect} from 'react-router-dom';
import { getUsers, removeUser } from '../api/api';

const UserListPageStyle = styled.div `
    background: #f8f8f8;
    width: 100vw;
    height: 100vh;
    display: flex;
    

    .container{
        display: flex;
        flex-direction: column;
        margin: 4.625rem 4rem 0rem;
        .header{
        background: #f8f8f8;
        position: fixed;
        z-index: 1000;
        width:94.125rem;
        height: 6.25rem;
        display: flex;
        align-items:center;
        justify-content: space-between; 
        &>div{
            display: flex;
            h1{
            margin-right: 3.125rem;
            }
        }
    }
}
    
`

const UserListPage = (props) =>{
    const [searchValue, setSearchValue]=useState("");
    const [users, setUsers] = useState([]);
    const [focusItem, setFocusItem] = useState([]);
    const onChange = (e) =>{
        setSearchValue(e.target.value);
    }

    useEffect(async()=> {
        
        const res = await getUsers();
        setUsers(res.data.data);
    }, []);
    const deleteUsers = async() => {
        let isDelete = window.confirm('정말 지우려고..??');
        if ( isDelete ){
            focusItem.map(async(_id)=>{
                await removeUser(_id);
            });
        }
    
        // reduce, Promise all, 비동기 배열 처리
        // const res = await getUsers();
    }

    if ( !sessionStorage.getItem('token') ){
        return <Redirect to='/'></Redirect>
    }
    
    return (
        <UserListPageStyle>
            <SideBar/>
            <div className = "container">
            <div className="header">
                <div>
                <h1>사용자 관리</h1>
                <SearchBar onChange={onChange} text = "학번"/>
                </div>
                <Button primary onClick={deleteUsers}>삭제</Button>
            </div>
            <UserList searchValue={searchValue} users={users} focusItem={focusItem} setFocusItem={setFocusItem}/>
            </div>
            
        </UserListPageStyle>
    )
}
 
export default UserListPage;