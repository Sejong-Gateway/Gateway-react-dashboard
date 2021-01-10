import React,{useState, useRef} from 'react';
import styled from 'styled-components';


const ListStyle = styled.div `
.list-name{
    .checkbox-container{
        width: 21px;
                input{
                    display:none;
                }
                input:checked + label{
                    background: url(${'/img/Check.svg'}) no-repeat center center;
                    border: 1px solid #6c63ff;
                    width: 17px;
                    height: 17px;
                }
                input + label {
                    border-radius: 2px;
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    border: 1px solid #707070;
                }
    }
    width: 1506px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 37px;
    h3{
        flex:1;
        font-weight: normal;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
    }
}
.list-group{
    margin-bottom:8px;
    .item{
        .checkbox-container{
                width: 21px;
                input{
                    display:none;
                }
                input:checked + label{
                    background: url(${'/img/Check.svg'}) no-repeat center center;
                    border: 1px solid #6c63ff;
                    width: 17px;
                    height: 17px;
                }
                input + label {
                    border-radius: 2px;
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    border: 1px solid #707070;
                }
            }
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        width: 1506px;
        height: 75px;
        padding: 26px 37px;
        border-radius: 4px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        //border: solid 2px #6c63ff; (click)
        background-color: #ffffff;
        /*font*/
        font-size: 19px;
        font-family: HelveticaNeue;
        color: #707070;
        
        & > div + div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
    }
}
`


const UserList = ({searchValue})=>{
    console.log(searchValue);
    const [focusItem, setFocusItem] = useState([]);
    const users = [
        {
            studentId : "19011335",
            major : "소프트웨어학과",
            semester : 6,
            createdAt : "2020-12-05"
        },
        {
            studentId : "19011296",
            major : "디자인이노베이션",
            semester : 6,
            createdAt : "2020-12-05"
        },
        {
            studentId : "16011296",
            major : "컴퓨터공학",
            semester : 6,
            createdAt : "2020-12-05"
        },
        {
            studentId : "19011335",
            major : "소프트웨어",
            semester : 4,
            createdAt : "2020-12-05"
        },
        {
            studentId : "20011296",
            major : "컴퓨터공학",
            semester : 3,
            createdAt : "2020-12-05"
        }
    ]  

    const userList = users.map((user, i)=>{
        const {studentId, major,semester,createdAt} = user;
        if(searchValue===users.studentId){
            
        }
        
        return(
            <div className="item" 
            style = {focusItem.find((focus)=> focus ===i+1)? 
            {border:"1px solid #6c63ff"}:{}}>
                <div className = "checkbox-container">
                    <input id={"a"+i} type="checkbox"
                    onChange = {(e)=>{
                        if(e.target.checked===false){
                            setFocusItem([...focusItem.filter((focus)=> focus !== i+1)]);
                        }
                        else{
                            setFocusItem([...focusItem,i+1]);
                        }
                    }}/>
                    <label htmlFor = {"a"+i}></label>
                    
                </div>
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
                <div className ="checkbox-container">
                <input id='a' type="checkbox"
                onChange={(e)=>{
                    if(e.target.checked===true){
                        setFocusItem([...Array(users.length+1).keys()]);
                        //useRef()
                    }
                    else{
                        setFocusItem([]);
                    }
                }}
                />
                <label htmlFor = {'a'}></label>
                </div>
                
                <h3>학번</h3>
                <h3>전공</h3>
                <h3>이수학기</h3>
                <h3>가입날짜</h3>
            </div>
            <div className = "list-group">
                <div>
                {userList}
                </div>
                
            </div>
        </ListStyle>

    )
}




export default UserList;