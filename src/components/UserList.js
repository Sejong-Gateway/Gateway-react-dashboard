import React,{useRef} from 'react';
import styled from 'styled-components';


const ListStyle = styled.div `
    margin-top: 6.625rem;
.list-name{
    .checkbox-container{
        width: 1.3125rem;
                input{
                    display:none;
                }
                input:checked + label{
                    background: url(${'/img/Check.svg'}) no-repeat center center;
                    border: 0.0625rem solid #6c63ff;
                    width: 1.0625rem;
                    height: 1.0625rem;
                }
                input + label {
                    border-radius: 0.125rem;
                    display: inline-block;
                    width: 1.0625rem;
                    height: 1.0625rem;
                    border: 0.0625rem solid #707070;
                }
    }
    width: 94.125rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.625rem 2.3125rem;
    h3{
        flex:1;
        font-weight: normal;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.875rem;
    }
}
.list-group{
    margin-bottom:0.5rem;
    .item{
        .checkbox-container{
                width: 1.3125rem;
                input{
                    display:none;
                }
                input:checked + label{
                    background: url(${'/img/Check.svg'}) no-repeat center center;
                    border: 0.0625rem solid #6c63ff;
                    width: 1.0625rem;
                    height: 1.0625rem;
                }
                input + label {
                    border-radius: 0.125rem;
                    display: inline-block;
                    width: 1.0625rem;
                    height: 1.0625rem;
                    border: 0.0625rem solid #707070;
                }
            }
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        width: 94.125rem;
        height: 4.6875rem;
        padding: 1.625rem 2.3125rem;
        border-radius: 0.25rem;
        box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        /*font*/
        font-size: 1.1875rem;
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


const UserList = ({searchValue, users, focusItem, setFocusItem})=>{
    console.log(focusItem);
    const onListCheck = useRef([]);
    const userList = users.filter(user => user.admin===false && user.studentId.indexOf(searchValue) !== -1).map((user, i)=>{
        const {studentId, major,semester,createdAt} = user;
        return(
            <div className="item" 
            key={i}
            style = {focusItem && focusItem.find((focus) => focus === user._id)? 
            {border:"0.0625rem solid #6c63ff"}:{}}>
                <div className = "checkbox-container">
                    <input id={"a"+i} type="checkbox"
                    ref={el => onListCheck.current[i] = el} 
                    onChange = {(e)=>{
                        if(e.target.checked===false){
                            setFocusItem([...focusItem.filter((focus)=> focus !== user._id )]);
                        }
                        else{
                            setFocusItem([...focusItem, user._id]);
                        }
                    }}
                    />
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
                        setFocusItem([...users.map(u => u._id)]);
                        onListCheck.current.forEach((v, i) => {
                            onListCheck.current[i].checked = true;    
                        });
                    }
                    else{
                        setFocusItem([]);
                        onListCheck.current.forEach((v, i) => {
                            onListCheck.current[i].checked = false;    
                        });
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