import React from 'react';
import styled from 'styled-components';

const checkBox = styled.div `
    width: 19px;
    height: 19px;
    border: solid 1px #707070;
`
const ListName = styled.div `

`
const ListStyle = styled.div `
.list-group{
    margin-bottom:8px;
    .item{
        display:flex;
        justify-content: space-between;
        border: 1px solid red;

        width: 1506px;
        height: 75px;
        padding: 26px 37px;
        border-radius: 4px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        //border: solid 2px #6c63ff; (click)
        background-color: #ffffff;

        font-size: 19px;
        font-family: HelveticaNeue;
        color: #707070;
        .checkBox{
            flex: 1;
        }
        & > div{
            //border: 1px solid black;
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
    }
}
    
`


const UserList = (props)=>{
    const users = [
        {
            studentId : "19011296",
            major : "소프트웨어학과",
            semester : 6,
            createdAt : "2020-12-05"
        },
        {
            studentId : "19011296",
            major : "디이노",
            semester : 6,
            createdAt : "2020-12-05"
        },
        {
            studentId : "19011296",
            major : "컴퓨터공학",
            semester : 6,
            createdAt : "2020-12-05"
        }
    ] 

    const userList = users.map((user)=>{
        const {studentId, major,semester,createdAt} = user;
        return(
            <div className="item">
                
                <div>
                    {studentId}
                </div>
                <div>
                    {major}
                </div>
                <div>
                    {semester}
                </div>
                <div>
                    {createdAt}
                </div>
            </div>
        )   
    })
    return(
        <ListStyle>
            <div className = "list-name">
                {}
            </div>
            <div className = "list-group">
                <div className="checkBox">
                
                </div>
                <div>
                {userList}
                </div>
                
            </div>
        </ListStyle>

    )
}




export default UserList;