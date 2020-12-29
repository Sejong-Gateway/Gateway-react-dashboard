import styled from 'styled-components';
import {ReactComponent as Search} from '../img/Search.svg';

const SearchbarStyle = styled.div `
    width: 235px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    padding: 11px 20px;
    border-radius: 19px;
    background-color: #ffffff;
`

const Searchbar = ({hint_text}) =>{
    return (
        <SearchbarStyle>
            <Search />
            {hint_text}
        </SearchbarStyle>
    );
}

export default Searchbar;