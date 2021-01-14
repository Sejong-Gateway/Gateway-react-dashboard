import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ListStyle = styled.div `
    .list-group{
        display:flex;
        flex-wrap: wrap;
        //padding-left: 0.75rem;
        //padding-right: 0.75rem;
        .item{
            cursor :pointer;
            position: relative;
            margin: 0rem 0.75rem 1.5rem;
            width: 17.625rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border: 0.0625rem solid white;
            justify-content:space-between;
            padding: 1.75rem 2.3125rem;
            box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
            border-radius: 0.625rem;
            background-color: #ffffff;
            .subjectName{
                min-width: 13.6875rem;
                display: flex;
                justify-content:space-between;
                    .button{
                    outline: none;
                    border: none;
                    background-color:white;
                    }
                    .overlay{
                        position: absolute;
                        display: none;
                    }
                    .button:focus + .overlay{
                        position: absolute;
                        top: 0rem;
                        left: 1.25rem;
                        /* top: -3.6875rem;
                        left: -14.0625rem; */
                        display: block;
                        z-index: 100;
                    }
                    .button + .overlay:hover{
                        position: absolute;
                        top: 0rem;
                        left: 1.25rem;
                        /* top: -3.6875rem;
                        left: -14.0625rem; */
                        display: block;
                        z-index: 100;     
                    }
                }
            .majorBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
                border-radius: 0.8125rem;
                background-color: #fdfbdb;

                font-size: 0.9375rem;
                color: #707070;
            }
            .semesterBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
                border-radius: 0.8125rem;
                background-color: #dbeffd;

                font-size: 0.9375rem;
                color: #707070;
            }
            .typeBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
                border-radius: 0.8125rem;
                background-color: #fddbdb;

                font-size: 0.9375rem;
                color: #707070;
            }
            & > div{
                flex:1;
                display:flex;
                align-items: center;
                justify-content: center;
            }
            &> div+div{
                margin-top: 1.25rem;
            }
            
        }
        
    }
`
const PopStyle = styled.div `
    
    position: absolute;
    top: 3.6875rem;
    left: 14.0625rem;
    width: 6.6875rem;
    height: 5.3125rem;
    //padding: 0.75rem 1.6875rem;
    border-radius: 0.125rem;
    box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    button{
        padding: 0.75rem 0rem;
        min-width: 3.375rem;
        border: none;
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        font-size: 0.9375rem;
        font-weight: bold;
        color: #707070;
    }
    
`
const CardMenuPop = ({onOpen, onRemoveSubject, id}) =>{
    // onClick={()=>onOpen(true)} 
return(
    <PopStyle>
        
        <button onClick={()=>onOpen()} >
        <img src='/img/Correction.svg' style={{marginRight:"0.8125rem"}}/>
        수정
        </button>

        <button onClick={()=>onRemoveSubject(id)}>
            
            <img src='/img/Trashbin.svg' style={{marginRight:"0.8125rem"}}/>
            삭제
        </button>
    </PopStyle>
);
}

const SubjectList = ({subjects, semester = '', major = '', type = '', onRemoveSubject, searchValue})=>{
    const [focusItem, setFocusItem] = useState([]);

    //modal
    const [isOpen, setIsOpen]=useState(false);
    const onOpen = () => setIsOpen(true);

    const subjectList = subjects && subjects.filter((s)=>{
        
        if(s.name.indexOf(searchValue) !== -1){
            console.log(major);
            if(s.semester === semester || semester === '전체' || !semester ){ 
                if ( s.major === major  || major === '전체' || major === '' ){
                    if ( s.type === type  || type === '전체' || type === '' ){
                        return s;
                    }
                }
            }
        }
    }).map((subject,i)=>{
        const {name,major,semester,type, _id} = subject;
        return(
            <div className="item" id={"a"+i} onClick ={(e)=>{
                if(focusItem.find(f => f === i + 1)){
                    setFocusItem([...focusItem.filter((focus)=> focus !== i+1)]);
                }
                else{
                    setFocusItem([...focusItem,i+1]);
                }
            }}
            style = {focusItem.find((focus)=> focus ===i+1)? 
                {border:"0.0625rem solid #6c63ff"}:{}}
            >
                <div className="subjectName">
                    <h3>{name}</h3>
                    <button className="button" style={{cursor:"pointer"}}>
                    <img src='/img/CardMenu.svg'/>
                    </button>
                    <div className ="overlay">
                        <CardMenuPop onOpen={onOpen} onRemoveSubject={onRemoveSubject} id={_id}/>
                        
                    </div>
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
            <Modal text="수정하기" open={isOpen}  onClose={()=>setIsOpen(false)}/>
        </ListStyle>

    )
}




export default SubjectList;