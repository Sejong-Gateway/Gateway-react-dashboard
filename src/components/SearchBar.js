import styled from 'styled-components';



const SearchbarStyle = styled.div `
    width: 14.6875rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9375rem;
    color: #707070;
    padding: 0.6875rem 1.25rem;
    border-radius: 1.1875rem;
    background-color: #ffffff;

    input{
        outline: none;
        border: none;
        ::placeholder{
        color:#dedede;
        font-size: 0.75rem;
        }
    }
    
`

const Searchbar = ({text,children, ...rest}) =>{
    return (
        <SearchbarStyle {...rest}> 
        {children}
            <img src='/img/Search.svg'/>
            <input placeholder = {`${text}을 입력해주세요`}>
            </input>
        </SearchbarStyle>
    );
}

export default Searchbar;