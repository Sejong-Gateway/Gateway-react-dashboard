import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import DropDownBox from '../components/DropDownBox';
import SubjectList from '../components/SubjectList';
import PlusModal from '../components/PlusModal';
import { createSubject, getSubjects, removeSubject } from '../api/api';

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
    const [isOpen, setIsOpen]=useState(false);
    const [input, setInput] = useState({
        name : "",
        major : "",
        type : "",
        semester: "",
        credit : "",
        enteranceYear : ""
    })
    const [subjects, setSubjects] = useState();
    const [semester, setSemester] = useState();

    useEffect(async()=> {
        const res = await getSubjects();
        setSubjects(res.data.data);
    }, []);

    const onChange = (e, {value}) => {
        setSemester(value);
    }

    const onChangeInput = (e) => {
        const { name , value } = e.target;
        
        setInput({
            ...input,
            [name] : value
        });
        console.log(input);
    }

    const onChangeDropdown = (e, {name , value}) => {
        setInput({
            ...input,
            [name] : value
        });
    }

    const onRemoveSubject = async(id) => {
        await removeSubject(id);
        const res = await getSubjects();
        setSubjects(res.data.data);
    }

    const onCreateSubject = async() => {
        await createSubject(input);
        const res = await getSubjects();
        setSubjects(res.data.data);
    }

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
                    onCreateSubject={onCreateSubject}
                    onClose={()=>setIsOpen(false)} onChange={onChangeInput} onChangeDropdown={onChangeDropdown}/>
            </div>

            <div className = "subheader">
            <SearchBar text ="과목명" style={{marginRight:'47px'}}/>
            <DropDownBox onChange={onChange}/>
            </div>
            <SubjectList subjects={subjects} semester={semester} onRemoveSubject={onRemoveSubject}/>
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