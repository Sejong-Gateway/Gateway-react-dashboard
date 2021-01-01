import styled from 'styled-components';

const SearchbarStyle = styled.div `
    width: 235px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #707070;
    padding: 11px 20px;
    border-radius: 19px;
    background-color: #ffffff;

    input{
        border: none;
        ::placeholder{
        color:#dedede;
        font-size: 12px;
        }
    }
    
`

const Searchbar = ({text}) =>{
    return (
        <SearchbarStyle>
            <img src='/img/Search.svg'/>
            <input placeholder = {`${text}을 입력해주세요`}>
            </input>
        </SearchbarStyle>
    );
}

export default Searchbar;