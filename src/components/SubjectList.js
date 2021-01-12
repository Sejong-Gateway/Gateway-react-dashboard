import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ListStyle = styled.div `
    .list-group{
        display:flex;
        flex-wrap: wrap;
        //padding-left: 12px;
        //padding-right: 12px;
        .item{
            cursor :pointer;
            position: relative;
            margin: 0px 12px 24px;
            width: 282px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border: 1px solid white;
            justify-content:space-between;
            padding: 28px 37px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border-radius: 10px;
            background-color: #ffffff;
            .subjectName{
                min-width: 219px;
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
                        top: 0px;
                        left: 20px;
                        /* top: -59px;
                        left: -225px; */
                        display: block;
                        z-index: 100;
                    }
                    .button + .overlay:hover{
                        position: absolute;
                        top: 0px;
                        left: 20px;
                        /* top: -59px;
                        left: -225px; */
                        display: block;
                        z-index: 100;     
                    }
                }
            .majorBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
                border-radius: 13px;
                background-color: #fdfbdb;

                font-size: 15px;
                color: #707070;
            }
            .semesterBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
                border-radius: 13px;
                background-color: #dbeffd;

                font-size: 15px;
                color: #707070;
            }
            .typeBlock{
                padding: 0.25rem 1rem;
                padding-top : 0.15rem;
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
    
    position: absolute;
    top: 59px;
    left: 225px;
    width: 107px;
    height: 85px;
    //padding: 12px 27px;
    border-radius: 2px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    button{
        padding: 12px 0px;
        min-width: 54px;
        border: none;
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        font-size: 15px;
        font-weight: bold;
        color: #707070;
    }
    
`
const CardMenuPop = ({onOpen, onRemoveSubject, id}) =>{
    // onClick={()=>onOpen(true)} 
return(
    <PopStyle>
        
        <button onClick={()=>onOpen()} >
        <img src='/img/Correction.svg' style={{marginRight:"13px"}}/>
        수정
        </button>

        <button onClick={()=>onRemoveSubject(id)}>
            <img src='/img/Trashbin.svg' style={{marginRight:"13px"}}/>
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
                {border:"1px solid #6c63ff"}:{}}
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