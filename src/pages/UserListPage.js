import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SideBar from '../components/SideBar';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import { getUsers, removeUser } from '../api/api';

const PageStyle = styled.div `
    display:flex;
`

const UserListPageStyle = styled.div `
    background: #f8f8f8;
    width: 100vw;
    height: 100%;
    display: flex;
    

    .container{
        display: flex;
        flex-direction: column;
        margin: 4.625rem 4rem 0rem;
        .header{
        width:94.125rem;
        display: flex;
        align-items:center;
        justify-content: space-between; 
        margin-bottom:3.25rem;
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
        focusItem.map(async(_id, i)=>{
            await removeUser(_id);
        });
        // reduce, Promise all, 비동기 배열 처리
        // const res = await getUsers();
    }
    
    return (
        <PageStyle>
        <SideBar/>
        <UserListPageStyle>
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
        </PageStyle>
    )
}
 
export default UserListPage;