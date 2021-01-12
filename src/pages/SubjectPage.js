import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import DropDownBox from '../components/DropDownBox';
import SubjectList from '../components/SubjectList';
import Modal from '../components/Modal';
import { createSubject, getSubjects, removeSubject } from '../api/api';

const PageStyle = styled.div `
    display:flex;
`

const SubjectStyle = styled.div `
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
        margin-left: 0.75rem;
        &>div{
            display: flex;
            h1{
                margin-right: 3.125rem;
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
        margin-bottom: 1.9375rem;
        margin-left: 0.75rem;
        
    }
}
`
const SubjectPage = (props) =>{
    //searchBar 검색기능
    const [searchValue, setSearchValue]=useState("");
    const onChangeSearch = (e) =>{
        setSearchValue(e.target.value);
     }
     //모달창
    const [isOpen, setIsOpen]=useState(false);
    //
    const [input, setInput] = useState({
        name : "",
        major : "",
        type : "",
        semester: "",
        credit : "",
        enteranceYear : ""
    })
    //
    const [subjects, setSubjects] = useState();
    useEffect(async()=> {
        const res = await getSubjects();
        setSubjects(res.data.data);
    }, []);


    //DropDownBox 

    const [dropFilter, setDropFilter] = useState({
        semester : "",
        major: "",
        type: "",
    });

    const onChange = (e, {value, name}) => {
        setDropFilter({
            ...dropFilter,
            [name] : value,
        })
    }
    const onChangeDropdown = (e, {name , value}) => {
        setInput({
            ...input,
            [name] : value
        });
    }


    const onChangeInput = (e) => {
        const { name , value } = e.target;
        
        setInput({
            ...input,
            [name] : value
        });
        console.log(input);
    }

    
    //과목 삭제
    const onRemoveSubject = async(id) => {
        await removeSubject(id);
        const res = await getSubjects();
        setSubjects(res.data.data);
    }
    //button 수정
    const onCreateSubject = async() => {
        await createSubject(input);
        const res = await getSubjects();
        setSubjects(res.data.data);
    }

    return (
        <PageStyle>
        <SideBar/>
        <SubjectStyle>
            <div className = "container">
            
            <div className = "header">
                <h1>과목 관리</h1>
        
                <div className="button-group">
                    <Button onClick={()=>setIsOpen(true)}>추가</Button>
                    <Button primary>삭제</Button>
                </div>

                <Modal text = "추가하기" open={isOpen}
                    onCreateSubject={onCreateSubject}
                    onClose={()=>setIsOpen(false)} onChange={onChangeInput} onChangeDropdown={onChangeDropdown}/>
            </div>

            <div className = "subheader">
            <SearchBar text ="과목명" style={{marginRight:'2.9375rem'}}  onChange={onChangeSearch}/>
            <DropDownBox onChange={onChange}/>
            </div>
            <SubjectList subjects={subjects} 
            semester={dropFilter.semester} major={dropFilter.major} type={dropFilter.type}
            onRemoveSubject={onRemoveSubject} searchValue={searchValue}/>
            </div>
        </SubjectStyle>
        </PageStyle>
    )
}

export default SubjectPage;