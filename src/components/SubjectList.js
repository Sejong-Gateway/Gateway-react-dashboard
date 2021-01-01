import React,{useState} from 'react';
import styled from 'styled-components';

const ListStyle = styled.div `
    .list-group{
        display:flex;
        flex-wrap: wrap;
        //padding-left: 12px;
        //padding-right: 12px;
        .item{
            margin: 0px 12px 24px;
            width: 282px;
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            padding: 28px 37px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border-radius: 10px;
            background-color: #ffffff;
            .subjectName{
                    min-width: 219px;
                    display: flex;
                    justify-content:space-between;

                    .click:focus{

                    }
                }
            .majorBlock{
                padding: 0.1rem 0.025rem;
                border-radius: 13px;
                background-color: #fdfbdb;

                font-size: 15px;
                color: #707070;
            }
            .semesterBlock{
                padding: 0.1rem 0.025rem;
                border-radius: 13px;
                background-color: #dbeffd;

                font-size: 15px;
                color: #707070;
            }
            .typeBlock{
                padding: 0.1rem 0.025rem;
                border-radius: 13px;
                background-color: #fddbdb;

                font-size: 15px;
                color: #707070;
            }
            & > div{
                flex:1;
                display:flex;
                align-items: center;
                justify-content: center;
            }
            &> div+div{
                margin-top: 20px;
            }
        }
    }
`
const PopStyle = styled.div `
    width: 107px;
    height: 85px;
    padding: 12px 27px;
    border-radius: 2px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    .correction{
        display:flex;
        justify-content: space-between;

        font-size: 15px;
        font-weight: bold;
        color: #707070;
    }
    .delete{
        display:flex;
        justify-content: space-between;

        font-size: 15px;
        font-weight: bold;
        color: #707070;
    }
`
const CardMenuPop = () =>{
return(
    <PopStyle>
        <div className = "correction">
        <img src='/img/Correction.svg'/>
        수정
        </div>

        <div className = "delete">
        <img src='/img/Trashbin.svg'/>
        삭제
        </div>
    </PopStyle>
);
}

const SubjectList = (props)=>{
    const subjects = [
        {
        "name" : "소프트웨어 설계기초",
        "major" : "소프트웨어",
        "semester" : "6",
        "type" : "전필",
        "enteranceYear" : 2019
        },
        {
        "name" : "소프트웨어 설계기초",
        "major" : "디자인이노베이션",
        "semester" : "6",
        "type" : "전필",
        "enteranceYear" : 2019
        },
        {
        "name" : "소프트웨어 설계기초",
        "major" : "컴퓨터공학",
        "semester" : "6",
        "type" : "전필",
        "enteranceYear" : 2019
        },
        {
        "name" : "소프트웨어 설계기초",
        "major" : "소프트웨어학과",
        "semester" : "6",
        "type" : "전필",
        "enteranceYear" : 2019
        },
        {
        "name" : "소프트웨어 설계기초",
        "major" : "소프트웨어학과",
        "semester" : "6",
        "type" : "전필",
        "enteranceYear" : 2019
        }
    ] 

    const subjectList = subjects.map((subject)=>{
        const {name,major,semester,type} = subject;
        return(
            <div className="item">
                <div className="cardMenuPop">

                </div>
                <div className="subjectName">
                <h3>{name}</h3>
                
                <img src='/img/CardMenu.svg'/>
                </div>
                
                <div className="majorBlock">
                    {major}
                </div>

                <div className="semesterBlock">
                    {semester}
                </div>

                <div className="typeBlock">
                    {type}
                </div>
            </div>
        )   
    })
    return(
        <ListStyle>
            
            <div className = "list-group">
                
                {subjectList}
            </div>

        </ListStyle>

    )
}




export default SubjectList;