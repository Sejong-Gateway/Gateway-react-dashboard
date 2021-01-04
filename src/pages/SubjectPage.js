import React,{useState} from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import DropDownBox from '../components/DropDownBox';
import SubjectList from '../components/SubjectList';
import PlusModal from '../components/PlusModal';

const SubjectStyle = styled.div `
    background: #f8f8f8;
    width: 100vw;
    height: 100vh;
    display: flex;

    .container{
        display: flex;
        flex-direction: column;
        margin: 74px 64px 0px;
        .header{
        width:1506px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-bottom:52px;
        margin-left: 12px;
        &>div{
            display: flex;
            h1{
                margin-right: 50px;
            }
        }
        .button-group{
            
            outline: none;
            border: none;
            background: none;
            display: flex;
            align-items: center;
            justify-content: center;
            & > div + div{
            margin-left: 1rem;
            }
        }
    }
    .subheader{
        display: flex;
        align-items:center;
        margin-bottom: 31px;
        margin-left: 12px;
        
    }
}
`
const SubjectPage = (props) =>{
    const [isOpen, setIsOpen]=useState(false)
    return (
        <SubjectStyle>
            <SideBar user_name = "고윤정"/>
            <div className = "container">
            
            <div className = "header">
                <h1>과목 관리</h1>
                
                
        
                <div className="button-group">
                    <Button onClick={()=>setIsOpen(true)}>추가</Button>
                    <Button primary>삭제</Button>
                </div>

                <PlusModal open={isOpen}
                    onClose={()=>setIsOpen(false)}/>
            </div>

            <div className = "subheader">
            <SearchBar text ="과목명" style={{marginRight:'47px'}}/>
            <DropDownBox/>
            </div>
            <SubjectList/>
            </div>
            
            {/*
            <SubjectList/>

            <div className = "button-group">
            <Button name = "추가"></Button>
            <Button name = "삭제" primary></Button>
            </div>
            */}
            
        </SubjectStyle>
    )
}

export default SubjectPage;